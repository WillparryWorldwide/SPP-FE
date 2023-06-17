import _ from "lodash";
import IconSVG from "../../../Utils/svg";
import { SearchNav, Title } from "../components";
import React, { useEffect, useState } from "react";
import AxiosClient from "../../../Helper/axiosClient";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Box, Grid, CircularProgress, Button, ButtonGroup } from "@mui/material";
import { default as orgMilS } from "../../functions/organiseMilestone";
import MilestoneInput from "./functions/milestoneInput";
import ProjectInputField from "./functions/projectInputFields";
import registerProject from "./functions/registrProject";

const RegisterProject = () => {
	const axios = AxiosClient();
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
		state: { name: "state", focus: () => { }, value: "DELTA" },
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
	const tagsExample = _.sortBy(['LEGACY', 'CHILDCARE', 'MATERNAL MOTALITY', 'MEGA PROJECT', 'ROAD', 'TECHNOLOGY', 'SCHOOL']);
	const local_goverment_arr = _.sortBy(['OSHIMILI', 'ANIOCHA', 'ANIOCHA SOUTH', 'IKA SOUTH', 'IKA NORTH-EAST', 'NDOKWA WEST', 'NDOKWA EAST', 'ISOKO SOUTH', 'ISOKO NORTH', 'BOMADI', 'BURUTU', 'UGHELLI SOUTH', 'UGHELLI NORTH', 'ETHIOPE WEST', 'ETHIOPE EAST', 'SAPELE', 'OKPE', 'WARRI NORTH', 'WARRI SOUTH', 'UVWIE', 'UDU', 'WARRI CENTRAL', 'UKWANI', 'OSHIMILI NORTH', 'PATANI']);

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

	const organiseMilestone = orgMilS(milestones);

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
				setSectors(data.result);
			}).catch(({ response }) => {
				console.log(response.data.message);
			})
		}

		const fetchMdas = () => {
			axios.get('/mda/all').then(({ data }) => {
				setMdas(data.result);
			}).catch(({ response }) => {
				console.log(response.data.message);
			})
		}

		const fetchContractors = async () => {
			await axios.get('/admin/all-spp/q?role=contractor').then(({ data }) => {
				setContractors(data.result);
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
	}, [editedMilestone, milestones]);

	const hideAddButtons = () => {
		const btns = document.querySelectorAll('.addBtn');
		for (let b = 0; b < btns.length; b++) {
			if (!btns[b].classList.contains('0-0')) {
				btns[b].classList.add('d-none')
			}
		}
	}

	const create = registerProject(inputDetails, setSubmitBtnStatus, axios, milestones);

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
									id="project"
									component="form"
									encType="multipart/form-data"
									noValidate
									autoComplete="off">
									{/* input fields */}
									<ProjectInputField inputDetails={inputDetails} handelInputChange={handelInputChange} contractors={contractors} sectors={sectors} mdas={mdas} tagsExample={tagsExample} local_goverment_arr={local_goverment_arr} setImageText={setImageText} imageText={imageText} />
									{/* Milestone */}
									<Grid container spacing={1} sx={{ marginTop: "3em" }}>
										{organiseMilestone().map((sortedM) => (
											sortedM.map((milestone, index, mArr) => <Grid key={index} item xs={12}>
												<div className="flex justify-between items-center text-lg">
													<h3>Milestone {milestone.level + 1}</h3>

													<ButtonGroup variant="outlined" aria-label="outlined primary button group">
														<Button onClick={handleAddMilestone}><IconPlus className="text-accepted ml-5 text-2xl bg-cream rounded-full cursor-pointer" /> New Milestone</Button>
														<Button onClick={() => handleAddMileStoneItem(milestone.level)}><IconPlus type="button" className="text-accepted cursor-pointer mx-1" />New Type</Button>
														<Button onClick={() => handleRemoveMilestone(milestone.id)}><IconTrash type="button" className={`text-abandoned cursor-pointer mx-1`} /></Button>
													</ButtonGroup>
												</div>
												<MilestoneInput milestoneText={milestoneText} milestone={milestone} handelMilestoneChange={handelMilestoneChange} />
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