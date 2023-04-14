import React, { useRef } from 'react'
import ContentHeader from '../../../components/ContentHeader'
import FormInput from '../../../components/FormInput'
import PrimaryButton from '../../../components/PrimaryButton'
import useAxiosClient from '../../../Hooks/useAxiosClient'

const AddNew = () => {

    const sppCodeRef = useRef()
    const axios = useAxiosClient()
    const fetchSPPData = async e => {
        // axiosClient
    }

    return (
        <>
            <ContentHeader title="Add New Project" />
            <section class="content">
                <div class="container-fluid">
                    <div class="card">
                        <div className='container'>
                            <div className='row'>
                                <FormInput className="col-6 form-group mt-3" label="Enter SPP Code" action={() => fetchSPPData()} ref={sppCodeRef} placeholder="SPP Code" />
                                <FormInput className="col-6 form-group mt-3" label="SPP Name" readonly={true} placeholder="SPP Name" />
                                <FormInput className="col-6 form-group mt-3" label="SPP Secretary Name" readonly={true} placeholder="SPP Code" />
                                <FormInput className="col-6 form-group mt-3" label="SPP Secretary Phone" readonly={true} placeholder="SPP Secretary Phone" />
                                <FormInput className="col-6 form-group mt-3" label="SPP Secretary Email" readonly={true} placeholder="SPP Secretary Email" />
                                <FormInput className="col-6 form-group mt-3" label="SPP RC Number" readonly={true} placeholder="SPP RC Number" />
                                <FormInput className="col-6 form-group mt-3" label="Title" placeholder="Project Title" />
                                <FormInput className="col-6 form-group mt-3" label="Category" placeholder="Project Category" />
                                <FormInput className="col-6 form-group mt-3" label="Grand Total" placeholder="Project Grand Total" />
                                <FormInput className="col-6 form-group mt-3" label="State" placeholder="Enter State" />
                                <FormInput className="col-6 form-group mt-3" label="LGA" placeholder="Local Government Area" />
                                <div className='form-group mt-3 col-6'>
                                    <label htmlFor='file'>Award Letter</label>
                                    <div className='input-group'>
                                        <div className="custom-file">
                                            <input className="custom-file-input" type='file' id="file" />
                                            <label class="custom-file-label" htmlFor="file">Upload Award Letter</label>
                                        </div>
                                    </div>
                                </div>
                                <FormInput className="col-6 form-group mt-3" label="Date Awarded" placeholder="Date Awarded" />
                                <FormInput className="col-6 form-group mt-3" label="Funding Amount" placeholder="Amount" type="number" />
                                <div className='input-group mt-3'>
                                    <textarea className='form-control' placeholder='Project Description' rows={10}></textarea>
                                </div>
                            </div>
                            <h3 className="mt-2">Project MileStone</h3>
                            <div className='row'>
                                <FormInput className="col-6 form-group mt-3" label="Project Phase" placeholder="Phase"/>
                                <FormInput className="col-6 form-group mt-3" label="Project Duration" placeholder="Duration" type="number" />
                                <FormInput className="col-6 form-group mt-3" label="Cost of Implementation" placeholder="Implementation Cost" type="number" />
                                <div className='form-group mt-3 col-6'>
                                    <label htmlFor='file'>Image</label>
                                    <div className='input-group'>
                                        <div className="custom-file">
                                            <input className="custom-file-input" type='file' id="file" />
                                            <label class="custom-file-label" htmlFor="file">Image</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <PrimaryButton type="button" title="Create" className="btn btn-primary btn-block btn-sm mb-3" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddNew