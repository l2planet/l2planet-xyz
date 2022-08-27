import Head from "next/head";
import { Tweet as TweetComponent } from 'react-twitter-widgets'
import { ComponentProps, MouseEventHandler, Ref, useEffect, useMemo, useRef } from "react";
import { wrapn } from "wrapn";
import { BlockClass } from "./classes";
import { getValidImage, getValidTweetId, getValidYoutubeLink, resizeTextareaHeight } from "./functions";
import { IconPlus, IconDirections } from "../icons";

export const EditableBlock = ({block, onPlus, onUpDown, plusId, directionsId, onPlaceClick, ...p}: ComponentProps<typeof TextArea> & { block: BlockClass, onPlus: MouseEventHandler<HTMLButtonElement>, onUpDown: MouseEventHandler<HTMLButtonElement>, onPlaceClick: MouseEventHandler<HTMLDivElement>, plusId: string, directionsId: string }) => {
    const img = useMemo(() => block.is('i') ? getValidImage(p.value as string) : '', [block, p.value])
    const tw = useMemo(() => block.is('w') ? getValidTweetId(p.value as string) : '', [block, p.value])
    const yt = useMemo(() => block.is('y') ? `https://www.youtube-nocookie.com/embed/${getValidYoutubeLink(p.value as string)}` : '', [block, p.value])

    useEffect(() => {
        if(!p.id) return
        const el = document.getElementById(p.id) as HTMLTextAreaElement
        resizeTextareaHeight(el)
    }, [block, p.id])

    return <>
        <Div>
            <ButtonPlus id={plusId} onClick={onPlus}/>
            <MediaDiv onClick={onPlaceClick}>
                {block.is('l') && <ListBullet/>}
                {block.is('b') && <SeperatorLine/>}
                <TextArea {...p}/>
                {img && <ImgDiv><Img alt="image" src={img}/></ImgDiv>}
                {tw && <div className="self-center px-3 -m-3 pb-3 w-full max-w-[646px]"><TweetComponent tweetId={tw}/></div>}
                {yt && <iframe src={yt} className='bg-sky-300 aspect-video rounded-2xl mx-3 mb-3' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>}

            </MediaDiv>
   
            <ButtonDirections id={directionsId} onClick={onUpDown}/>
        </Div>
    </>
}


const Div = wrapn('div')`
    flex items-start
    group gap-x-2
`

const MediaDiv = wrapn('div')`
    flex flex-col w-full relative
    rounded-lg
    hover:bg-indigo-50 group-focus-within:bg-indigo-100
    dark:hover:bg-slate-800 dark:group-focus-within:bg-slate-700
    cursor-text
`

const TextArea = wrapn('textarea')`
    px-3 py-2.5 w-full
    resize-none overflow-y-hidden outline-none
    bg-transparent
    duration-200
    transition-colors
`

const WButton = wrapn('button')`
    flex items-center justify-center
    w-8 h-8
    rounded-md
    fill-transparent
    group-hover:fill-slate-900 group-hover:bg-slate-200
    dark:group-hover:fill-white dark:group-hover:bg-slate-700
    duration-200
`
const ButtonPlus = ({ onClick, id }: { onClick: MouseEventHandler<HTMLButtonElement>, id: string }) => (
    <WButton id={id} onClick={onClick}>
        <IconPlus/>
    </WButton>
)
const ButtonDirections = ({ onClick, id }: { onClick: MouseEventHandler<HTMLButtonElement>, id: string }) => (
    <WButton id={id} onClick={onClick}>
        <IconDirections/>
    </WButton>
)

const ImgDiv = wrapn('div')`
    flex px-3 pb-3
`
const Img = wrapn('img')`
    rounded-2xl
    w-full
`


const ListBullet = () => (
    <svg className="absolute left-7 top-[21px]" viewBox="0 0 100 100" height='8' width='8' xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50"/>
    </svg>
)


const SeperatorLine = () => (
    <span className="absolute h-[1px] w-[calc(100%-24px)] top-[21px] self-center select-none bg-slate-300 dark:bg-slate-600"></span>
)
