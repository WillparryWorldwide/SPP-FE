import moment from "moment/moment";
import { useParams, Link } from "react-router-dom";
import getFormData from "./functions/getFormData";
import React, { useEffect, useState } from "react";
import FormInput from "../../../components/FormInput";
import AxiosClient from "../../../Helper/axiosClient";
import validateInput from "./functions/validateInput";
import FormTextArea from "../../../components/FormTextArea";
import PrimaryButton from "../../../components/PrimaryButton";
import ContentHeader from "../../../components/ContentHeader";
import MilestoneModal from "../../../components/Milestone.modal";

const ViewProject = () => {
    const params = useParams();
    const [hostUrl, setHostUrl] = useState('');
    const axios = AxiosClient();
    const [imageText, setImageText] = useState("");
    const [project, setProject] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [sectors, setSectors] = useState([]);
    const [mdas, setMdas] = useState([]);
    const [contractors, setContractors] = useState([]);
    const [btnStatus, setBtnStatus] = useState(false);
    const [milestoneModalState, setMilestoneModalState] = useState({
        state: false,
        item: '',
        title: ''
    });
    const initialInput = {
        totalRef: { focus: () => { }, value: project.grand_total || '' },
        lgaRef: { focus: () => { }, value: project.local_goverment || '' },
        mdaRef: { focus: () => { }, value: project.mda_code || '' },
        fundingRef: { focus: () => { }, value: project.funding_amount || '' },
        fundingRef_int: { focus: () => { }, value: 0 },
        titleRef: { focus: () => { }, value: project.name || '' },
        stateRef: { focus: () => { }, value: project.state || '' },
        sectorRef: { focus: () => { }, value: project.sector_code || '' },
        locationRef: { focus: () => { }, value: project.location || '' },
        durationRef: { focus: () => { }, value: project.duration || '' },
        categoryRef: { focus: () => { }, value: project.category || '' },
        awardDateRef: { focus: () => { }, value: project.date_awarded || '' },
        descriptionRef: { focus: () => { }, value: project.description || '' },
        sppCodeRef: { focus: () => { }, value: project.spp_code || '' }
    }
    // inputs
    const [inputData, setInputData] = useState(initialInput);
    const tagsExample = [
        "Legacy", "childcare", "maternal motality", "mega project", "road", "technology", "school"
    ]
    const milestoneText = {
        preliminaries_sum: "Preliminary Sum",
        provisional_sums: "Provisional Sum",
        measured_work: "Measured Work"
    }

    // function
    const handelInputChange = (e) => {
        let { name, value, focus } = e.target;
        let innerHtml = '';

        if (e.target.TagName === "SELECT") innerHtml = e.target?.selectedOptions[0]?.innerHTML;

        setInputData(prev => {
            if (name === "fundingRef") {
                prev.fundingRef.value.push(value);
                return prev;
            }
            return {
                ...prev,
                [name]: { focus, value, innerHtml }
            }
        });
    }

    useEffect(() => {
        const fetchProject = () => {
            axios.get("/project/only/" + params.id).then((res) => {
                setProject(res.data.data.result);
                setInputData(initialInput);
                setHostUrl(res.config.baseURL.slice(0,res.config.baseURL.search("api")));
                setIsLoading(false);
            }).catch(error => {
                // handle error
                console.error("Error", error);
                window.toastr.error("Failed to get project");
                if (error?.response) window.toastr.error(error.response.data.message);
            });
        }

        const fetchSectors = () => {
            axios.get('/sector/all').then(({ data }) => {
                setSectors(data.data.result)
            }).catch(error => {
                // handle error
                console.error("Error", error);
                window.toastr.error("Failed to get Sector");
                if (error?.response) window.toastr.error(error.response.data.message);
            });
        }

        const fetchMdas = () => {
            axios.get('/mda/all').then(({ data }) => {
                setMdas(data.data.result)
            }).catch(error => {
                // handle error
                console.error("Error", error);
                window.toastr.error("Failed to get MDA");
                if (error?.response) window.toastr.error(error.response.data.message);
            })
        }

        const fetchContractors = async () => {
            await axios.get('/admin/all-spp/q?role=contractor').then(({ data }) => {
                setContractors(data.data.result)
            }).catch(error => {
                // handle error
                console.error("Error", error);
                window.toastr.error("Failed to get Contractor");
                if (error?.response) window.toastr.error(error.response.data.message);
            });
        }

        fetchMdas();

        fetchProject();

        fetchSectors();

        hideAddButtons();

        fetchContractors();

        console.log("Rending...");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.id, project._id]);

    const hideAddButtons = () => {
        const btns = document.querySelectorAll('.addBtn');
        for (let b = 0; b < btns.length; b++) {
            if (!btns[b].classList.contains('0-0')) {
                btns[b].classList.add('d-none')
            }
        }
    }

    const updateProject = () => {
        let submit = true;

        submit = validateInput({ submit, setBtnStatus, inputData });

        // if false do not create project
        if (!submit) return;
        // upload
        const myFormData = getFormData(inputData);

        axios.patch("/project/update/" + params.id, myFormData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(({ data }) => {
            setBtnStatus(true);
            document.querySelector('#project').reset()
            window.toastr.success(data.data.message);
        }).catch(({ response }) => {
            setBtnStatus(false);
            window.toastr.error(response.data.data.message);
        });
    }

    return (
        <>
            <ContentHeader title="View Project" />
            <section className="content">
                <div className="container-fluid">
                    <div className="card">
                        <div className='container'>
                            {
                                !isLoading && project ?
                                    <form id="project" encType="multipart/form-data">
                                        <div className='row'>
                                            <FormInput className="col-12 form-group mt-3" label="Title" value={inputData.titleRef.value} name={"titleRef"} onChange={handelInputChange} placeholder={inputData.titleRef.value ? inputData.titleRef.value : "Project Title"} />
                                            <div className='col-6 col-md-4 form-group mt-3'>
                                                <label>Select SPP</label>
                                                <select name={"sppCodeRef"} onChange={handelInputChange} className='form-control'>
                                                    <option defaultValue value={inputData.sppCodeRef.value}>{inputData.sppCodeRef.innerHTML || "Change SPP"}</option>
                                                    {contractors.length && contractors.map(contractor => <option key={contractor._id} value={contractor._id}>{contractor.SPP_name}</option>)}
                                                </select>
                                            </div>
                                            <div className='col-6 col-md-4 form-group mt-3'>
                                                <label>Select Sector</label>
                                                <select value={inputData.sectorRef.value} name={"sectorRef"} onChange={handelInputChange} className='form-control'>
                                                    <option defaultValue value={inputData.sectorRef.value}>{inputData.sectorRef.innerHTML || "Change Sector"}</option>
                                                    {sectors.length && sectors.map(sector => <option key={sector._id} value={sector._id}>{sector.name}</option>)}
                                                </select>
                                            </div>
                                            <div className='col-6 col-md-4 form-group mt-3'>
                                                <label>Select MDA</label>
                                                <select value={inputData.mdaRef.value} name={"mdaRef"} onChange={handelInputChange} className='form-control'>
                                                    <option defaultValue value={inputData.mdaRef.value}>{inputData.mdaRef.innerHTML || "Change MDA"}</option>
                                                    {mdas.length && mdas.map(mda => <option key={mda._id} value={mda._id}>{mda.name}</option>)}
                                                </select>
                                            </div>
                                            <FormInput className="col-6 form-group mt-3" label="Duration" type="date" value={moment(inputData.durationRef.value).format("YYYY-MM-DD")} name={"durationRef"} onChange={handelInputChange} placeholder={inputData.durationRef.value ? moment(inputData.durationRef.value).format("YYYY-MM-DD") : "When will it finish"} />
                                            <FormInput className="col-6 form-group mt-3" label="Date Awarded" type="date" value={moment(inputData.awardDateRef.value).format("YYYY-MM-DD")} name={"awardDateRef"} onChange={handelInputChange} placeholder={inputData.awardDateRef.value ? moment(inputData.awardDateRef.value).format("YYYY-MM-DD") : "Date Awarded"} />
                                            <div className='col-6 form-group mt-3'>
                                                <label>Project Tag</label>
                                                <select value={inputData.categoryRef.value} name={"categoryRef"} onChange={handelInputChange} className='form-control'>
                                                    <option defaultValue>{inputData.categoryRef.value}</option>
                                                    {tagsExample.map((tag, index) => <option key={index} value={tag}>{tag}</option>)}
                                                </select>
                                            </div>                                            <div className='col-6 col-md-4 form-group mt-3'>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <select className='form-control'>
                                                            <option defaultValue>All Funding</option>
                                                            {inputData.fundingRef.value?.length && inputData.fundingRef.value.map((ff, index) => <option key={index}>{ff}</option>)}
                                                        </select>
                                                    </div>
                                                    <div className="col-12">
                                                        <FormInput className="" label="Add New Funding" type="number" value={inputData.fundingRef_int.value} name={"fundingRef_int"} onChange={handelInputChange} placeholder={inputData.fundingRef_int.value || "Funding Amount"} />
                                                    </div>
                                                </div>
                                            </div>
                                            <FormInput className="col-6 form-group mt-3" label="State" value={inputData.stateRef.value} name={"stateRef"} onChange={handelInputChange} placeholder={inputData.stateRef.value ? inputData.stateRef.value : "Enter State"} />
                                            <FormInput className="col-6 form-group mt-3" label="LGA" value={inputData.lgaRef.value} name={"lgaRef"} onChange={handelInputChange} placeholder={inputData.titleRef.value ? inputData.titleRef.value : "Local Government Area"} />
                                            <FormInput className="col-6 form-group mt-3" label="Location" value={inputData.locationRef.value} name={"locationRef"} onChange={handelInputChange} placeholder={inputData.titleRef.value ? inputData.titleRef.value : "Enter the location for the project"} />
                                            <div className='form-group mt-3 col-12 col-md-6'>
                                                <label htmlFor='file'>Project Thumbnail</label>
                                                <div className='input-group'>
                                                    <div className="custom-file">
                                                        <input className="custom-file-input" accept="image/*" multiple onChange={(e) => setImageText(e.target.files[0].name)} type='file' id="file" />
                                                        <label className="custom-file-label" htmlFor="file">{imageText || "Upload Project Thumbnail"}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <FormInput className="col-6 form-group mt-3" label="Grand Total" value={inputData.totalRef.value} name={"totalRef"} onChange={handelInputChange} placeholder="Amount" type="number" readonly />
                                            <div className='form-group mt-3 col-12 col-md-6'>
                                                <textarea className='form-control' value={inputData.descriptionRef.value} name={"descriptionRef"} onChange={handelInputChange} placeholder='Project Description' rows={3}></textarea>
                                            </div>
                                            <div className='form-group mt-3 col-12 col-md-6'>
                                                <PrimaryButton type="button" title="Update Project" disabled={btnStatus} onClick={updateProject} className="btn btn-primary btn-end btn-sm mb-3 mt-3" />
                                            </div>

                                            {/* Milestones */}
                                            <hr />
                                            <div className="col-12">
                                                <h2>Milestones</h2>
                                            </div>
                                            {project.milestones?.length && project.milestones.map((milestone, index) => (
                                                <div key={index}>
                                                    <span className='col-12'>Milestone {index + 1}</span>
                                                    <div className='d-flex col-12'>
                                                        <ul className="list-group">
                                                            {
                                                                Object.keys(milestone).map(key => {
                                                                    if (key === "_id") return null;
                                                                    return milestone[key].map((items, mIndex, mArr) => (
                                                                        <div key={key + '-' + mIndex} className="m-0 p-0">
                                                                            <Link to={"#x"} className="lead text-dark text-decoration-none" onClick={() => setMilestoneModalState(pre => {
                                                                                return {
                                                                                    title: `${milestoneText[key]} ${mIndex + 1}`,
                                                                                    state: true,
                                                                                    item: items
                                                                                }
                                                                            })}>
                                                                                <li className="list-group-item">{milestoneText[key]} {mIndex + 1}</li>
                                                                            </Link>
                                                                        </div>
                                                                    ));
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}

                                            {/* Images */}
                                            {/*
                                            <div className="col-12 mt-5">
                                                <h2>Media</h2>
                                            </div>
                                            <hr />
                                                project.images?.length && project.images.map((img, index) => 
                                                    (
                                                        <div key={index} className="card" style={{width: "500px"}}>
                                                            <img className="card-img-top" src={hostUrl + img.path} alt={"Project image " + index} />
                                                                <div className="card-img-overlay"> 
                                                                    <h4 className="card-title">John Doe</h4>
                                                                    <p className="card-text">Some example text.</p>
                                                                    <a href="#x" className="btn btn-primary">See Profile</a>
                                                                </div>
                                                        </div>
                                                    ))
                                                    */  }
                                        </div>
                                    </form>
                                    : <h4>Loading...</h4>
                            }
                        </div>
                    </div>
                </div>
                {/* Modal */}
                {
                    milestoneModalState.state && <MilestoneModal modalProps={milestoneModalState} setStatus={setMilestoneModalState} />
                }
            </section>
        </>
    );
}

export default ViewProject;