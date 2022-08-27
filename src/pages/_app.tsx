import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { TopBar } from '../components/common/TopBar'
import { Main } from '../components/common/Main'
import { BottomBar } from '../components/common/BottomBar'
import { ApiProvider } from '../contexts/ApiContext'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApiProvider>
            <TopBar/>
            <Main>
                <Component {...pageProps} />
            </Main>
            <BottomBar/>
        </ApiProvider>
    )
}

export default MyApp
