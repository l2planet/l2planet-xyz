import { wrapn } from "wrapn"
import { Block } from "../../types/external"
import { Tweet as T } from 'react-twitter-widgets'


export const Tweet = ({ block }: { block: Block }) => {
    return (
        <Div>
            <T tweetId={block.content} options={{ theme: 'dark' }}/>
        </Div>
    )


}

const Div = wrapn('div')`
    self-center
    w-full max-w-[550px]
    -my-[10px]
`