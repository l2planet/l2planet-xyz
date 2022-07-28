export type BlockType = 'paragraph' | 'heading1' | 'heading2' | 'title' | 'subtitle'

export class Block {
    constructor(id?: string, type?: BlockType) {
        this.type = type || 'paragraph'
        this.id = (id || '') + Date.now().toString()
        this.content = ''
    }

    type: BlockType
    id: string
    content: string

    setParagraph() {
        this.type = 'paragraph'
    }
    setHeading1() {
        this.type = 'heading1'
    }
    setHeading2() {
        this.type = 'heading2'
    }
    setTitle() {
        this.type = 'title'
    }
    setSubtitle() {
        this.type = 'subtitle'
    }


    getPlaceholder() {
        switch(this.type) {
            case 'paragraph': return 'Paragraph comes here...'
            case 'heading2': return 'Small Heading comes here...'
            case 'heading1': return 'Large Heading comes here...'
            case 'title': return 'Title comes here...'
            case 'subtitle': return 'Subtitle comes here...'
        }
    }
}



export function calcFontSize(blockType: BlockType): string {
    switch(blockType) {
        case 'paragraph': return '1.125rem'
        case 'heading2': return '1.5rem'
        case 'heading1': return '2rem'
        case 'title': return '2.5rem'
        case 'subtitle': return '1.4425rem'
    }
}

export function calcFontWeight(blockType: BlockType): string {
    switch(blockType) {
        case 'paragraph': return '500'
        case 'heading2': return '800'
        case 'heading1': return '800'
        case 'title': return '800'
        case 'subtitle': return '600'
    }
}