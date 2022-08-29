import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { DataFromAPI, L1ChainFromAPI } from "../types/external";

interface ApiContextState {
    data: DataFromAPI | null
}

// The Context
const ApiContext = createContext({} as ApiContextState)


// Hook to use the context
export const useApi = () => useContext(ApiContext)


// Component to provider the context
export const ApiProvider = ({ children }: { children: ReactNode }) => {
    // We cache it using localStorage to speed up page loading
    const [data, setData] = useState<DataFromAPI | null>(null)

    // When the page is rendered, request data from API, and set `data` state value
    useEffect(() => {
        setData(
            require('../jsons/chains.json') as DataFromAPI
        )
    }, [])

    return (
        <ApiContext.Provider value={{
            data,
        }}>
            {children}
        </ApiContext.Provider>
    )
}