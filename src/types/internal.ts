import { L1ChainFromAPI, L2SolutionFromAPI, ProjectFromAPI } from "./external";

export interface L1Chain extends Omit<L1ChainFromAPI, 'solutions'> {
    solutions?: L2Solution[]
}

export interface L2Solution extends Omit<L2SolutionFromAPI, 'projects'> {
    projects?: Project[]
    id: string
}

export interface Project extends ProjectFromAPI {
    id: string
}