export type BlockType = 'Text' | 'Note' | 'Large' | 'Medium' | 'Small' | 'Title' | 'Subtitle' | 'Link' | 'List' | 'Image' | 'Tweet' | 'Youtube' 

export class Block {
    constructor(id?: string, type?: BlockType) {
        this.type = type || 'Text'
        this.id = (id || '') + Date.now().toString()
        this.content = ''
    }

    type: BlockType
    id: string
    content: string

    is(type: BlockType): boolean {
        return this.type == type
    }
    set(type: BlockType) {
        this.type = type
    }
}


export const ENTER = 'Enter'
export const BACKSPACE = 'Backspace'
export const UP = 'ArrowUp'
export const DOWN = 'ArrowDown'
export const LEFT = 'ArrowLeft'
export const RIGHT = 'ArrowRight'
export const CMD = '/'

export function getCursorPosition(element: HTMLDivElement) {
    let position = 0;
    const isSupported = typeof window.getSelection !== "undefined";
    if (isSupported) {
      const selection = window.getSelection();
      if (selection?.rangeCount !== 0) {
        const range = getSelection()?.getRangeAt(0);
        if(!range) return 0
        const preCaretRange = range?.cloneRange();
        preCaretRange?.selectNodeContents(element);
        preCaretRange?.setEnd(range.endContainer, range.endOffset);
        position = preCaretRange?.toString().length;
      }
    }
    return position;
}

export function setCursorPosition(element: HTMLDivElement, i: number) {
    const range = document.createRange()
    const selection = window.getSelection()
    const node = element.childNodes[0]
    if(!node) return
    range.setStart(node, i);
    selection?.removeAllRanges()
    selection?.addRange(range)
}

export function getTextWidth(elem: HTMLDivElement) {
    const style =  window.getComputedStyle(elem, null)
    const cursor = getCursorPosition(elem)
    let canvas = document.getElementById("canvas-text") as HTMLCanvasElement
    if(!canvas) canvas = document.createElement('canvas')
    const context = canvas.getContext("2d");  
    if(!context) return
    context.font = style.font;
    if(!elem.textContent) return context.measureText('/').width
    const textWidth = context.measureText(elem.textContent.slice(0, cursor) + '/').width
    return textWidth
}

export function getToolAxis(elem: HTMLDivElement): [number, number] {
    const padding = (window.matchMedia('(min-width: 640px)').matches ? 48 : window.matchMedia('(min-width: 640px)').matches ? 40 : 32)
    const textWidth = getTextWidth(elem)
    console.log(textWidth);
    if(!textWidth) throw new Error("Cannot run")
    
    const cliLeft = elem.offsetLeft
    const cliTop = elem.offsetTop
    return [cliLeft + textWidth + padding / 2 + 24, cliTop + 6]
}


export function onPaste(e: ClipboardEvent) {
    e.preventDefault();
    const clipboardData = e.clipboardData
    if(!clipboardData) return
    const text = clipboardData.getData('text/plain')
    document.execCommand('insertText', false, text)
}

export function onDrop(e: DragEvent) {
    const target = e.currentTarget as HTMLDivElement
    const data = e.dataTransfer?.getData('text')
    if(!data) return
    target.textContent += data
}

export function onDragOver(e: DragEvent) {
    e.preventDefault()
}
