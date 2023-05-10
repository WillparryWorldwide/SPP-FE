import axios from "axios";
import { useState } from "react";
import { useAuthUser } from "react-auth-kit";

const useGetAllContractors = () => {
    // const url = process.env.REACT_APP_BASE_URL;
    const [data, setData] = useState([]);
    const userData = useAuthUser();
    const [loading, setLoading] = useState(false);

    const fetchContractors = () => {
        setLoading(true);
        axios.get(process.env.REACT_APP_BASE_URL + "/admin/all-spp/contractor", {
            // cancelToken: source.token,
            headers: {
                "Authorization": `Bearer ${userData()?.token}`
            }
        }).then((res) => {
            setData(res.data.data.result);
            setLoading(false);
            return true
        }).catch(error => {
            // handle error
            console.log(error);
        });
    }

    return { fetchContractors, data, loading }
}

export default useGetAllContractors;
