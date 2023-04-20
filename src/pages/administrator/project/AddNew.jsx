import React, { useEffect, useRef, useState, useReducer } from 'react'
import ContentHeader from '../../../components/ContentHeader'
import FormInput from '../../../components/FormInput'
import PrimaryButton from '../../../components/PrimaryButton'
import useAxiosClient from '../../../Hooks/useAxiosClient'

const AddNew = () => {

    const [milestones, setMileStones] = useState([{ id: 1, value: '', preliminaries: [{id: 1, value: ''}], provisions: [{id: 1, value: ''}], measured: [{id: 1, value: ''}] }]);

    const handleAddMilestone = (e) => {
        e.preventDefault()
        const newMilestone = {
            id: milestones.length + 1,
            value: '',
            preliminaries: [{id: 1, value: ''}],
            provisions: [{id: 1, value: ''}],
            measured: [{id: 1, value: ''}],
        };
        milestones.push(newMilestone)
        setMileStones(milestones);
        handleForceUpdate()
    };

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const handleForceUpdate = () => {
        forceUpdate()
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

    const handleRemoveMilestone = (e, idToRemove) => {
        e.preventDefault()
        const filteredSections = milestones.filter((section) => section.id !== idToRemove);
        setMileStones(filteredSections);
    };

    useEffect(() => {
        handleForceUpdate()
    }, [])

    const sppCodeRef = useRef()
    const titleRef = useRef()
    const categoryRef = useRef()
    const totalRef = useRef()
    const stateRef = useRef()
    const lgaRef = useRef()
    const [letter, setLetter] = useState('')
    const awardDateRef = useRef()
    const amountRef = useRef()
    const descriptionRef = useRef()
    const [btnStatus, setBtnStatus] = useState('')
    const [sppData, setSppData] = useState([])

    const axios = useAxiosClient()
    const fetchSPPData = async e => {
        axios.get(`/api/contractors/fetch`).then(({ data }) => {
            setBtnStatus('')
            setSppData(data.contractor)
        }).catch(({ response }) => {
            setBtnStatus('disabled')
            window.toastr.error(response.data.message)
        })
    }

    const hideAddButtons = () => {
        // const btns = document.querySelectorAll('.addBtn');
        // for (let b = 0; b < btns.length; b++) {
        //     if (!btns[b].classList.contains('first-0')) {
        //         btns[b].classList.add('d-none')
        //     }
        // }
    }

    const create = () => {
        if (sppCodeRef.current.value === 'Select SPP') {
            sppCodeRef.current.focus()
            window.toastr.error('SPP Code is required')
        } else if (titleRef.current.value === '') {
            titleRef.current.focus()
            window.toastr.error('Project Title is required')
        } else if (categoryRef.current.value === '') {
            categoryRef.current.focus()
            window.toastr.error('Project Category is required')
        } else if (totalRef.current.value === '') {
            totalRef.current.focus()
            window.toastr.error('Total is required')
        } else if (stateRef.current.value === '') {
            stateRef.current.focus()
            window.toastr.error('State is required')
        } else if (lgaRef.current.value === '') {
            lgaRef.current.focus()
            window.toastr.error('Local government is required')
        } else if (letter === '') {
            window.toastr.error('Award letter is required')
        } else if (awardDateRef.current.value === '') {
            awardDateRef.current.focus()
            window.toastr.error('Award date is required')
        } else if (amountRef.current.value === '') {
            amountRef.current.focus()
            window.toastr.error('Amount is required')
        } else if (descriptionRef.current.value === '') {
            descriptionRef.current.focus()
            window.toastr.error('Project description is required')
        } else {
            setBtnStatus('disabled');
            let milestoneList = [];
            for (let m = 0; m < milestones.length; m++) {
                let description = document.getElementById(`milestone-description-${m}`);
                let date = document.getElementById(`milestone-date-${m}`);
                let amount = document.getElementById(`milestone-amount-${m}`);
                if (description.value === '') {
                    description.focus()
                    window.toastr.error(`Milestone description ${m + 1} is required`)
                } else if (date.value === '') {
                    date.focus()
                    window.toastr.error(`Milestone date ${m + 1} is required`)
                } else if (amount.value === '') {
                    amount.focus()
                    window.toastr.error(`Milestone amount ${m + 1} is required else enter 0`)
                } else {
                    let milestaone = {
                        description: description.value,
                        date: date.value,
                        amount: amount.value
                    }
                    milestoneList.push(milestaone)
                }
            }
            const formData = new FormData()
            formData.append('spp_code', sppCodeRef.current.value)
            formData.append('project_title', titleRef.current.value)
            formData.append('project_category', categoryRef.current.value)
            formData.append('total', totalRef.current.value)
            formData.append('state', stateRef.current.value)
            formData.append('lgaRef', lgaRef.current.value)
            formData.append('letter', letter.current.value)
            formData.append('award_date', awardDateRef.current.value)
            formData.append('amount', amountRef.current.value)
            formData.append('description', descriptionRef.current.value)
            formData.append('milestones', JSON.stringify(milestoneList))

            axios.post('/api/project', formData).then(({ data }) => {
                setBtnStatus('');
                document.querySelector('#project').reset()
                window.toastr.success(data.message)
            }).catch(({ response }) => {
                setBtnStatus('');
                window.toastr.error(response.data.message)
            })
        }
    }

    return (
        <>
            <ContentHeader title="Add New Project" />
            <section className="content">
                <div className="container-fluid">
                    <div className="card">
                        <div className='container'>
                            <form id="project"  encType="multipart/form-data">
                                <div className='row'>
                                    <div className='col-6 form-group mt-3'>
                                        <label>Select SPP Code</label>
                                        <select onChange={() => fetchSPPData()} ref={sppCodeRef} className='form-control'>
                                            <option defaultValue>Select SPP</option>
                                            {sppData.map(spp => <option key={spp.id} value={spp.id}>{spp.name}</option>)}
                                        </select>
                                    </div>
                                    <FormInput className="col-6 form-group mt-3" label="SPP Name" defaultValue={sppData?.name} readonly={true} placeholder="SPP Name" />
                                    <FormInput className="col-6 form-group mt-3" label="SPP Secretary Name" defaultValue={sppData?.secretary?.name} readonly={true} placeholder="SPP Code" />
                                    <FormInput className="col-6 form-group mt-3" label="SPP Secretary Phone" defaultValue={sppData?.secretary?.phone} readonly={true} placeholder="SPP Secretary Phone" />
                                    <FormInput className="col-6 form-group mt-3" label="SPP Secretary Email" defaultValue={sppData?.secretary?.email} readonly={true} placeholder="SPP Secretary Email" />
                                    <FormInput className="col-6 form-group mt-3" label="SPP RC Number" defaultValue={sppData?.rcNumber} readonly={true} placeholder="SPP RC Number" />
                                    <FormInput className="col-6 form-group mt-3" label="Title" ref={titleRef} placeholder="Project Title" />
                                    <FormInput className="col-6 form-group mt-3" label="Category" ref={categoryRef} placeholder="Project Category" />
                                    <FormInput className="col-6 form-group mt-3" label="Grand Total" ref={totalRef} placeholder="Project Grand Total" />
                                    <FormInput className="col-6 form-group mt-3" label="State" ref={stateRef} placeholder="Enter State" />
                                    <FormInput className="col-6 form-group mt-3" label="LGA" ref={lgaRef} placeholder="Local Government Area" />
                                    <div className='form-group mt-3 col-6'>
                                        <label htmlFor='file'>Project Thumbnail</label>
                                        <div className='input-group'>
                                            <div className="custom-file">
                                                <input className="custom-file-input" defaultValue={letter} onChange={(e) => setLetter(e.files[0])} type='file' id="file" />
                                                <label className="custom-file-label" htmlFor="file">Upload Project Thumbnail</label>
                                            </div>
                                        </div>
                                    </div>
                                    <FormInput className="col-6 form-group mt-3" label="Date Awarded" ref={awardDateRef} placeholder="Date Awarded" />
                                    <FormInput className="col-6 form-group mt-3" label="Funding Amount" ref={amountRef} placeholder="Amount" type="number" />
                                    <div className='col-12 mt-3'>
                                        <PrimaryButton className='btn btn-primary btn-sm float-right pull-right mr-0' onClick={(e) => handleAddMilestone(e)} title='Add Milestone'/>
                                    </div>
                                    {milestones.map((milestone, index) => (
                                        <>
                                            <h3 className='col-7'>Milestone {index + 1}</h3>
                                            <div className='d-flex col-12' key={index}>
                                                <div class="row">
                                                    {milestone.preliminaries.map((preliminary, pre) => (
                                                        <div class="preliminary" key={pre}>
                                                            <h5 class="ml-3 mb-0">Milestone {index + 1} Preliminary Sum {pre + 1}</h5>
                                                            <div class="d-flex">
                                                                <FormInput className="col-md-3 form-group" inputClass="form-control form-control-sm" id={`milestone-preliminary-description-${index}-${pre}`} placeholder="Enter Description" type="text" />
                                                                <FormInput className="col-md-2 form-group" inputClass="form-control form-control-sm" id={`milestone-preliminary-date-${index}-${pre}`} placeholder="Select date" type="date" />
                                                                <FormInput className="col-md-2 form-group" inputClass="form-control form-control-sm" id={`milestone-preliminary-quantity-${index}-${pre}`}  placeholder="Enter Quantity" type="number" />
                                                                <FormInput className="col-md-1 form-group" inputClass="form-control form-control-sm" id={`milestone-preliminary-rate-${index}-${pre}`} placeholder="Enter Rate" type="number" />
                                                                <FormInput className="col-md-2 form-group" inputClass="form-control form-control-sm" id={`milestone-amount-${index}-${pre}`} placeholder="Enter Amount" type="number" />
                                                                <PrimaryButton className={`btn btn-primary btn-sm mt-4 ${index}-${pre} addBtn`} onClick={(e) => handleAddPreliminarySum(e, milestone)} title='Add'/>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    {milestone.provisions.map((provision, pro) => (
                                                        <div class="provisional" key={pro}>
                                                            <h5 class="ml-3 mb-0">Milestone {index + 1} Provisional Sum {pro + 1}</h5>
                                                            <div class="d-flex">
                                                                <FormInput className="col-md-3 form-group" inputClass="form-control form-control-sm" id={`milestone-provisional-description-${index}-${pro}`} placeholder="Enter Description" type="text" />
                                                                <FormInput className="col-md-2 form-group" inputClass="form-control form-control-sm" id={`milestone-provisional-date-${index}-${pro}`} placeholder="Select date" type="date" />
                                                                <FormInput className="col-md-2 form-group" inputClass="form-control form-control-sm" id={`milestone-provisional-quantity-${index}-${pro}`}  placeholder="Enter Quantity" type="number" />
                                                                <FormInput className="col-md-1 form-group" inputClass="form-control form-control-sm" id={`milestone-provisional-rate-${index}-${pro}`} placeholder="Enter Rate" type="number" />
                                                                <FormInput className="col-md-2 form-group" inputClass="form-control form-control-sm" id={`milestone-provisional-amount-${index}-${pro}`} placeholder="Enter Amount" type="number" />
                                                                <PrimaryButton className={`btn btn-primary btn-sm mt-4 ${index}-${pro} addBtn`} onClick={(e) => handleAddProvisionalSum(e, milestone)} title='Add'/>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    {milestone.measured.map((measure, mea) => (
                                                        <div class="measured">
                                                            <h5 class="ml-3 mb-0">Milestone {index + 1} Measured Works {mea + 1}</h5>
                                                            <div className='d-flex'>
                                                                <FormInput className="col-md-3 form-group" inputClass="form-control form-control-sm" id={`milestone-measured-description-${index}-${mea}`} placeholder="Enter Description" type="text" />
                                                                <FormInput className="col-md-2 form-group" inputClass="form-control form-control-sm" id={`milestone-measured-date-${index}-${mea}`} placeholder="Select date" type="date" />
                                                                <FormInput className="col-md-2 form-group" inputClass="form-control form-control-sm" id={`milestone-measured-quantity-${index}-${mea}`}  placeholder="Enter Quantity" type="number" />
                                                                <FormInput className="col-md-1 form-group" inputClass="form-control form-control-sm" id={`milestone-measured-rate-${index}-${mea}`} placeholder="Enter Rate" type="number" />
                                                                <FormInput className="col-md-2 form-group" inputClass="form-control form-control-sm" id={`milestone-measured-amount-${index}-${mea}`} placeholder="Enter Amount" type="number" />
                                                                <PrimaryButton className={`btn btn-primary btn-sm mt-4 ${index}-${mea} addBtn`} onClick={(e) => handleAddMeasuredWorks(e, milestone)} title='Add'/>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                {/* <div className='form-group mt-5'>
                                                    <PrimaryButton className='btn btn-danger btn-sm' onClick={(e) => handleRemoveMilestone(e, index)} title='Delete'/>
                                                </div> */}
                                            </div>
                                        </>
                                    ))}
                                </div>
                                <textarea className='form-control' ref={descriptionRef} placeholder='Project Description' rows={10}></textarea>
                                <PrimaryButton type="button" title="Create" disabled={btnStatus} onClick={create} className="btn btn-primary btn-block btn-sm mb-3 mt-3" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddNew