import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import FormInput from '../components/FormInput'
import { axiosClient } from '../Helper/axiosClient'
import axios from 'axios'

import FormTextArea from '../components/FormTextArea'
import PrimaryButton from '../components/PrimaryButton'

const Signup = () => {

    const { site_name } = useAppContext()

    const nameRef = useRef()
    const SnameRef = useRef()
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
    const [btnText, setBtnText] = useState('Next')
    const [title, setTitle] = useState('Personal Details')
    const [show, setShow] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        const options = {
            method: 'POST',
            url: 'https://api.mtn.com/v1/messages/sms',
            headers: { 'Content-Type': 'application/json', 'Allow-Access-Origin': '*' },
            data: {
                to: ['+2349035712541'],
                body: 'Welcome to the Bozza network',
                from: '34001',
                notificationURL: 'http://picosms.elitecodec.com.ng/callbackurl',
                clientId: 'kIam9DqdLBQsgxztACGl1BEp4v26nH2H'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    document.body.classList.add('hold-transition', 'register-page')

    // SUBMIT FORM DATA TO SERVER
    const handleSubmit = (e) => {
        e.preventDefault()
        if (nameRef.current.value === '') {
            nameRef.current.focus()
            window.toastr.error('Personal Name is required');
        } else if (phoneRef.current.value === '') {
            phoneRef.current.focus()
            window.toastr.error('Phone Number is required');
        } else if (!emailRef.current.value.match(mailformat)) {
            emailRef.current.focus()
            window.toastr.error('provide a valid email address');
        } else if (addressRef.current.value === '') {
            addressRef.current.focus()
            window.toastr.error('Your personal address is required');
        } else {
            setShow(show + 1)
            setTitle('Secretary Details')
            if (show === 1) {
                if (SnameRef.current.value === '') {
                    SnameRef.current.focus()
                    window.toastr.error('Personal Name is required');
                } else if (SphoneRef.current.value === '') {
                    SphoneRef.current.focus()
                    window.toastr.error('Phone Number is required');
                } else if (!SemailRef.current.value.match(mailformat)) {
                    SemailRef.current.focus()
                    window.toastr.error('provide a valid email address');
                } else if (SaddressRef.current.value === '') {
                    window.toastr.error('Your personal address is required');
                } else {
                    setShow(show + 1)
                    setTitle('SPP Details')
                    setBtnText('Submit')
                }
            } else if (show === 2) {
                if (sppNameRef.current.value === '') {
                    sppNameRef.current.focus()
                    window.toastr.error('SPP Name is required')
                } else if (rcNumberRef.current.value === '') {
                    rcNumberRef.current.focus()
                    window.toastr.error('SPP RC Number is required')
                } else if (sppAddressRef.current.value === '') {
                    sppAddressRef.current.focus()
                    window.toastr.error('SPP Address is required')
                }
            } else {
                const formData = new FormData()
                formData.append('fullname', nameRef.current.value)
                formData.append('phone_number', phoneRef.current.value)
                formData.append('email_address', emailRef.current.value)
                formData.append('semail_address', SemailRef.current.value)
                formData.append('sfullname', SnameRef.current.value)
                formData.append('sphone_number', SphoneRef.current.value)
                formData.append('saddress', SaddressRef.current.value)
                formData.append('address', addressRef.current.value)
                formData.append('spp_name', sppNameRef.current.value)
                formData.append('spp_rc_number', rcNumberRef.current.value)
                formData.append('spp_address', sppAddressRef.current.value)
                setBtnStatus(true);

                axiosClient.post('/', formData).then(({ data }) => {
                    window.toastr.error(data.message);
                    navigate('/login', { replace: true })
                }).catch(({ response }) => {
                    setBtnStatus(false)
                    window.toastr.error(response.data.message);
                })
            }
        }
    }

    const handleBack = () => {
        setShow(show !== 0 ? show - 1 : 1)
        setBtnText('Next')
        if (show === 0) {
            setTitle('Personal Details')
        } else if (show === 1) {
            setTitle('Secretary Details')
        } else if (show === 2) {
            setTitle('SPP Details')
        }
    }

    return (
        <div class="register-box">
            <div class="card card-outline card-primary">
                <div class="card-header text-center">
                    <Link to="" class="h1">{site_name}</Link>
                </div>
                <div class="card-body">
                    <p class="login-box-msg">Register as a contractor <br /> ({title})</p>
                    <form method="POST" onSubmit="return false">
                        <div className={show === 0 ? '' : 'd-none'}>
                            <FormInput placeholder="Enter Full Name" className="input-group mb-3" ref={nameRef} />
                            <FormInput placeholder="Enter Phone number" type="number" className="input-group mb-3" ref={phoneRef} />
                            <FormInput placeholder="Enter email address" type="text" className="input-group mb-3" ref={emailRef} />
                            <FormTextArea placeholder="Enter personal address" row="10" className="input-group mb-3" ref={addressRef} />
                        </div>
                        <div className={show === 1 ? '' : 'd-none'}>
                            <FormInput placeholder="Enter Full Name" className="input-group mb-3" ref={SnameRef} />
                            <FormInput placeholder="Enter Phone number" type="number" className="input-group mb-3" ref={SphoneRef} />
                            <FormInput placeholder="Enter email address" type="text" className="input-group mb-3" ref={SemailRef} />
                            <FormTextArea placeholder="Enter address" row="10" className="input-group mb-3" ref={SaddressRef} />
                        </div>
                        <div className={show === 2 ? '' : 'd-none'}>
                            <FormInput placeholder="Enter SPP Name" className="input-group mb-3" ref={sppNameRef} />
                            <FormInput placeholder="Enter SPP RC Number" className="input-group mb-3" ref={rcNumberRef} />
                            <FormTextArea placeholder="Enter SPP address" row="10" className="input-group mb-3" ref={sppAddressRef} />
                        </div>
                        <div className="row">
                            <Link className="float-left" onClick={(e) => handleBack(e)}>Back</Link>
                            <PrimaryButton className="btn btn-primary btn-block float-right" disabled={btnStatus ? 'disabled' : ''} title={btnText} type="submit" onClick={(e) => handleSubmit(e)} />
                        </div>
                    </form>
                    <Link to="/login/" class="text-center">I already have an account</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup