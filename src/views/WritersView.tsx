import nacl from "tweetnacl"
import { usePhantom } from "../contexts/Phantom"

export const WritersView = () => {
    const { isAuthorized, signMessage, connect } = usePhantom()
    const onClick = async () => {
        await connect()
        const msgSign = await signMessage()
        if(!msgSign) return
        console.log(JSON.stringify(msgSign))
        
        const signed = nacl.sign.detached.verify(
            msgSign.message,
            msgSign.signature,
            msgSign.publicKey
        )
    }

    return (
        <>
            <button onClick={onClick}>Sign</button>
        </>
    )
}