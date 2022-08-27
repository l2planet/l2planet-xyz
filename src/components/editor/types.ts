export type EditorBlockType = 't' | 's' | '1' | '2' | 'p' | 'l' | 'q' | 'c' | 'b' | 'i' | 'y' | 'w'

export interface EditorBlockInterface {
    text: string
    type: EditorBlockType
}

export interface EditorBlockLinks {
    start: number
    end: number
    url: string
}

export interface OnKeyDownHandler {
    onEnter: Function
    onAll: Function
    onBackspace: Function
    onElse: Function
    onArrowUp: Function
    onArrowDown: Function
    onArrowLeft: Function
    onArrowRight: Function
    onShift: Function
    onMeta: Function
}