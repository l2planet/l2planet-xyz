import Link from "next/link";
import { wrapn } from "wrapn";
import { L2Solution, Project } from "../../types/internal";

export const LinksCommon = <T extends L2Solution | Project>({ data: {website, twitter, gecko, github} }: { data: T }) => (
    <FlexLinks>
        {website && <ALink href={website}>Website</ALink>}
        {twitter && <ALink href={`https://twitter.com/${twitter}`}>Twitter</ALink>}
        {gecko && <ALink href={`https://www.coingecko.com/en/coins/${gecko}`}>Gecko</ALink>}
        {github && <ALink href={`https://github.com/${github}`}>GitHub</ALink>}
    </FlexLinks>
)


const FlexLinks = wrapn('div')`
    flex flex-wrap
    gap-4
`

export const ALink = ({ children, href }: { children: string, href: string }) => (
    <Link href={href} passHref>
        <A target='_blank'>{children}</A>
    </Link>
)

const A = wrapn('a')`
    flex items-center
    h-9 px-3 sm:h-10 sm:px-4
    rounded-lg
    font-semibold
    sm:text-lg
    hover:scale-105 active:scale-95
    border
    border-sky-400
    dark:border-blue-600
    bg-sky-300/70 hover:bg-sky-400/70 active:bg-sky-300/70
    dark:bg-blue-700/70 dark:hover:bg-blue-600/70 dark:active:bg-blue-700/70
    duration-200
`