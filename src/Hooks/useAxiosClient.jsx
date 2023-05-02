import { useEffect } from "react";
import { useAppContext } from '../context/AppContext'
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";
import AxiosClient from "../Helper/axiosClient";

const useAxiosClient = () => {
    // const { updateLoginModalStatus } = useAppContext()
    // const refresh = useRefreshToken();
    // const { auth } = useAuth();

    // useEffect(() => {

    //     const requestIntercept = AxiosClient.interceptors.request.use(
    //         config => {
    //             if (!config.headers['Authorization']) {
    //                 config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
    //             }
    //             return config;
    //         }, (error) => Promise.reject(error)
    //     );

    //     const responseIntercept = AxiosClient.interceptors.response.use(
    //         response => response,
    //         async (error) => {
    //             const prevRequest = error?.config;
    //             if (error?.response?.status === 403 && !prevRequest?.sent) {
    //                 prevRequest.sent = true;
    //                 const newAccessToken = await refresh();
    //                 prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
    //                 return AxiosClient(prevRequest);
    //             } else if (error?.response?.status === 401) {
    //                 updateLoginModalStatus(true)
    //                 window.toastr.warning(error.response.data.message)
    //             }
    //             return Promise.reject(error);
    //         }
    //     );

    //     return () => {
    //         AxiosClient.interceptors.request.eject(requestIntercept);
    //         AxiosClient.interceptors.response.eject(responseIntercept);
    //     }
    // }, [auth, refresh])

    // return AxiosClient;
}

export default useAxiosClient;