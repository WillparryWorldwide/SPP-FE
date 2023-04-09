import { createContext, useState } from "react";
import Cookies from 'js-cookie'
import { useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    useEffect(() => {
        const authData = JSON.parse(Cookies.get('authData'))
        if (authData) {
            setAuth(authData)
        }
    }, [])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;