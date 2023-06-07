import { useState } from "react";
import AxiosClient from "../Helper/axiosClient";
// import { useAuthUser } from "react-auth-kit";


const useSearchProject = () => {
	// const url = process.env.REACT_APP_BASE_URL;
	// const userData = useAuthUser();
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const [hostUrl, setHostUrl] = useState('');
	const axios = AxiosClient();

	const searchProject = (filter) => {
		setLoading(true)
		axios.get('/resource/search?q=' + filter, {timeout: 7000}).then((res) => {
			console.log(res.data.data.result)
			setData(res.data.data.result.project.items);
			setHostUrl(res.config.baseURL.slice(0, res.config.baseURL.search("api/")));
			setLoading(false)
			return true
		}).catch(error => {
			// handle error
			setLoading(false);
			console.log("Error:", error);
		});
	}

	return { searchProject, data, loading, hostUrl }
}

export default useSearchProject
