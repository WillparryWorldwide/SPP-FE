export default function validateInput({submit, inputDetails}) {
	if (inputDetails.spp_code.value === "Select SPP") {
		inputDetails.spp_code.focus();
		window.toastr.error("SPP Code is required");
		submit = !submit
	} else if (inputDetails.name.value === '') {
		inputDetails.name.focus();
		window.toastr.error("Project Title is required");
		submit = !submit
	} else if (inputDetails.category.value === '') {
		inputDetails.category.focus();
		window.toastr.error("Project Category is required");
		submit = !submit
	} else if (inputDetails.duration.value === '') {
		inputDetails.duration.focus();
		window.toastr.error("Duration is required");
		submit = !submit
	} else if (inputDetails.location.value === '') {
		inputDetails.location.focus();
		window.toastr.error("Location is required");
		submit = !submit
	} else if (inputDetails.funding_amount.value === '') {
		inputDetails.funding_amount.focus();
		window.toastr.error("Total is required");
		submit = !submit
	} else if (inputDetails.state.value === '') {
		inputDetails.state.focus();
		window.toastr.error("State is required");
		submit = !submit
	} else if (inputDetails.local_goverment.value === '') {
		inputDetails.local_goverment.focus();
		window.toastr.error("Local government is required");
		submit = !submit
	} else if (inputDetails.date_awarded.value === '') {
		inputDetails.date_awarded.focus();
		window.toastr.error("Award date is required");
		submit = !submit
	} else if (inputDetails.grand_total.value === '') {
		inputDetails.grand_total.focus();
		window.toastr.error("Amount is required");
		submit = !submit
	} else if (inputDetails.description.value === '') {
		inputDetails.description.focus();
		window.toastr.error("Project description is required");
		submit = !submit
	}
    return submit
}