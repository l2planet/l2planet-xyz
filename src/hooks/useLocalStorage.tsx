import { useEffect, useRef, useState } from "react";

export function useLocalStorage<T>(key : string, defaultValue: T) {
    const state = useState<T>(() => {
        try {
            const item = localStorage.getItem(key)
            if(item !== null) {
                return JSON.parse(item) as T
            } else {
                return defaultValue
            }
        } catch {
            return defaultValue
        }
    })

    const value = state[0]

    const isFirstRender = useRef(true)
    useEffect(() => {
        if(isFirstRender.current) {
            isFirstRender.current = false
            return
        }
        try {
            if(value === null) {
                localStorage.removeItem(key)
            } else {
                localStorage.setItem(key, JSON.stringify(value))
            }
        } catch {}
    }, [value, key])

    return state
}