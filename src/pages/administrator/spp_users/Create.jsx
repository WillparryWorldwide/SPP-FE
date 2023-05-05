import React, { useRef, useState } from 'react'
import ContentHeader from '../../../components/ContentHeader'
import FormInput from '../../../components/FormInput'
import FormTextArea from '../../../components/FormTextArea'
import PrimaryButton from '../../../components/PrimaryButton'
import AxiosClient from '../../../Helper/axiosClient'

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

    const axios = AxiosClient()

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
            const data = {
                hoo_fullname: `${nameRef.current.value} ${LastNameRef.current.value}`,
                hoo_address: addressRef.current.value,
                hoo_phone: phoneRef.current.value,
                hoo_email: emailRef.current.value,
                secretary_fullname: `${SnameRef.current.value} ${SLastNameRef.current.value}`,
                secretary_address: SaddressRef.current.value,
                secretary_phone: SphoneRef.current.value,
                secretary_email: SemailRef.current.value,
                rc_number: rcNumberRef.current.value,
                name: sppNameRef.current.value,
                phone: phoneRef.current.value,
                address: sppAddressRef.current.value
            }
            setBtnStatus(true);
            axios.post('/auth/register-spp', data).then(({ data }) => {
                setBtnStatus(false)
                document.getElementById('form').reset()
                window.toastr.success(data.data.alert);
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
                    <form method="POST" id="form">
                        <div className="container">
                            <h3>SPP Details</h3>
                            <div className='row'>
                                <FormInput placeholder="Enter SPP Name" className="col-6 mb-3" ref={sppNameRef} />
                                <FormInput placeholder="Enter SPP RC Number" className="col-6 mb-3" ref={rcNumberRef} />
                                <FormTextArea placeholder="Enter SPP address" row="10" className="col-12 mb-3" ref={sppAddressRef} />
                            </div>
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
                            <div className="row">
                                <PrimaryButton className="btn btn-primary btn-end ml-3 float-right mb-3" disabled={btnStatus ? 'disabled' : ''} title='Submit' type="submit" onClick={(e) => handleSubmit(e)} />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Create