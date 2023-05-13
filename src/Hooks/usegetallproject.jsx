import axios from "axios";
import { useState } from "react";
// import { useAuthUser } from "react-auth-kit";


const useGetAllProject = () => {
  // const url = process.env.REACT_APP_BASE_URL;
  // const userData = useAuthUser();
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [hostUrl, setHostUrl] = useState('');

  const fetchProject = (filter) => {
    setLoading(true)
    axios.get(process.env.REACT_APP_BASE_URL + '/project/all?q=' + filter, {
      // cancelToken: source.token,
      headers: {
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNwcEB3aWxscGFycnkub3JnIiwidXNlcklkIjoiNjQ1ZGUxMzMwZTYzZjBjYmExMGUxMjEwIiwiaWF0IjoxNjgzOTgxNDM3LCJleHAiOjE3NjE5ODE0Mzd9.z9tUASm9wDxeYZYj2GFlQZPt8Fw3mzMfqr7_EKEB92M`
      }
    }).then((res) => {
      setData(res.data.data.result)
      setHostUrl(res.config.baseURL.slice(0,res.config.baseURL.search("api")));
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

  return { fetchProject, data, loading, hostUrl }
}

export default useGetAllProject
