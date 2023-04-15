import React, { useRef, useState } from 'react'
import ContentHeader from '../../../components/ContentHeader'
import FormInput from '../../../components/FormInput'
import PrimaryButton from '../../../components/PrimaryButton'
import useAxiosClient from '../../../Hooks/useAxiosClient'

const AddNew = () => {

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
    const [sppData, setSppData] = useState({})

    const axios = useAxiosClient()
    const fetchSPPData = async e => {
        axios.get(`/api/contractors/fetch-detals/${sppCodeRef.current.value}`).then(({ data }) => {
            setBtnStatus('')
            setSppData(data.contractor)
        }).catch(({response}) => {
            setBtnStatus('disabled')
            window.toastr.error(response.data.message)
        })
    }

    const create = () => {
        if (sppCodeRef.current.value === '') {
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
            // setBtnText()
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
            formData.append('amount', descriptionRef.current.value)

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
            <section class="content">
                <div class="container-fluid">
                    <div class="card">
                        <div className='container'>
                            <form id="project">
                                <div className='row' enctype="multi-part/formData">
                                    <FormInput className="col-6 form-group mt-3" label="Enter SPP Code" ref={sppCodeRef} action={() => fetchSPPData()} placeholder="SPP Code" />
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
                                        <label htmlFor='file'>Award Letter</label>
                                        <div className='input-group'>
                                            <div className="custom-file">
                                                <input className="custom-file-input" defaultValue={letter} onChange={(e) => setLetter(e.files[0])} type='file' id="file" />
                                                <label class="custom-file-label" htmlFor="file">Upload Award Letter</label>
                                            </div>
                                        </div>
                                    </div>
                                    <FormInput className="col-6 form-group mt-3" label="Date Awarded" ref={awardDateRef} placeholder="Date Awarded" />
                                    <FormInput className="col-6 form-group mt-3" label="Funding Amount" ref={amountRef} placeholder="Amount" type="number" />
                                    <div className='input-group mt-3'>
                                        <textarea className='form-control' ref={descriptionRef} placeholder='Project Description' rows={10}></textarea>
                                    </div>
                                </div>
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