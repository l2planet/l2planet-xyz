import { Phantom } from "./constants"

export {}

declare global {
    interface Window {
        phantom?: Phantom
    }
}