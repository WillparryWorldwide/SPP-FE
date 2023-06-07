import { useState } from "react";
import AxiosClient from "../Helper/axiosClient";

const useUpdateProject = () => {
	const axios = AxiosClient();
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);

	const upDAteProject = async (_id, data) => {
		setLoading(true);
		axios.patch('/project/update/' + _id, data).then(async (res) => {
			setData(res)
			setLoading(false)
			return res
		}).catch(error => {
			// handle error
			console.log(error);
		});
	}

	return { upDAteProject, data, loading }
}

export default useUpdateProject
