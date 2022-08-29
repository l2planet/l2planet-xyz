import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useApi } from "../contexts/ApiContext";
import { findProjectsOfSolution } from "../functions/chain";
import { getPaths } from "../functions/getPaths";
import { L2Solution } from "../types/internal";

export function useSolution(): L2Solution | undefined {
    const [solution, setSolution] = useState<L2Solution>()

    const { data } = useApi()
    const { push } = useRouter()

    const isRun = useRef(false)

    useEffect(() => {
        if(!data || isRun.current) return

        const solutionId = getPaths()[1]

        const potentialSolution = data.solutions[solutionId]

        if(!potentialSolution) {
            push('/404')
            return
        }

        const projects = findProjectsOfSolution(potentialSolution, data)

        setSolution({
            ...potentialSolution,
            projects,
            id: solutionId,
        })
    }, [data, push])


    return solution
}