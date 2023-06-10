import { useState, useEffect } from 'react';
import EngineeringIcon from '@mui/icons-material/Engineering';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import PaymentsIcon from '@mui/icons-material/Payments';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import moment from 'moment';
import SiteImages from '../../../Utils/images';
import useProjectMilestone from '../../../Hooks/useProjectMilestone';
import IconSVG from '../../../Utils/svg';
import UpdateStatusMenu from '../muiComponent/dropDownMenu';
import { useAuthUser } from 'react-auth-kit';
import { useLocation } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { IconPlus } from "@tabler/icons-react";
import CustomModal from '../../general-public/modal/customModal';
import useUpdateProject from '../../../Hooks/useupdateproject';

const OverView = ({ project, setTab, onEdit }) => {
	const options = { month: 'long', year: 'numeric', day: 'numeric' };
	const [year, setYear] = useState(0);
	const [month, setMonth] = useState(0);
	const [day, setDay] = useState(0);
	const [timeLine, setTimeLine] = useState('Year');
	const [moneySpent, setMoneySpent] = useState(0);
	const userData = useAuthUser()();
	const [progress, setProgress] = useState(0);
	const { pMilestone, fetchProjectMilestone } = useProjectMilestone();
	const location = useLocation();
	const showUpdateStatusMenu = ((userData?.role?.toLowerCase() === "admin") && (location.pathname.search("/spp") === 0));
	// For update project
	const {upDAteProject, loading: updatingProject, data: updatedData } = useUpdateProject();
	// For modal
	const [openFundingModal, setOpenFundingModal] = useState(false);
	// for input
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

	const handleAddFunding = () => {
		upDAteProject(project._id, {funding_amount_int: inputDetails.funding_amount.value}).then(r => setOpenFundingModal(false));
	}

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

	useEffect(() => {
		if (project._id) {
			fetchProjectMilestone(project._id);
		}
		console.log("Rendering...");
	}, [project._id]);

	useEffect(() => {

		var spent = 0;
		var compMilstone = 0;

		if (pMilestone.length > 0) {
			pMilestone.forEach(element => {
				if (element.completed) {
					compMilstone = compMilstone + 1;
					spent = spent + parseInt(element.amount);
				}
			});

			setMoneySpent(spent);
			setProgress(((compMilstone / ((pMilestone).length * 3)) * 100));
			setDay(moment(project.duration).diff(project.date_awarded, 'days'));
			setYear(moment(project.duration).diff(project.date_awarded, 'Years'));
			setMonth(moment(project.duration).diff(project.date_awarded, 'Months'));
		}

		console.log("Rendering...");
	}, [pMilestone.length, updatedData?.funding_amount?.length]);

	useEffect(() => {
		if (year > 0) {
			setTimeLine(`${year} Years`);
		} else if (month > 0) {
			setTimeLine(`${month} Months`);
		} else {
			setTimeLine(`${day} Days`);
		}
	}, [year, month]);
console.log(pMilestone)
	return (
		project._id ?
			<div className="flex-shrink-0">
				<CustomModal title="Add More Funding" confirm={{ confirmText: "confirm", cancelText: "Close", isLoading: updatingProject, handleConfirm: handleAddFunding }} open={{init: openFundingModal, set: setOpenFundingModal}}>
					<div className="w-full flex-shrink-0 mt-4 lg:mt-0">
						<div className="projectPage_project-location-card__f7FjG">
							<div className="flex items-center justify-between mt-4 text-2-xs">
								<p className="uppercase medium">Previous Funding</p>
							</div>
							<div className="flex items-center text-xs space-x-1">
								<p className="medium">
									{
										project.funding_amount.map((amount, index) =>
											<span key={index} className="text-light-grey-2 mx-3">
												NGN	{amount}
											</span>
										)
									}
								</p>
							</div>
							<div>
								<TextField
									fullWidth type="number"
									name={inputDetails.funding_amount.name}
									value={inputDetails.funding_amount.value}
									onChange={handelInputChange}
									label="Funding"
								/>
							</div>
						</div>
					</div>
				</CustomModal>
				<div className="flex justify-between">
					<p className="px-6 pb-10 hidden sm:block projectPage_project-name__LJ03Z w-auto" data-testid="project-name">{project.name}</p>
					{
						showUpdateStatusMenu && <div className="flex sm:justify-center md:justify-between items-center m-5 md:m-0 md:mr-5">
							<UpdateStatusMenu id={project._id} name={project.status} onChanged={onEdit} />
							<Button className="ml-5" color="inherit" size="small" onClick={() => setOpenFundingModal(pre => !pre)}><IconPlus /> Add Funding</Button>
						</div>
					}
				</div>
				<div className="flex items-start flex-wrap lg:flex-nowrap justify-between mb-7 px-6 mt-5">
					<div className="w-full lg:w-9/12">
						<div className="">
							<p className="text-2-xs text-light-grey-2"></p>
							<div className="mt-1">
								<p className="text-2-xs uppercase text-input-border">SUPERVISING MDA</p>
								<div className="flex items-center space-x-2 flex-shrink-0 mt-1 cursor-pointer">
									<div className="h-6 w-6 sm:h-10 sm:w-10 rounded-full object-cover">
										<img alt="Nigerian Railway Mordernization (Idu to Kaduna)" width="100" height="100" decoding="async" data-nimg="1" className="h-6 w-6 sm:h-10 sm:w-10 rounded-full object-cover" style={{ color: 'transparent', backgroundSize: 'cover', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat', backgroundImage: 'url()' }} src={SiteImages.federal} />
									</div>
									<p className="text-sm lg:text-lg medium" data-testid="project-display_name">FEDERAL MINISTRY OF {project.category.toUpperCase()} </p>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full sm:w-7/12 lg:w-3/12 flex-shrink-0 mt-4 lg:mt-0">
						<div className="projectPage_project-location-card__f7FjG">
							<div className="flex items-center text-xs space-x-1">
								<p className="text-dark-grey medium">
									<span className=""><span className="capitalize">{(project.local_goverment)?.toUpperCase()}</span><span className="text-light-grey-2"></span></span>
								</p>
							</div>
							<div className="flex items-center justify-between mt-4 text-2-xs">
								<p className="uppercase medium text-input-border">LOCAL GOVERMENT AREA</p>
							</div>
						</div>
					</div>
				</div>
				<div className="lg:hidden px-6 mb-5">
					<div className="flex items-center space-x-3 py-5 border-b border-grey-stroke">
						<p className="text-accepted">•</p>
						<div>
							<p className="text-xs uppercase">{project.code}</p>
							<p className="text-input-border text-2-xs uppercase">PROJECT CODE</p>
						</div>
					</div>
					<div className="flex items-center space-x-3 py-5 border-b border-grey-stroke">
						<p className="text-accepted">•</p>
						<div>
							<p className="text-xs">{(project.sector_code?.name)?.toUpperCase()}</p>
							<p className="text-input-border text-2-xs uppercase">SECTOR</p>
						</div>
					</div>
					<div className="flex items-center space-x-3 py-5">
						<p className="text-accepted">•</p>
						<div>
							<p className="text-xs">{(project.location)?.toUpperCase()}</p>
							<p className="text-input-border text-2-xs uppercase">LOCATION</p>
						</div>
					</div>
				</div>
				<div className="projectPage_project-info-cards__3SQz7">
					<div className="flex flex-col lg:flex-row w-full lg:space-x-2">
						<div className="bg-white rounded-lg p-4 mb-2 flex justify-between items-center w-full lg:w-6/12">
							<div className="flex flex-col justify-between w-5/12">
								<div>
									<p className="text-2xl capitalize medium">{(project.status)?.toUpperCase()}</p>
									<p className="projectPage_project-info-card-title__qwoK4">PROJECT STATUS</p>
								</div>
							</div>
							<div className="w-6/12 h-full flex flex-col justify-center">
								<Box sx={{ position: 'relative', display: 'inline-flex', width: '100%', height: '100%' }}>
									<CircularProgress size={'100%'} color="primary" variant="determinate" value={progress} />
									<Box
										sx={{
											top: 0,
											left: 0,
											bottom: 0,
											right: 0,
											position: 'absolute',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
										}}>
										<Typography
											variant="caption"
											component="div"
											color="text.secondary">{`${Math.round(progress)}%`}</Typography>
									</Box>
								</Box>
							</div>
						</div>
						<div className="w-full lg:w-6/12 mb-2">
							<div className="flex space-x-2 h-1/2">
								<div className="w-6/12">
									<div className="projectPage_project-info-card___Ix8v h-full"><span
										style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0', margin: '0', padding: '0', position: 'relative', maxWidth: '100%' }}>
										<MonetizationOnIcon />
									</span>
										<div>
											<p className="projectPage_project-info-card-content__YOwSw uppercase"
												data-testid="project-total_project_cost">₦{project.grand_total}</p>
											<p className="projectPage_project-info-card-title__qwoK4">TOTAL PROJECT COST</p>
										</div>
									</div>
								</div>
								<div className="w-6/12">
									<div className="projectPage_project-info-card___Ix8v h-full"><span
										style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0', margin: '0', padding: '0', position: 'relative', maxWidth: '100%' }}>
										<HistoryToggleOffIcon />
									</span>
										<div>
											<p className="projectPage_project-info-card-content__YOwSw" data-testid="project-timeline">{timeLine}</p>
											<p className="projectPage_project-info-card-title__qwoK4">PROJECT TIMELINE</p>
										</div>
									</div>
								</div>
							</div>
							<div className="flex space-x-2 h-1/2 pt-2">
								<div className="w-6/12">
									<div className="projectPage_project-info-card___Ix8v h-full"><span
										style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0', margin: '0', padding: '0', position: 'relative', maxWidth: '100%' }}>
										<PlayCircleOutlineIcon />
									</span>
										<div>
											<p className="projectPage_project-info-card-content__YOwSw " data-testid="project-start_date">{(new Date(project.date_awarded)).toLocaleDateString('en-US', options)}</p>
											<p className="projectPage_project-info-card-title__qwoK4">START DATE</p>
										</div>
									</div>
								</div>
								<div className="w-6/12">
									<div className="projectPage_project-info-card___Ix8v h-full"><span
										style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0', margin: '0', padding: '0', position: 'relative', maxWidth: '100%' }}>
										<StopCircleIcon />
									</span>
										<div>
											<p className="projectPage_project-info-card-content__YOwSw " data-testid="project-end_date">{(new Date(project.duration)).toLocaleDateString('en-US', options)}</p>
											<p className="projectPage_project-info-card-title__qwoK4">END DATE</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col lg:flex-row w-full lg:space-x-2">
						<div className="flex mb-2 w-full lg:w-6/12 space-x-2">
							<div className="w-6/12">
								<div className="projectPage_project-info-card___Ix8v relative">
									<div className="mb-6 flex justify-between items-center w-full"><span
										style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0', margin: '0', padding: '0', position: 'relative', maxWidth: '100%' }}>
										<PaymentsIcon />
									</span>
										<div className="relative group-appro">
											<div className="" data-testid="project-appropriated_more_info"><button className=""><span
												style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0', margin: '0', padding: '0', position: 'relative', maxWidth: '100%' }}></span></button>
											</div>
											<div
												className="w-52 lg:w-72 p-4 z-10 false absolute rounded-lg bg-white -left-20 sm:left-0 hidden"
												style={{ boxShadow: '0px 9px 45px rgba(61, 132, 172, 0.2)' }}
												data-testid="project-appropriated_more_info_dropdown">
												<div className="lg:hidden absolute top-4 right-4 h-4"><span
													style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0', margin: '0', padding: '0', position: 'relative', maxWidth: '100%' }}></span>
												</div>
												<p className="text-sm medium text-accepted ">Appropriation Breakdown</p>
												<p className="text-xs text-light-grey-2 mt-2 medium">Total</p>
												<p className="mt-0.5 pb-2 border-b border-light-grey-4 medium">_</p>
												<div className="mt-2"></div>
											</div>
										</div>
									</div>
									<div>
										<p className="projectPage_project-info-card-content__YOwSw uppercase"
											data-testid="project-total_appropriated">₦{project.funding_amount}</p>
										<p className="projectPage_project-info-card-title__qwoK4">TOTAL APPROPRIATED</p>
									</div>
								</div>
							</div>
							<div className="w-6/12">
								<div className="projectPage_project-info-card___Ix8v"><span
									style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0', margin: '0', padding: '0', position: 'relative', maxWidth: '100%' }}>
									<PriceCheckIcon />
								</span>
									<div>
										<p className="projectPage_project-info-card-content__YOwSw uppercase"
											data-testid="project-amount_spent_so_far">₦{moneySpent}</p>
										<p className="projectPage_project-info-card-title__qwoK4">AMOUNT SPENT SO FAR</p>
									</div>
								</div>
							</div>
						</div>
						
					</div>
				</div>
				<div className="px-6 text-dark-grey">
					<div className="projectPage_project-overview-card__6pxG4">
						<h2 className="medium">Project Description</h2>
						<p className="text-input-border text-sm">Below explains what this project is all about.</p>
						<div className="mt-6 text-sm"><span className="" data-testid="project-description">{project.description}</span></div>
					</div>
				</div>
				<div className="mt-4 px-6">
					<div className="projectPage_project-overview-card__6pxG4">
						<p className="medium">Contractors</p>
						<p className="text-input-border text-sm">Below are the contractors working on this project.</p>
						<div className="mt-6 flex items-center flex-wrap space-x-5 overflow-x-auto"
							data-testid="project-contractors">

							<div>
								<div className='bg-grey-white space-x-3 px-3 py-2 flex items-center rounded'>
									<EngineeringIcon />
									<p className="text-sm medium">{project.spp_code?.SPP_name}</p>
								</div>
								<div>
									{/* <p><strong className="text-input-border text-sm">HOO</strong> {project.spp_code.hoo_fullname}</p> */}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-4 px-6">
					<div className="projectPage_project-overview-card__6pxG4">
						<p className="medium">Sectors</p>
						<p className="text-input-border text-sm">Below are the Sectors on this project.</p>
						<div className="mt-6 flex items-center flex-wrap space-x-5 overflow-x-auto"
							data-testid="project-contractors">

							<div>
								<div className='bg-grey-white space-x-3 px-3 py-2 flex items-center rounded'>
									<EngineeringIcon />
									<p className="text-sm medium">{project.sector_code?.name}</p>
								</div>
								<div>
									{/* <p><strong className="text-input-border text-sm">HOO</strong> {project.spp_code.hoo_fullname}</p> */}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-4 px-6">
					<div className="projectPage_project-overview-card__6pxG4">
						<p className="medium">Sustainable Development Goal<span className="text-2-xs text-light-grey-5">(0)</span></p>
						<p className="text-input-border text-sm">Below are the Sustainable Development Goals this project targets.</p>
						<div className="mt-3 flex flex-wrap items-center" data-testid="project-sustainable_development_goals">
							<ul>
								{
									pMilestone.map((pm, index) => <li key={index}>{pm.description.substring(0, 109)}... (Read more)</li>)
								}
							</ul>
						</div>
					</div>
				</div>
				<div>
					<div className="mt-4 px-6">
						<div className="projectPage_project-overview-card__6pxG4">
							<p className="medium mb-4">Project Location <span className="text-2-xs text-light-grey-5">2</span></p>
							<p><strong className="text-input-border text-sm">State</strong> {project.state}</p>
							<p><strong className="text-input-border text-sm">Local Goverment Area</strong> {project.local_goverment}</p>
							<p><strong className="text-input-border text-sm">Location</strong> {project.location}</p>
						</div>
					</div>
				</div>
				<div className="mt-4">
					<div className="px-6">
						<div className="projectPage_project-overview-card__6pxG4">
							<div className="flex justify-between">
								<p className="medium">Project Reviews </p>
								<div onClick={() => setTab(4)} className="projectPage_see-all__FjyO9 text-primary" >view all</div>
							</div>
							<div className="mt-8 flex flex-col lg:flex-row lg:items-center">
								{/* NOTE: Make a calculaiton for this part, not important */}
								<div className="lg:w-5/12">
									<p className="uppercase medium text-input-border text-xs">general sentiment</p>
									<div className="mt-2 flex items-center space-x-2"><img alt="sentiment" loading="lazy" width="24"
										height="24" decoding="async" data-nimg="1" className="h-6" style={{ color: 'transparent' }}
										src={IconSVG.positive} />
										<p className="text-xl medium capitalize">positive</p>
									</div>
									<p className="mt-2 text-2-xs text-light-grey-2">{project.comments?.length} Reviews</p>
								</div>
								<div className="w-full lg:w-7/12 flex flex-col space-y-2 mt-3 lg:mt-0">
									<div className="flex items-center space-x-2 w-full text-xs">
										<div className="flex items-center w-7/12 sm:w-4/12 justify-between">
											<p className="capitalize">positive</p><img alt="sentiment" loading="lazy" width="15" height="15"
												decoding="async" data-nimg="1" className="h-4" style={{ color: 'transparent' }}
												src={IconSVG.positive} />
										</div>
										<div className="relative rounded-full bg-input-border h-1 w-7/12">
											<div className="projectPage_filler__lgYZx" style={{ width: '10%' }}></div>
										</div>
										<p className="text-light-grey-2 text-right">10</p>
									</div>
									<div className="flex items-center space-x-2 w-full text-xs">
										<div className="flex items-center w-7/12 sm:w-4/12 justify-between">
											<p className="capitalize">neutral</p><img alt="sentiment" loading="lazy" width="15" height="15"
												decoding="async" data-nimg="1" className="h-4" style={{ color: 'transparent' }}
												src={IconSVG.neutral} />
										</div>
										<div className="relative rounded-full bg-input-border h-1 w-7/12">
											<div className="projectPage_filler__lgYZx" style={{ width: '15%' }}></div>
										</div>
										<p className="text-light-grey-2 text-right">4</p>
									</div>
									<div className="flex items-center space-x-2 w-full text-xs">
										<div className="flex items-center w-7/12 sm:w-4/12 justify-between">
											<p className="capitalize">negative</p><img alt="sentiment" loading="lazy" width="15" height="15"
												decoding="async" data-nimg="1" className="h-4" style={{ color: 'transparent' }}
												src={IconSVG.negative} />
										</div>
										<div className="relative rounded-full bg-input-border h-1 w-7/12">
											<div className="projectPage_filler__lgYZx" style={{ width: '2%' }}></div>
										</div>
										<p className="text-light-grey-2 text-right">2</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="pt-8 w-full">
					<div className="flex justify-between px-6">
						<p className="medium">Project Updates <span
							className="text-2-xs text-light-grey-5">(0)</span></p>
						<div className="projectPage_see-all__FjyO9 text-primary" >see all</div>
					</div>
					<div className="projectPage_project-update-list__ChjQW"></div>
				</div>
			</div>
			: <div><CircularProgress /></div>
	)
}

export default OverView
