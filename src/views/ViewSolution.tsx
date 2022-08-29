import Link from "next/link"
import { wrapn } from "wrapn"
import { SolutionPart } from "../components/solutions"
import { Twitter } from "../components/Twitter"
import { Video } from "../components/Video"
import { SecondaryInfoCommon } from "../components/chains/SecondaryInfoCommon"
import { L2Solution } from "../types/internal"

export const ViewSolution = ({ solution }: { solution: L2Solution }) => {
    return (
        <>
            <SecondaryInfoCommon data={solution}/>

            <DivColLgRow className="lg:flex-row-reverse">
                <SolutionPart label={`Projects on ${solution.name}`}>
                    <Link href={`/projects_on/${solution.id}`} passHref>
                        <Projects>See Projects</Projects>
                    </Link>
                </SolutionPart>
                <SolutionPart label='TVL - Total Value Locked'>
                    <TestTVLChart/>
                </SolutionPart>
            </DivColLgRow>
            <DivColLgRow>
                <SolutionPart label='Video'>
                    <Video id={solution.video}/>
                </SolutionPart>
                <div className="lg:max-w-sm w-full">
                    <SolutionPart label={solution.twitter ? `Tweets by @${solution.twitter}` : 'No Twitter Account'}>
                        <Twitter id={solution.twitter}/>
                    </SolutionPart>
                </div>
            </DivColLgRow>
            
        </>
    )
}



const DivColLgRow = wrapn('div')`
    flex flex-col lg:flex-row justify-between
    gap-y-10 sm:gap-y-12 md:gap-y-14 lg:gap-y-16 gap-x-5
`


const Projects = wrapn('a')`
    flex items-center justify-center
    w-full h-24 sm:h-32 md:h-40
    font-bold
    text-[1.75rem] sm:text-4xl md:text-5xl
    rounded-xl
    hover:scale-[1.025] active:scale-[.975]
    border
    border-sky-400
    dark:border-blue-500
    bg-sky-300/70 hover:bg-sky-400/70 active:bg-sky-300/70
    dark:bg-blue-600/70 dark:hover:bg-blue-500/70 dark:active:bg-blue-600/70
    duration-200
`

const TestTVLChart = wrapn('div')`h-40 rounded-xl bg-indigo-200 dark:bg-indigo-900`