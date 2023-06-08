import { useState } from "react";
import AxiosClient from "../Helper/axiosClient";

const useUpdateProject = () => {
	const axios = AxiosClient();
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);

	const upDAteProject = async (_id, data) => {
		setLoading(true);
		axios.patch('/project/update/' + _id, data).then(async (res) => {
			setData(res.data.data.result);
			setLoading(false);
			window.toastr.success(res.data.data.message);
		}).catch(error => {
			// handle error
			console.log(error);
			window.toastr.error(error?.response ? error.response.data.message : error.message);
			setLoading(false);
		});
	}

	return { upDAteProject, data, loading }
}

export default useUpdateProject
