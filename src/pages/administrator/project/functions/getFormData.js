export default function getFormData(milestones, durationRef, titleRef, stateRef, mdaRef, sppCodeRef, locationRef, totalRef, categoryRef, sectorRef, lgaRef, awardDateRef, fundingRef, descriptionRef) {
    const file = document.getElementById("file");
    const myFormData = new FormData();

    console.log("okkk", milestones,  JSON.stringify(milestones));
    console.log("what", file.files);
    myFormData.append("duration", durationRef.current.value);
    myFormData.append("name", titleRef.current.value);
    myFormData.append("state", stateRef.current.value);
    myFormData.append("mda_code", mdaRef.current.value);
    myFormData.append("spp_code", sppCodeRef.current.value);
    myFormData.append("location", locationRef.current.value);
    myFormData.append("grand_total", totalRef.current.value);
    myFormData.append("category", categoryRef.current.value);
    myFormData.append("sector_code", sectorRef.current.value);
    myFormData.append("local_goverment", lgaRef.current.value);
    myFormData.append("milestones", JSON.stringify(milestones));
    myFormData.append("date_awarded", awardDateRef.current.value);
    myFormData.append("funding_amount", fundingRef.current.value);
    myFormData.append("description", descriptionRef.current.value);
    Object.values(file.files).forEach((f, index) => myFormData.append("images", file.files[index]));
    return myFormData;
}
