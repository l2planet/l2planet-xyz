import { wrapn } from "wrapn"
import { L1ChainFromAPI, ProjectFromAPI } from "../../types/external"
import { L1Chain } from "../../types/internal"


/* eslint-disable @next/next/no-img-element */

export const PrimaryInfoCommon = <T extends L1Chain>({ data: { name, icon, text } }: { data: T }) => (
    <DivInfo>
        <Picture>
            <img src={'https://'+ icon} alt={`${name} icon`}/>
        </Picture>
        <DivText>
            <Name>{name}</Name>
            <Description>{text}</Description>
        </DivText>
    </DivInfo>
)



const DivInfo = wrapn('div')`
    flex
    flex-col lg:flex-row-reverse
    items-center justify-between
    gap-y-4
`

const DivText = wrapn('div')`
    flex flex-col lg:text-left
`

const Picture = wrapn('picture')`
    w-1/2 sm:w-1/3 md:w-1/4
    aspect-square
    drop-shadow-[0_10px_8px_#11203630]
    dark:drop-shadow-none
`

const Name = wrapn('h1')`
    font-bold
    text-[15vw] sm:text-[10vw] md:text-[7.5vw] lg:text-[min(9vw,7.2rem)]
`

const Description = wrapn('p')`
    font-bold
    text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[min(2.5vw,2rem)]
    text-slate-600 dark:text-slate-300
`