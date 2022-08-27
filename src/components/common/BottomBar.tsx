import Link from "next/link";
import { wrapn } from "wrapn";

export const BottomBar = () => (
    <Footer>
        <Div>
            <Box>
                <HBrand>L2 Planet, DAO</HBrand>
            </Box>
            <Box>
                <Title>Social Media</Title>
                    <Item name='Twitter' href='https://twitter.com/layer2planet'/>
                    <Item name='YouTube' href='https://www.youtube.com/channel/UCVesV_YjBcCIlD55S-BDqmw'/>
                    <Item name='Discord' href='https://discord.com/invite/trSb3WqzFJ'/>
            </Box>
            <Box>
                <Title>DAO</Title>
                <ItemWrapper>
                    <Item href='/about' name='About Us'/>
                    <Item href='/' name='Writers'/>
                    <Item href='/' name='Donations'/>
                </ItemWrapper>
            </Box>
        </Div>
    </Footer>
)

const Footer = wrapn('footer')`
    flex justify-center text-center md:text-left
    py-12 sm:py-16 px-3 sm:px-5 md:px-8
    border-t
    border-t-slate-100
    dark:border-t-slate-800
    bg-white
    dark:bg-slate-900
`

const Div = wrapn('div')`
    flex flex-col md:flex-row md:justify-between
    w-full max-w-7xl
    gap-y-12 sm:gap-y-16
`

const HBrand = wrapn('h3')`
    font-extrabold
    text-3xl lg:text-4xl
`

const Box = wrapn('div')`
    flex flex-col
    gap-y-2
    md:pr-12
`

const Title = wrapn('h4')`
    font-bold
    text-2xl md:text-xl
`

const ItemWrapper = wrapn('div')`
    flex flex-col items-center md:items-start
    gap-y-1
`

// Item is a component for navigating to specific pages

const Item = ({ href, name }: { href: string, name: string }) => (
    <Link href={href} passHref>
        <A target='_blank'>{name}</A>
    </Link>
)
const A = wrapn('a')`
    font-semibold
    text-lg md:text-base
    text-slate-700 hover:text-indigo-500
    dark:text-slate-300 dark:hover:text-indigo-400
    duration-200 transition-colors
`