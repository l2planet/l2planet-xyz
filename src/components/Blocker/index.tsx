import { wrapn } from "wrapn";
import { Block } from "../../types/constants";
import { PolymorphicBlock } from "./PolymorphicBlock";

export const Blocker = ({ blocks }: { blocks: Block[] }) => (
    <B>
        {blocks.map((block, i) =>
            <PolymorphicBlock
                key={`poly_${i}`}
                block={block}
            />    
        )}
    </B>
)

const B = wrapn('div')`
    flex flex-col
    gap-y-5 sm:gap-y-6 md:gap-y-7
    self-center w-full max-w-3xl
`