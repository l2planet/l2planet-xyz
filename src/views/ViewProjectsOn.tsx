import { wrapn } from "wrapn";
import { Grid4CardsCommon } from "../components/chains/common";
import { PrimaryInfoCommon } from "../components/chains/PrimaryInfoCommon";
import { CardProject } from "../components/chains/common";
import { L2SolutionFromAPI } from "../types/external";
import { L2Solution } from "../types/internal";

export const ViewProjectsOn = ({ solution }: { solution: L2Solution}) => {


    return (
        <>
            <PrimaryInfoCommon data={solution}/>
            <Grid4CardsCommon>
                {solution.projects && solution.projects.map(project => <CardProject key={project.id} project={project} />)}
            </Grid4CardsCommon>
        </>
    )
}


const Div = wrapn('div')`
    flex flex-col
    gap-y-6
`

const DivSolutionInfo = wrapn('div')`
    flex
    flex-col lg:flex-row-reverse
    items-center justify-between
    gap-y-4
`


const DivSolutionText = wrapn('div')`
    flex flex-col lg:text-left
`


const Img = wrapn('img')`
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
