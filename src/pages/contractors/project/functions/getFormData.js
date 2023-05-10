export default function getFormData(milestones, inputData) {
    const file = document.getElementById("file");
    const myFormData = new FormData();

    console.log("okkk", milestones);
    console.log("what", file.files);
    myFormData.append("duration", inputData.durationRef.value);
    myFormData.append("name", inputData.titleRef.value);
    myFormData.append("state", inputData.stateRef.value);
    myFormData.append("mda_code", inputData.mdaRef.value);
    myFormData.append("spp_code", inputData.sppCodeRef.value);
    myFormData.append("location", inputData.locationRef.value);
    myFormData.append("grand_total", inputData.totalRef.value);
    myFormData.append("category", inputData.categoryRef.value);
    myFormData.append("sector_code", inputData.sectorRef.value);
    myFormData.append("local_goverment", inputData.lgaRef.value);
    // myFormData.append("milestones", JSON.stringify(milestones));
    myFormData.append("date_awarded", inputData.awardDateRef.value);
    myFormData.append("funding_amount", inputData.fundingRef.value);
    myFormData.append("description", inputData.descriptionRef.value);
    Object.values(file.files).forEach((f, index) => myFormData.append("images", file.files[index]));
    return myFormData;
}
