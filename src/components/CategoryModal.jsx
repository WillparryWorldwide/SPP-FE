import React, { useEffect, useRef, useState } from 'react'
import useAxiosClient from '../Hooks/useAxiosClient'
import { Modal, Button } from "react-bootstrap";

const CategoryModal = ({ status, setStatus }) => {

    const sectionRef = useRef()
    const categoryRef = useRef()
    const axios = useAxiosClient()
    const [sections, setSections] = useState([])
    const [show, setShow] = useState(status);
    const handleClose = () => {
        setShow(false)
        setStatus(false)
    };

    useEffect(() => {
        fetchSections()
    }, [])

    const fetchSections = async () => {
        await axios.get('/sections/fetch').then(({data}) => {
            setSections(data.sections)
        }).catch(({response}) => {
            console.log(response.data.message);
        })
    }

    const createCategory = async () => {
        if (sectionRef.current.value === 'Select Category') {
            sectionRef.current.focus();
            window.toastr.error('Section is required')
        } else if (categoryRef.current.value) {
            categoryRef.current.focus()
            window.toastr.error('Category title is required')
        } else {
            const formData = new FormData()
            formData.append('section', sectionRef.current.value)
            formData.append('category', categoryRef.current.value)
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
                <Modal.Title>Create Category</Modal.Title>
                <span className='btn' onClick={() => handleClose()}> X </span>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-md-6">
                        <select className='form-control' ref={sectionRef}>
                            <option>Select Category</option>
                            {sections.map((section, index) => (
                                <option key={index} value={section.id}>{section.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <input type="text" className='form-control' placeholder='Enter Category Title' ref={categoryRef} />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={createCategory}>
                    Create
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CategoryModal