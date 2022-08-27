import { ComponentProps, MouseEventHandler, MutableRefObject, useCallback, useEffect, useRef, useState } from "react"
import { wrapn } from "wrapn"
import { Block } from "../../types/constants"
import { Blocker } from "../Blocker"
import { BlockClass } from "./classes"
import { EditableBlock } from "./components"
import { isReadyToBeDeletedAt, onKeyDownHandler, resizeTextareaHeight, getCaretPos, tool, directions, getValidYoutubeLink, getValidTweetId, getValidImage } from "./functions"
import { EditorBlockType } from "./types"

export const Editor = () => {
    const [blocks, setBlocks] = useState<BlockClass[]>([
        new BlockClass('t'),
        new BlockClass('s'),
        new BlockClass('p')
    ])

    const [isPreview, setPreview] = useState<boolean>(false)
    const [previewBlocks, setPreviewBlocks] = useState<Block[]>([])

    const [focusedBlock, setFocusedBlock] = useState<number>(0)
    const isDivisionKey = useRef<boolean>(false)


    useEffect(() => {
        const el = document.getElementById(`block_${focusedBlock}`) as HTMLTextAreaElement
        el?.focus()
    }, [blocks, focusedBlock])


    const renderBlocks = useCallback(() => {
        setBlocks(blocks => blocks.slice())
    }, [])

    const exportBlocks = useCallback(() => {
        const json: Block[] = blocks.filter(({ content }) => content).map(block => {
            if(!block.links.at(0)) {
                switch(block.type) {
                    case 'w': return {
                        type: 'w',
                        content: getValidTweetId(block.content)
                    }
                    case 'y': return {
                        type: 'y',
                        content: getValidYoutubeLink(block.content)
                    }
                    case 'b': return {
                        type: 'b',
                        content: ''
                    }
                    default: return {
                        type: block.type,
                        content: block.content
                    }
                }
                
            } else {
                return {
                    type: block.type,
                    content: block.content,
                    links: block.links
                }
            }
        })
        setPreviewBlocks(json)
        const string = JSON.stringify(json)
        console.log(string)
    }, [blocks])


    const removeAt = useCallback((i: number) => {
        setBlocks(blocks => [
            ...blocks.slice(0, i),
            ...blocks.slice(i + 1)
        ])
    }, [])


    const addAfter = useCallback((i: number) => {
        setBlocks(blocks => [
            ...blocks.slice(0, i),
            blocks[i],
            new BlockClass(),
            ...blocks.slice(i + 1)
        ])
    }, [])


    const moveUp = useCallback((i: number) => {
        if(i < 3) return
        setBlocks(blocks => [
            ...blocks.slice(0, i - 1),
            blocks[i],
            blocks[i - 1],
            ...blocks.slice(i + 1)
        ])
        setFocusedBlock(focusedBlock => focusedBlock - 1)
    }, [])


    const moveDown = useCallback((i: number) => {
        if(i < 2 || i == blocks.length - 1) return
        setBlocks(blocks => [
            ...blocks.slice(0, i),
            blocks[i + 1],
            blocks[i],
            ...blocks.slice(i + 2)
        ])
        setFocusedBlock(focusedBlock => focusedBlock + 1)
    }, [blocks.length])

    const changeType = useCallback((newType: EditorBlockType) => {
        blocks[focusedBlock] = blocks[focusedBlock].as(newType)
        renderBlocks()
    }, [blocks, focusedBlock, renderBlocks])



    return (
        <>
        {isPreview ?
        <>
            <PreviewButton onClick={() => {
                setPreview(false)
            }}>
                Show Editor
            </PreviewButton>
            <div className="cursor-not-allowed select-none">
                <Blocker blocks={previewBlocks}/>
            </div>
        </>
        :
        <>
            <PreviewButton onClick={() => {
                exportBlocks()
                setPreview(true)
            }}>
                Show Preview
            </PreviewButton>
            <Tool changeType={changeType} isDivision={isDivisionKey}/>
            <Directions onUp={() => moveUp(focusedBlock)} onDown={() => moveDown(focusedBlock)}/>
            <BlockHolder>
                {blocks.map((block, i) => 
                <EditableBlock
                    block={block}

                    key={`block_${i}`}

                    id={`block_${i}`}

                    plusId={`plus${i}`}

                    directionsId={`directions${i}`}

                    placeholder={block.placeholder()}

                    className={block.className()}

                    rows={1}

                    value={block.content}

                    onPlus={e => {
                        tool.setPos(i)
                        setFocusedBlock(i)
                    }}

                    onUpDown={e => {
                        directions.setPos(i)
                        setFocusedBlock(i)
                    }}

                    onPlaceClick={() => {
                        document.getElementById(`block_${i}`)?.focus()
                        setFocusedBlock(i)
                    }}

                    onFocus={e => {
                        console.log(e.currentTarget.clientHeight)
                        resizeTextareaHeight(e.currentTarget)
                        setFocusedBlock(i)
                    }}
                    
                    onChange={e => {
                        // Replace all new lines with space character
                        blocks[i].content = e.target.value.replace(/\n/g, ' ')
                        renderBlocks()

                        resizeTextareaHeight(e.currentTarget)


                        const yt = getValidYoutubeLink(e.target.value)
                        const tw = getValidTweetId(e.target.value)
                        const img = getValidImage(e.target.value)
                        
                        if(block.is('p') || block.is('i')  || block.is('w') || block.is('y')) {
                            switch(true) {
                                case Boolean(img):
                                    blocks[i] = block.as('i')
                                    break
                                case Boolean(tw):
                                    blocks[i] = block.as('w')
                                    break
                                case Boolean(yt):
                                    blocks[i] = block.as('y')
                                    break
                                default:
                                    blocks[i] = block.as('p')
                            }
                            renderBlocks()
                        }

                        console.log(block.type)
                        
                    }}

                    onKeyDown={e => onKeyDownHandler(e, {
                        onAll() {

                            if(e.key == '/') {
                                if(!isDivisionKey.current && i > 1) {
                                    tool.setPos(i)
                                    isDivisionKey.current = true
                                    e.preventDefault()
                                }
                                else {
                                    tool.hide()
                                    isDivisionKey.current = false
                                }
                            } else {
                                tool.hide()
                                isDivisionKey.current = false
                            }
                            if(block.is('b')) {
                                e.preventDefault()
                                return
                            }
                        },

                        onBackspace() {
                            if(e.currentTarget.value.length == 0) {
                                if(i > 1) {
                                    removeAt(i)
                                    setFocusedBlock(i - 1)
                                } else if(i > 0) {
                                    setFocusedBlock(i - 1)
                                    setBlocks(blocks.slice(0))
                                }
                                e.preventDefault()
                            }
                        },

                        onElse() {
                            
                        },

                        onEnter() {
                            if(i > 0) {
                                addAfter(i)
                                setFocusedBlock(i + 1)
                            } else {    
                                setFocusedBlock(i + 1)
                                setBlocks(blocks.slice(0))
                            }
                            e.preventDefault()
                        },

                        onArrowUp() {
                            if(i > 0) {
                                setFocusedBlock(i - 1)
                                setBlocks(blocks.slice(0))
                            }
                            e.preventDefault()
                        },

                        onArrowDown() {
                            if(i < blocks.length - 1) {
                                setFocusedBlock(i + 1)
                                setBlocks(blocks.slice(0))
                                e.preventDefault()
                            }
                        },

                        onArrowLeft() {
                            if(i > 0 && e.currentTarget.selectionStart == 0) {
                                setFocusedBlock(i - 1)
                                setBlocks(blocks.slice(0))
                                e.preventDefault()
                            }
                        },

                        onArrowRight() {
                            if(i < blocks.length - 1 && e.currentTarget.selectionStart == e.currentTarget.value.length) {
                                setFocusedBlock(i + 1)
                                setBlocks(blocks.slice(0))
                                e.preventDefault()
                            }
                        },

                        onShift() {
                            if(!(block.is('p') || block.is('q') || block.is('l'))) return
                            const start = e.currentTarget.selectionStart
                            const end = e.currentTarget.selectionEnd
                            if(start == end) return
                            if(block.linkPlaceInvalid(start, end)) {
                                alert('There is already a URL between the range!')
                                return
                            }
                            if(block.linkWordInvalid(start, end)) {
                                alert('You have to select a full word!')
                                return
                            }
                            e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)
                                const url = prompt(`Embed a URL to: ${block.content.slice(start, end)}`)
                                
                                if(url) {
                                    const ok = confirm(`Are you sure to add\nWord: ${block.content.slice(start, end)}\nURL: ${url.slice(0, 40)}...`)
                                    if(ok) {
                                        block.links.push({ start, end, url })
                                        alert('Succefully embedded!')
                                    }
                                    else alert('Cancelled: URL embedding!')
                                } else {
                                    alert('Cancelled: URL embedding!')
                                }
                            
                        },

                        onMeta() {
                            if(!(block.is('p') || block.is('q') || block.is('l'))) return
                            if(block.links.length == 0) {
                                alert('There is no URL embedded!')
                            } else {
                                alert(`Words and URLs\n${block.links.map(link => `"${block.content.slice(link.start, link.end)}": ${link.url.slice(0, 40)}...`).join('\n')}`)
                            }
                        }

                    })}
                />
            )}
            </BlockHolder>
        </>
        
        }

        </>
    )
}



const BlockHolder = wrapn('div')`
    flex flex-col top-0 left-
    p-4
    rounded-xl
`


const Tool = ({ isDivision, changeType }: { isDivision: MutableRefObject<boolean>, changeType(newType: EditorBlockType): void }) => (
    <>
    <WTool id='tool' onClick={() => {tool.hide(); isDivision.current = false}}>
        <Button onClick={() => changeType('1')} className='rounded-t-xl'>Heading 1</Button>
        <Button onClick={() => changeType('2')}>Heading 2</Button>
        <Button onClick={() => changeType('q')}>Quote</Button>
        <Button onClick={() => changeType('l')}>List</Button>
        <Button onClick={() => changeType('c')}>Code</Button>
        <Button onClick={() => changeType('b')}>Seperator</Button>
        <Button onClick={() => changeType('p')} className='rounded-b-xl'>Paragraph</Button>
    </WTool>
    <OutsideCover id='toolcover' onClick={() => {tool.hide(); isDivision.current = false}}/>
    </>
)

const Directions = ({ onUp, onDown }: { onUp: MouseEventHandler<HTMLButtonElement>, onDown: MouseEventHandler<HTMLButtonElement> }) => (
    <>
    <WTool id='directions' onClick={directions.hide}>
        <Button onClick={onUp} className='rounded-t-xl'>Move Up</Button>
        <Button onClick={onDown} className='rounded-b-xl'>Move Down</Button>
    </WTool>
    <OutsideCover id='directionscover' onClick={directions.hide}/>
    </>
)

const Button = wrapn('button')`
    h-11 px-6
    hover:bg-slate-200
    dark:hover:bg-slate-700
    duration-200
    font-medium
`

const WTool = wrapn('div')`
    hidden
    absolute z-50
    flex-col
    rounded-xl
    bg-white dark:bg-slate-800
    border
    border-slate-300
    dark:border-slate-600
`

const OutsideCover = wrapn('div')`
    hidden
    fixed top-0 left-0 z-40
    w-full h-screen
`


const PreviewButton = wrapn('button')`
    fixed bottom-10 md:bottom-12 lg:bottom-14 right-8 md:right-14 lg:right-20 
    h-14 px-6
    rounded-full
    border
    border-cyan-300
    dark:border-cyan-700
    bg-cyan-200/70 hover:bg-cyan-300/70 active:bg-cyan-200/70
    dark:bg-cyan-800/70 dark:hover:bg-cyan-700/70 dark:active:bg-cyan-800/70
    shadow-lg shadow-black/20 dark:shadow-none
    duration-200
    text-lg font-semibold
`