import { useState } from "react";
import AxiosClient from "../Helper/axiosClient";

const useUpdateMilestone = () => {
	const axios = AxiosClient();
	const [updatedMilestone, setData] = useState(null);
	const [isUpdatingMilestoneLoading, setLoading] = useState(false);

	const updateMilestone = async (_id, data) => {
		setLoading(true);
		axios.put("/milestone/update/" + _id, data).then(async (res) => {
			setData(res.data.result);
			setLoading(false);
			window.toastr.success(res.data.message);
		}).catch(error => {
			// handle error
			console.log(error);
			window.toastr.error(error?.response ? error.response.data.message : error.message);
		});
	}

	return { updateMilestone, updatedMilestone, isUpdatingMilestoneLoading }
}

export default useUpdateMilestone;