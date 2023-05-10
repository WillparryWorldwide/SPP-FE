export default function validateInput({submit, setBtnStatus, inputData}) {
    if (inputData.sppCodeRef.value === "Select SPP") {
        inputData.sppCodeRef.focus();
        window.toastr.error("SPP Code is required");
        submit = !submit
    } else if (inputData.titleRef.value === '') {
        inputData.titleRef.focus();
        window.toastr.error("Project Title is required");
        submit = !submit
    } else if (inputData.categoryRef.value === '') {
        inputData.categoryRef.focus();
        window.toastr.error("Project Category is required");
        submit = !submit
    } else if (inputData.durationRef.value === '') {
        inputData.durationRef.focus();
        window.toastr.error("Duration is required");
        submit = !submit
    } else if (inputData.locationRef.value === '') {
        inputData.locationRef.focus();
        window.toastr.error("Location is required");
        submit = !submit
    } else if (inputData.fundingRef.value === '') {
        inputData.fundingRef.focus();
        window.toastr.error("Total is required");
        submit = !submit
    } else if (inputData.stateRef.value === '') {
        inputData.stateRef.focus();
        window.toastr.error("State is required");
        submit = !submit
    } else if (inputData.lgaRef.value === '') {
        inputData.lgaRef.focus();
        window.toastr.error("Local government is required");
        submit = !submit
    } else if (inputData.awardDateRef.value === '') {
        inputData.awardDateRef.focus();
        window.toastr.error("Award date is required");
        submit = !submit
    } else if (inputData.totalRef.value === '') {
        inputData.totalRef.focus();
        window.toastr.error("Amount is required");
        submit = !submit
    } else if (inputData.descriptionRef.value === '') {
        inputData.descriptionRef.focus();
        window.toastr.error("Project description is required");
        submit = !submit
    } else {
        setBtnStatus(false)
    }
    return submit
}