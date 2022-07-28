export type BlockType = 'p' | 'h1' | 'h2' | 't' | 's'

export class Block {
    constructor(id?: string, type?: BlockType) {
        this.type = type || 'p'
        this.id = (id || '') + Date.now().toString()
        this.content = ''
    }

    type: BlockType
    id: string
    content: string

    setParagraph() {
        this.type = 'p'
    }
    setHeading1() {
        this.type = 'h1'
    }
    setHeading2() {
        this.type = 'h2'
    }
    setTitle() {
        this.type = 't'
    }
    setSubtitle() {
        this.type = 's'
    }


    getPlaceholder() {
        switch(this.type) {
            case 'p': return 'Paragraph comes here...'
            case 'h2': return 'Small Heading comes here...'
            case 'h1': return 'Large Heading comes here...'
            case 't': return 'Title comes here...'
            case 's': return 'Subtitle comes here...'
        }
    }
}



export function calcFontSize(blockType: BlockType): string {
    switch(blockType) {
        case 'p': return '1.125rem'
        case 'h2': return '1.5rem'
        case 'h1': return '2rem'
        case 't': return '2.5rem'
        case 's': return '1.4425rem'
    }
}

export function calcFontWeight(blockType: BlockType): string {
    switch(blockType) {
        case 'p': return '500'
        case 'h2': return '800'
        case 'h1': return '800'
        case 't': return '800'
        case 's': return '600'
    }
}