import axios from "axios";
import { useState } from "react";
import { useAuthUser } from "react-auth-kit";


const useGetAllProject = () => {
  // const url = process.env.REACT_APP_BASE_URL;
  const userData = useAuthUser();
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchProject = (filter) => {
    setLoading(true)
    axios.get(process.env.REACT_APP_BASE_URL + '/project/all?q=' + filter, {
      // cancelToken: source.token,
      headers: {
        "Authorization": `Bearer ${userData()?.token}`
      }
    }).then((res) => {
      setData(res.data.data.result)
      // if (res.headers.authorization) {
      //   getAuthHeader(res.headers.authorization)
      // }
      setLoading(false)
      return true
    }).catch(error => {
      // handle error
      console.log(error);
    });
  }

  return { fetchProject, data, loading }
}

export default useGetAllProject
