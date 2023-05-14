import AxiosClient from "../Helper/axiosClient";

const axios = AxiosClient();

const useGetAllProject = (callback) => {
    axios.get('https://spp-api.willparry.org/api/spp/project/all').then((res) => {
      callback(null, {
        data: res.data.data.result,
        host: res.config.baseURL.slice(0,res.config.baseURL.search("api"))
        });
    }).catch(error => {
      // handle error
      console.log(error);
      callback(error, null);
    });
}

export default useGetAllProject
