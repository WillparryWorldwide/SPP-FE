import { useState } from "react";
import AxiosClient from "../Helper/axiosClient";

const useAllLGAChartData = () => {
	const axios = AxiosClient();
	const [LGAChartData, setData] = useState({});
	const [loadingLGAChartData, setLoading] = useState(false);

	const fetchLGAChartData = () => {
		setLoading(true);
		axios.get("/resource/chart-lga").then((res) => {
			setData(res.data.result);
			setLoading(false);
			return true;
		}).catch(error => {
			// handle error
			console.log(error);
		});
	}

	return { fetchLGAChartData, LGAChartData, loadingLGAChartData }
}

export default useAllLGAChartData;