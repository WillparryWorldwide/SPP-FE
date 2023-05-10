import axios from "axios";
import { useState } from "react";


const useGetAllProject = () => {
    const url = process.env.REACT_APP_BASE_URL
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchProject = (filter) => {
      setLoading(true)
    axios.get(process.env.REACT_APP_BASE_URL + '/project/all?q=' + filter , {
        // cancelToken: source.token,
        headers: {
          // ...authHeader(),
          // "Content-Type": contentType
          'Content-Type': 'application/json',
          "Authorization": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNwcHEwQHdpbGxwYXJyeS5vcmciLCJ1c2VySWQiOiI2NDUwMTBjN2U1MTAyOGEzYmJmMDg3OGUiLCJpYXQiOjE2ODM0MTE2OTgsImV4cCI6MTc2MTQxMTY5OH0.hmC3nt7Qs9MteCj3yFJ0K0XH8iMj886i2OxZaVwqdFs'
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
