import { useState } from "react";
import AxiosClient from "../Helper/axiosClient";
// import { useAuthUser } from "react-auth-kit";

const useSearch = () => {
  // const url = process.env.REACT_APP_BASE_URL;
  // const userData = useAuthUser();
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const [hostUrl, setHostUrl] = useState('');
  const axios = AxiosClient();

  const searchResource = (query) => {
    setLoading(true)
    axios.get("/resource/search?q=" + query).then((res) => {
      setData(res.data.data.result);
      setHostUrl(res.config.baseURL.slice(0,res.config.baseURL.search("api/")));
      setLoading(false);
      return true
    }).catch(error => {
      // handle error
      setData({});
      console.log(error);
    });
  }

  return { searchResource, data, loading, hostUrl }
}

export default useSearch;