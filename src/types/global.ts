import { Phantom } from "./external"

export {}

declare global {
    interface Window {
        phantom?: Phantom
    }
}