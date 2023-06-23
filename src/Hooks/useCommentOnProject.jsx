import { useState } from "react";
import AxiosClient from "../Helper/axiosClient";

const useCommentOnProject = () => {
	const axios = AxiosClient();
	const [commentedProject, setData] = useState(null);
	const [loadingCommentingOnProject, setLoading] = useState(false);

	const commentOnProject = async (_id, data) => {
		setLoading(true);
		axios.patch('/project/comment/' + _id, data).then(async (res) => {
			setData(res.data.result);
			setLoading(false);
			window.toastr.success(res.data.message);
		}).catch(error => {
			// handle error
			console.log(error);
			window.toastr.error(error?.response ? error.response.data.message : error.message);
			setLoading(false);
		});
	}

	return { commentOnProject, commentedProject, loadingCommentingOnProject }
}

export default useCommentOnProject
