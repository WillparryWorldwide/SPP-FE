import React, { useEffect, useState } from 'react'
import { Modal, Button } from "react-bootstrap";
import AxiosClient from '../Helper/axiosClient';
import { useAuthUser } from "react-auth-kit";
import FormTextArea from './FormTextArea';
import FormInput from './FormInput';
import moment from "moment";

const MilestoneModal = ({ setStatus, modalProps }) => {
    const axios = AxiosClient();
    const userData = useAuthUser();
    const [milestone, setMilestone] = useState({});
    const [images, setImages] = useState([]);
    const [imageText, setImageText] = useState("");
    const [show, setShow] = useState(modalProps.state);
    const handleClose = () => {
        setShow(false)
        setStatus(false)
    };

    const handelMilestoneChange = (e) => {
        const { name, value } = e.target;

        setMilestone(pre => {            
            return {
                ...pre,
                [name]: value
            }
        });
    }

    const handelImageChange = (e) => {
        const files = e.target.files;
    
        setImageText(e.target.files[0]?.name || '');
        setImages(files);
    }

    useEffect(() => {
        setShow(modalProps.state);

        const getMilestone = () => {
            axios.get("project/milestone/only/" + modalProps.item).then(({ data }) => {
                setMilestone(data.data.result);
                setMilestone(pre => {
                    return {
                        ...pre,
                        c_name: `${userData().firstname} ${userData().lastname}`
                    }
                })
            }).catch(error => {
                // handle error
                console.error("Error", error);
                window.toastr.error("Failed to get Milestone");
                if (error?.response) window.toastr.error(error.response.data.message);
            });
        }

        getMilestone();
    }, [modalProps.state]);

    const updateMilestone = async () => {
        const myFormData = new FormData();

        Object.keys(milestone).forEach(m => myFormData.append(m, milestone[m]));
        Object.values(images).forEach(f => myFormData.append("images", f));

        await axios.put("/project/milestone/update/" + modalProps.item, myFormData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }   
        }).then(({ data }) => {
            handleClose();
            window.toastr.success(data.data.message);
        }).catch(({ response }) => {
            handleClose();
            window.toastr.error(response.data.message);
        });

    }

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header>
                <Modal.Title>Update {modalProps.title}</Modal.Title>
                <span className='btn' onClick={() => handleClose()}> X </span>
            </Modal.Header>
            <Modal.Body>
                <form className="row m-md-2" action="#x">
                    <FormInput label="Quantity" className="col-6 form-group" name="quantity" value={milestone.quantity || ''} onChange={handelMilestoneChange} inputClass={`form-control form-control-sm`} placeholder="Enter Quantity" type="number" />
                    <FormInput label="Rate" className="col-6 form-group" name="rate" value={milestone.rate || ''} onChange={handelMilestoneChange} inputClass={`form-control form-control-sm`} placeholder="Enter Rate" type="number" />
                    <FormInput label="Amount" className="col-6 form-group" name="amount" value={milestone.amount || ''} onChange={handelMilestoneChange} inputClass={`amount form-control form-control-sm`} placeholder="Enter Amount" type="number" />
                    <FormInput label="Duration" className="col-6 form-group" name="duration" value={moment(milestone.duration).format("YYYY-MM-DD") || ''} onChange={handelMilestoneChange} inputClass={`form-control form-control-sm`} placeholder="Duration" type="date" />
                    <FormInput label="Progress" className="col-6 form-group" name="progress" value={milestone.progress?.toString() || ''} onChange={handelMilestoneChange} inputClass={`form-control form-control-sm`} placeholder="0%" type="number" />
                    <div className='form-group col-12 col-md-6'>
                        <label htmlFor='file'>Add Milestone</label>
                        <div className='input-group'>
                            <div className="custom-file">
                                <input className="custom-file-input" accept="image/*" multiple onChange={handelImageChange} type='file' id="file" />
                                <label className="custom-file-label" htmlFor="file">{imageText || "Upload Project Thumbnail"}</label>
                            </div>
                        </div>
                    </div>
                    <div className="from-group col-12 border rounded">
                        <FormInput label="Name" className="col-12 form-group" name="c_name" value={milestone.c_name || ''} onChange={handelMilestoneChange} inputClass={`form-control form-control-sm`} placeholder="Enter your name" type="text" />
                        <FormTextArea label="Add Comment" className="col-12 form-group" name="c_description" value={milestone.c_description || ''} onChange={handelMilestoneChange} inputClass={`form-control form-control-sm`} placeholder="Enter Comment" type="text" />
                    </div>
                    <FormTextArea label="Description" className="col-12 form-group" name="description" value={milestone.description || ''} onChange={handelMilestoneChange} inputClass={`form-control form-control-sm`} placeholder="Enter Description" type="text" />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={updateMilestone}>
                    Update
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default MilestoneModal;