import Image from "next/image"
import Link from "next/link"
import { wrapn } from "wrapn"
import L2Logo from '../../../public/favicon.ico'
import { IconTheme } from "../icons"
import { IconBalance } from "../icons/IconBalance"
import { IconHome } from "../icons/IconHome"
import { IconNewsletter } from "../icons/IconNewsletter"
import { IconStats } from "../icons/IconStats"

export const TopBar = () => (
        <Header>
            <Link href='/' passHref>
                <Logo>
                    <Image alt='L2 Planet logo' src={L2Logo} height='32' width='32'/>
                    L2 Planet
                </Logo>
            </Link>
            <Nav>
                <Link href='/' passHref>
                    <A><IconHome/></A>
                </Link>
                <Link href='/newsletter' passHref>
                    <A><IconNewsletter/></A>
                </Link>
                <Link href='/stats' passHref>
                    <A><IconStats/></A>
                </Link>
                <Link href='/' passHref>
                    <A><IconBalance/></A>
                </Link>
            </Nav>
            <ButtonsDiv>
                <Button onClick={() => document.getElementsByTagName('html')[0].classList.toggle('dark')}>
                    <IconTheme/>
                </Button>
            </ButtonsDiv>
        </Header>
)


const Header = wrapn('header')`
    sticky top-0 z-30
    flex items-center justify-between
    h-16 px-3 sm:px-6
    backdrop-blur-xl
    border-b
    border-b-slate-100
    dark:border-b-slate-800
    bg-white/60
    dark:bg-slate-900/60
`

const Logo = wrapn('a')`
    flex items-center justify-between
    w-[9.5rem]
    font-extrabold
    text-2xl
`

const Nav = wrapn('nav')`
    hidden
    lg:flex
    space-x-8
`

const A = wrapn('a')`
    flex items-center
    font-semibold text-lg
    rounded-xl
    h-11 px-4 py-1
    hover:scale-105 active:scale-95
    border
    border-indigo-300
    dark:border-indigo-700
    bg-indigo-200/70 hover:bg-indigo-300/70 active:bg-indigo-200/70
    dark:bg-indigo-800/70 dark:hover:bg-indigo-700/70 dark:active:bg-indigo-800/70
    duration-200
`

const ButtonsDiv = wrapn('div')`
    flex justify-end
    w-[9.5rem]
`

const Button = wrapn('button')`
    h-12 p-1.5
    hover:scale-105 active:scale-95
    rounded-full border
    border-indigo-300
    dark:border-indigo-700
    bg-indigo-200/70 hover:bg-indigo-300/70 active:bg-indigo-200/70
    dark:bg-indigo-800/70 dark:hover:bg-indigo-700/70 dark:active:bg-indigo-800/70
    duration-200
`