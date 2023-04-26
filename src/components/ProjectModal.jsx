import React, { useRef, useState } from 'react'
import useAxiosClient from '../Hooks/useAxiosClient'
import { Modal, Button } from "react-bootstrap";

const ProjectModal = ({ status, setStatus }) => {

    const titleRef = useRef()
    const axios = useAxiosClient()
    const [show, setShow] = useState(status);
    const handleClose = () => {
        setShow(false)
        setStatus(false)
    };

    const createSection = () => {}

    return (
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Create Section</Modal.Title>
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