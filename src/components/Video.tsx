import { wrapn } from "wrapn"

export const Video = ({ id }: { id?: string }) => (
    <Div>
        {
            id ? <Iframe src={`https://www.youtube-nocookie.com/embed/${id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
            : <Text>No video</Text>
        }
    </Div>
)

const Iframe = wrapn('iframe')`
    w-full
    rounded-xl
    aspect-video
    bg-indigo-200
    dark:bg-indigo-900
`

const Div = wrapn('div')`
    w-full
    rounded-xl
    aspect-video
    bg-indigo-200
    dark:bg-indigo-900
`

const Text = wrapn('p')`
    flex justify-center items-center
    w-full h-full
    font-medium
    text-3xl sm:text-4xl md:text-5xl
    opacity-60
`