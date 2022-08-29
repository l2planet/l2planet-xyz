import { wrapn } from "wrapn"
import { Block } from "../../types/external"


export const Image = ({ block }: { block: Block }) => (
    <I
        alt='picture'
        src={block.content}
    />
)

const I = wrapn('img')`
    rounded-xl
`