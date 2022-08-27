import { wrapn } from "wrapn"

export const CardAbout = ({ Icon, title, text }: { Icon: () => JSX.Element, title: string, text: string }) => (
    <Card>
        <IconHolder><Icon/></IconHolder>
        <Title>{title}</Title>
        <Text>{text}</Text>
    </Card>
)

const Card = wrapn('div')`
    flex flex-col text-left
    p-8 sm:p-10
    gap-y-6
    rounded-xl
    border
    border-slate-200
    dark:border-slate-700
    bg-slate-100
    dark:bg-slate-800
`
const IconHolder = wrapn('div')`
    h-14 w-14
    p-2.5
    rounded-full
    border
    border-slate-400
    dark:border-slate-600
    bg-slate-300
    dark:bg-slate-700
`

const Title = wrapn('h2')`
    font-bold
    text-3xl sm:text-2xl md:text-3xl lg:text-4xl
`

const Text = wrapn('p')`
    font-semibold
    lg:text-lg
    text-slate-600
    dark:text-slate-300
`
