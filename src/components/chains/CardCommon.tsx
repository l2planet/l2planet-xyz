import Link from "next/link";
import { wrapn } from "wrapn";
import { L2SolutionFromAPI, ProjectFromAPI } from "../../types/external";

const Card = ({ data, href }: { data: L2SolutionFromAPI | ProjectFromAPI, href: string }) => (
    <Link href={href} passHref>
        <A>
            <DivInfo>
                <Img src={data.logo}/>
                <Name>{data.name}</Name>
            </DivInfo>
        </A>
    </Link>
)


const A = wrapn('a')`
    flex flex-col justify-center
    p-4 sm:p-5 md:p-6 lg:p-5
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
    h-[10vw] lg:h-[6vw]  xl:h-14
    drop-shadow-[0_0_1rem_#00000040]
    dark:drop-shadow-[0_0_1rem_#ffffff40]
`

const Name = wrapn('h3')`
    font-bold
    text-[4vw] sm:text-[3vw]  lg:text-[2.5vw] xl:text-2xl
`