import React, { useState } from "react";
import AxiosClient from "../../../Helper/axiosClient";
import { SearchNav, Title } from "../components";
import IconSVG from "../../../components/icon/svg";
import { Box, CircularProgress, Grid, TextField, Toolbar, Typography } from "@mui/material";

const RegisterMDA = () => {
	const axios = AxiosClient();
	const [submitBtnStatus, setSubmitBtnStatus] = useState({
		active: false,
		text: "Register Sector"
	});
	const [inputDetails, setInputDetails] = useState({
		name: { name: "name", value: '' }
	});

	const handelInputChange = (e) => {
		const { name, value } = e.target;

		setInputDetails(prev => {
			return {
				...prev,
				[name]: { name, value }
			}
		});
	}

	// SUBMIT FORM DATA TO SERVER
	const handleSubmit = (e) => {
		e.preventDefault();

		setSubmitBtnStatus({
			active: true,
			text: "Loading..."
		});

		const data = {};

		Object.keys(inputDetails).forEach(key => {
			data[key] = inputDetails[key].value
		});

		axios.post('/auth/register-spp', data).then(({ data }) => {
			setSubmitBtnStatus({
				active: false,
				text: "Register Sector"
			});
			window.toastr.success("Successfully Registered SEctor");
		}).catch(({ response }) => {
			setSubmitBtnStatus({
				active: false,
				text: "Try Again"
			});
			window.toastr.error(response.data.message);
		});
	}

	return (
		<>
			<div className="sticky top-0 z-50">
				<SearchNav />
				<Title headText="Register Sector" icon={
					<span>
						<img alt="icon" src={IconSVG.categoryIcon} decoding="async" data-nimg="intrinsic" className="w-6 mr-3 leftSideBar_nav-icon_7Dhay" />
					</span>
				} />
			</div>
			<div className="h-full p-6">
				<div>
					<div className="flex flex-wrap p-0 pb-28 sm:pb-0" data-testid="discover-projects">
						<div className="card w-full">
							<div className='container'>
								<Box
									onSubmit={handleSubmit}
									component="form"
									encType="multipart/form-data"
									noValidate
									autoComplete="off">
									<Grid container spacing={1}>
										<Grid item xs={12}>
											<Toolbar sx={{ padding: "0!important" }}>
												<Typography
													variant="h6"
													component="div">
													Contractors
												</Typography>
											</Toolbar>
										</Grid>
										<Grid item xs={12} md={6}>
											<TextField
												fullWidth
												type="text"
												name={inputDetails.name.name}
												value={inputDetails.name.value}
												onChange={handelInputChange}
												label="Name"
											/>
										</Grid>
									</Grid>

									<Grid container spacing={1}>
										<Grid item xs={12}>
											<button
												type="submit"
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
		</>
	)
}

export default RegisterMDA;