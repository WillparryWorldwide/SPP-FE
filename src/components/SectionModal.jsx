import React, { useRef, useState } from 'react'
import useAxiosClient from '../Hooks/useAxiosClient'
import { Modal, Button } from "react-bootstrap";
import CloseButton from 'react-bootstrap/CloseButton';

const SectionModal = ({ status, setStatus }) => {

    const titleRef = useRef()
    const axios = useAxiosClient()
    const [show, setShow] = useState(status);
    const handleClose = () => {
        setShow(false)
        setStatus(false)
    };

    const createSection = async () => {
        if (titleRef.current.value === '') {
            titleRef.current.focus();
            window.toastr.error('Section title is required')
        } else {
            const formData = new FormData()
            formData.append('title', titleRef.current.value)
            await axios.post('/section/create', formData).then(({ data }) => {
                window.toastr.success(data.message)
            }).catch(({ response }) => {
                window.toastr.error(response.data.message)
            })
        }
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Create Section</Modal.Title>
                <span className='btn' onClick={() => handleClose()}> X </span>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-md-12">
                        <input type="text" className='form-control' placeholder='Enter Section Title' ref={titleRef} />
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

export default SectionModal