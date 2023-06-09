import React, { useRef, useState } from 'react'
import { Modal, Button } from "react-bootstrap";
// import AxiosClient from '../Helper/axiosClient';

const ProjectModal = ({ status, setStatus }) => {

    const titleRef = useRef();
    // const axios = AxiosClient();
    const [show, setShow] = useState(status);
    const handleClose = () => {
        setShow(false)
        // setStatus(false)
    };

    const createSection = () => {}

    return (
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg" centered>
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

export default ProjectModal