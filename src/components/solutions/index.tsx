import { ReactNode } from "react";
import { wrapn } from "wrapn";

export const SolutionPart = ({ label, children }: { label: string, children: ReactNode }) => (
    <Div>
        <Label>{label}</Label>
        {children}
    </Div>
)


const Div = wrapn('div')`
    w-full
    flex flex-col
    gap-y-3
`

const Label = wrapn('h3')`
    font-bold text-left
    text-lg sm:text-xl md:text-[1.375rem]
`