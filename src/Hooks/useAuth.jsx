import { useDebugValue } from "react";
import { useAuthContext } from "../context/AuthContext";

const useAuth = () => {
    const { auth } = useAuthContext();
    useDebugValue(auth, auth => auth?.user ? "Logged In" : "Logged Out")
    return useAuthContext();
}

export default useAuth;