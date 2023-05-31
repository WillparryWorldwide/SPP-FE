import { useState } from "react";
import AxiosClient from "../Helper/axiosClient";
// import { useAuthUser } from "react-auth-kit";


const useGetProject = () => {
  // const url = process.env.REACT_APP_BASE_URL;
  // const userData = useAuthUser();
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [hostUrl, setHostUrl] = useState('');
  const axios = AxiosClient();

  const fetchProject = (id) => {
    setLoading(true)
    axios.get('/project/milestone/populate-only/'+ id,).then((res) => {
      setData(res.data.data.result)
      setHostUrl(res.config.baseURL.slice(0,res.config.baseURL.search("api/")));
      setLoading(false)
      return true
    }).catch(error => {
      // handle error
      console.log(error);
    });
  }

  return { fetchProject, data, loading, hostUrl }
}

export default useGetProject
