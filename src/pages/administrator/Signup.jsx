import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import FormInput from '../../components/FormInput'
import PrimaryButton from '../../components/PrimaryButton'
import ContentHeader from '../../components/ContentHeader'
import AxiosClient from '../../Helper/axiosClient'

const Signup = () => {

    const { site_name } = useAppContext()

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const passwordRef = useRef();
    const reTypePasswordRef = useRef();
    const emailRef = useRef();
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const [btnStatus, setBtnStatus] = useState(false);
    const [btnText, setBtnText] = useState('Submit')
    const navigate = useNavigate()

    const axios = AxiosClient()

    // SUBMIT FORM DATA TO SERVER
    const handleSubmit = (e) => {
        e.preventDefault()
        if (firstNameRef.current.value === '') {
            firstNameRef.current.focus()
            window.toastr.error('First Name is required');
        } else if (lastNameRef.current.value === '') {
            lastNameRef.current.focus()
            window.toastr.error('Last Name is required');
        } else if (!emailRef.current.value.match(mailformat)) {
            emailRef.current.focus()
            window.toastr.error('provide a valid email address');
        } else if (passwordRef.current.value === '') {
            passwordRef.current.focus()
            window.toastr.error('Password is required');
        } else if (passwordRef.current.value !== reTypePasswordRef.current.value) {
            reTypePasswordRef.current.focus()
            window.toastr.error('Password do not match');
        } else {
            const data = {
                firstname: firstNameRef.current.value,
                lastname: lastNameRef.current.value,
                username: emailRef.current.value,
                password: passwordRef.current.value
            }
            setBtnStatus(true);
            axios.post('/auth/register-admin', data).then(({ data }) => {
                console.log("Created", data);
                window.toastr.success(data.alert);
                document.getElementById('form').reset()
            }).catch(({response}) => {
                setBtnStatus(false)
                window.toastr.error(response.data.message);
            })
        }
    }

    return (
        <>
            <ContentHeader title="Create New Admin User" />
            <section className="content">
                <div className="card">
                    <form method="POST" id="form" onSubmit="return false">
                        <div className="container">
                            <div className='row'>
                                <FormInput placeholder="Enter First Name" className="col-6 mb-3" ref={firstNameRef} />
                                <FormInput placeholder="Enter Last Name" className="col-6 mb-3" ref={lastNameRef} />
                            </div>
                            <div className="row">
                                <FormInput placeholder="Enter email address" type="text" className="col-6 mb-3" ref={emailRef} />
                                <FormInput placeholder="Enter password" type="password" className="col-6 mb-3" ref={passwordRef} />
                            </div>
                            <div className='row'>
                                <FormInput placeholder="Re-type password" type="password" className="col-6 mb-3" ref={reTypePasswordRef} />
                            </div>
                            <div className="row">
                                <PrimaryButton className="btn btn-primary btn-end mb-3 ml-3 float-right" disabled={btnStatus ? 'disabled' : ''} title={btnText} type="submit" onClick={(e) => handleSubmit(e)} />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Signup