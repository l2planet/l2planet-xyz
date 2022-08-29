import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useApi } from "../contexts/ApiContext";
import { getPaths } from "../functions/getPaths";
import { Project } from "../types/internal";

export function useProject(): Project | undefined {
    const [project, setProject] = useState<Project>()

    const { data } = useApi()
    const { push } = useRouter()

    const isRun = useRef(false)

    useEffect(() => {
        if(!data || isRun.current) return

        const projectId = getPaths()[1]

        const potentialProject = data.projects[projectId]
        
        if(!potentialProject) {
            push('/404')
            return
        }

        setProject({
            ...potentialProject,
            id: projectId
        })

    }, [data, push])


    return project
}