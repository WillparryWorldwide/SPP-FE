import { useState } from "react";
import AxiosClient from "../Helper/axiosClient";

const useAllUpdateHistory = () => {
	// const url = process.env.REACT_APP_BASE_URL;
	const axios = AxiosClient();
	const [updateHistory, setData] = useState([]);
	const [loadingUpdateHistory, setLoading] = useState(false);

	const fetchUpdateHistory = () => {
		setLoading(true);
		axios.get("/history/all").then((res) => {
			setData(res.data.data.result);
			setLoading(false);
			return true;
		}).catch(error => {
			// handle error
			console.log(error);
		});
	}

	return { fetchUpdateHistory, updateHistory, loadingUpdateHistory }
}

export default useAllUpdateHistory;