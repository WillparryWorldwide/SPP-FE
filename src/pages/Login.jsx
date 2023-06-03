import "./Login.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
// import axios from '../Helper/axiosClient'
import { useAuthUser } from "react-auth-kit";
import { useSignIn, useIsAuthenticated } from "react-auth-kit";
import AxiosClient from "../Helper/axiosClient";
import {
	Box,
	FormControl,
	OutlinedInput,
	TextField,
	IconButton,
	InputLabel,
	InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconSVG from "../Utils/svg";
import SiteImages from "../Utils/images";

const Login = () => {
	const axios = AxiosClient();
	const { updateLoginStatus, login_status } = useAppContext();
	const [loginDetails, setLoginDetails] = useState({
		username: '',
		password: '',
		usernameErr: false,
		passwordErr: false
	});
	const navigate = useNavigate();
	const SignIn = useSignIn();
	const isAuthenticated = useIsAuthenticated();
	const userData = useAuthUser();

	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => event.preventDefault();

	useEffect(() => {
		if (isAuthenticated()) window.location.pathname = "/spp/dashboard";
		console.log("Render...");
	}, [isAuthenticated, navigate, userData]);

	document.body.classList.add("hold-transition", "login-page");

	const handelTextChange = (e) => {
		const { name, value } = e.target;

		setLoginDetails(pre => {
			return {
				...pre,
				[name]: value
			}
		});
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		if (loginDetails.username === '') {
			setLoginDetails(pre => {
				return {
					...pre,
					usernameErr: !pre.usernameErr
				}
			});
			window.toastr.error("Enter your user code");
		} else if (loginDetails.password === '') {
			setLoginDetails(pre => {
				return {
					...pre,
					passwordErr: !pre.passwordErr
				}
			});
			window.toastr.error("Password is required");
		} else {
			const data = {
				username: loginDetails.username,
				password: loginDetails.password,
			};

			axios.post("/auth/login", data).then(({ data }) => {
				console.log(data);
				const user = data.data;
				window.toastr.success(data.alert);
				if (
					SignIn({
						token: user.token,
						expiresIn: 1440,
						tokenType: "Bearer",
						authState: user,
						refreshToken: user.token,
						refreshTokenExpireIn: 1440,
					})
				) {
					updateLoginStatus(!login_status);
					window.location.pathname = "/spp/dashboard";
				}
			}).catch((err) => {
				console.error("errrorr", err);
				err.response
					? window.toastr.error(err.response.data.message)
					: window.toastr.error(err.message);
			});
		}
	};

	return (
		<>
			<div className="Toastify"></div>

			<div data-testid="login-form">
				<div
					className="bg-white sm:bg-grey-white h-screen lg:min-h-screen sm:overflow-y-hidden relative"
					id="login-page"
				>
					<div className="lg:w-11/12 xl:w-9/12 sm:w-9/12 w-full mx-auto h-full sm:h-5/6">
						<div className="sm:shadow-login md:rounded-lg bg-white w-full md:h-full h-full flex sm:mt-10 relative">
							<div className="lg:w-6/12 w-full px-5 sm:px-10 py-11 overflow-y-auto flex flex-col justify-center">
								<div>
									<div
										id="g_id_onload"
										data-client_id="884316028568-opn1m6dkaerej3acn6t6soqqieqovk65.apps.googleusercontent.com"
										data-callback="handleLogin"
										data-prompt_parent_id="g_id_onload"
									></div>

									<div className="false relative">
										<p className="text-dark-grey medium text-sm mt-7">
											Welcome Back
										</p>

										<p className="text-sm pr-2 mt-2 text-auth-subtext">
											Enter your email address and password to log in.
										</p>
										{/* form */}
										<Box
											onSubmit={handleSubmit}
											className="w-100"
											component="form"
											sx={{
												"& > :not(style)": { m: 1, width: "100%" },
											}}
										>
											<TextField
												id="email"
												label="Email or SPP Code"
												error={loginDetails.usernameErr}
												focused={loginDetails.usernameErr}
												name="username"
												value={loginDetails.username}
												onChange={handelTextChange}
												type="text"
												className="text-black w-full h-full bg-transparent text-sm focus:outline-none relative z-20"
												variant="outlined"
											/>
											<FormControl
												sx={{ m: 1, width: "25ch" }}
												variant="outlined"
											>
												<InputLabel htmlFor="outlined-adornment-password">
													Password
												</InputLabel>
												<OutlinedInput
													id="password"
													type={showPassword ? "text" : "password"}
													className="text-black w-full h-full bg-transparent text-sm focus:outline-none relative z-20"
													name="password"
													error={loginDetails.passwordErr}
													autoFocus={loginDetails.passwordErr}
													value={loginDetails.password}
													onChange={handelTextChange}
													endAdornment={
														<InputAdornment position="end">
															<IconButton
																aria-label="toggle password visibility"
																onClick={handleClickShowPassword}
																onMouseDown={handleMouseDownPassword}
																edge="end"
															>
																{showPassword ? (
																	<VisibilityOff />
																) : (
																	<Visibility />
																)}
															</IconButton>
														</InputAdornment>
													}
													label="Password"
												/>
											</FormControl>
											<button
												data-testid="login-button"
												type="button"
												onClick={handleSubmit}
												className="w-full rounded-full bg-primary text-white mt-12 py-3 text-center"
											>
												<p className="medium">Log In</p>
											</button>

											<p className="text-xs text-center mt-6 cursor-pointer text-accepted underline">
												Forgot Password?
											</p>

											<div className="flex justify-between items-center mx-[8%] mt-10 mb-9 hidden">
												<div className="h-[1px] bg-input-border flex-1"></div>
												<span className="mx-[5%]">or</span>

												<div className="h-[1px] bg-input-border flex-1"></div>
											</div>

											<p className="text-center mt-6 text-sm text-light-grey-6 medium cursor-pointer">
												Don't have an account?
												<span className="text-dark-grey medium">
													Create Account
												</span>
											</p>
										</Box>
									</div>
								</div>
							</div>

							<div className="lg:w-6/12 hidden lg:block relative border-l border-grey-white px-5 sm:px-10 py-11 overflow-y-auto">
								<div className="absolute top-0 right-0">
									<img
										alt=""
										loading="lazy"
										width="496"
										height="190"
										decoding="async"
										data-nimg="1"
										src={IconSVG.login_motif_1}
										className="FOAIEJA"
									/>
								</div>

								<div className="absolute bottom-0 left-0">
									<img
										alt=""
										loading="lazy"
										width="552"
										height="282"
										decoding="async"
										data-nimg="1"
										src={IconSVG.login_motif_2}
										className="FOAIEJA"
									/>
								</div>

								<div className="flex flex-col justify-between relative z-30 items-center h-full">
									<div className="text-2-xs text-center opacity-0 text-[#C9CACD] ">
										<span className="underline text-accepted">
											Terms of Service
										</span>
										&amp;
										<span className="underline text-accepted">
											Privacy Policy
										</span>
									</div>
									<Link to="/">
										<img
											alt="login-logo"
											loading="lazy"
											width="150em"
											height="70"
											decoding="async"
											data-nimg="1"
											className="FOAIEJA mx-auto"
											src={SiteImages.logo}
										/>
									</Link>
									<div className="text-center">
										<p className="text-2-xs text-[#C9CACD]">supervised by</p>

										<p className="mt-2 text-xs text-accepted">
											Federal Ministry of Finance, Budget &amp; National
											Planning
										</p>
									</div>
									<Link
										to="https://forms.gle/Z8BbmTS7JJXVEkwu7"
										target="_blank"
										rel="noreferrer"
									>
										<div className="px-4 py-3 bg-accepted-light bg-opacity-50 rounded-2xl flex space-x-4">
											<div>
												<p className="text-xs text-accepted">
													Need a CSO account?
												</p>

												<p className="mt-1 text-2-xs">Send Us a request</p>
											</div>
											<button className="px-4 py-2  rounded-lg bg-white">
												<img
													alt="login-logo"
													loading="lazy"
													width="12"
													height="8"
													decoding="async"
													data-nimg="1"
													src={IconSVG.arrowForwardGreen}
													className="FOAIEJA"
												/>
											</button>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
// //
// < form method="POST" >
//     //
// 	<FormInput placeholder="Enter User Code or Email" className="input-group mb-3" ref={sppCodeRef} />
//     //
// 	<FormInput placeholder="Enter Password" type="password" className="input-group mb-3" ref={passwordRef} />
//     //
// 	<PrimaryButton className="btn btn-primary btn-block" disabled={btnStatus ? 'disabled' : ''} title="Submit" type="submit" onClick={(e) => handleSubmit(e)} />
//     //
// </ >
