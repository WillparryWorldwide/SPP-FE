import { useState } from "react";
import AxiosClient from "../Helper/axiosClient";

const useAllSectorsChartData = () => {
	const axios = AxiosClient();
	const [sectorsChartData, setData] = useState({});
	const [loadingSectorsChartData, setLoading] = useState(false);

	const fetchSectorsChartData = () => {
		setLoading(true);
		axios.get("/resource/chart-sector").then((res) => {
			setData(res.data.result);
			setLoading(false);
			return true;
		}).catch(error => {
			// handle error
			console.log(error);
		});
	}

	return { fetchSectorsChartData, sectorsChartData, loadingSectorsChartData }
}

export default useAllSectorsChartData;