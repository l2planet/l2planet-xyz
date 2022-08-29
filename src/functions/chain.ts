import { DataFromAPI, L1ChainFromAPI, L2SolutionFromAPI } from "../types/external";
import { L2Solution, Project } from "../types/internal";

export const findSolutionsOfChain = (chain: L1ChainFromAPI, data: DataFromAPI): L2Solution[] | undefined => {
    if(!chain.solutions) return

    const solutions: L2Solution[] = []
    for(let i = 0; i < chain.solutions.length; i++) {
        const _solutionId = chain.solutions[i] 
        const _potentialSolution = data.solutions[_solutionId]
        if(_potentialSolution) {
            solutions.push({
                id: _solutionId,
                ..._potentialSolution,
                projects: undefined
            })
        }
    }

    if(solutions.length == 0) return

    return solutions
}



export const findProjectsOfSolution = (solution: L2SolutionFromAPI, data: DataFromAPI): Project[] | undefined => {
    if(!solution.projects) return

    const projects: Project[] = []

    for(let i = 0; i < solution.projects.length; i++) {
        const _projectId = solution.projects[i]
        const _potentialProject = data.projects[_projectId]
        if(_potentialProject) {
            projects.push({
                id: _projectId,
                ..._potentialProject
            })
        }
    }

    if(projects.length == 0) return

    return projects
}