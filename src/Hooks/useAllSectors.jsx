import { useState } from "react";
import AxiosClient from "../Helper/axiosClient";

const useAllSectors = () => {
	// const url = process.env.REACT_APP_BASE_URL;
	const axios = AxiosClient();
	const [sectors, setData] = useState([]);
	const [loadingSectors, setLoading] = useState(false);

	const fetchSectors = () => {
		setLoading(true);
		axios.get("/sector/all").then((res) => {
			setData(res.data.result);
			setLoading(false);
			return true;
		}).catch(error => {
			// handle error
			console.log(error);
		});
	}

	return { fetchSectors, sectors, loadingSectors }
}

export default useAllSectors;