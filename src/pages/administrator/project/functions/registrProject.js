import validateInput from "./validateInput";

export default function registerProject(inputDetails, setSubmitBtnStatus, axios, milestones) {
	return (e) => {
		e.preventDefault();

		let submit = true;

		submit = validateInput({ submit, inputDetails });

		// if false do not create project
		if (!submit) return;

		// upload
		const myFormData = new FormData();
		const file = document.getElementById("file");

		Object.keys(inputDetails).forEach(key => myFormData.append(inputDetails[key].name, inputDetails[key].value));
		Object.values(file.files).forEach((f, index) => myFormData.append("images", file.files[index]));
		myFormData.append("milestones", JSON.stringify(milestones));

		setSubmitBtnStatus({
			active: true,
			text: "Loading..."
		});

		// submit project
		axios.post('/project/register', myFormData, {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		}).then(({ data }) => {
			// get project result
			window.toastr.success(data.message);
			setSubmitBtnStatus({
				active: false,
				text: "Register Project"
			});
			return data.result;
		}).catch((error) => {
			console.error("Error", error);
			setSubmitBtnStatus({
				active: false,
				text: "Try Again"
			});
			window.toastr.error(error?.response ? error.response.data.message : error.message);
		});
	};
}