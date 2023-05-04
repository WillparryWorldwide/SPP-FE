import React, { useEffect, useRef, useState } from "react";
import ContentHeader from "../../../components/ContentHeader";
import FormInput from "../../../components/FormInput";
import PrimaryButton from "../../../components/PrimaryButton";
import AxiosClient from "../../../Helper/axiosClient";
import FormTextArea from "../../../components/FormTextArea";
import validateInput from "./functions/validateInput";
import getFormData from "./functions/getFormData";

const AddNew = () => {
    const axios = AxiosClient();
    const [imageText, setImageText] = useState("");
    const [editedMilestone, setEditedMilestone] = useState(0);
    const [sectors, setSectors] = useState([]);
    const [mdas, setMdas] = useState([]);
    const [grandTotal, setGrandTotal] = useState(0);
    // useRef
    const totalRef = useRef();
    const lgaRef = useRef();
    const mdaRef = useRef();
    const fundingRef = useRef();
    const titleRef = useRef();
    const stateRef = useRef();
    const sectorRef = useRef();
    const locationRef = useRef();
    const durationRef = useRef();
    const categoryRef = useRef();
    const descriptionRef = useRef();
    const sppCodeRef = useRef();
    const awardDateRef = useRef();
    const [btnStatus, setBtnStatus] = useState(false);
    const [contractors, setContractors] = useState([]);
    const milestoneText = {
        preliminary: "Preliminary Sum",
        provision: "Provisional Sum",
        measured: "Measured Work"
    }
    const [milestones, setMileStones] = useState([
        {
            id: 1,
            preliminary: [{ id: 1, rate: '', amount: '', date: '', description: '', quantity: '' }],
            provision: [{ id: 1, rate: '', amount: '', date: '', description: '', quantity: '' }],
            measured: [{ id: 1, rate: '', amount: '', date: '', description: '', quantity: '' }]
        }
    ]);

    // function
    const handleAddMilestone = (e) => {
        e.preventDefault();
        const newMilestone = {
            id: milestones.length + 1,
            preliminary: [{ id: 1, rate: '', amount: '', date: '', description: '', quantity: '' }],
            provision: [{ id: 1, rate: '', amount: '', date: '', description: '', quantity: '' }],
            measured: [{ id: 1, rate: '', amount: '', date: '', description: '', quantity: '' }]
        }

        setMileStones(prev => {
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

        milestones[milestoneIndex][milestoneItem].push(newPreliminary)
        setMileStones(milestones);
        hideAddButtons();
        setEditedMilestone(preVal => preVal + 1);
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
        const updateGrandTotal = () => {
            let total = 0;
            milestones.forEach(milestoneItem => {
                Object.keys(milestoneItem).forEach(item => {
                    if (item === "id") return;
                    milestoneItem[item].forEach(item => {
                        total += Number(item.amount);
                    });
                });
            });
            setGrandTotal(total);
        }

        const fetchSectors = () => {
            axios.get('/sector/all').then(({ data }) => {
                setSectors(data.data.result)
            }).catch(({ response }) => {
                console.log(response.data.message);
            })
        }

        const fetchMdas = () => {
            axios.get('/mda/all').then(({ data }) => {
                setMdas(data.data.result)
            }).catch(({ response }) => {
                console.log(response.data.message);
            })
        }

        const fetchContractors = async () => {
            await axios.get('/admin/all-spp/q?role=contractor').then(({ data }) => {
                setContractors(data.data.result)
            }).catch(({ response }) => {
                console.log(response.data);
            })
        }

        fetchMdas();
        fetchSectors();
        hideAddButtons();
        fetchContractors();
        updateGrandTotal();
        console.log("Rerendering...");
    }, [editedMilestone, milestones]);

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

        submit = validateInput({sppCodeRef, submit, titleRef, categoryRef, durationRef, fundingRef, stateRef, lgaRef, awardDateRef, totalRef, descriptionRef, setBtnStatus, locationRef})

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
        const myFormData = getFormData(milestones, durationRef, titleRef, stateRef, mdaRef, sppCodeRef, locationRef, totalRef, categoryRef, sectorRef, lgaRef, awardDateRef, fundingRef, descriptionRef);

        axios.post('/project/register', myFormData, {
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
            <ContentHeader title="Add New Project" />
            <section className="content">
                <div className="container-fluid">
                    <div className="card">
                        <div className='container'>
                            <form id="project" encType="multipart/form-data">
                                <div className='row'>
                                    <FormInput className="col-12 form-group mt-3" label="Title" ref={titleRef} placeholder="Project Title" />
                                    <div className='col-6 col-md-4 form-group mt-3'>
                                        <label>Select SPP</label>
                                        <select ref={sppCodeRef} className='form-control'>
                                            <option defaultValue>Select SPP</option>
                                            {contractors.map(contractor => <option key={contractor._id} value={contractor._id}>{contractor.SPP_name}</option>)}
                                        </select>
                                    </div>
                                    <div className='col-6 col-md-4 form-group mt-3'>
                                        <label>Select Sector</label>
                                        <select ref={sectorRef} className='form-control'>
                                            <option defaultValue>Select Sector</option>
                                            {sectors.map(sector => <option key={sector._id} value={sector._id}>{sector.name}</option>)}
                                        </select>
                                    </div>
                                    <div className='col-6 col-md-4 form-group mt-3'>
                                        <label>Select MDA</label>
                                        <select ref={mdaRef} className='form-control'>
                                            <option defaultValue>Select MDA</option>
                                            {mdas.map(mda => <option key={mda._id} value={mda._id}>{mda.name}</option>)}
                                        </select>
                                    </div>
                                    <FormInput className="col-6 form-group mt-3" label="Duration" type="date" ref={durationRef} placeholder="When will it finish" />
                                    <FormInput className="col-6 form-group mt-3" label="Date Awarded" type="date" ref={awardDateRef} placeholder="Date Awarded" />
                                    <FormInput className="col-6 form-group mt-3" label="Category" ref={categoryRef} placeholder="Enter Category" />
                                    <FormInput className="col-6 form-group mt-3" label="Funding" type="number" ref={fundingRef} placeholder="Funding Amount" />
                                    <FormInput className="col-6 form-group mt-3" label="State" ref={stateRef} placeholder="Enter State" />
                                    <FormInput className="col-6 form-group mt-3" label="LGA" ref={lgaRef} placeholder="Local Government Area" />
                                    <FormInput className="col-6 form-group mt-3" label="Location" ref={locationRef} placeholder="Enter the location for the project" />
                                    <div className='form-group mt-3 col-12 col-md-6'>
                                        <label htmlFor='file'>Project Thumbnail</label>
                                        <div className='input-group'>
                                            <div className="custom-file">
                                                <input className="custom-file-input" multiple onChange={(e) => setImageText(e.target.files[0].name)} type='file' id="file" />
                                                <label className="custom-file-label" htmlFor="file">{imageText || "Upload Project Thumbnail"}</label>
                                            </div>
                                        </div>
                                    </div>
                                    <FormInput className="col-6 form-group mt-3" value={grandTotal} label="Grand Total" ref={totalRef} placeholder="Amount" type="number" readonly />
                                    <div className='col-12 mt-3'>
                                        <PrimaryButton className='btn btn-primary btn-sm float-right pull-right mr-0' onClick={(e) => handleAddMilestone(e)} title='Add Milestone' />
                                    </div>
                                    {milestones.map((milestone, index) => (
                                        <div key={index}>
                                            <h3 className='col-7'>Milestone {index + 1}</h3>
                                            <div className='d-flex col-12'>
                                                <div>
                                                    {
                                                        Object.keys(milestone).map(key => {
                                                            if (key === "id") return null;
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
                                                {/* <div className='form-group mt-5'>
                                                    <PrimaryButton className='btn btn-danger btn-sm' onClick={(e) => handleRemoveMilestone(e, index)} title='Delete'/>
                                                </div> */}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <textarea className='form-control' ref={descriptionRef} placeholder='Project Description' rows={3}></textarea>
                                <PrimaryButton type="button" title="Create" disabled={btnStatus} onClick={create} className="btn btn-primary btn-end btn-sm mb-3 mt-3" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddNew;