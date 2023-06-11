import { useState } from "react";
import AxiosClient from "../Helper/axiosClient";
// import { useAuthUser } from "react-auth-kit";


const useProjectMilestone = () => {
	// const url = process.env.REACT_APP_BASE_URL;
	// const userData = useAuthUser();
	const [pMilestone, setData] = useState([]);
	const [loadingPMilestone, setLoading] = useState(false)
	const axios = AxiosClient();

	const fetchProjectMilestone = (id, query = '') => {
		setLoading(true)
		axios.get('milestone/project/' + id + query).then((res) => {
			setData(res.data.result)
			setLoading(false)
		}).catch(error => {
			// handle error
			console.log(error);
		});
	}

	return { fetchProjectMilestone, pMilestone, loadingPMilestone }
}

export default useProjectMilestone
