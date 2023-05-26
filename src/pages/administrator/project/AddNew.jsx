import React, { useEffect, useRef, useState } from "react";
import ContentHeader from "../../../components/ContentHeader";
import FormInput from "../../../components/FormInput";
import PrimaryButton from "../../../components/PrimaryButton";
import AxiosClient from "../../../Helper/axiosClient";
import { TextField, Box, MenuItem, Button, Grid } from "@mui/material";
import FormTextArea from "../../../components/FormTextArea";
import validateInput from "./functions/validateInput";
import getFormData from "./functions/getFormData";
import { SearchNav, Title } from "../components";
import IconSVG from "../../../components/icon/svg";
import TextArea from "../components/inputs/TextArea";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from "moment";

const AddNew = () => {
	const axios = AxiosClient();
	const [imageText, setImageText] = useState(null);
	const [editedMilestone, setEditedMilestone] = useState(0);
	const [sectors, setSectors] = useState([]);
	const [mdas, setMdas] = useState([]);
	const [grandTotal, setGrandTotal] = useState(0);
	const initialInput = {
		totalRef: { name: "totalRef", focus: () => { }, value: '' },
		lgaRef: { name: "lgaRef", focus: () => { }, value: '' },
		mdaRef: { name: "mdaRef", focus: () => { }, value: '' },
		fundingRef: { name: "fundingRef", focus: () => { }, value: '' },
		fundingRef_int: { name: "fundingRef_int", focus: () => { }, value: 0 },
		titleRef: { name: "titleRef", focus: () => { }, value: '' },
		stateRef: { name: "stateRef", focus: () => { }, value: '' },
		sectorRef: { name: "sectorRef", focus: () => { }, value: '' },
		locationRef: { name: "locationRef", focus: () => { }, value: '' },
		categoryRef: { name: "categoryRef", focus: () => { }, value: '' },
		durationRef: { name: "durationRef", focus: () => { }, value: '' },
		awardDateRef: { name: "awardDateRef", focus: () => { }, value: '' },
		descriptionRef: { name: "descriptionRef", focus: () => { }, value: '' },
		sppCodeRef: { name: "sppCodeRef", focus: () => { }, value: '' }
	}
	const [inputDetails, setInputDetails] = useState(initialInput);

	const [btnStatus, setBtnStatus] = useState(false);
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
		preliminaries_sum: [{ rate: '', amount: '', duration: '', description: '', quantity: '' }],
		provisional_sums: [{ rate: '', amount: '', duration: '', description: '', quantity: '' }],
		measured_work: [{ rate: '', amount: '', duration: '', description: '', quantity: '' }]
	}]);

	// function
	const handelInputChange = (e, dateName) => {
		let { name, value, focus } = { ...e.target, name: e.target?.name || null };

		if (name === null) name = dateName;
		let innerHtml = '';

		if (e.target?.TagName === "SELECT") innerHtml = e.target?.selectedOptions[0]?.innerHTML;

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
			preliminaries_sum: [{ rate: '', amount: '', duration: '', description: '', quantity: '' }],
			provisional_sums: [{ rate: '', amount: '', duration: '', description: '', quantity: '' }],
			measured_work: [{ rate: '', amount: '', duration: '', description: '', quantity: '' }]
		}

		setMileStones(prev => {
			return [...prev, newMilestone];
		});
	};

	// function
	const handelMilestoneChange = (e) => {
		const k = e.target.parentElement;
		const val = e.target.value;
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
		const k = e.target;
		const milestoneIndex = k.dataset.milestoneIndex;
		const milestoneItem = k.dataset.milestoneItem;
		const newPreliminary = { rate: 65, amount: 76, date: "2023-05-18", description: "Lol", quantity: 1862 };

		milestones[milestoneIndex][milestoneItem].push(newPreliminary)
		setMileStones(milestones);
		hideAddButtons();
		setEditedMilestone(preVal => preVal + 1);
	}

	// function
	const handleRemoveMilestone = (e) => {
		const k = e.target;
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
					if (item === "id") return;
					milestoneItem[item].forEach(item => {
						total += Number(item.amount);
					});
				});
			});
			setGrandTotal(total);
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

	const create = () => {
		let submit = true;

		submit = validateInput({ submit, setBtnStatus, inputData: inputDetails });

		let stopValidation = false;
		// check if milestone items are  stil empty
		milestones.forEach((milestoneItem, milestoneIndex) => {
			if (stopValidation) return
			Object.keys(milestoneItem).forEach((keys) => {
				if (stopValidation) return
				if (keys === "id") return;
				milestoneItem[keys].forEach((item, itemIndex) => {
					if (stopValidation) return
					Object.keys(item).forEach(iKey => {
						if (stopValidation) return
						if (iKey === "id") return;
						if (item[iKey] === '') {
							submit = !submit;
							stopValidation = !stopValidation;
							window.toastr.error(`Milestone ${milestoneIndex + 1} ${keys} ${itemIndex + 1} ${iKey} is required`);
							return document.querySelector(`.milestone-${milestoneIndex}-${keys}-${itemIndex}-${iKey}`).focus();
						}
					});
				});
			});
		});

		// if false do not create project
		// if (!submit) return;
		// upload
		const myFormData = getFormData(inputDetails);

		axios.post('/project/register', myFormData, {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		}).then(({ data }) => {
			// setBtnStatus(true);
			// document.querySelector('#project').reset()
			console.log("data", data);
			window.toastr.success(data.data.message);
		}).catch(({ response }) => {
			// setBtnStatus(false);
			window.toastr.error(response.data.data.message)
		})
	}

	return (
		<LocalizationProvider dateAdapter={AdapterMoment}>
			<div className="sticky top-0 z-50">
				<SearchNav />
				<Title headText="Welcome" icon={<span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
					<span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
						<img alt="empty" aria-hidden="true" src={IconSVG.empty} style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }} />
					</span>
					<img alt="discover" src={IconSVG.discoverIcon} decoding="async" data-nimg="intrinsic" className="leftSideBar_nav-icon__7Dhay" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
					<noscript />
				</span>} />
			</div>
			<div className="h-full  p-6">
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
												sx={{ width: "100%!important" }}
												type="text"
												name={inputDetails.titleRef.name}
												value={inputDetails.titleRef.value}
												onChange={handelInputChange}
												label="Title"
											/>
										</Grid>
										<Grid item xs={12} md={6} lg={4}>
											<DemoContainer sx={{ width: "100%" }} components={['DatePicker']}>
												<DatePicker
													className="w-full"
													label="Duration"
													value={inputDetails.awardDateRef.value === '' && null}
													onChange={(e) => handelInputChange(e, inputDetails.durationRef.name)}
												/>
											</DemoContainer>
										</Grid>
										<Grid item xs={12} md={6} lg={4}>
											<DemoContainer components={['DatePicker']}>
												<DatePicker
													className="w-full"
													label="Date Awarded"
													value={inputDetails.awardDateRef.value === '' && null}
													onChange={(e) => handelInputChange(e, inputDetails.awardDateRef.name)}
												/>
											</DemoContainer>
										</Grid>
										<Grid item xs={12} md={6} lg={4}>
											<DemoContainer components={["TextField"]}>
												<TextField
													sx={{ width: "100%!important" }}
													type="number"
													name={inputDetails.fundingRef.name}
													value={inputDetails.fundingRef.value}
													onChange={handelInputChange}
													label="Funding"
												/>
											</DemoContainer>
										</Grid>
										<Grid item xs={12} md={6} lg={4}>
											<TextField
												sx={{ width: "100%!important" }}
												type="text"
												name={inputDetails.stateRef.name}
												value={inputDetails.stateRef.value}
												onChange={handelInputChange}
												label="State"
											/>
										</Grid>
										<Grid item xs={12} md={6} lg={4}>
											<TextField
												sx={{ width: "100%!important" }}
												type="text"
												name={inputDetails.lgaRef.name}
												value={inputDetails.lgaRef.value}
												onChange={handelInputChange}
												label="LGA"
												placeholder="Local Government Area"
											/>
										</Grid>
										<Grid item xs={12} md={6} lg={4}>
											<TextField
												sx={{ width: "100%!important" }}
												type="text"
												name={inputDetails.locationRef.name}
												value={inputDetails.locationRef.value}
												onChange={handelInputChange}
												label="Location"
											/>
										</Grid>
										<Grid item xs={12} md={6} lg={4}>
											<TextField
												sx={{ width: "100%!important" }}
												select
												defaultValue=""
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
												sx={{ width: "100%!important" }}
												select
												defaultValue=""
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
												sx={{ width: "100%!important" }}
												select
												defaultValue=""
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
												sx={{ width: "100%!important" }}
												select
												defaultValue={tagsExample[0]}
												value={inputDetails.categoryRef.value}
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
												sx={{ width: "100%!important" }}
												type="number"
												name={inputDetails.totalRef.name}
												value={inputDetails.totalRef.value}
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
												id="raised-button-file"
												multiple
												type="file"
												onChange={(e) => setImageText(e.target.files.length)}
											/>
											<label htmlFor="raised-button-file">
												<button
													data-testid="login-button"
													type="button"
													className="w-full rounded-full bg-primary text-white py-3 text-center">
													<p className="medium">
														{imageText ? `Uploading ${imageText}` : "Upload Images"}
													</p>
												</button>
											</label>
										</Grid>
										<Grid item xs={12}>
											<TextArea />
										</Grid>
									</Grid>
								</Box>
								<Grid container spacing={1}>
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
																			sx={{ width: "100%!important" }}
																			type="number"
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
																			sx={{ width: "100%!important" }}
																			type="number"
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
																			sx={{ width: "100%!important" }}
																			type="number"
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
																			value={inputDetails.awardDateRef.value === '' && null}
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
																		<TextArea value={items.description} onChange={handelMilestoneChange} inputClass={`form-control form-control-sm milestone-${index}-${key}-${mIndex}-description`} data-milestone-index={index} data-milestone-item={key} data-item-index={mIndex} data-item="description" placeholder="Enter Description" />
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
								<button
									type="button"
									onClick={create}
									className="w-full rounded-full bg-primary text-white mt-12 py-3 text-center">
									<p className="medium">Register</p>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</LocalizationProvider>
	)
}

export default AddNew;