import React, { useRef, useState } from 'react'
import useAxiosClient from '../Hooks/useAxiosClient'
import { Modal, Button } from "react-bootstrap";

const ProjectModal = ({
    status,
    setStatus,
    project
}) => {

    const titleRef = useRef()
    const axios = useAxiosClient()
    const [show, setShow] = useState(status);
    const handleClose = () => {
        setShow(false)
        // setStatus(false)
    };

    const createSection = () => { }

    return (
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg" centered>
            <Modal.Header>
                <Modal.Title>Project Title</Modal.Title>
                <span className='btn' onClick={() => handleClose()}> X </span>
            </Modal.Header>
            <Modal.Body>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" style={{ height: '400px' }} src="https://placehold.it/900x500/39CCCC/ffffff&text=I+Love+Bootstrap" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" style={{ height: '400px' }} src="https://placehold.it/900x500/3c8dbc/ffffff&text=I+Love+Bootstrap" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" style={{ height: '400px' }} src="https://placehold.it/900x500/f39c12/ffffff&text=I+Love+Bootstrap" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-custom-icon" aria-hidden="true">
                            <i className="fas fa-chevron-left"></i>
                        </span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-custom-icon" aria-hidden="true">
                            <i className="fas fa-chevron-right"></i>
                        </span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="container">
                    <h5 className='mt-3'>Project Description</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, architecto quo quam voluptate repellat ea quos a vel, minus rerum ex expedita. Nihil, reprehenderit illo assumenda mollitia sapiente consequuntur eaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, architecto quo quam voluptate repellat ea quos a vel, minus rerum ex expedita. Nihil, reprehenderit illo assumenda mollitia sapiente consequuntur eaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, architecto quo quam voluptate repellat ea quos a vel, minus rerum ex expedita. Nihil, reprehenderit illo assumenda mollitia sapiente consequuntur eaque.</p>
                    <h5>Project Milestones</h5>
                    <h5>Comments</h5>
                    <textarea className='form-control' placeholder='Enter comment'></textarea>
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