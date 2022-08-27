export interface Phantom {
    solana: {
        connect(opts?: { onlyIfTrusted: boolean }): Promise<void | {
            publicKey: PublicKey
        }>
        signMessage(msg: Uint8Array, format: 'utf8'): Promise<void | Signature>
        publicKey: null | PublicKey
    }
}


export interface PublicKey {
    toString(): string
    toBytes(): Uint8Array
}

export interface Signature {
    publicKey: PublicKey,
    signature: Uint8Array,
}

export interface MessageSignature {
    publicKeyBase58: string
    message: Uint8Array
    signature: Uint8Array
    publicKey: Uint8Array
}

export interface RPCGetTokenAccountsByOwner {
    result: {
        value: {
            data: {
                parsed: {
                    info: {
                        tokenAmount: {
                            amount: string
                        }
                    }
                }
            }
        }[]
    }
}

export interface Block {
    type: 't' | 's' | '1' | '2' | 'p' | 'l' | 'q' | 'c' | 'b' | 'i' | 'y' | 'w'
    content: string
    links?: BlockLink[]
}

export interface BlockLink {
    start: number
    end: number
    url: string
}


export type ApiData = {
    [key in string]?: L1Chain
}


export interface L1Chain {
    name: string
    id: string
    description: string
    logo: string
    solutions: {
        [key in string]: L2Solution
    }
}

export interface L2Solution {
    name: string
    description: string
    logo: string
    website: string
    twitter: string
    gecko: string
    investorLogos: string[]
}