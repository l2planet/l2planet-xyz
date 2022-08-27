import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useApi } from "../contexts/ApiContext";
import { L1Chain, L2Solution } from "../types/constants";

// Return type of the hook
interface UseChainState {
    chain?: L1Chain
    solution?: L2Solution
    isSolution: boolean
}

// Hook that returns the current chain and solution based on route
export function useChain(): UseChainState {
    const { data } = useApi()
    const router = useRouter()
    const [chainName, setChainName] = useState('')
    const [solutionName, setSolutionName] = useState('')
    
    // When `router` or `data` changes set `chainName` and `solutionName` values
    useEffect(() => {
        const slug = router.query.slug as string[] | undefined
        if(!slug) return
        setChainName(slug[0])
        if(slug.length == 2) {
            setSolutionName(slug[1])   
        }
    }, [router, data])

    // If the route is mistaken, route to "/404" page
    useEffect(() => {
        if(!data) return
        if(chainName && data[chainName] == undefined) router.push('/404')
        if(solutionName && data[chainName]?.solutions[solutionName] == undefined) router.push('/404')
    }, [chainName, solutionName, data, router])

    // Return `chain`, `solution`, and `isSolution`
    return {
        chain: data ? data[chainName] : undefined,
        solution: data ? data[chainName]?.solutions[solutionName] : undefined,
        isSolution: Boolean(solutionName)
    } as const
}