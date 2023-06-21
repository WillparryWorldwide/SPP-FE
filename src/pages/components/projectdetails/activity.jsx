import "../../css/projectDetails/activity.css";
import { Button, Grid } from "@mui/material";
import SiteImages from "../../../Utils/images";
import useProjectMilestone from '../../../Hooks/useProjectMilestone';
import { Fragment, useEffect, useState } from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import moment, { duration } from 'moment';
import organiseMilestone from "../../functions/organiseMilestone";
import { Done, Edit } from "@mui/icons-material";
import CustomModal from "../modal/customModal";
import useUpdateMilestone from "../../../Hooks/useUpdateMilestone";
import { useAuthUser } from "react-auth-kit";
import { useLocation } from "react-router-dom";
import MilestoneInput from "../../administrator/project/functions/milestoneInput";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

const Activity = ({ project, hostUrl }) => {
	const location = useLocation();
	const userData = useAuthUser()();
	const { pMilestone, fetchProjectMilestone } = useProjectMilestone();
	const organiseMilestones = organiseMilestone(pMilestone);
	const [openMarkMilestoneAsCompletedModal, setOpenMarkMilestoneAsCompletedModal] = useState(false);
	const [openUpdateMilestoneModal, setOpenUpdateMilestoneModal] = useState(false);
	const [milestoneModalDetails, setOpenMilestoneModalDetails] = useState({});
	const showUpdateMilestoneBtn = ((userData?.role?.toLowerCase() === "admin") && (location.pathname.search("/spp") === 0));


	const { isUpdatingMilestoneLoading, updateMilestone, updatedMilestone } = useUpdateMilestone();

	const handelMarkMilestoneAsCompleted = (milestoneId) => {
		updateMilestone(milestoneId, { completed: true });
	}

	const milestoneText = {
		preliminaries_sum: "Preliminary Sum",
		provisional_sums: "Provisional Sum",
		measured_work: "Measured Work"
	}

	// to store the edited milestione details
	const [milestones, setMileStones] = useState({ typeOf: "preliminaries_sum", level: 0, rate: 0, amount: 0, duration: null, description: '', quantity: 0 });

	// function
	const handelMilestoneChange = (e, index, dateName) => {
		let data = e?.target;

		if (!data) data = { name: dateName, value: e };

		let { name, value } = data;

		setMileStones(prev => {
			return {
				...prev,
				[name]: value
			}
		});
	}

	const handleUpdateMilestone = (milestoneId) => {
		updateMilestone(milestoneId, milestones);
	}

	useEffect(() => {
		if (project._id) {
			fetchProjectMilestone(project._id);
		}
		setOpenMarkMilestoneAsCompletedModal(false);
		setOpenUpdateMilestoneModal(false);
		console.log("Rerending...l");
	}, [project._id, updatedMilestone]);

	return (
		<LocalizationProvider dateAdapter={AdapterMoment}>
			<div className="w-full lg:w-9/12">
				<div className="">
					<p className="text-2-xs text-light-grey-2"></p>
					<div className="mt-1">
						<div className="flex items-center space-x-2 flex-shrink-0 mt-1 cursor-pointer ml-5">
							<div className="h-6 w-6 sm:h-10 sm:w-10 rounded-full object-cover">
								<img alt="Nigerian Railway Mordernization (Idu to Kaduna)" width="100" height="100" decoding="async" data-nimg="1" className="h-6 w-6 sm:h-10 sm:w-10 rounded-full object-cover" style={{ color: 'transparent', backgroundSize: 'cover', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat', backgroundImage: 'url()' }} src={SiteImages.federal} />
							</div>
							<div>
								<p className="text-2-xs uppercase text-input-border">{project.status}</p>
								<p className="text-sm lg:text-lg medium" data-testid="project-display_name">Milestones to be achived</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* mark milestone as completed */}
			<CustomModal title="Mark this milestone as completed" modalData={milestoneModalDetails} confirm={{ confirmText: "Confirm", cancelText: "Close", isLoading: isUpdatingMilestoneLoading, handleConfirm: handelMarkMilestoneAsCompleted }} open={{ init: openMarkMilestoneAsCompletedModal, set: setOpenMarkMilestoneAsCompletedModal }}>
				<div className="flex items-center space-x-2">
					<p className="projectPage_posted__Sj_3G flex">
						<span className="mr-1">MILESTONE</span> {milestoneModalDetails.level + 1}
					</p>
					<h4 className="projectPage_review-author-name__C_D_Y flex">
						<span className="text-black font-filson-bold hover:underline cursor-pointer">{milestoneText[milestoneModalDetails.typeOf]}</span>
					</h4>
				</div>
				<p>The above milestone will be marked as completed!</p>
			</CustomModal>

			{/* Edit milestione */}
			<CustomModal title="Mark this milestone as completed" modalData={milestoneModalDetails} confirm={{ confirmText: "Confirm", cancelText: "Close", isLoading: isUpdatingMilestoneLoading, handleConfirm: handleUpdateMilestone }} open={{ init: openUpdateMilestoneModal, set: setOpenUpdateMilestoneModal }}>
				<MilestoneInput milestoneText={milestoneText} milestone={milestones} handelMilestoneChange={handelMilestoneChange} />
			</CustomModal>
			{
				organiseMilestones().length ?
					organiseMilestones().map(orgMs => orgMs.map((milestone, index) => {
						return (
							<Fragment key={index}>
								<Timeline key={index} position="alternate" sx={{
									[`& .${timelineOppositeContentClasses.root}`]: {
										flex: 0.1,
									},
								}}>
									<TimelineItem>
										<TimelineOppositeContent color="text.secondary">
											<p className="text-[8px] md:text-xs">{moment(milestone.start_date).format("MMM Do YYYY")}</p>
											{
												(showUpdateMilestoneBtn && !milestone.completed) &&
												<Button color="success" size="small" sx={{ minWidth: "auto" }} onClick={() => {
													setOpenMarkMilestoneAsCompletedModal(true);
													setOpenMilestoneModalDetails(milestone);
												}} title="Mark as completed"><Done /></Button>
											}
										</TimelineOppositeContent>
										<TimelineSeparator>
											<TimelineDot sx={[(milestone.completed && { background: "#007bff" })]} />
											<TimelineConnector sx={[(milestone.completed && { background: "#007bff" })]} />
										</TimelineSeparator>
										<TimelineContent>
											<div className="bg-white rounded-lg p-2 sm:p-4 md:p-6 w-full mx-auto position-relative editContainer" id="projectReviewNoReference">
												{
													showUpdateMilestoneBtn && <Button onClick={() => {
														setMileStones({...milestone, duration: moment(milestone.duration)});
														setOpenMilestoneModalDetails(milestone);
														setOpenUpdateMilestoneModal(true);
													}} className="editBtn" sx={{ position: "absolute", top: "1em", right: "1em" }} variant="contained" color="error" size="small"><Edit /></Button>
												}
												<div>
													<div className="projectPage_author-details-group__DMKJG">
														<Grid container spacing={1} className="projectPage_profile-and-date__tQ8jG">
															<Grid item xs>
																<div className="flex items-center space-x-2">
																	<p className="projectPage_posted__Sj_3G flex">
																		<span className="mr-1">MILESTONE</span> {milestone.level + 1}
																	</p>
																	<h4 className="projectPage_review-author-name__C_D_Y flex">
																		<span className="text-black font-filson-bold hover:underline cursor-pointer">{milestoneText[milestone.typeOf]}</span>
																	</h4>
																</div>
																<div className="projectPage_update-detail__O0bzg">
																	<p className="projectPage_posted__Sj_3G flex">
																		<span className="mr-1">End Date:</span> {moment(milestone.duration).format("MMM Do YYYY")}
																	</p>
																</div>
																<div className="projectPage_update-detail__O0bzg">
																	<p className="projectPage_posted__Sj_3G flex text-[10px] md:text-xs">
																		<span className="mr-1">Due Date:</span>
																		{moment().to(moment(milestone.duration))}
																	</p>
																</div>
															</Grid>
															<Grid item marginLeft={0} xs>
																<div className="flex items-center space-x-2">
																	<p className="projectPage_posted__Sj_3G flex">
																		<span className="mr-1">Budget</span> NGN {milestone.amount}
																	</p>
																</div>
																<div className="projectPage_update-detail__O0bzg">
																	<p className="projectPage_posted__Sj_3G flex">
																		<span className="mr-1">Quantity:</span> {milestone.quantity}
																	</p>
																</div>
																<div className="projectPage_update-detail__O0bzg">
																	<p className="projectPage_posted__Sj_3G flex">
																		<span className="mr-1">Unit:</span> {milestone.unit}
																	</p>
																</div>
															</Grid>
														</Grid>
													</div>
													<div className="mt-3">
														<p className="projectPage_post-title__ZttU3 text-[10px] md:text-xs">Status: {milestone.status}</p>
														<p className="mt-2 text-[10px] md:text-xs">{milestone.description}</p>
													</div>
													<div className="flex flex-wrap gap-2">
														{
															milestone.images &&
															milestone.images.map((image, index) =>
																<div key={index} className="space-x-3 overflow-x-auto mt-3 client-overflow-scroll sm:w-[33.333333%]">
																	<div className="projectPage_image-container__J5qdk">
																		<div className="projectPage_post-image__KWgTS">
																			<img alt="milestone pic" src={`${hostUrl}${image.path}`} className="object-cover w-full h-full" decoding="async" data-nimg="fill" />
																		</div>
																	</div>
																</div>
															)
														}
													</div>
												</div>
											</div>
										</TimelineContent>
									</TimelineItem>
								</Timeline>
							</Fragment>
						)
					})) :
					(
						<div className='flex h-full flex-col items-center justify-center'>
							<div className=' mx-auto'>
								<img src={SiteImages.developer} alt='window wipe' className='w-96' />
							</div>
							<p className="mt-5 medium text-center text-2xl">Sorry! We don't have any updates available</p>
							<p className="text-sm text-center text-input-border mt-3 w-10/12 lg:w-7/12 mx-auto">Unfortunately, we have not posted any update on this project. Kindly M.O.R.E  PROJECT PROGRESS APP (MPPA) and check back with us in the near future.</p>
							<div className="bg-white cursor-pointer text-primary hover:bg-primary hover:text-white transition ease-in-out duration-300 rounded-md px-4 py-1 mt-6">Back To Overview</div>
						</div>

					)

			}
			{/* <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            09:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            10:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            12:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            9:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Repeat</TimelineContent>
        </TimelineItem>
      </Timeline> */}
		</LocalizationProvider>
	)
}

export default Activity
