import { Head, Html, Main, NextScript } from "next/document";
import { Body } from "../components/common/Body";

export default function Document() {
    return (
        <Html className='dark'>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;550;600;700;800&display=swap" rel="stylesheet"/>
                <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            </Head>
            <Body>
                <Main/>
                <NextScript/>
            </Body>
        </Html>
    )
}