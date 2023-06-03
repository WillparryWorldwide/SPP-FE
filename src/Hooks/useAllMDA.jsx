import { useState } from "react";
import AxiosClient from "../Helper/axiosClient";

const useAllMDA = () => {
	// const url = process.env.REACT_APP_BASE_URL;
	const axios = AxiosClient();
	const [mdas, setData] = useState([]);
	const [loadingMdas, setLoading] = useState(false);

	const fetchMdas = () => {
		setLoading(true);
		axios.get("/mda/all").then((res) => {
			setData(res.data.data.result);
			setLoading(false);
			return true;
		}).catch(error => {
			// handle error
			console.log(error);
		});
	}

	return { fetchMdas, mdas, loadingMdas }
}

export default useAllMDA;
