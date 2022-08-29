import Link from "next/link"
import { wrapn } from "wrapn"
import { L1ChainFromAPI } from "../../types/external"
import { L1Chain } from "../../types/internal"

export const CardChain = ({ chain, chainId }: { chain: L1ChainFromAPI, chainId: string }) => (
    <Link href={`/chains/${chainId}`} passHref>
        <A>
            <Img src={'https://' + chain.icon} alt={`${chain.name} logo`}/>
            {chain.name}
        </A>
    </Link>
)


const A = wrapn('a')`
    flex flex-col items-center justify-center
    gap-y-[7.5%]
    font-semibold text-[2.75vw] md:text-2xl lg:text-[min(1.5vw,19px)]
    hover:scale-105 active:scale-95
    rounded-3xl border
    border-indigo-300
    dark:border-indigo-700
    bg-indigo-200/70 hover:bg-indigo-300/70 active:bg-indigo-200/70
    dark:bg-indigo-800/70 dark:hover:bg-indigo-700/70 dark:active:bg-indigo-800/70
    aspect-square duration-200
`

const Img = wrapn('img')`
    h-1/2
`