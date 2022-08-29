import Link from "next/link";
import { wrapn } from "wrapn";
import { L2SolutionFromAPI, ProjectFromAPI } from "../../types/external";
import { Project } from "../../types/internal";

export const CardProject = ({ project, chainId, solutionId }: { project: Project, chainId: string, solutionId: string }) => (
    <Link href={`/chain/${chainId}/${solutionId}/${project.id}`} passHref>
        <A>
            <DivInfo>
                <Img src={project.logo}/>
                <Name>{project.name}</Name>
            </DivInfo>
        </A>
    </Link>
)


const A = wrapn('a')`
    flex flex-col justify-center
    p-3 sm:p-4
    hover:scale-105 active:scale-95
    rounded-3xl border
    border-indigo-300
    dark:border-indigo-700
    bg-indigo-200/70 hover:bg-indigo-300/70 active:bg-indigo-200/70
    dark:bg-indigo-800/70 dark:hover:bg-indigo-700/70 dark:active:bg-indigo-800/70
    duration-200
`

const DivInfo = wrapn('div')`
    flex justify-between items-center
`

const Img = wrapn('img')`
    h-[10vw] sm:h-[7.5vw] lg:h-[5vw] max-h-16
    drop-shadow-[0_0_1rem_#00000040]
    dark:drop-shadow-[0_0_1rem_#ffffff40]
`

const Name = wrapn('h3')`
    font-semibold
    text-[4vw] sm:text-[3vw] lg:text-[min(2vw,1.6rem)]
`