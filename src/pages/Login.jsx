import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import FormInput from '../components/FormInput'
// import axios from '../Helper/axiosClient'
import { useAuthUser } from 'react-auth-kit'
import { useSignIn, useIsAuthenticated } from 'react-auth-kit'

import PrimaryButton from '../components/PrimaryButton'
import AxiosClient from '../Helper/axiosClient'

const Login = () => {
    const axios = AxiosClient();
    const { site_name, updateLoginStatus, login_status } = useAppContext();
    const sppCodeRef = useRef();
    const passwordRef = useRef();
    const [btnStatus, setBtnStatus] = useState(false);;
    const navigate = useNavigate();
    const SignIn = useSignIn();
    const isAuthenticated = useIsAuthenticated();
    const userData = useAuthUser();

    useEffect(() => {
        if (isAuthenticated()) window.location.pathname = "/spp/dashboard";
        console.log("Render...");
    }, [isAuthenticated, navigate, userData]);

    document.body.classList.add("hold-transition", "login-page")

    const handleSubmit = e => {
        e.preventDefault()
        if (sppCodeRef.current.value === '') {
            sppCodeRef.current.focus()
            window.toastr.error('Enter your user code')
        } else if (passwordRef.current.value === '') {
            passwordRef.current.focus()
            window.toastr.error('Password is required')
        } else {
            setBtnStatus(true)
            const data = {
                username: sppCodeRef.current.value,
                password: passwordRef.current.value
            }

            axios.post('/auth/login', data).then(({ data }) => {
                console.log(data);
                const user = data.data
                window.toastr.success(data.alert)
                if (SignIn({
                    token: user.token,
                    expiresIn: 1440,
                    tokenType: "Bearer",
                    authState: user,
                    refreshToken: user.token,
                    refreshTokenExpireIn: 1440
                })) {
                    updateLoginStatus(!login_status);
                    window.location.pathname = "/spp/dashboard";
                }
            }).catch((err) => {
                setBtnStatus(false);
                console.error("errrorr", err);
                err.response ? window.toastr.error(err.response.data.message) :
                    window.toastr.error(err.message);
            });
        }
    }

    return (
        <div className="register-box">
            <div className="card card-outline card-primary">
                <div className="card-header text-center">
                    <Link to="" className="h1">{site_name}</Link>
                </div>
                <div className="card-body">
                    <p className="login-box-msg">Login</p>
                    <form method="POST">
                        <FormInput placeholder="Enter User Code or Email" className="input-group mb-3" ref={sppCodeRef} />
                        <FormInput placeholder="Enter Password" type="password" className="input-group mb-3" ref={passwordRef} />
                        <PrimaryButton className="btn btn-primary btn-block" disabled={btnStatus ? 'disabled' : ''} title="Submit" type="submit" onClick={(e) => handleSubmit(e)} />
                    </form>
                    <Link to="/forgotten-password/" className="text-center">Forgotten Password? Click Here</Link>
                </div>
            </div>
        </div>
    )
}

export default Login