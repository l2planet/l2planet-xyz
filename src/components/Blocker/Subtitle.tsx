import { wrapn } from "wrapn"
import { Block } from "../../types/external"

export const Subtitle = ({ block }: { block: Block }) => (
    <S>
        {block.content}
    </S>
)

const S = wrapn('h1')`
    font-semibold
    text-[1.125rem] sm:text-[1.25rem] md:text-[1.5rem]
    leading-tight sm:leading-tight md:leading-tight
    text-center
    text-slate-700
    dark:text-slate-200
`