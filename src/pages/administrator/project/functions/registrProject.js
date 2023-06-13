import validateInput from "./validateInput";

export default function registerProject(inputDetails, setSubmitBtnStatus, axios, setMileStones, setEditedMilestone, milestones) {
	return (e) => {
		e.preventDefault();

		let submit = true;

		submit = validateInput({ submit, inputDetails });

		// if false do not create project
		if (!submit)
			return;

		// upload
		const myFormData = new FormData();
		const file = document.getElementById("file");

		Object.keys(inputDetails).forEach(key => myFormData.append(inputDetails[key].name, inputDetails[key].value));
		Object.values(file.files).forEach((f, index) => myFormData.append("images", file.files[index]));

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
			window.toastr.success(data.data.message);
			return data.result;
		}).then(res => {
			// set project id to milestones
			setMileStones(prev => {
				prev.forEach(m => {
					m.project = res._id;
					delete m.id;
				});
				return prev;
			});
			setEditedMilestone(pre => pre + 1);
		}).then(() => {
			// submit the milestone
			axios.post("/milestone/register", milestones).then(ress => {
				window.toastr.success(ress.data.data.message);
				window.document.querySelector("#project").reset();
				setSubmitBtnStatus({
					active: false,
					text: "Register Project"
				});
			}).catch((error) => {
				console.error("Error", error);
				setSubmitBtnStatus({
					active: false,
					text: "Try Again"
				});
				window.document.querySelector("#project").reset();
				window.toastr.error(error?.response ? error.response.data.message : error.message);
			});
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