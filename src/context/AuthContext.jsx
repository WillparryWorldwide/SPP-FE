import { createContext, useContext, useState } from "react";
import Cookies from 'js-cookie'
import { useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    useEffect(() => {
        if (Cookies.get('authData')) {
            setAuth(JSON.parse(Cookies.get('authData')))
        }
    }, [])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext)
}