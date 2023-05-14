import axios from "axios";
import { useState } from "react";
import { useAuthUser } from "react-auth-kit";


const useGetProject = () => {
  // const url = process.env.REACT_APP_BASE_URL;
  const userData = useAuthUser();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchProject = (id) => {
    setLoading(true)
    axios.get(process.env.REACT_APP_BASE_URL + "/project/only/" + id, {
      // cancelToken: source.token,
      headers: {
        "Authorization": `Bearer ${userData()?.token}`
      }
    }).then((res) => {
      console.log("setting data", data);
      setData(res.data.data.result);
      console.log("set data", data, res.data.data.result);
      setLoading(false);
      return true;
    }).catch(error => {
      // handle error
      console.log(error);
    });
  }

  return { fetchProject, data, loading };
}

export default useGetProject;
