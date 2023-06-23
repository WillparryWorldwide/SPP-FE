import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import '../../assets/css/9120b63ab911b239.css'
import DiscoveryNavBar from '../components/discovery/nav';
import ProjectCards from '../components/discovery/cards';
import SideBar from '../components/discovery/sidebar';
import useUpdateProject from "../../Hooks/useupdateproject";
import Comment from '../../components/generalpublic/comment';
import useGetAllProject from "../../Hooks/usegetallproject";
import useSearchProject from '../../Hooks/usesearchproject';
import BottomNav from '../components/discovery/bottomnav';
import CommentModal from '../components/modal/commentmodal'

const Discover = () => {
	const query = window.localStorage.getItem("query");
	const [option, setOption] = useState(null);
	// const [idOfProject, setIdOfProject] = useState("");
	// const [viewComment, setViewComment] = useState(false);
	// const [nameOfProject, setNameOfProject] = useState("");
	const { upDAteProject, loading: upDateLoading } = useUpdateProject();
	const { fetchProject, data, hostUrl, loading } = useGetAllProject();
	const { searchProject, data: searchData, loading: searchLoading } = useSearchProject()
	const { commentOption, setCommentOption, CommentPopUp, data: commentmobileData } = CommentModal()
	const [commentItem, setCommentItem] = useState()
	const [projects, setProjects] = useState(null)
	// const [commentData, setCommentData] = useState({
	// 	description: "",
	// 	radioValue: "",
	// 	name: "",
	// });

	// Make All Project Fetch Request
	useEffect(() => {
		const makeFetch = async () => {
			await fetchProject(query ? "?local_goverment=" + query : '');
		}

		//  Make Search Request
		const makeSearchFetch = async () => {
			await searchProject(option)
		}

		if (!option) {
			//  Set project to Fetch Request Data
			makeFetch();
			setProjects(data);
			// localStorage.removeItem('query')
			console.log("Rendering...1");
		} else {
			//  Set project to Search Request Data
			makeSearchFetch()
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data.length, option]);

	useEffect(() => {
		if (searchData.length > 0) {
			setProjects(searchData);
			// localStorage.removeItem('query')
			console.log("Rendering...22");
		}
	}, [searchData])
	const format = (amount) => {
		const formatted = parseFloat(amount).toLocaleString("en", {
			style: "currency",
			currency: "NGN",
		});
		return formatted;
	}

	const handleOption = (value) => {
		console.log("option", value);
		setOption(value)
	}

	// const handleRadioSelection = (event) => {
	// 	setCommentData((prev) => ({ ...prev, radioValue: event.target.value }));
	// };

	const displayComment = (name, id, item, e) => {
		e.preventDefault()
		// setIdOfProject(id);
		// setNameOfProject(name);
		setCommentItem(item)
		// setViewComment(true);
		setCommentOption(true)
	};

	// const submitComment = async (e) => {
	// 	e.preventDefault();
	// 	await upDAteProject(idOfProject, commentData);
	// 	setNameOfProject("");
	// 	setCommentData({
	// 		description: "",
	// 		radioValue: "",
	// 		name: "",
	// 	});
	// 	setViewComment(false)
	// 	setCommentOption(false)
	// 	setCommentItem(null)
	// }

	// const cancelViewComment = ()=>{
	// 	setViewComment(false)
	// 	setCommentOption(false)
	// 	setCommentItem(null)
	// }

console.log((projects?.length === 0))
console.log((projects?.length === null))
console.log(projects?.length)
	return (
		<>
			<div className="appLayout_dash-contents__f3VlW">
				<SideBar />
				<div className="appLayout_mainContents__Fvfpc overflow-y-auto flex flex-col w-full pb-16 lg:pb-0 ">
					<div className="sticky top-0 z-50">
						<DiscoveryNavBar
							option={option}
							handleOption={handleOption}
						/>
						{loading || searchLoading ? <div className="loader_setting-loader__1qM63"><div className="loader_setting-load-line__zN4EY"></div></div> : ''}
						<div className="h-full flex  p-6">
							<div className='w-full'>
								<div className="flex flex-wrap p-0 pb-28 sm:pb-0" data-testid="discover-projects">
									{(projects?.length !== 0) ? projects?.map((project, index) => (
										<ProjectCards
											project={project}
											hostUrl={hostUrl}
											format={format}
											displayComment={displayComment}
											key={project._id}
										/>
									)) :
										(
											<div className='flex h-full flex-col items-center justify-center'>
												<p className="mt-5 medium text-center text-2xl">Sorry! We couldn't find it</p>
												<p className="text-sm text-center text-input-border mt-3 w-10/12 lg:w-7/12 mx-auto">Unfortunately, we have not posted any update on this project. Kindly contact M.O.R.E PROJECT PROGRESS APP (MPPA) and check back with us in the near future.</p>
												<Link to='/' className="bg-white cursor-pointer text-primary hover:bg-primary hover:text-white transition ease-in-out duration-300 rounded-md px-4 py-1 mt-6">Back To Home</Link>
											</div>

										)
									}
								</div>
							</div>
							{/* {viewComment && (
								<div className="hidden lg:flex">
									<Comment
										nameOfProject={nameOfProject}
										submitComment={submitComment}
										commentData={commentData}
										setCommentData={setCommentData}
										handleRadioSelection={handleRadioSelection}
										setComment={setViewComment}
										upDateLoading={upDateLoading}
										noCancel={cancelViewComment}
									/>
								</div>
							)} */}
						</div>
					</div>
				</div>
				<BottomNav />
				{commentOption && <div><CommentPopUp project={commentItem} /> </div>}
			</div>
		</>
	)
}

export default Discover