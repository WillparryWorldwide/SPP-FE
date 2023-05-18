export default function validateInput({sppCodeRef, mdaRef, sectorRef, submit, titleRef, categoryRef, durationRef, fundingRef, stateRef, lgaRef, awardDateRef, totalRef, descriptionRef, setBtnStatus, locationRef}) {
    if (sppCodeRef.current.value === "Select SPP") {
        sppCodeRef.current.focus()
        window.toastr.error("SPP Code is required")
        submit = !submit
    }else if (mdaRef.current.value === "Select MDA") {
        mdaRef.current.focus()
        window.toastr.error("SPP Code is required")
        submit = !submit
    } else if (sectorRef.current.value === "Select Sector") {
        sectorRef.current.focus()
        window.toastr.error("SPP Code is required")
        submit = !submit
    } else if (titleRef.current.value === '') {
        titleRef.current.focus()
        window.toastr.error("Project Title is required")
        submit = !submit
    } else if (categoryRef.current.value === '') {
        categoryRef.current.focus()
        window.toastr.error("Project Category is required")
        submit = !submit
    } else if (durationRef.current.value === '') {
        durationRef.current.focus()
        window.toastr.error("Duration is required")
        submit = !submit
    } else if (locationRef.current.value === '') {
        locationRef.current.focus()
        window.toastr.error("Location is required")
        submit = !submit
    } else if (fundingRef.current.value === '') {
        fundingRef.current.focus()
        window.toastr.error("Total is required")
        submit = !submit
    } else if (stateRef.current.value === '') {
        stateRef.current.focus()
        window.toastr.error("State is required")
        submit = !submit
    } else if (lgaRef.current.value === '') {
        lgaRef.current.focus()
        window.toastr.error("Local government is required")
        submit = !submit
    } else if (awardDateRef.current.value === '') {
        awardDateRef.current.focus()
        window.toastr.error("Award date is required")
        submit = !submit
    } else if (totalRef.current.value === '') {
        totalRef.current.focus()
        window.toastr.error("Amount is required")
        submit = !submit
    } else if (descriptionRef.current.value === '') {
        descriptionRef.current.focus()
        window.toastr.error("Project description is required")
        submit = !submit
    } else {
        // setBtnStatus(false)
    }
    return submit
}