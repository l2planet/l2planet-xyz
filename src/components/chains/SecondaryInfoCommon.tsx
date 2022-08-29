import { wrapn } from "wrapn";
import { L2SolutionFromAPI, ProjectFromAPI } from "../../types/external";
import { L2Solution, Project } from "../../types/internal";
import { LinksCommon } from "./LinksCommon";

export const SecondaryInfoCommon = <T extends L2Solution | Project>({ data }: { data: T }) => (
    <Div>
        <DivData>
            <DivInfo>
                <Img src={'https://' + data.icon} alt={`${data.name} icon`}/>
                <Name>{data.name}</Name>
            </DivInfo>
            <Price>{data.price || 'No Token'}</Price>
        </DivData>
    
        <DivColLgRow>
            <Description>{data.text}</Description>
            <LinksCommon data={data}/>
        </DivColLgRow>
    </Div>

    
)

const Div = wrapn('div')`
    flex flex-col
    gap-y-4 sm:gap-y-6 md:gap-y-8
`

const DivData = wrapn('div')`
    flex justify-between items-center
`

const DivInfo = wrapn('div')`
    flex items-center
    gap-x-4
`



const DivColLgRow = wrapn('div')`
    flex flex-col lg:flex-row justify-between
    gap-y-6 gap-x-5
`


const Img = wrapn('img')`
    h-14 sm:h-[4.5rem] md:h-20
    aspect-square
`
const Name = wrapn('h1')`
    font-extrabold
    text-3xl sm:text-4xl md:text-5xl
`


const Price = wrapn('p')`
    flex justify-center items-center
    h-[3.25rem] sm:h-16 md:h-[4.5rem]
    rounded-2xl
    font-extrabold
    text-xl sm:text-2xl md:text-3xl lg:text-4xl
    underline underline-offset-8
`



const Description = wrapn('div')`
    font-semibold text-left
    sm:text-lg md:text-xl
    text-slate-700 dark:text-slate-200
`
