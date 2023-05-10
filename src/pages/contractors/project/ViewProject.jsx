import moment from "moment/moment";
import { useParams } from "react-router-dom";
import getFormData from "./functions/getFormData";
import React, { useEffect, useState } from "react";
import FormInput from "../../../components/FormInput";
import AxiosClient from "../../../Helper/axiosClient";
import validateInput from "./functions/validateInput";
import FormTextArea from "../../../components/FormTextArea";
import PrimaryButton from "../../../components/PrimaryButton";
import ContentHeader from "../../../components/ContentHeader";

const ViewProject = () => {
    const params = useParams();
    const axios = AxiosClient();
    const [imageText, setImageText] = useState("");
    const [project, setProject] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [editedMilestone, setEditedMilestone] = useState(0);
    const [sectors, setSectors] = useState([]);
    const [mdas, setMdas] = useState([]);
    const [contractors, setContractors] = useState([]);
    const [btnStatus, setBtnStatus] = useState(false);
    const initialInput = {
        totalRef: { focus: () => { }, value: project.grand_total },
        lgaRef: { focus: () => { }, value: project.local_goverment },
        mdaRef: { focus: () => { }, value: project.mda_code },
        fundingRef: { focus: () => { }, value: project.funding_amount },
        titleRef: { focus: () => { }, value: project.name },
        stateRef: { focus: () => { }, value: project.state },
        sectorRef: { focus: () => { }, value: project.sector_code },
        locationRef: { focus: () => { }, value: project.location },
        durationRef: { focus: () => { }, value: project.duration },
        categoryRef: { focus: () => { }, value: project.category },
        awardDateRef: { focus: () => { }, value: project.date_awarded },
        descriptionRef: { focus: () => { }, value: project.description },
        sppCodeRef: { focus: () => { }, value: project.spp_code }
    }
    // inputs
    const [inputData, setInputData] = useState(initialInput);
    const milestoneText = {
        preliminaries_sum: "Preliminary Sum",
        provisional_sums: "Provisional Sum",
        measured_work: "Measured Work"
    }

    const initialMilestone = {
        preliminaries_sum: [{ id: 1, rate: '', amount: '', date: '', description: '', quantity: '' }],
        provisional_sums: [{ id: 1, rate: '', amount: '', date: '', description: '', quantity: '' }],
        measured_work: [{ id: 1, rate: '', amount: '', date: '', description: '', quantity: '' }]
    }

    const [milestones, setMileStones] = useState([]);

    // function
    const handelInputChange = (e) => {
        let { name, value, focus } = e.target;
        let innerHtml = '';

        if (e.target.TagName === "SELECT") innerHtml = e.target?.selectedOptions[0]?.innerHTML;

        setInputData(prev => {
            if(name === "fundingRef") {

                console.log("vv", value);
                console.log("fff", prev.fundingRef.value);
                prev.fundingRef.value.push(value);
                console.log("gggg", prev.fundingRef.value);
                return prev;
            }
            return {
                ...prev,
                [name]: { focus, value, innerHtml }
            }
        });
    }

    // function
    const handleAddMilestone = (e) => {
        // e.preventDefault();
        const newMilestone = initialMilestone;

        setMileStones(prev => {
            console.log("what is pre", prev);
            return [...prev, newMilestone];
        });
    };

    // function
    const handelMilestoneChange = (e) => {
        const k = e.target.parentElement;
        const val = e.target.value;
        const milestoneIndex = k.dataset.milestoneIndex;
        const milestoneItem = k.dataset.milestoneItem;
        const itemIndex = k.dataset.itemIndex;
        const item = k.dataset.item;

        setMileStones(preVal => {
            preVal[milestoneIndex][milestoneItem][itemIndex][item] = val;
            return preVal;
        });
        setEditedMilestone(preVal => preVal + 1);
    }

    // function
    const handleAddMileStoneItem = (e) => {
        const k = e.target;
        const milestoneIndex = k.dataset.milestoneIndex;
        const milestoneItem = k.dataset.milestoneItem;
        const newPreliminary = { id: 1, rate: 65, amount: 76, date: "2023-05-18", description: "Lol", quantity: 1862 };

        // setMileStones(milestones);
        setMileStones(preVal => {
            console.log("what is it here", preVal);
            preVal[milestoneIndex][milestoneItem].push(newPreliminary);
            console.log("what is it here 1", preVal);
            return preVal; 
        });
        // hideAddButtons();
        // setEditedMilestone(preVal => preVal + 1);
    }

    // function
    const handleRemoveMilestone = (e) => {
        const k = e.target;
        const milestoneIndex = k.dataset.milestoneIndex;
        const milestoneItem = k.dataset.milestoneItem;
        const itemIndex = k.dataset.itemIndex;

        milestones[milestoneIndex][milestoneItem].length > 1 && milestones[milestoneIndex][milestoneItem].splice(itemIndex, 1);
        setMileStones(milestones);
        setEditedMilestone(preVal => preVal + 1);
    };

    useEffect(() => {
        setIsLoading(true);
        const updateGrandTotal = () => {
            let total = 0;
            milestones.forEach(milestoneItem => {
                Object.keys(milestoneItem).forEach(item => {
                    if (item === "_id") return;
                    if (item === "id") return;
                    milestoneItem[item].forEach(item => {
                        total += Number(item.amount);
                    });
                });
            });
            setInputData(prev => {
                return {
                    ...prev,
                    totalRef: total
                }
            });
        }

        const fetchProject = () => {
            axios.get("/project/milestone/populate-only/" + params.id).then((res) => {
                setProject(res.data.data.result);
                setInputData(initialInput);
                setMileStones(res.data.data.result.milestones);
                setIsLoading(false);
            }).catch(error => {
                // handle error
                console.error("Error", error);
                window.toastr.error("Failed to get project");
                if (error?.response) window.toastr.error(error.response.data.message);
            });
        }

        const fetchSectors = () => {
            axios.get('/sector/all').then(({ data }) => {
                setSectors(data.data.result)
            }).catch(error => {
                // handle error
                console.error("Error", error);
                window.toastr.error("Failed to get Sector");
                if (error?.response) window.toastr.error(error.response.data.message);
            });
        }

        const fetchMdas = () => {
            axios.get('/mda/all').then(({ data }) => {
                setMdas(data.data.result)
            }).catch(error => {
                // handle error
                console.error("Error", error);
                window.toastr.error("Failed to get MDA");
                if (error?.response) window.toastr.error(error.response.data.message);
            })
        }

        const fetchContractors = async () => {
            await axios.get('/admin/all-spp/q?role=contractor').then(({ data }) => {
                setContractors(data.data.result)
            }).catch(error => {
                // handle error
                console.error("Error", error);
                window.toastr.error("Failed to get Contractor");
                if (error?.response) window.toastr.error(error.response.data.message);
            });
        }

        fetchMdas();

        fetchProject();

        fetchSectors();

        hideAddButtons();

        fetchContractors();

        updateGrandTotal();

        console.log("Rending...");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editedMilestone, params.id, project._id]);

    const hideAddButtons = () => {
        const btns = document.querySelectorAll('.addBtn');
        for (let b = 0; b < btns.length; b++) {
            if (!btns[b].classList.contains('0-0')) {
                btns[b].classList.add('d-none')
            }
        }
    }

    const create = () => {
        let submit = true;

        submit = validateInput({ submit, setBtnStatus, inputData });

        let stopValidation = false;
        // check if milestone items are  stil empty
        milestones.forEach((milestoneItem, milestoneIndex) => {
            if (stopValidation) return
            Object.keys(milestoneItem).forEach((keys) => {
                if (stopValidation) return
                if (keys === "id") return;
                milestoneItem[keys].forEach((item, itemIndex) => {
                    if (stopValidation) return
                    Object.keys(item).forEach(iKey => {
                        if (stopValidation) return
                        if (iKey === "id") return;
                        if (item[iKey] === '') {
                            submit = !submit;
                            stopValidation = !stopValidation;
                            window.toastr.error(`Milestone ${milestoneIndex + 1} ${keys} ${itemIndex + 1} ${iKey} is required`);
                            return document.querySelector(`.milestone-${milestoneIndex}-${keys}-${itemIndex}-${iKey}`).focus();
                        }
                    });
                });
            });
        });

        // if false do not create project
        if (!submit) return;
        // upload
        const myFormData = getFormData(milestones, inputData);

        axios.patch("/project/update/" + params.id, myFormData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(({ data }) => {
            setBtnStatus(true);
            document.querySelector('#project').reset()
            window.toastr.success(data.data.message)
        }).catch(({ response }) => {
            setBtnStatus(false);
            window.toastr.error(response.data.data.message)
        })
    }

    return (
        <>
            <ContentHeader title="View Project" />
            <section className="content">
                <div className="container-fluid">
                    <div className="card">
                        <div className='container'>
                            {
                                !isLoading && project ?
                                    <form id="project" encType="multipart/form-data">
                                        <div className='row'>
                                            <FormInput className="col-12 form-group mt-3" label="Title" value={inputData.titleRef.value} name={"titleRef"} onChange={handelInputChange} placeholder={inputData.titleRef.value ? inputData.titleRef.value : "Project Title"} />
                                            <div className='col-6 col-md-4 form-group mt-3'>
                                                <label>Select SPP</label>
                                                <select name={"sppCodeRef"} onChange={handelInputChange} className='form-control'>
                                                    <option defaultValue value={inputData.sppCodeRef.value}>{inputData.sppCodeRef.innerHTML || "Change SPP"}</option>
                                                    {contractors.length && contractors.map(contractor => <option key={contractor._id} value={contractor._id}>{contractor.SPP_name}</option>)}
                                                </select>
                                            </div>
                                            <div className='col-6 col-md-4 form-group mt-3'>
                                                <label>Select Sector</label>
                                                <select value={inputData.sectorRef.value} name={"sectorRef"} onChange={handelInputChange} className='form-control'>
                                                    <option defaultValue value={inputData.sectorRef.value}>{inputData.sectorRef.innerHTML || "Change Sector"}</option>
                                                    {sectors.length && sectors.map(sector => <option key={sector._id} value={sector._id}>{sector.name}</option>)}
                                                </select>
                                            </div>
                                            <div className='col-6 col-md-4 form-group mt-3'>
                                                <label>Select MDA</label>
                                                <select value={inputData.mdaRef.value} name={"mdaRef"} onChange={handelInputChange} className='form-control'>
                                                    <option defaultValue value={inputData.mdaRef.value}>{inputData.mdaRef.innerHTML || "Change MDA"}</option>
                                                    {mdas.length && mdas.map(mda => <option key={mda._id} value={mda._id}>{mda.name}</option>)}
                                                </select>
                                            </div>
                                            <FormInput className="col-6 form-group mt-3" label="Duration" type="date" value={moment(inputData.durationRef.value).format("YYYY-MM-DD")} name={"durationRef"} onChange={handelInputChange} placeholder={inputData.durationRef.value ? moment(inputData.durationRef.value).format("YYYY-MM-DD") : "When will it finish"} />
                                            <FormInput className="col-6 form-group mt-3" label="Date Awarded" type="date" value={moment(inputData.awardDateRef.value).format("YYYY-MM-DD")} name={"awardDateRef"} onChange={handelInputChange} placeholder={inputData.awardDateRef.value ? moment(inputData.awardDateRef.value).format("YYYY-MM-DD") : "Date Awarded"} />
                                            <FormInput className="col-6 form-group mt-3" label="Category" value={inputData.categoryRef.value} name={"categoryRef"} onChange={handelInputChange} placeholder={inputData.categoryRef.value ? inputData.categoryRef.value : "Enter Category"} />
                                            <div className='col-6 col-md-4 form-group mt-3'>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <select className='form-control'>
                                                            <option defaultValue>All Funding</option>
                                                            {inputData.fundingRef.value?.length && inputData.fundingRef.value.map((ff, index) => <option key={index}>{ff}</option>)}
                                                        </select>
                                                    </div>
                                                    <div className="col-12">
                                                        <FormInput className="" label="Add New Funding" type="number" value={inputData.fundingRef.value && inputData.fundingRef.value[inputData.fundingRef.value.length - 1]} name={"fundingRef"} onChange={handelInputChange} placeholder={inputData.fundingRef.value ? inputData.fundingRef.value[inputData.fundingRef.value.length - 1] : "Funding Amount"} />
                                                    </div>
                                                </div>
                                            </div>
                                            <FormInput className="col-6 form-group mt-3" label="State" value={inputData.stateRef.value} name={"stateRef"} onChange={handelInputChange} placeholder={inputData.stateRef.value ? inputData.stateRef.value : "Enter State"} />
                                            <FormInput className="col-6 form-group mt-3" label="LGA" value={inputData.lgaRef.value} name={"lgaRef"} onChange={handelInputChange} placeholder={inputData.titleRef.value ? inputData.titleRef.value : "Local Government Area"} />
                                            <FormInput className="col-6 form-group mt-3" label="Location" value={inputData.locationRef.value} name={"locationRef"} onChange={handelInputChange} placeholder={inputData.titleRef.value ? inputData.titleRef.value : "Enter the location for the project"} />
                                            <div className='form-group mt-3 col-12 col-md-6'>
                                                <label htmlFor='file'>Project Thumbnail</label>
                                                <div className='input-group'>
                                                    <div className="custom-file">
                                                        <input className="custom-file-input" multiple onChange={(e) => setImageText(e.target.files[0].name)} type='file' id="file" />
                                                        <label className="custom-file-label" htmlFor="file">{imageText || "Upload Project Thumbnail"}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <FormInput className="col-6 form-group mt-3" label="Grand Total" value={inputData.totalRef.value} name={"totalRef"} onChange={handelInputChange} placeholder="Amount" type="number" readonly />
                                            <div className='col-12 mt-3'>
                                                <PrimaryButton className='btn btn-primary btn-sm float-right pull-right mr-0' onClick={handleAddMilestone} type="button" title='Add Milestone' />
                                            </div>
                                            {milestones?.length && milestones.map((milestone, index) => (
                                                <div key={index}>
                                                    <h3 className='col-7'>Milestone {index + 1}</h3>
                                                    <div className='d-flex col-12'>
                                                        <div>
                                                            {
                                                                Object.keys(milestone).map(key => {
                                                                    if (key === "_id") return null;
                                                                    return milestone[key].map((items, mIndex, mArr) => (
                                                                        <div key={key + '-' + mIndex} className="m-0 p-0">
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <h5 className="text-capitalize ml-3 mb-0">{milestoneText[key]} {mIndex + 1}</h5>
                                                                                <div>
                                                                                    {mIndex === 0 && <PrimaryButton type="button" className={`btn btn-primary btn-sm pull-right mr-1`} onClick={handleAddMileStoneItem} data-milestone-index={index} data-milestone-item={key} title='Add' />}
                                                                                    {mArr.length - 1 ? <PrimaryButton type="button" className={`btn btn-danger form-control-sm btn-sm ml-1 ${index}-${mIndex}`} onClick={handleRemoveMilestone} data-milestone-index={index} data-milestone-item={key} data-item-index={mIndex} title='Delete' /> : null}
                                                                                </div>
                                                                            </div>
                                                                            <div className={`${key} d-flex`}>
                                                                                <div className="row m-2">
                                                                                    <FormInput className="col-6 col-md-3 form-group" value={items.quantity} onChange={handelMilestoneChange} inputClass={`form-control form-control-sm milestone-${index}-${key}-${mIndex}-quantity`} data-milestone-index={index} data-milestone-item={key} data-item-index={mIndex} data-item="quantity" placeholder="Enter Quantity" type="number" />
                                                                                    <FormInput className="col-6 col-md-3 form-group" value={items.rate} onChange={handelMilestoneChange} inputClass={`form-control form-control-sm milestone-${index}-${key}-${mIndex}-rate`} data-milestone-index={index} data-milestone-item={key} data-item-index={mIndex} data-item="rate" placeholder="Enter Rate" type="number" />
                                                                                    <FormInput className="col-6 col-md-3 form-group" value={items.amount} onChange={handelMilestoneChange} inputClass={`amount form-control form-control-sm milestone-${index}-${key}-${mIndex}-amount`} data-milestone-index={index} data-milestone-item={key} data-item-index={mIndex} data-item="amount" placeholder="Enter Amount" type="number" />
                                                                                    <FormInput className="col-6 col-md-3 form-group" value={items.date} onChange={handelMilestoneChange} inputClass={`form-control form-control-sm milestone-${index}-${key}-${mIndex}-date`} data-milestone-index={index} data-milestone-item={key} data-item-index={mIndex} data-item="date" placeholder="Select date" type="date" />
                                                                                    <FormTextArea className="col-12 form-group" value={items.description} onChange={handelMilestoneChange} inputClass={`form-control form-control-sm milestone-${index}-${key}-${mIndex}-description`} data-milestone-index={index} data-milestone-item={key} data-item-index={mIndex} data-item="description" placeholder="Enter Description" type="text" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ));
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <textarea className='form-control' value={inputData.descriptionRef.value} name={"descriptionRef"} onChange={handelInputChange} placeholder='Project Description' rows={3}></textarea>
                                        <PrimaryButton type="button" title="Update" disabled={btnStatus} onClick={create} className="btn btn-primary btn-end btn-sm mb-3 mt-3" />
                                    </form>
                                    : <h4>Loading...</h4>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ViewProject;