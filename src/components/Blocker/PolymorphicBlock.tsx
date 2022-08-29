import { Tweet } from "./Tweet"
import { Block } from "../../types/external"
import { Code } from "./Code"
import { Heading1 } from "./Heading1"
import { Heading2 } from "./Heading2"
import { Image } from "./Image"
import { List } from "./List"
import { Paragraph } from "./Paragraph"
import { Quote } from "./Quote"
import { Subtitle } from "./Subtitle"
import { Title } from "./Title"
import { Youtube } from "./Youtube"
import { Seperator } from "./Seperator"

/* eslint-disable jsx-a11y/alt-text */

export const PolymorphicBlock = ({ block }: { block: Block }) => <>
    {((): JSX.Element => {
        switch(block.type) {
            case 'p': return <Paragraph block={block}/>
            case '1': return <Heading1 block={block}/>
            case '2': return <Heading2 block={block}/>
            case 'l': return <List block={block}/>
            case 'i': return <Image block={block}/>
            case 'w': return <Tweet block={block}/>
            case 'y': return <Youtube block={block}/>
            case 'b': return <Seperator/>
            case 'q': return <Quote block={block}/>
            case 'c': return <Code block={block}/>
            case 's': return <Subtitle block={block}/>
            case 't': return <Title block={block}/>
        }
    })()
    }
</>