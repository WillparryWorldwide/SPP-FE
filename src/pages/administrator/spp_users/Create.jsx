import React, { useRef, useState } from 'react'
import ContentHeader from '../../../components/ContentHeader'
import FormInput from '../../../components/FormInput'
import FormTextArea from '../../../components/FormTextArea'
import PrimaryButton from '../../../components/PrimaryButton'
import useAxiosClient from '../../../Hooks/useAxiosClient'

const Create = () => {

    const nameRef = useRef()
    const LastNameRef = useRef()
    const SnameRef = useRef()
    const SLastNameRef = useRef()
    const rcNumberRef = useRef();
    const phoneRef = useRef();
    const SphoneRef = useRef();
    const emailRef = useRef();
    const SemailRef = useRef();
    const addressRef = useRef()
    const SaddressRef = useRef()
    const sppNameRef = useRef()
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const sppAddressRef = useRef()
    const [btnStatus, setBtnStatus] = useState(false);

    const axios = useAxiosClient()

    // SUBMIT FORM DATA TO SERVER
    const handleSubmit = (e) => {
        e.preventDefault()
        if (nameRef.current.value === '') {
            nameRef.current.focus()
            window.toastr.error('First Name is required');
        } else if (LastNameRef.current.value === '') {
            LastNameRef.current.focus()
            window.toastr.error('Last Name is required');
        } else if (phoneRef.current.value === '') {
            phoneRef.current.focus()
            window.toastr.error('Phone Number is required');
        } else if (!emailRef.current.value.match(mailformat)) {
            emailRef.current.focus()
            window.toastr.error('provide a valid email address');
        } else if (addressRef.current.value === '') {
            addressRef.current.focus()
            window.toastr.error('Your personal address is required');
        } else if (SnameRef.current.value === '') {
            SnameRef.current.focus()
            window.toastr.error('Personal Name is required');
        } else if (SLastNameRef.current.value === '') {
            SLastNameRef.current.focus()
            window.toastr.error('Secretary last name is required');
        } else if (SphoneRef.current.value === '') {
            SphoneRef.current.focus()
            window.toastr.error('Phone Number is required');
        } else if (!SemailRef.current.value.match(mailformat)) {
            SemailRef.current.focus()
            window.toastr.error('provide a valid email address');
        } else if (SaddressRef.current.value === '') {
            window.toastr.error('Your personal address is required');
        } else if (sppNameRef.current.value === '') {
            sppNameRef.current.focus()
            window.toastr.error('SPP Name is required')
        } else if (rcNumberRef.current.value === '') {
            rcNumberRef.current.focus()
            window.toastr.error('SPP RC Number is required')
        } else if (sppAddressRef.current.value === '') {
            sppAddressRef.current.focus()
            window.toastr.error('SPP Address is required')
        } else {
            const formData = new FormData()
            formData.append('fullname', `${nameRef.current.value} ${LastNameRef.current.value}`)
            formData.append('phone_number', phoneRef.current.value)
            formData.append('email_address', emailRef.current.value)
            formData.append('semail_address', SemailRef.current.value)
            formData.append('sfullname', `${SnameRef.current.value} ${SLastNameRef.current.value}`)
            formData.append('sphone_number', SphoneRef.current.value)
            formData.append('saddress', SaddressRef.current.value)
            formData.append('address', addressRef.current.value)
            formData.append('spp_name', sppNameRef.current.value)
            formData.append('spp_rc_number', rcNumberRef.current.value)
            formData.append('spp_address', sppAddressRef.current.value)
            setBtnStatus(true);

            axios.post('/api/admin/create-spp', formData).then(({ data }) => {
                window.toastr.error(data.message);
            }).catch(({ response }) => {
                setBtnStatus(false)
                window.toastr.error(response.data.message);
            })
        }
    }

    return (
        <>
            <ContentHeader title="Create New SPP User" />
            <section className="content">
                <div className="card">
                    <form method="POST" onSubmit="return false">
                        <div className="container">
                            <h3 className='mt-3'>Head of Organization</h3>
                            <div className='row'>
                                <FormInput placeholder="Enter First Name" className="col-6 mb-3" ref={nameRef} />
                                <FormInput placeholder="Enter Last Name" className="col-6 mb-3" ref={LastNameRef} />
                            </div>
                            <div className='row'>
                                <FormInput placeholder="Enter Phone number" type="number" className="col-6 mb-3" ref={phoneRef} />
                                <FormInput placeholder="Enter email address" type="text" className="col-6 mb-3" ref={emailRef} />
                                <FormTextArea placeholder="Enter personal address" row="10" className="col-12 mb-3" ref={addressRef} />
                            </div>
                            <h3>Secretary Details</h3>
                            <div className='row'>
                                <FormInput placeholder="Enter First Name" className="col-6 mb-3" ref={SnameRef} />
                                <FormInput placeholder="Enter Last Name" className="col-6 mb-3" ref={SLastNameRef} />
                            </div>
                            <div className='row'>
                                <FormInput placeholder="Enter Phone number" type="number" className="col-6 mb-3" ref={SphoneRef} />
                                <FormInput placeholder="Enter email address" type="text" className="col-6 mb-3" ref={SemailRef} />
                                <FormTextArea placeholder="Enter address" row="10" className="col-12 mb-3" ref={SaddressRef} />
                            </div>
                            <h3>SPP Details</h3>
                            <div className='row'>
                                <FormInput placeholder="Enter SPP Name" className="col-6 mb-3" ref={sppNameRef} />
                                <FormInput placeholder="Enter SPP RC Number" className="col-6 mb-3" ref={rcNumberRef} />
                                <FormTextArea placeholder="Enter SPP address" row="10" className="col-12 mb-3" ref={sppAddressRef} />
                            </div>
                            <div className="row">
                                <PrimaryButton className="btn btn-primary btn-block float-right mb-3" disabled={btnStatus ? 'disabled' : ''} title='Submit' type="submit" onClick={(e) => handleSubmit(e)} />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Create