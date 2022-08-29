import { Timeline } from "react-twitter-widgets"
import { wrapn } from "wrapn"

export const Twitter = ({ id }: { id?: string }) => (
    <DivTimeline>
        {
            id ? <Timeline dataSource={{sourceType: 'Profile', screenName: id}} options={{ theme: 'dark' }}/>
            : <Text>No Tweet</Text>
        }
    </DivTimeline>
)

const DivTimeline = wrapn('div')`
    w-full h-[calc(60vh)] min-h-[10rem] lg:h-[calc((100vw-482.3px)*0.5625)] lg:max-h-[456.75px] lg:max-w-sm
    rounded-xl
    border-y-[1.5px]
    border-transparent
    dark:border-[#2f3336]
    bg-[#e1e8ea]
    dark:bg-[#2f3336]
    overflow-y-auto
`



const Text = wrapn('p')`
    flex justify-center items-center
    w-full h-full
    font-medium
    text-3xl sm:text-4xl md:text-5xl
    opacity-60
`