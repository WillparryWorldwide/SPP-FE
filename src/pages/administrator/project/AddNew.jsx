import React, { useEffect, useRef, useState, useReducer } from 'react'
import ContentHeader from '../../../components/ContentHeader'
import FormInput from '../../../components/FormInput'
import PrimaryButton from '../../../components/PrimaryButton'
import AxiosClient from '../../../Helper/axiosClient'
import FormTextArea from '../../../components/FormTextArea'

const AddNew = () => {
    const [imageText, setImageText] = useState("");

    const axios = AxiosClient();
    const [milestones, setMileStones] = useState([
        {
            id: 1, value: '',
            preliminaries: [{ id: 1, value: '' }],
            provisions: [{ id: 1, value: '' }],
            measured: [{ id: 1, value: '' }]
        }
    ]);

    const handleAddMilestone = (e) => {
        e.preventDefault()
        const newMilestone = {
            id: milestones.length + 1,
            value: '',
            preliminaries: [{ id: 1, value: '' }],
            provisions: [{ id: 1, value: '' }],
            measured: [{ id: 1, value: '' }],
        };
        milestones.push(newMilestone)
        setMileStones(milestones);
        handleForceUpdate()
    };

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const [sectors, setSectors] = useState([])
    const [mdas, setMdas] = useState([])
    const [amount, setAmount] = useState(0)

    const handleForceUpdate = () => {
        forceUpdate()
        hideAddButtons()
        const amounts = document.querySelectorAll('.amount')
        let _amount = 0;
        for (let a = 0; a < amounts.length; a++) {
            if (!isNaN(amounts[a].value) && amounts[a].value !== '') {
                _amount += parseInt(amounts[a].value)
            }
        }
        setAmount(_amount)
    }

    const handleAddPreliminarySum = (e, milestone) => {
        e.preventDefault()
        const mileStone = [...milestones], index = mileStone.indexOf(milestone)
        const newPreliminary = {
            id: milestones[index].preliminaries.length + 1,
            value: ''
        };
        milestones[index].preliminaries.push(newPreliminary)
        setMileStones(milestones);
        handleForceUpdate()
    }

    const handleAddProvisionalSum = (e, milestone) => {
        e.preventDefault()
        const mileStone = [...milestones], index = mileStone.indexOf(milestone)
        const newProvision = {
            id: milestones[index].provisions.length + 1,
            value: ''
        };
        milestones[index].provisions.push(newProvision)
        setMileStones(milestones);
        handleForceUpdate()
    }

    const handleAddMeasuredWorks = (e, milestone) => {
        e.preventDefault()
        const mileStone = [...milestones], index = mileStone.indexOf(milestone)
        const newMeasure = {
            id: milestones[index].measured.length + 1,
            value: '',
        };
        milestones[index].measured.push(newMeasure)
        setMileStones(milestones);
        handleForceUpdate()
    }

    const handleRemoveMilestone = (e, milestone, path, id) => {
        e.preventDefault()
        const allMilestones = [...milestones]
        const indexMilestone = allMilestones.indexOf(milestone)
        const actualMilestone = allMilestones[indexMilestone]
        console.log(actualMilestone);
        // eslint-disable-next-line default-case
        switch (path) {
            case 'preliminary':
                // eslint-disable-next-line no-unused-expressions
                actualMilestone['preliminaries'].length !== 1 ? actualMilestone['preliminaries'].splice(id, 1) : ''
                break;
            case 'provisional':
                // eslint-disable-next-line no-unused-expressions
                actualMilestone['provisions'].length !== 1 ? actualMilestone['provisions'].splice(id, 1) : ''
                break;
            case 'measured':
                // eslint-disable-next-line no-unused-expressions
                actualMilestone['measured'].length !== 1 ? actualMilestone['measured'].splice(id, 1) : ''
                break;
        }
        setMileStones(allMilestones);
    };

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

    useEffect(() => {
        fetchMdas()
        fetchContractors()
        fetchSectors()
        handleForceUpdate()
        hideAddButtons()
    }, [])

    const handleImageUpload = (event) => {
        // const file = document.getElementById("project");
        // console.log("my forme", file[9].files)
        // const myFormData = new FormData();

        // myFormData.append("images", file[9].files);
        // return
        // const files = event.target.files;
        // const newSelectedFiles = [];

        // for (let i = 0; i < files.length; i++) {
        //     const file = files[i];
        //     const reader = new FileReader();
        //     reader.onload = (e) => {
        //         const dataURL = e.target.result;
        //         const newSelectedFile = {
        //             name: file.name,
        //             type: file.type,
        //             size: file.size,
        //             dataURL,
        //         };
        //         newSelectedFiles.push(dataURL);
        //         setImages(newSelectedFiles);
        //     };
        //     reader.readAsDataURL(file);
        // }
    }

    const sppCodeRef = useRef('');
    const titleRef = useRef('');
    const categoryRef = useRef('');
    const sectorRef = useRef('');
    const mdaRef = useRef('');
    const fundingRef = useRef('');
    const stateRef = useRef('');
    const locationRef = useRef('');
    const lgaRef = useRef('');
    const [images, setImages] = useState('');
    const awardDateRef = useRef('');
    const totalRef = useRef('');
    const descriptionRef = useRef('');
    const [btnStatus, setBtnStatus] = useState('');
    const [sppData, setSppData] = useState([]);
    const [contractors, setContractors] = useState([]);

    const fetchSPPData = async e => {
        axios.get(`/admin/all-spp/q?role=contractor`).then(({ data }) => {
            setBtnStatus('')
            setSppData(data.contractor)
        }).catch(({ response }) => {
            setBtnStatus('disabled')
            window.toastr.error(response.data.message)
        })
    }

    const hideAddButtons = () => {
        const btns = document.querySelectorAll('.addBtn');
        for (let b = 0; b < btns.length; b++) {
            if (!btns[b].classList.contains('0-0')) {
                btns[b].classList.add('d-none')
            }
        }
    }

    const create = () => {
        // if (sppCodeRef.current.value === 'Select SPP') {
        //     sppCodeRef.current.focus()
        //     window.toastr.error('SPP Code is required')
        // } else if (titleRef.current.value === '') {
        //     titleRef.current.focus()
        //     window.toastr.error('Project Title is required')
        // } else if (categoryRef.current.value === '') {
        //     categoryRef.current.focus()
        //     window.toastr.error('Project Category is required')
        // } else if (fundingRef.current.value === '') {
        //     fundingRef.current.focus()
        //     window.toastr.error('Total is required')
        // } else if (stateRef.current.value === '') {
        //     stateRef.current.focus()
        //     window.toastr.error('State is required')
        // } else if (lgaRef.current.value === '') {
        //     lgaRef.current.focus()
        //     window.toastr.error('Local government is required')
        // } else if (images === '') {
        //     window.toastr.error('Award images is required')
        // } else if (awardDateRef.current.value === '') {
        //     awardDateRef.current.focus()
        //     window.toastr.error('Award date is required')
        // } else if (totalRef.current.value === '') {
        //     totalRef.current.focus()
        //     window.toastr.error('Amount is required')
        // } else if (descriptionRef.current.value === '') {
        //     descriptionRef.current.focus()
        //     window.toastr.error('Project description is required')
        // } else {
        // setBtnStatus('disabled');
        let milestoneList = [];
        for (let m = 0; m < milestones.length; m++) {
            let preliminaries = [], provisionals = [], measured = []
            for (let mPre = 0; mPre < milestones[m].preliminaries.length; mPre++) {
                let description = document.getElementById(`milestone-preliminary-description-${m}-${mPre}`).children[1];
                let date = document.getElementById(`milestone-preliminary-date-${m}-${mPre}`).children[1];
                let quantity = document.getElementById(`milestone-preliminary-amount-${m}-${mPre}`).children[1];
                let rate = document.getElementById(`milestone-preliminary-rate-${m}-${mPre}`).children[1];
                let amount = document.getElementById(`milestone-preliminary-amount-${m}-${mPre}`).children[1];

                // console.log("mValues", description.children[1].value, date, quantity, rate, amount);
                if (description.value === '') {
                    description.focus()
                    window.toastr.error(`Milestone ${m + 1} Preliminary sum description ${mPre + 1} is required`)
                } else if (date.value === '') {
                    date.focus()
                    window.toastr.error(`Milestone ${m + 1} Preliminary sum date ${mPre + 1} is required`)
                } else if (quantity.value === '') {
                    quantity.focus()
                    window.toastr.error(`Milestone ${m + 1} Preliminary sum quantity ${mPre + 1} is required`)
                } else if (rate.value === '') {
                    rate.focus()
                    window.toastr.error(`Milestone ${m + 1} Preliminary sum rate ${mPre + 1} is required`)
                } else if (amount.value === '') {
                    amount.focus()
                    window.toastr.error(`Milestone ${m + 1} Preliminary sum amount ${mPre + 1} is required`)
                } else {
                    preliminaries.push({
                        unit: '',
                        quantity: quantity.value,
                        amount: amount.value,
                        rate: rate.value,
                        description: description.value
                    })
                }
            }
            for (let mPro = 0; mPro < milestones[m].preliminaries.length; mPro++) {
                let description = document.getElementById(`milestone-provisional-description-${m}-${mPro}`).children[1];
                let date = document.getElementById(`milestone-provisional-date-${m}-${mPro}`).children[1];
                let quantity = document.getElementById(`milestone-provisional-amount-${m}-${mPro}`).children[1];
                let rate = document.getElementById(`milestone-provisional-rate-${m}-${mPro}`).children[1];
                let amount = document.getElementById(`milestone-provisional-amount-${m}-${mPro}`).children[1];
                if (description.value === '') {
                    description.focus()
                    window.toastr.error(`Milestone ${m + 1} Provisional sum description ${mPro + 1} is required`)
                } else if (date.value === '') {
                    date.focus()
                    window.toastr.error(`Milestone ${m + 1} Provisional sum date ${mPro + 1} is required`)
                } else if (quantity.value === '') {
                    quantity.focus()
                    window.toastr.error(`Milestone ${m + 1} Provisional sum quantity ${mPro + 1} is required`)
                } else if (rate.value === '') {
                    rate.focus()
                    window.toastr.error(`Milestone ${m + 1} Provisional sum rate ${mPro + 1} is required`)
                } else if (amount.value === '') {
                    amount.focus()
                    window.toastr.error(`Milestone ${m + 1} Provisional sum amount ${mPro + 1} is required`)
                } else {
                    provisionals.push({
                        unit: '',
                        quantity: quantity.value,
                        amount: amount.value,
                        rate: rate.value,
                        description: description.value
                    })
                }
            }
            for (let mMea = 0; mMea < milestones[m].measured.length; mMea++) {
                let description = document.getElementById(`milestone-measured-description-${m}-${mMea}`).children[1];
                let date = document.getElementById(`milestone-measured-date-${m}-${mMea}`).children[1];
                let quantity = document.getElementById(`milestone-measured-amount-${m}-${mMea}`).children[1];
                let rate = document.getElementById(`milestone-measured-rate-${m}-${mMea}`).children[1];
                let amount = document.getElementById(`milestone-measured-amount-${m}-${mMea}`).children[1];
                if (description.value === '') {
                    description.focus()
                    window.toastr.error(`Milestone ${m + 1} measured works description ${mMea + 1} is required`)
                } else if (date.value === '') {
                    date.focus()
                    window.toastr.error(`Milestone ${m + 1} measured works date ${mMea + 1} is required`)
                } else if (quantity.value === '') {
                    quantity.focus()
                    window.toastr.error(`Milestone ${m + 1} measured works quantity ${mMea + 1} is required`)
                } else if (rate.value === '') {
                    rate.focus()
                    window.toastr.error(`Milestone ${m + 1} measured works rate ${mMea + 1} is required`)
                } else if (amount.value === '') {
                    amount.focus()
                    window.toastr.error(`Milestone ${m + 1} measured works amount ${mMea + 1} is required`)
                } else {
                    measured.push({
                        unit: '',
                        quantity: quantity.value,
                        amount: amount.value,
                        rate: rate.value,
                        description: description.value
                    })
                }
            }
            milestoneList.push({ preliminaries_sum: preliminaries, provisional_sums: provisionals, measured_work: measured })
        }


        // upload
        const file = document.getElementById("file");
        const myFormData = new FormData();

        console.log("what", file.files);
        Object.values(file.files).forEach((f, index) => myFormData.append("images", file.files[index]));
        myFormData.append("spp_code", sppCodeRef.current.value);
        myFormData.append("sector_code", sectorRef.current.value);
        myFormData.append("category", categoryRef.current.value);
        myFormData.append("name", titleRef.current.value);
        myFormData.append("grand_total", totalRef.current.value);
        myFormData.append("mda_code", mdaRef.current.value);
        myFormData.append("local_goverment", lgaRef.current.value);
        myFormData.append("location", locationRef.current.value);
        myFormData.append("state", stateRef.current.value);
        myFormData.append("duration", '2023-05-13');
        myFormData.append("date_awarded", awardDateRef.current.value);
        myFormData.append("funding_amount", fundingRef.current.value);
        myFormData.append("description", descriptionRef.current.value);
        myFormData.append("milestones", JSON.stringify(milestoneList));

        console.log("The form Data", myFormData);

        axios.post('/project/register', myFormData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(({ data }) => {
            setBtnStatus('');
            document.querySelector('#project').reset()
            window.toastr.success(data.message)
        }).catch(({ response }) => {
            setBtnStatus('');
            window.toastr.error(response.data.message)
        })
    }
    // }

    return (
        <>
            <ContentHeader title="Add New Project" />
            <section className="content">
                <div className="container-fluid">
                    <div className="card">
                        <div className='container'>
                            <form id="project" encType="multipart/form-data">
                                <div className='row'>
                                    <FormInput className="col-12 form-group mt-3" value="something" label="Title" ref={titleRef} placeholder="Project Title" />
                                    <div className='col-6 col-md-4 form-group mt-3'>
                                        <label>Select SPP</label>
                                        <select onChange={() => fetchSPPData()} ref={sppCodeRef} className='form-control'>
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
                                    <FormInput className="col-6 form-group mt-3" value="2023-05-18" label="Duration" type="date" ref={titleRef} placeholder="" />
                                    <FormInput className="col-6 form-group mt-3" value="2023-05-18"  label="Date Awarded" type="date" ref={awardDateRef} placeholder="Date Awarded" />
                                    <FormInput className="col-6 form-group mt-3" value="someehing" label="Category" ref={categoryRef} placeholder="Enter Category" />
                                    <FormInput className="col-6 form-group mt-3" value="9000000" label="Funding" type="number" ref={fundingRef} placeholder="Funding Amount" />
                                    <FormInput className="col-6 form-group mt-3" value="something" label="State" ref={stateRef} placeholder="Enter State" />
                                    <FormInput className="col-6 form-group mt-3" value="something" label="LGA" ref={lgaRef} placeholder="Local Government Area" />
                                    <FormInput className="col-6 form-group mt-3" value="something" label="Location" ref={locationRef} placeholder="Enter the location for the project" />
                                    <div className='form-group mt-3 col-12 col-md-6'>
                                        <label htmlFor='file'>Project Thumbnail</label>
                                        <div className='input-group'>
                                            <div className="custom-file">
                                                <input className="custom-file-input" multiple defaultValue={images} onChange={(e) => setImageText(e.target.files[0].name)} type='file' id="file" />
                                                <label className="custom-file-label" htmlFor="file">{imageText || "Upload Project Thumbnail"}</label>
                                            </div>
                                        </div>
                                    </div>
                                    <FormInput className="col-6 form-group mt-3" value={amount} label="Grand Total" ref={totalRef} placeholder="Amount" type="number" readonly />
                                    <div className='col-12 mt-3'>
                                        <PrimaryButton className='btn btn-primary btn-sm float-right pull-right mr-0' onClick={(e) => handleAddMilestone(e)} title='Add Milestone' />
                                    </div>
                                    {milestones.map((milestone, index) => (
                                        <div key={index}>
                                            <h3 className='col-7'>Milestone {index + 1}</h3>
                                            <div className='d-flex col-12'>
                                                <div className="">
                                                    {milestone.preliminaries.map((preliminary, pre) => (
                                                        <div key={"pre-" + pre} className="m-0 p-0">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <h5 className="ml-3 mb-0">Preliminary Sum {pre + 1}</h5>
                                                                <div>
                                                                    <PrimaryButton className={`btn btn-primary btn-sm pull-right mr-1`} onClick={(e) => handleAddPreliminarySum(e, milestone)} title='Add' />
                                                                    <PrimaryButton className={`btn btn-danger form-control-sm btn-sm ml-1 ${index}-${pre}`} onClick={(e) => handleRemoveMilestone(e, milestone, 'preliminary', pre)} title='Delete' />
                                                                </div>
                                                            </div>
                                                            <div className="preliminary d-flex">
                                                                <div className="row m-2">
                                                                    <FormInput className="col-6 col-md-3 form-group" value={pre} inputClass="form-control form-control-sm" id={`milestone-preliminary-quantity-${index}-${pre}`} placeholder="Enter Quantity" type="number" />
                                                                    <FormInput className="col-6 col-md-3 form-group" value={pre} inputClass="form-control form-control-sm" id={`milestone-preliminary-rate-${index}-${pre}`} placeholder="Enter Rate" type="number" />
                                                                    <FormInput className="col-6 col-md-3 form-group" value={pre} inputClass="amount form-control form-control-sm" id={`milestone-preliminary-amount-${index}-${pre}`} placeholder="Enter Amount" type="number" />
                                                                    <FormInput className="col-6 col-md-3 form-group" value="2023-05-18" inputClass="form-control form-control-sm" id={`milestone-preliminary-date-${index}-${pre}`} placeholder="Select date" type="date" />
                                                                    <FormTextArea className="col-12 form-group" value={pre} inputClass="form-control form-control-sm" id={`milestone-preliminary-description-${index}-${pre}`} placeholder="Enter Description" type="text" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    {milestone.provisions.map((provision, pro) => (
                                                        <div key={"pro-" + pro} className="m-0 p-0">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <h5 className="ml-3 mb-0">Provisional Sum {pro + 1}</h5>
                                                                <div>
                                                                    <PrimaryButton className={`btn btn-primary btn-sm pull-right mr-1`} onClick={(e) => handleAddProvisionalSum(e, milestone)} title='Add' />
                                                                    <PrimaryButton className={`btn btn-danger form-control-sm btn-sm ml-1 ${index}-${pro}`} onClick={(e) => handleRemoveMilestone(e, milestone, 'provisional', pro)} title='Delete' />
                                                                </div>
                                                            </div>

                                                            <div className="provisional d-flex">
                                                                <div className="row m-2">
                                                                    <FormInput className="col-6 col-md-3 form-group" value={pro} inputClass="form-control form-control-sm" id={`milestone-provisional-quantity-${index}-${pro}`} placeholder="Enter Quantity" type="number" />
                                                                    <FormInput className="col-6 col-md-3 form-group" value={pro} inputClass="form-control form-control-sm" id={`milestone-provisional-rate-${index}-${pro}`} placeholder="Enter Rate" type="number" />
                                                                    <FormInput className="col-6 col-md-3 form-group" value={pro} inputClass="amount form-control form-control-sm" id={`milestone-provisional-amount-${index}-${pro}`} placeholder="Enter Amount" type="number" />
                                                                    <FormInput className="col-6 col-md-3 form-group" value="2023-05-18" inputClass="form-control form-control-sm" id={`milestone-provisional-date-${index}-${pro}`} placeholder="Select date" type="date" />
                                                                    <FormTextArea className="col-12 form-group" value={pro} inputClass="form-control form-control-sm" id={`milestone-provisional-description-${index}-${pro}`} placeholder="Enter Description" type="text" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    {milestone.measured.map((measure, mea) => (
                                                        <div key={"mea-" + mea} className="m-0 p-0">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <h5 className="ml-3 mb-0">Measured Works {mea + 1}</h5>
                                                                <div>
                                                                    <PrimaryButton className={`btn btn-primary btn-sm mr-1 pull-right`} onClick={(e) => handleAddMeasuredWorks(e, milestone)} title='Add' />
                                                                    <PrimaryButton className={`btn btn-danger form-control-sm btn-sm ml-1 ${index}-${mea}`} onClick={(e) => handleRemoveMilestone(e, milestone, 'measured', mea)} title='Delete' />
                                                                </div>
                                                            </div>
                                                            <div className="measured d-flex">
                                                                <div className='row m-2'>
                                                                    <FormInput className="col-6 col-md-3 form-group" value={mea} inputClass="form-control form-control-sm" id={`milestone-measured-quantity-${index}-${mea}`} placeholder="Enter Quantity" type="number" />
                                                                    <FormInput className="col-6 col-md-3 form-group" value={mea} inputClass="form-control form-control-sm" id={`milestone-measured-rate-${index}-${mea}`} placeholder="Enter Rate" type="number" />
                                                                    <FormInput className="col-6 col-md-3 form-group" value={mea} inputClass="amount form-control form-control-sm" id={`milestone-measured-amount-${index}-${mea}`} placeholder="Enter Amount" type="number" />
                                                                    <FormInput className="col-6 col-md-3 form-group" value="2023-05-18" inputClass="form-control form-control-sm" id={`milestone-measured-date-${index}-${mea}`} placeholder="Select date" type="date" />
                                                                    <FormTextArea className="col-12 form-group" value={mea} inputClass="form-control form-control-sm" id={`milestone-measured-description-${index}-${mea}`} placeholder="Enter Description" type="text" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                {/* <div className='form-group mt-5'>
                                                    <PrimaryButton className='btn btn-danger btn-sm' onClick={(e) => handleRemoveMilestone(e, index)} title='Delete'/>
                                                </div> */}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <textarea className='form-control' ref={descriptionRef} placeholder='Project Description' value="somethibng" rows={3}></textarea>
                                <PrimaryButton type="button" title="Create" disabled={btnStatus} onClick={create} className="btn btn-primary btn-end btn-sm mb-3 mt-3" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddNew