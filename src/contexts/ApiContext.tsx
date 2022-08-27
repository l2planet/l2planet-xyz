import { createContext, ReactNode, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ApiData } from "../types/constants";

interface ApiContextState {
    data?: ApiData
}

// The Context
const ApiContext = createContext({} as ApiContextState)


// Hook to use the context
export const useApi = () => useContext(ApiContext)


// Component to provider the context
export const ApiProvider = ({ children }: { children: ReactNode }) => {
    // We cache it using localStorage to speed up page loading
    const [apiData, setApiData] = useLocalStorage<ApiData | undefined>('apiData', undefined)

    // When the page is rendered, request data from API, and set apiData value
    useEffect(() => {
        const data = require('../jsons/chains.json') as ApiData
        setApiData(data)
    }, [setApiData])

    return (
        <ApiContext.Provider value={{
            data: apiData
        }}>
            {children}
        </ApiContext.Provider>
    )
}