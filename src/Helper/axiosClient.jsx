import axios from "axios";
import { useAuthUser } from "react-auth-kit";

const BASE_URL = `${process.env.REACT_APP_BASE_URL}`;
// const BASE_URL = "http://localhost:8080/api/spp";

const AxiosClient = () => {
  const userData = useAuthUser();
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userData()?.token}`,
    },
    // withCredentials: true
  });
};

export default AxiosClient;
