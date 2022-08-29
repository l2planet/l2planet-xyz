import { wrapn } from "wrapn";

export const GridInvestors = wrapn('div')`
    grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
    gap-5
`


export const CardInvestor = ({ src }: { src: string }) => <Img src={src} alt="investor"/>

const Img = wrapn('img')`
    
`