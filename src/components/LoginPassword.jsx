import React, { useEffect, useRef, useState } from 'react'
import { Modal, Button } from "react-bootstrap";
import FormInput from './FormInput';
import { useSignIn, useAuthUser } from 'react-auth-kit'
import AxiosClient from '../Helper/axiosClient';

const LoginPassword = ({ status, setStatus }) => {

    const auth = useAuthUser()
    const axios = AxiosClient()
    const passwordRef = useRef()
    const SignIn = useSignIn()
    const [show, setShow] = useState(status);

    const handleClose = () => {
        setShow(false)
        setStatus(false)
    };

    const login = async () => {
        if (passwordRef.current.value === '') {
            passwordRef.current.focus()
            window.toastr.warning('Password is required')
        } else {
            const data = {
                username: auth()?.username,
                password: passwordRef.current.value
            }
            axios.post('/auth/login', data).then(({data}) => {
                console.log(data);
                const user = data.data
                if (SignIn({
                    token: user.hash,
                    expiresIn: 1440,
                    tokenType: "Bearer",
                    authState: user,
                    refreshToken: user.hash,
                    refreshTokenExpireIn: 1440
                })) {
                    window.toastr.success(data.alert)
                    handleClose()
                }
            }).catch((response) => {
                window.toastr.error(response.message)
            })
        }
    }

    return (
        <Modal show={show} onHide={handleClose} centered backdrop="static" keyboard={false}>
            <Modal.Header>
                <Modal.Title>Enter Password to Login</Modal.Title>
                <span className='btn' onClick={() => handleClose()}> X </span>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <FormInput type="password" className="col-md-12" ref={passwordRef} inputClass="form-control" placeholder="Enter Password" />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => login()}>
                    Login
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default LoginPassword