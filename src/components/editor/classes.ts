import { text } from "stream/consumers"
import { EditorBlockLinks, EditorBlockType } from "./types"

export class BlockClass {
    constructor(type?: EditorBlockType) {
        this.content = ''
        this.type = type || 'p'
        this.links = []
    }

    content: string
    type: EditorBlockType
    links: EditorBlockLinks[]

    linkPlaceInvalid(start: number, end: number): boolean {
        for(const link of this.links) {
            if((start >= link.start && start <= link.end) || (end >= link.start && end <= link.end)) return true
        }
        return false
    }

    linkWordInvalid(start: number, end: number): boolean {
        const previousChar = this.content.at(start - 1)
        const subsequentChar = this.content.at(end)
        console.log(previousChar, '--' ,subsequentChar)

        if(start != 0 && previousChar != ' ' && previousChar) return true
        
        if(subsequentChar != ' ' && subsequentChar) return true
        
        return false
    }

    is(aType: EditorBlockType): boolean {
        return this.type == aType
    }


    as(newType: EditorBlockType): BlockClass {
        this.type = newType
        return this
    }

    with(newText: string): BlockClass {
        this.content = newText
        return this
    }

    className(): string {
        switch(this.type) {
            case 'c': return `
                text-0.25xl
            `
            case '1': return `
                font-extrabold
                text-[2.5rem]
                leading-tight
            `
            case '2': return `
                font-extrabold
                text-[1.75rem]
                leading-tight
            `
            case 'l': return `
                font-[550]
                text-[1.25rem]
                leading-normal
                pl-[52px]
            `
            case 'p': return `
                font-[550]
                text-[1.25rem]
                leading-normal
            `
            case 'q': return `
                font-[550]
                text-[1.25rem]
                italic
                leading-normal
                text-slate-700
                dark:text-slate-200
            `
            case 'b': return `
                caret-transparent
            `
            case 's': return `
                font-semibold
                text-[1.5rem]
                leading-tight
                text-slate-800
                dark:text-slate-100
            `
            case 't': return `
                font-extrabold
                text-[3rem]
                leading-tight
            `
            case 'c': return `
                font-light
                text-[1.25rem]
                leading-normal
                text-slate-600
                dark:text-slate-300
            `
            default: return `
                text-sky-300 hover:text-sky-600  group-focus-within:text-sky-600
            `
        }
    }


    placeholder(): string {
        switch(this.type) {
            case '1': return 'heading 1...'
            case '2': return 'heading 2...'
            case 'b': return ''
            case 'c': return 'code...'
            case 'l': return 'list...'
            case 'p': return 'paragraph...'
            case 'q': return 'quote'
            case 's': return 'subtitle...'
            case 't': return 'title...'
            default: return ''
        }
    }
}