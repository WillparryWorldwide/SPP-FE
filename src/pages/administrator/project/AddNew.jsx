import React, { useEffect, useRef, useState } from "react";
import ContentHeader from "../../../components/ContentHeader";
import FormInput from "../../../components/FormInput";
import PrimaryButton from "../../../components/PrimaryButton";
import AxiosClient from "../../../Helper/axiosClient";
import { TextField, Box, MenuItem, Button, Grid } from "@mui/material";
import FormTextArea from "../../../components/FormTextArea";
import validateInput from "./functions/validateInput";
import { SearchNav, Title } from "../components";
import IconSVG from "../../../components/icon/svg";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from "moment";

const AddNew = () => {
	const axios = AxiosClient();
	const [imageText, setImageText] = useState(null);
	const [submitBtnStatus, setSubmitBtnStatus] = useState({
		active: true,
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
	const [milestones, setMileStones] = useState([{
		preliminaries_sum: [{ rate: '', amount: '', duration: null, description: '', quantity: '' }],
		provisional_sums: [{ rate: '', amount: '', duration: null, description: '', quantity: '' }],
		measured_work: [{ rate: '', amount: '', duration: null, description: '', quantity: '' }]
	}]);

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
	const handleAddMilestone = (e) => {
		e.preventDefault();
		const newMilestone = {
			preliminaries_sum: [{ rate: '', amount: '', duration: null, description: '', quantity: '' }],
			provisional_sums: [{ rate: '', amount: '', duration: null, description: '', quantity: '' }],
			measured_work: [{ rate: '', amount: '', duration: null, description: '', quantity: '' }]
		}

		setMileStones(prev => {
			return [...prev, newMilestone];
		});
	};

	// function
	const handelMilestoneChange = (e, dateDataSet) => {
		let k = e?.target;

		if (!k) k = { value: e, dataset: { ...dateDataSet } }

		const val = k.value;
		const milestoneIndex = k.dataset.milestoneIndex;
		const milestoneItem = k.dataset.milestoneItem;
		const itemIndex = k.dataset.itemIndex;
		const item = k.dataset.item;

		setMileStones(preVal => {
			preVal[milestoneIndex][milestoneItem][itemIndex][item] = val;
			return preVal;
		});
		setEditedMilestone(preVal => preVal + 1);
	}

	// function
	const handleAddMileStoneItem = (e) => {
		const k = e.currentTarget;
		const milestoneIndex = k.dataset.milestoneIndex;
		const milestoneItem = k.dataset.milestoneItem;
		const newPreliminary = { rate: 65, amount: 76, duration: moment(moment.now()).format("YYYY-MM-DD"), description: "Lol", quantity: 1862 };

		milestones[milestoneIndex][milestoneItem].push(newPreliminary)
		setMileStones(milestones);
		hideAddButtons();
		setEditedMilestone(preVal => preVal + 1);
	}

	// function
	const handleRemoveMilestone = (e) => {
		const k = e.currentTarget;
		const milestoneIndex = k.dataset.milestoneIndex;
		const milestoneItem = k.dataset.milestoneItem;
		const itemIndex = k.dataset.itemIndex;

		milestones[milestoneIndex][milestoneItem].length > 1 && milestones[milestoneIndex][milestoneItem].splice(itemIndex, 1);
		setMileStones(milestones);
		setEditedMilestone(preVal => preVal + 1);
	};

	useEffect(() => {
		const updateGrandTotal = () => {
			let total = 0;
			milestones.forEach(milestoneItem => {
				Object.keys(milestoneItem).forEach(item => {
					milestoneItem[item].forEach(item => {
						total += Number(item.amount);
					});
				});
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
	}, [editedMilestone, milestones]);

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

		setSubmitBtnStatus({
			active: false,
			text: "Loading..."
		});

		let submit = true;

		submit = validateInput({ submit, inputDetails });

		// if false do not create project
		if (!submit) return;

		// upload
		const myFormData = new FormData();
		const file = document.getElementById("file");

		Object.keys(inputDetails).forEach(key => myFormData.append(inputDetails[key].name, inputDetails[key].value));
		Object.values(file.files).forEach((f, index) => myFormData.append("images", file.files[index]));
		myFormData.append("milestones", JSON.stringify(milestones));

		axios.post('/project/register', myFormData, {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		}).then(({ data }) => {
			// setBtnStatus(true);
			// document.querySelector('#project').reset()
			console.log("data", data);
			setSubmitBtnStatus({
				active: true,
				text: "Register Project"
			});
			window.toastr.success(data.data.message);
		}).catch((error) => {
			// setBtnStatus(false);
			console.error("Error", error);
			window.toastr.error(error?.response ? error.response.data.message : error.message);
		})
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
													<MenuItem key={option} value={option}>
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
										{milestones.map((milestone, index) => (
											<Grid key={index} item xs={12}>
												<h3 className="flex justify-start items-center text-lg">
													<span>Milestone {index + 1}</span>
													<IconPlus
														onClick={handleAddMilestone}
														className="text-accepted ml-5 text-2xl bg-cream rounded-full cursor-pointer"
													/>
												</h3>
												{
													Object.keys(milestone).map(key => {
														if (key === "id") return null;
														return milestone[key].map((items, mIndex, mArr) => (
															<div key={key + '-' + mIndex} className="m-0 p-0">
																<div className="flex justify-between items-center">
																	<h5 className="text-sm">{milestoneText[key]} {mIndex + 1}</h5>
																	<div className="flex justify-around items-center">
																		{mIndex === 0 && <IconPlus type="button" className="text-accepted cursor-pointer mx-1" onClick={handleAddMileStoneItem} data-milestone-index={index} data-milestone-item={key} />}
																		{mArr.length - 1 ? <IconTrash type="button" className={`text-abandoned cursor-pointer mx-1 ${index}-${mIndex}`} onClick={handleRemoveMilestone} data-milestone-index={index} data-milestone-item={key} data-item-index={mIndex} /> : null}
																	</div>
																</div>
																<div className={`${key} flex`}>
																	<Grid container spacing={1}>
																		<Grid item xs={12} md={6} lg={3}>
																			<TextField
																				className={`milestone-${index}-${key}-${mIndex}-quantity`}

																				fullWidth type="number"
																				name="quantity"
																				value={items.quantity}
																				onChange={handelMilestoneChange}
																				label="Quantity"
																				placeholder="Enter quantity"
																				inputProps={{
																					"data-milestone-index": index,
																					"data-milestone-item": key,
																					"data-item-index": mIndex,
																					"data-item": "quantity"
																				}}
																			/>
																		</Grid>
																		<Grid item xs={12} md={6} lg={3}>
																			<TextField
																				className={`milestone-${index}-${key}-${mIndex}-rate`}

																				fullWidth type="number"
																				name="rate"
																				value={items.rate}
																				onChange={handelMilestoneChange}
																				label="Rate"
																				placeholder="Enter rate"
																				inputProps={{
																					"data-milestone-index": index,
																					"data-milestone-item": key,
																					"data-item-index": mIndex,
																					"data-item": "rate"
																				}}
																			/>
																		</Grid>
																		<Grid item xs={12} md={6} lg={3}>
																			<TextField
																				className={`milestone-${index}-${key}-${mIndex}-amount`}

																				fullWidth type="number"
																				name="amount"
																				value={items.amount}
																				onChange={handelMilestoneChange}
																				label="Amount"
																				placeholder="Enter amount"
																				inputProps={{
																					"data-milestone-index": index,
																					"data-milestone-item": key,
																					"data-item-index": mIndex,
																					"data-item": "amount"
																				}}
																			/>
																		</Grid>
																		<Grid item xs={12} md={6} lg={3}>
																			<DatePicker
																				className={`w-full milestone-${index}-${key}-${mIndex}-date`}
																				label="Duration"
																				value={inputDetails.date_awarded.value}
																				onChange={(e) => handelMilestoneChange(e, {
																					milestoneIndex: index,
																					milestoneItem: key,
																					itemIndex: mIndex,
																					item: "duration"
																				})}
																				data-milestone-index={index}
																				data-milestone-item={key}
																				data-item-index={mIndex}
																				data-item="duration"
																			/>
																		</Grid>
																		<Grid item xs={12}>
																			<TextField
																				className={`milestone-${index}-${key}-${mIndex}-description`}
																				fullWidth
																				multiline
																				type="text"
																				name="description"
																				value={items.description}
																				inputProps={{
																					"data-milestone-index": index,
																					"data-milestone-item": key,
																					"data-item-index": mIndex,
																					"data-item": "description"
																				}}
																				onChange={handelMilestoneChange}
																				label="Description"
																				placeholder="Type here..."
																			/>
																		</Grid>
																	</Grid>
																</div>
															</div>
														));
													})
												}
											</Grid>
										))}
									</Grid>

									<Grid container spacing={1}>
										<Grid item xs={12}>
											<button
												type="submit"
												onClick={create}
												disabled={submitBtnStatus.active}
												className="w-full md:w-50 lg:w-25 rounded-full bg-primary text-white mt-12 py-3 mb-12 text-center">
												<p className="medium">{submitBtnStatus.text}</p>
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

export default AddNew;