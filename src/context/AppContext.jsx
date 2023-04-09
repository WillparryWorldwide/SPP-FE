import { createContext, useContext } from "react";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {

    const INITIALVALUES = {
        site_name: 'SPP APP'
    }
    
    return (
        <AppContext.Provider value={INITIALVALUES}>
            { children }
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}