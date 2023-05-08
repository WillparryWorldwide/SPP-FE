import axios from "axios";
import { useState } from "react";
import useGetAllProject from "./usegetallproject";


const useUpdateProject = () => {
    const url = process.env.REACT_APP_BASE_URL
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const { fetchProject } = useGetAllProject()

    const upDAteProject = async ( _id, data, prevData) => {
      setLoading(true)
      console.log( {... prevData, rComment_name:data.name, rComment_description:data.description} )
      axios.patch(url + '/project/update/' + _id , { rComment_name:data.name, rComment_description:data.description}, {
        // cancelToken: source.token,
        headers: {
          'Content-Type': 'application/json',
          "Authorization": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNwcHEwQHdpbGxwYXJyeS5vcmciLCJ1c2VySWQiOiI2NDUwMTBjN2U1MTAyOGEzYmJmMDg3OGUiLCJpYXQiOjE2ODM0MTE2OTgsImV4cCI6MTc2MTQxMTY5OH0.hmC3nt7Qs9MteCj3yFJ0K0XH8iMj886i2OxZaVwqdFs'
        } 
      }).then(async (res) => {
        console.log(res)
        setData(res)
        await fetchProject()
        setLoading(false)
        return res
      }).catch(error => {
        // handle error
        console.log(error);
      });
    }

  return { upDAteProject, data, loading }
}

export default useUpdateProject
