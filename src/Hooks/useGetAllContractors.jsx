import { useState } from "react";
import AxiosClient from "../Helper/axiosClient";

const useGetAllContractors = () => {
	// const url = process.env.REACT_APP_BASE_URL;
	const axios = AxiosClient();
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchContractors = () => {
		setLoading(true);
		axios.get("/admin/all-spp/contractor").then((res) => {
			setData(res.data.result);
			setLoading(false);
			return true;
		}).catch(error => {
			// handle error
			console.log(error);
		});
	}

	return { fetchContractors, data, loading }
}

export default useGetAllContractors;
