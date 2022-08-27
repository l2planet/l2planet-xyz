import Image from "next/image";
import { wrapn } from "wrapn";
import BlurIndigo from '../../public/blur-indigo.png'

export const ImageBlurIndigo = () => (
    <ImageWrapper>
        <Image src={BlurIndigo} alt='blur-cyan' />
    </ImageWrapper>
)

const ImageWrapper = wrapn('div')`
    absolute z-[-1] -left-[20vw] -top-[20vw]
    w-full lg:w-2/3
`