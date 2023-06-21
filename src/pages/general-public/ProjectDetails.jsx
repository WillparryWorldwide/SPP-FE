import "../../assets/css/tailwind.css";
import { useLocation, useParams } from "react-router-dom";
import "../../assets/css/3f1327110777dc38.css";
import "../../assets/css/d35beeb833360611.css";
import "../../assets/css/4c4867adecdc883a.css";
import CommentModal from "../components/modal/commentmodal";
import "../css/projectDetails/projectdetails.css";
import Tab from "../components/projectdetails/tab";
import React, { useEffect, useState } from "react";
import useGetProject from "../../Hooks/useGetProject";
import Media from "../components/projectdetails/media";
import Review from "../components/projectdetails/review";
import BottomNav from "../components/discovery/bottomnav";
import OverView from "../components/projectdetails/overview";
import Activity from "../components/projectdetails/activity";
import DetailNav from "../components/projectdetails/detailnav";
import SideBar from "../components/discovery/sidebar";


const ProjectDetails = () => {
	const { id } = useParams();
	const location = useLocation();
	const [hasMenuChange, setHasMenuChange] = useState(0);
	const hideSideBar = location.pathname.search("/spp") === 0;

	// const [project, setProject] = useState([])
	const { fetchProject, data: project, loading: isLoading, hostUrl } = useGetProject()
	// const [isLoading, setIsLoading] = useState(false)
	const [tab, setTab] = useState(1)
	const { commentOption, setCommentOption, CommentPopUp, data: commentData } = CommentModal();

	useEffect(() => {
		fetchProject(id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [commentData, hasMenuChange]);
console.log(project)
	return (
		<div className="appLayout_dash-contents__f3VlW">
			<div>
				{
					!hideSideBar && <SideBar />
				}
			</div>
			<div className="appLayout_mainContents__Fvfpc overflow-y-auto flex flex-col w-full pb-16 lg:pb-0 ">
				<div className="projectPage_project-container__R1YM1 " id="project-cont">
					<DetailNav
						project={project}
					/>
					<Tab
						tab={tab}
						setTab={setTab}
					/>
					{tab === 1 &&
						<div className="mt-10 sm:mt-20 h-full">
							<OverView
								project={project}
								onEdit={setHasMenuChange}
								setTab={setTab}
							/>
						</div>
					}
					{tab === 2 &&
						<div className="mt-10 sm:mt-20 py-10 h-full">
							<Activity
								project={project}
								hostUrl={hostUrl}
							/>
						</div>
					}
					{tab === 3 &&
						<div className="mt-10 sm:mt-20 h-full">
							<Media
								project={project}
								hostUrl={hostUrl}
							/>
						</div>
					}
					{tab === 4 &&
						<div className="mt-10 sm:mt-20 h-full">
							<Review
								project={project}
								setCommentOption={setCommentOption}
							/>
						</div>
					}
				</div>
			</div>
			<BottomNav />
			{isLoading ? <div className="loader_setting-loader__1qM63"><div className="loader_setting-load-line__zN4EY"></div></div> : ""}
			{commentOption && <CommentPopUp project={project} />}
		</div>
	)
}

export default ProjectDetails;