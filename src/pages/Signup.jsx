import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import FormInput from '../components/FormInput'
import { axiosClient } from '../Helper/axiosClient'

import '../layout/assets/css/adminlte.min.css'

import FormTextArea from '../components/FormTextArea'
import PrimaryButton from '../components/PrimaryButton'

const Signup = () => {

    const { site_name } = useAppContext()

    const nameRef = useRef()
    const rcNumberRef = useRef();
    const addressRef = useRef()
    const [btnStatus, setBtnStatus] = useState(false);
    const navigate = useNavigate()

    document.body.classList.add('hold-transition', 'register-page')

    // SUBMIT FORM DATA TO SERVER
    const handleSubmit = (e) => {
        e.preventDefault()
        if (nameRef.current.value === '') {
            nameRef.current.focus()
            window.toastr.error('SPP Name is required');
        } else if (rcNumberRef.current.value === '') {
            rcNumberRef.current.focus()
            window.toastr.error('SPP RC Number is required');
        } else if (addressRef.current.value === '') {
            addressRef.current.focus()
            window.toastr.error('SPP address is required');
        } else {
            const formData = new FormData()
            formData.append('spp_name', nameRef.current.value)
            formData.append('spp_rc_number', rcNumberRef.current.value)
            formData.append('spp_address', addressRef.current.value)
            setBtnStatus(true);

            axiosClient.post('/', formData).then(({ data }) => {
                navigate('/login', {replace: true})
            }).catch(({ response }) => {
                setBtnStatus(false)
                window.toastr.error(response.data.message);
            })
        }
    }

    return (
        <div class="register-box">
            <div class="card card-outline card-primary">
                <div class="card-header text-center">
                    <Link to="" class="h1">{site_name}</Link>
                </div>
                <div class="card-body">
                    <p class="login-box-msg">Register as a contractor</p>
                    <form method="POST" onSubmit="return false">
                        <FormInput placeholder="Enter SPP Name" className="input-group mb-3" ref={nameRef} />
                        <FormInput placeholder="Enter SPP RC Number" className="input-group mb-3" ref={rcNumberRef} />
                        <FormTextArea placeholder="Enter address" row="10" className="input-group mb-3" ref={addressRef} />
                        <PrimaryButton className="btn btn-primary btn-block" disabled={btnStatus ? 'disabled' : ''} title="Submit" type="submit" onClick={(e) => handleSubmit(e)} />
                    </form>
                    <Link to="/login/" class="text-center">I already have an account</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup