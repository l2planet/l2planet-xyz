export type BlockType = 'paragraph' | 'heading1' | 'heading2' | 'title' | 'subtitle' | 'image'

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
    setImage() {
        this.type = 'image'
    }


    getPlaceholder(): string {
        switch(this.type) {
            case 'paragraph': return 'Paragraph comes here...'
            case 'heading2': return 'Small Heading comes here...'
            case 'heading1': return 'Large Heading comes here...'
            case 'title': return 'Title comes here...'
            case 'subtitle': return 'Subtitle comes here...'
            case 'image': return 'Paste an URL...'
        }
    }
}
