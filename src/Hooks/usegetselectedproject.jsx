import { useState } from "react";
import AxiosClient from "../Helper/axiosClient";
// import { useAuthUser } from "react-auth-kit";


const useGetSelectedProject = () => {
  // const url = process.env.REACT_APP_BASE_URL;
  // const userData = useAuthUser();
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [hostUrl, setHostUrl] = useState('');
  const axios = AxiosClient();

  const fetchSelectedProject = (filterproperty, filter) => {
    setLoading(true)
    console.log(`/project/all?${filterproperty}=${filter}`)
    axios.get(`/project/all?${filterproperty}=${filter}`).then((res) => {
      console.log(res)
      setData(res.data.result)
      setHostUrl(res.config.baseURL.slice(0,res.config.baseURL.search("api/")));
      setLoading(false)
      return true
    }).catch(error => {
      // handle error
      console.log(error);
    });
  }

  return { fetchSelectedProject, data, loading, hostUrl }
}

export default useGetSelectedProject
