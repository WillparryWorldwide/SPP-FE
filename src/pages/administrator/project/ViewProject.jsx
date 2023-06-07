import "../../../assets/css/tailwind.css";
import { useParams } from "react-router-dom";
import "../../../assets/css/d35beeb833360611.css";
import "../../../assets/css/4c4867adecdc883a.css";
import "../../../assets/css/3f1327110777dc38.css";
import "../../css/projectDetails/projectdetails.css";
import React, { useEffect, useState } from "react";
import Tab from "../../components/projectdetails/tab";
import useGetProject from "../../../Hooks/useGetProject";
import Media from "../../components/projectdetails/media";
import Review from "../../components/projectdetails/review";
import BottomNav from "../../components/discovery/bottomnav";
import OverView from "../../components/projectdetails/overview";
import Activity from "../../components/projectdetails/activity";
import DetailNav from "../../components/projectdetails/detailnav";


const ViewProject = () => {
	const { id } = useParams();
	// const [project, setProject] = useState([])
	const { fetchProject, data: project, loading: isLoading, hostUrl } = useGetProject()
	// const [isLoading, setIsLoading] = useState(false)
	const [tab, setTab] = useState(1)
	// const { commentOption, setCommentOption, CommentPopUp, data: commentData } = CommentModal()


	// const fetchProject = async () => {
	//     try {
	//         const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/project/only/${id}`);
	//         console.log(data)
	//         setProject(data.data.result)
	//         setIsLoading(true);
	//     } catch (error) {
	//         console.log(error);
	//     }
	// }

	useEffect(() => {
		fetchProject(id)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className="appLayout_dash-contents__f3VlW">
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
						{console.log("project idd", project)}
							<OverView
								project={project}
								setTab={setTab}
							/>
						</div>
					}
					{tab === 2 &&
						<div className="mt-10 sm:mt-20 p-10 h-full">
							<Activity
								project={project}
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
								// setCommentOption={setCommentOption}
							/>
						</div>
					}
				</div>
			</div>
			<BottomNav />
			{!isLoading ? <div className="loader_setting-loader__1qM63"><div className="loader_setting-load-line__zN4EY"></div></div> : ""}
		</div>
	)
}

export default ViewProject;