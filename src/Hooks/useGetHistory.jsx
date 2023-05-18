import { useState } from "react";
import AxiosClient from "../Helper/axiosClient";
// import { useAuthUser } from "react-auth-kit";


const useGetHistory = () => {
  // const url = process.env.REACT_APP_BASE_URL;
  // const userData = useAuthUser();
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [hostUrl, setHostUrl] = useState('');
  const axios = AxiosClient();

  const fetchAllHistory = (id) => {
    const link = id === '' || !id? "/history/all": "/history/original/" + id;

    setLoading(true);
    axios.get(link).then((res) => {
      setData(res.data.data.result);
      console.log("ts", res, link);
      setHostUrl(res.config.baseURL.slice(0,res.config.baseURL.search("api/")));
      setLoading(false)
      return true
    }).catch(error => {
      // handle error
      console.log(error);
    });
  }

  return { fetchAllHistory, data, loading, hostUrl };
}

export default useGetHistory;