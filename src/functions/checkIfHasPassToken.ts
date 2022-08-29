import { RPCGetTokenAccountsByOwner } from "../types/external"
import { makePostRequest } from "./makePostRequest"

export const checkIfHasPassToken = async (publicKey: string) => {
    const rpc = 'https://mainnet.rpcpool.com/'
    const body = `{"jsonrpc": "2.0","id": 1,"method": "getTokenAccountsByOwner","params": ["${publicKey}",{"mint": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU"},{"encoding": "jsonParsed"}]}`
    const res = await makePostRequest<RPCGetTokenAccountsByOwner>(rpc, body)
    if(!res) return false
    const passTokenAmount = res.result.value.at(0)?.data.parsed.info.tokenAmount.amount
    if(!passTokenAmount) return false
    return passTokenAmount == '1'
}