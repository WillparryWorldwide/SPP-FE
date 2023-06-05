import moment from "moment";
import IconSVG from "../../../Utils/svg";
import { SearchNav, Title } from "../components";
import React, { useEffect, useState } from "react";
import AxiosClient from "../../../Helper/axiosClient";
import validateInput from "./functions/validateInput";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TextField, Box, MenuItem, Grid, CircularProgress, Button, ButtonGroup } from "@mui/material";


const RegisterProject = () => {
	const axios = AxiosClient();
	const [project, setProject] = useState(null);
	const [isHidden, setIsHidden] = useState(true);
	const [imageText, setImageText] = useState(null);
	const [submitBtnStatus, setSubmitBtnStatus] = useState({
		active: false,
		text: "Register Project"
	});
	const [editedMilestone, setEditedMilestone] = useState(0);
	const [sectors, setSectors] = useState([]);
	const [mdas, setMdas] = useState([]);
	const initialInput = {
		grand_total: { name: "grand_total", focus: () => { }, value: 0 },
		local_goverment: { name: "local_goverment", focus: () => { }, value: '' },
		mda_code: { name: "mda_code", focus: () => { }, value: '' },
		funding_amount: { name: "funding_amount", focus: () => { }, value: '' },
		name: { name: "name", focus: () => { }, value: '' },
		state: { name: "state", focus: () => { }, value: '' },
		sector_code: { name: "sector_code", focus: () => { }, value: '' },
		location: { name: "location", focus: () => { }, value: '' },
		category: { name: "category", focus: () => { }, value: '' },
		duration: { name: "duration", focus: () => { }, value: null },
		date_awarded: { name: "date_awarded", focus: () => { }, value: null },
		description: { name: "description", focus: () => { }, value: '' },
		spp_code: { name: "spp_code", focus: () => { }, value: '' }
	}
	const [inputDetails, setInputDetails] = useState(initialInput);

	const [contractors, setContractors] = useState([]);
	const tagsExample = [
		"Legacy", "childcare", "maternal motality", "mega project", "road", "technology", "school"
	]

	const milestoneText = {
		preliminaries_sum: "Preliminary Sum",
		provisional_sums: "Provisional Sum",
		measured_work: "Measured Work"
	}

	const [milestones, setMileStones] = useState([{ id: 0, project: null, typeOf: "preliminaries_sum", level: 0, rate: 0, amount: 0, duration: null, description: '', quantity: 0 }]);

	// function
	const handelInputChange = (e, dateName) => {
		let data = e.target;

		if (!data) data = { name: dateName, value: e, focus: null };

		let { name, value, focus } = data;

		let innerHtml = '';

		if (e?.target?.TagName === "SELECT") innerHtml = e?.target?.selectedOptions[0]?.innerHTML;

		setInputDetails(prev => {
			return {
				...prev,
				[name]: { name, focus, value, innerHtml }
			}
		});
	}

	// function
	const handelMilestoneChange = (e, index, dateName) => {
		let data = e?.target;

		if (!data) data = { name: dateName, value: e };

		let { name, value } = data;

		console.log("data", name, value, index, data);
		setMileStones(prev => {
			prev[index][name] = value;
			return prev;
		});
		setEditedMilestone(preVal => preVal + 1);
	}

	// function
	const handleAddMilestone = () => {
		setMileStones(prev => {
			const newMilestone = { id: prev.length ? prev[prev.length - 1].id + 1 : 1, project: null, typeOf: "preliminaries_sum", level: prev.length ? prev[prev.length - 1].level + 1 : 1, rate: 0, amount: 0, duration: null, description: '', quantity: 0 }
			return [...prev, newMilestone];
		});
	};

	// function
	const handleAddMileStoneItem = (level) => {
		setMileStones(prev => {
			const newMilestone = { id: prev.length ? prev[prev.length - 1].id + 1 : 1, project: null, typeOf: "preliminaries_sum", level, rate: 0, amount: 0, duration: null, description: '', quantity: 0 }
			return [...prev, newMilestone];
		});
	}

	// function
	const handleRemoveMilestone = (id) => {
		setMileStones(prev => {
			prev.splice(id, 1);
			return prev;
		});
		setEditedMilestone(pre => pre + 1);
	};

	const organiseMilestone = () => {
		let levelNo = 0;

		milestones.forEach(m => {
			if (m.level > levelNo) levelNo = m.level;
		});

		return () => {
			const result = [];

			milestones.forEach((m) => {
				if (!Array.isArray(result[m.level])) result[m.level] = [];
				result[m.level].push(m);
			});

			return result;
		}
	}

	useEffect(() => {
		const updateGrandTotal = () => {
			let total = 0;
			milestones.forEach(milestoneItem => {
				total += Number(milestoneItem.amount);
			});

			setInputDetails(prev => {
				return {
					...prev,
					grand_total: {
						...prev.grand_total,
						value: total
					}
				}
			});
		}

		const fetchSectors = () => {
			axios.get('/sector/all').then(({ data }) => {
				setSectors(data.data.result)
			}).catch(({ response }) => {
				console.log(response.data.message);
			})
		}

		const fetchMdas = () => {
			axios.get('/mda/all').then(({ data }) => {
				setMdas(data.data.result)
			}).catch(({ response }) => {
				console.log(response.data.message);
			})
		}

		const fetchContractors = async () => {
			await axios.get('/admin/all-spp/q?role=contractor').then(({ data }) => {
				setContractors(data.data.result)
			}).catch(({ response }) => {
				console.log(response.data);
			})
		}

		fetchMdas();
		fetchSectors();
		hideAddButtons();
		fetchContractors();
		updateGrandTotal();
		console.log("Rerendering...");
	}, [editedMilestone, milestones, project?._id]);

	const hideAddButtons = () => {
		const btns = document.querySelectorAll('.addBtn');
		for (let b = 0; b < btns.length; b++) {
			if (!btns[b].classList.contains('0-0')) {
				btns[b].classList.add('d-none')
			}
		}
	}

	const create = (e) => {
		e.preventDefault();

		let submit = true;

		submit = validateInput({ submit, inputDetails });

		// if false do not create project
		if (!submit) return;

		// upload
		const myFormData = new FormData();
		const file = document.getElementById("file");

		Object.keys(inputDetails).forEach(key => myFormData.append(inputDetails[key].name, inputDetails[key].value));
		Object.values(file.files).forEach((f, index) => myFormData.append("images", file.files[index]));

		setSubmitBtnStatus({
			active: true,
			text: "Loading..."
		});

		// submit project
		axios.post('/project/register', myFormData, {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		}).then(({ data }) => {
			// get project result
			window.toastr.success(data.data.message);
			return data.data.result;
		}).then(res => {
			// set project id to milestones
			setMileStones(prev => {
				prev.forEach(m => {
					m.project = res._id
					delete m.id;
				});
				return prev;
			});
			setEditedMilestone(pre => pre + 1);
		}).then(() => {
			// submit the milestone
			axios.post("/milestone/register", milestones).then(ress => {
				window.toastr.success(ress.data.data.message);
				window.document.querySelector("#project").reset();
				setSubmitBtnStatus({
					active: false,
					text: "Register Project"
				});
			}).catch((error) => {
				console.error("Error", error);
				setSubmitBtnStatus({
					active: false,
					text: "Try Again"
				});
				window.document.querySelector("#project").reset();
				window.toastr.error(error?.response ? error.response.data.message : error.message);
			});
		}).catch((error) => {
			console.error("Error", error);
			setSubmitBtnStatus({
				active: false,
				text: "Try Again"
			});
			window.toastr.error(error?.response ? error.response.data.message : error.message);
		});
	}

	return (
		<LocalizationProvider dateAdapter={AdapterMoment}>
			<div className="sticky top-0 z-50">
				<SearchNav />
				<Title headText="Register A Project" icon={
					<span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
						<span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
							<img alt="empty" aria-hidden="true" src={IconSVG.empty} style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }} />
						</span>
						<img alt="icon" src={IconSVG.categoryIcon} decoding="async" data-nimg="intrinsic" className="leftSideBar_nav-icon__7Dhay" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
						<noscript />
					</span>
				} />
			</div>
			<div className="h-full p-6">
				<div>
					<div className="flex flex-wrap p-0 pb-28 sm:pb-0" data-testid="discover-projects">
						<div className="card w-full">
							<div className='container'>
								<Box
									component="form"
									encType="multipart/form-data"
									noValidate
									autoComplete="off">
									<Grid container spacing={1}>
										<Grid item xs={12}>
											<TextField
												fullWidth
												type="text"
												name={inputDetails.name.name}
												value={inputDetails.name.value}
												onChange={handelInputChange}
												label="Title"
											/>
										</Grid>
										<Grid item xs={12} md={6} lg={4}>
											<DemoContainer sx={{ width: "100%" }} components={['DatePicker']}>
												<DatePicker
													className="w-full"
													label="Duration"
													value={inputDetails.duration.value}
													onChange={(e) => handelInputChange(e, inputDetails.duration.name)}
												/>
											</DemoContainer>
										</Grid>
										<Grid item xs={12} md={6} lg={4}>
											<DemoContainer components={['DatePicker']}>
												<DatePicker
													className="w-full"
													label="Date Awarded"
													value={inputDetails.date_awarded.value}
													onChange={(e) => handelInputChange(e, inputDetails.date_awarded.name)}
												/>
											</DemoContainer>
										</Grid>
										<Grid item xs={12} md={6} lg={4}>
											<DemoContainer components={["TextField"]}>
												<TextField

													fullWidth type="number"
													name={inputDetails.funding_amount.name}
													value={inputDetails.funding_amount.value}
													onChange={handelInputChange}
													label="Funding"
												/>
											</DemoContainer>
										</Grid>
										<Grid item xs={12} md={6} lg={4}>
											<TextField
												fullWidth
												type="text"
												name={inputDetails.state.name}
												value={inputDetails.state.value}
												onChange={handelInputChange}
												label="State"
											/>
										</Grid>
										<Grid item xs={12} md={6} lg={4}>
											<TextField
												fullWidth
												type="text"
												name={inputDetails.local_goverment.name}
												value={inputDetails.local_goverment.value}
												onChange={handelInputChange}
												label="LGA"
												placeholder="Local Government Area"
											/>
										</Grid>
										<Grid item xs={12} md={6} lg={4}>
											<TextField
												fullWidth
												type="text"
												name={inputDetails.location.name}
												value={inputDetails.location.value}
												onChange={handelInputChange}
												label="Location"
											/>
										</Grid>
										<Grid item xs={12} md={6} lg={4}>
											<TextField
												fullWidth
												select
												defaultValue=""
												name={inputDetails.spp_code.name}
												value={inputDetails.spp_code.value}
												onChange={handelInputChange}
												label="Contractor">
												{contractors.map((option) => (
													<MenuItem key={option._id} value={option._id}>
														{option.SPP_name}
													</MenuItem>
												))}
											</TextField>
										</Grid>
										<Grid item xs={12} md={6} lg={4}>
											<TextField
												fullWidth
												select
												defaultValue=""
												name={inputDetails.sector_code.name}
												value={inputDetails.sector_code.value}
												onChange={handelInputChange}
												label="Sector">
												{sectors.map((option) => (
													<MenuItem key={option._id} value={option._id}>
														{option.name}
													</MenuItem>
												))}
											</TextField>
										</Grid>
										<Grid item xs={12} md={6} lg={4}>
											<TextField
												fullWidth
												select
												defaultValue=""
												name={inputDetails.mda_code.name}
												value={inputDetails.mda_code.value}
												onChange={handelInputChange}
												label="MDA">
												{mdas.map((option) => (
													<MenuItem key={option._id} value={option._id}>
														{option.name}
													</MenuItem>
												))}
											</TextField>
										</Grid>
										<Grid item xs={12} md={6} lg={4}>
											<TextField
												fullWidth
												select
												defaultValue={tagsExample[0]}
												name={inputDetails.category.name}
												value={inputDetails.category.value}
												onChange={handelInputChange}
												label="Category">
												{tagsExample.map((option) => (
													<MenuItem key={option} className="uppercase" value={option}>
														{option}
													</MenuItem>
												))}
											</TextField>
										</Grid>
										<Grid item xs={12} md={6} lg={4}>
											<TextField
												inputProps={{
													readOnly: true
												}}
												fullWidth
												type="number"
												name={inputDetails.grand_total.name}
												value={inputDetails.grand_total.value}
												onChange={handelInputChange}
												label="Total"
												placeholder="Total"
											/>
										</Grid>
										<Grid item xs={12} md={6} lg={4}>
											<input
												accept="image/*"
												className=""
												style={{ display: 'none' }}
												id="file"
												multiple
												type="file"
												onChange={(e) => setImageText(e.target.files.length)}
											/>
											<label htmlFor="file">
												<button
													data-testid="login-button"
													type="button"
													onClick={(e) => e.currentTarget.parentElement.click()}
													className="w-full rounded-full bg-primary text-white py-3 text-center">
													<p className="medium">
														{imageText ? `Uploading ${imageText} Image(s)` : "Upload Images"}
													</p>
												</button>
											</label>
										</Grid>
										<Grid item xs={12}>
											<TextField
												fullWidth
												multiline
												type="text"
												name={inputDetails.description.name}
												value={inputDetails.description.value}
												onChange={handelInputChange}
												label="Description"
												placeholder="Type here..."
											/>
										</Grid>
									</Grid>

									{/* Milestone */}
									<Grid container spacing={1} sx={{ marginTop: "3em" }}>
										{organiseMilestone()().map((sortedM) => (
											sortedM.map((milestone, index, mArr) => <Grid key={index} item xs={12}>
												<div className="flex justify-between items-center text-lg">
													<h3>Milestone {milestone.level + 1}</h3>

													<ButtonGroup variant="outlined" aria-label="outlined primary button group">
														<Button onClick={handleAddMilestone}><IconPlus className="text-accepted ml-5 text-2xl bg-cream rounded-full cursor-pointer" /> New Milestone</Button>
														<Button onClick={() => handleAddMileStoneItem(milestone.level)}><IconPlus type="button" className="text-accepted cursor-pointer mx-1" />New Type</Button>
														<Button onClick={() => handleRemoveMilestone(milestone.id)}><IconTrash type="button" className={`text-abandoned cursor-pointer mx-1`} /></Button>
													</ButtonGroup>
												</div>
												<div className="m-0 p-0">
													<div className="my-2">
														<TextField
															fullWidth
															select
															defaultValue={milestoneText.preliminaries_sum}
															name="typeOf"
															value={milestone.typeOf}
															onChange={(e) => handelMilestoneChange(e, milestone.id)}
															label="Milestone Type">
															{Object.keys(milestoneText).map((key) => (
																<MenuItem key={key} value={key}>
																	{milestoneText[key]}
																</MenuItem>
															))}
														</TextField>
													</div>
													<div className={`flex`}>
														<Grid container spacing={1}>
															<Grid item xs={12} md={6} lg={3}>
																<TextField
																	fullWidth type="number"
																	name="quantity"
																	value={milestone.quantity}
																	onChange={(e) => handelMilestoneChange(e, milestone.id)}
																	label="Quantity"
																	placeholder="Enter quantity"
																/>
															</Grid>
															<Grid item xs={12} md={6} lg={3}>
																<TextField
																	fullWidth type="number"
																	name="rate"
																	value={milestone.rate}
																	onChange={(e) => handelMilestoneChange(e, milestone.id)}
																	label="Rate"
																	placeholder="Enter rate"
																/>
															</Grid>
															<Grid item xs={12} md={6} lg={3}>
																<TextField
																	fullWidth type="number"
																	name="amount"
																	value={milestone.amount}
																	onChange={(e) => handelMilestoneChange(e, milestone.id)}
																	label="Amount"
																	placeholder="Enter amount"
																/>
															</Grid>
															<Grid item xs={12} md={6} lg={3}>
																<DatePicker
																	label="Duration"
																	value={milestone.duration}
																	onChange={(e) => handelMilestoneChange(e, milestone.id, "duration")}
																/>
															</Grid>
															<Grid item xs={12}>
																<TextField
																	fullWidth
																	multiline
																	type="text"
																	name="description"
																	value={milestone.description}
																	onChange={(e) => handelMilestoneChange(e, milestone.id)}
																	label="Description"
																	placeholder="Type here..."
																/>
															</Grid>
														</Grid>
													</div>
												</div>
											</Grid>
											)))}
									</Grid>

									<Grid container spacing={1}>
										<Grid item xs={12}>
											<button
												type="submit"
												onClick={create}
												disabled={submitBtnStatus.active}
												className="w-full md:w-50 lg:w-25 rounded-full bg-primary text-white mt-12 py-3 mb-12 text-center">
												<p className="medium">{submitBtnStatus.active ? <CircularProgress color="inherit" /> : submitBtnStatus.text}</p>
											</button>
										</Grid>
									</Grid>
								</Box>
							</div>
						</div>
					</div>
				</div>
			</div>
		</LocalizationProvider>
	)
}

export default RegisterProject;