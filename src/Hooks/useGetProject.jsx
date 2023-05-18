import axios from "axios";
import { useState } from "react";
import { useAuthUser } from "react-auth-kit";


const useGetProject = () => {
  // const url = process.env.REACT_APP_BASE_URL;
  const userData = useAuthUser();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [hostUrl, setHostUrl] = useState(false);

  const fetchProject = (id) => {
    setLoading(true)
    axios.get(process.env.REACT_APP_BASE_URL + "/project/milestone/populate-only/" + id, {
      // cancelToken: source.token,
      headers: {
        "Authorization": `Bearer ${userData()?.token}`
      }
    }).then((res) => {
      console.log("setting data", data);
      setData(res.data.data.result);
      console.log("heate is tint",  res.config?.baseURL? res.config.baseURL.slice(0,res.config.baseURL.search("api/")):
      res.config.url.slice(0,res.config.url.search("api/")));
      setHostUrl(
        res.config?.baseURL? res.config.baseURL.slice(0,res.config.baseURL.search("api/")):
        res.config.url.slice(0,res.config.url.search("api/"))
        );
      console.log("set data", data, res.data.data.result);
      setLoading(false);
      return true;
    }).catch(error => {
      // handle error
      console.log(error);
    });
  }

  return { fetchProject, data, loading, hostUrl };
}

export default useGetProject;
