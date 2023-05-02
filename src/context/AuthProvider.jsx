import { createContext, useEffect, useState } from "react";
import Cookies from 'js-cookie'
import { useAuthUser } from 'react-auth-kit'

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const user = useAuthUser()

    useEffect(() => {
        if (user()) {
            setAuth(user())
        }
    }, [user])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;