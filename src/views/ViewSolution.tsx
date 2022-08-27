import { Timeline } from "react-twitter-widgets"
import { wrapn } from "wrapn"
import { L2Solution } from "../types/constants"

export const ViewSolution = ({ solution: { name, logo, description, website, twitter, gecko, investorLogos } }: { solution: L2Solution }) => {
    return (
        <Div>
            <DivSolutionData>
                <DivSolutionInfo>
                    <Img src={logo} alt={`${name} logo`}/>
                    <Name>{name}</Name>
                </DivSolutionInfo>
                <Price>$ 1.36</Price>
            </DivSolutionData>
            <Description>{description}</Description>
            <DivTimeline>
                <Timeline dataSource={{sourceType: 'Profile', screenName: twitter}} options={{ theme: 'dark' }}/>
            </DivTimeline>
        </Div>
    )
}




const Div = wrapn('div')`
    flex flex-col
    gap-y-6
`

const DivSolutionInfo = wrapn('div')`
    flex items-center
    gap-x-4
`

const DivSolutionData = wrapn('div')`
    flex justify-between
`

const Name = wrapn('h1')`
    font-extrabold
    text-3xl sm:text-4xl md:text-5xl
`

const Img = wrapn('img')`
    h-14 sm:h-[4.5rem] md:h-20
    aspect-square
`

const Price = wrapn('div')`
    flex justify-center items-center
    h-[3.25rem] sm:h-16 md:h-[4.5rem]
    px-4 sm:px-6 md:px-8
    rounded-2xl
    font-extrabold
    text-xl sm:text-2xl md:text-3xl
    dark:border-indigo-700
    bg-indigo-300
    dark:bg-indigo-800
`

const Description = wrapn('div')`
    font-semibold text-left
    sm:text-lg md:text-xl
`

const DivTimeline = wrapn('div')`
    w-full max-w-sm h-[calc(100vh-20rem)] overflow-y-auto
    rounded-xl p-[-10px]
    border-y
    border-slate-200
    dark:border-slate-800
    bg-slate-200
    dark:bg-slate-800
`