import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { checkIfHasPassToken } from "../functions/checkIfHasPassToken";
import { MessageSignature, Signature } from "../types/external";

// Interface for the context state
interface PhantomContextState {
    connect(): Promise<void>
    signMessage(): Promise<void | MessageSignature>
    isAuthorized: boolean
}


// Context itself
const PhantomContext = createContext<PhantomContextState>({} as PhantomContextState)


// Hook to use the context
export const usePhantom = () => useContext(PhantomContext)


// Component to provide the context
export const PhantomProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthorized, setAuthorized] = useState<boolean>(false)
    const [isWalletConnected, setWalletConnected] = useState<boolean>(false)

    // If the app is trusted, automatically connect wallet
    useEffect(() => {
        (async () => {
            const solana = window.phantom?.solana
            if(!solana) {
                return
            }
            try {
                const res = await solana.connect({ onlyIfTrusted: true }).catch(() => {})
                if(!res) {
                    return
                }
                setWalletConnected(true)
            } catch {}


        })()
    }, [])


    // Function to connect wallet
    const connect = async () => {
        const solana = window.phantom?.solana
        if(!solana) {
            return
        }
        try {
            const res = await solana.connect()
            if(!res) {
                return
            }
            setWalletConnected(true)
        } catch {}
    }


    // Asks user to sign message
    // if it is succesful, it returns a value which has a type of MessageSignature
    const signMessage = async (): Promise<void | MessageSignature> => {
        const solana = window.phantom?.solana

        if(!isWalletConnected || !solana || !solana.publicKey) {
            return
        }

        console.log(await checkIfHasPassToken(solana.publicKey?.toString() || ''))

        const rnId = Date.now()
        const encodedMsg = Buffer.from(new TextEncoder().encode('Eğer yazarlardan biriysen bu mesajı imzala ID: ' + rnId))
        const sign = await solana.signMessage(encodedMsg, 'utf8')


        if(!sign) {
            return
        }


        return {
            publicKeyBase58: solana.publicKey?.toString(),
            message: encodedMsg,
            signature: sign.signature,
            publicKey: sign.publicKey.toBytes(),
        }
    }

    
    return <PhantomContext.Provider value={{
        connect,
        isAuthorized,
        signMessage,
    }}>{children}</PhantomContext.Provider>
}