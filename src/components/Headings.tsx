import { wrapn } from "wrapn";

export const H1 = wrapn('h1')`
    font-bold
    text-[10vw] md:text-[9vw] lg:text-[min(7.5vw,6rem)]
`

export const H2 = wrapn('h2')`
    font-bold
    text-[7.5vw] md:text-[7vw] lg:text-[min(5vw,4rem)]
`

export const H3 = wrapn('h3')`
    font-bold
    text-[9vw] md:text-[7vw] lg:text-[min(5vw,4rem)]
`

export const H4 = wrapn('h4')`
    font-bold
    text-4xl
`