import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useApi } from "../contexts/ApiContext";
import { findSolutionsOfChain } from "../functions/chain";
import { getPaths } from "../functions/getPaths";
import { L1Chain } from "../types/internal";

export function useChain(): L1Chain | undefined {
    const [chain, setChain] = useState<L1Chain>()

    const { data } = useApi()
    const { push } = useRouter()

    const isRun = useRef(false) 
    
    useEffect(() => {
        if(!data || isRun.current) return
        
        const chainId = getPaths()[1]
        
        const potentialChain = data.chains[chainId]

        if(!potentialChain) {
            push('/404')
            return
        }

        const solutions = findSolutionsOfChain(potentialChain, data)

        setChain({
            ...potentialChain,
            solutions
        })

        isRun.current = true
    }, [data, push])


    return chain
}