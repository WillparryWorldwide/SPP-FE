import React, { useRef, useState } from 'react'
import { Modal, Button } from "react-bootstrap";
import AxiosClient from '../Helper/axiosClient';

const MdaModal = ({ status, setStatus }) => {

    const titleRef = useRef()
    const axios = AxiosClient()
    const [show, setShow] = useState(status);
    const handleClose = () => {
        setShow(false)
        setStatus(false)
    };

    const createSection = async () => {
        if (titleRef.current.value === '') {
            titleRef.current.focus();
            window.toastr.error('Sector title is required')
        } else {
            const data = {
                name: titleRef.current.value
            }
            await axios.post('/mda/register', data).then(({ data }) => {
                handleClose()
                window.toastr.success(data.data.message)
            }).catch(({response}) => {
                handleClose()
                window.toastr.error(response.data.message)
            })
        }
    }

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header>
                <Modal.Title>Create MDA</Modal.Title>
                <span className='btn' onClick={() => handleClose()}> X </span>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-md-12">
                        <input type="text" className='form-control' placeholder='Enter MDA Title' ref={titleRef} />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={createSection}>
                    Create
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default MdaModal