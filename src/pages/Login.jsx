import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import FormInput from '../components/FormInput'
import { axiosClient } from '../Helper/axiosClient'
import { useSignIn, useIsAuthenticated } from 'react-auth-kit'

import PrimaryButton from '../components/PrimaryButton'

const Login = () => {

    const { site_name } = useAppContext()
    const sppCodeRef = useRef()
    const passwordRef = useRef()
    const [btnStatus, setBtnStatus] = useState(false);
    const navigate = useNavigate()
    const SignIn = useSignIn()
    const isAuthenticated = useIsAuthenticated()

    useEffect(() => {
        // REMOVE THIS FUNCTION FOR TEST PURPOSE ONLY
        SignIn({
            token: 'gscyuschsaclihsjcsciusacgusclusakjc',
            expiresIn: 1440,
            tokenType: "Bearer",
            authState: {name: 'Daniel Michael', avatar: ''},
            refreshToken: 'hzucoiucasugcoiuscoiusclaszijcis',
            refreshTokenExpireIn: 1440
        })
        // REMOVE THIS FUNCTION FOR TEST PURPOSE ONLY
        if (isAuthenticated()) {
            navigate('/dashboard', { replace: true })
        }
    }, [])

    document.body.classList.add('hold-transition', 'login-page')

    const handleSubmit = e => {
        e.preventDefault()
        if (sppCodeRef.current.value === '') {
            sppCodeRef.current.focus()
            window.toastr.error('Enter your spp code')
        } else if (passwordRef.current.value === '') {
            passwordRef.current.focus()
            window.toastr.error('Password is required')
        } else {
            setBtnStatus(true)
            const formData = new FormData();
            formData.append('spp_code', sppCodeRef.current.value)
            formData.append('password', passwordRef.current.value)

            axiosClient.post('/', formData).then(({ data }) => {
                window.toastr.success(data.message)
                if (SignIn({
                    token: data.token,
                    expiresIn: 1440,
                    tokenType: "Bearer",
                    authState: data.user,
                    refreshToken: '',
                    refreshTokenExpireIn: ''
                })) {
                    navigate('/dashboard', { replace: true })
                }
            }).catch(({ response }) => {
                setBtnStatus(false)
                window.toastr.error(response.data.message)
            })
        }
    }

    return (<div className="register-box">
        <div className="card card-outline card-primary">
            <div className="card-header text-center">
                <Link to="" className="h1">{site_name}</Link>
            </div>
            <div className="card-body">
                <p className="login-box-msg">Login as a contractor</p>
                <form method="POST" onSubmit="return false">
                    <FormInput placeholder="Enter SPP Code" className="input-group mb-3" ref={sppCodeRef} />
                    <FormInput placeholder="Enter Password" type="password" className="input-group mb-3" ref={passwordRef} />
                    <PrimaryButton className="btn btn-primary btn-block" disabled={btnStatus ? 'disabled' : ''} title="Submit" type="submit" onClick={(e) => handleSubmit(e)} />
                </form>
                <Link to="/signup/" className="text-center">Don't have an account? Create one Here</Link>
            </div>
        </div>
    </div>)
}

export default Login