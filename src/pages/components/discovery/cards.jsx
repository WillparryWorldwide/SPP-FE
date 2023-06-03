import { Link } from "react-router-dom";
import {Comment} from "@mui/icons-material";

const ProjectCards = ({ project, hostUrl, format, displayComment }) => {
	return (
		<>

			<Link className="3xl:w-2/12 xl:w-3/12 md:w-4/12 sm:w-6/12 flex-shrink-0 mb-6 w-full cursor-pointer sm:px-3 overflow-hidden" to={`/project/${project._id}`}>
				<div className="w-full aspect-[294/280] rounded-2xl">
					<div className="relative h-full">
						<button
							title="Comment on this project"
							onClick={(event) =>
								displayComment(
									project.name,
									project._id,
									project,
									event
								)
							}
							className="absolute hover:bg-primary hover:border-primary transition ease-in text-white p-2 right-2 rounded-full top-2 z-10">
							<Comment />
						</button>
						<div className="absolute medium transform transition duration-300 ease-in-out bg-black text-white text-2-xs rounded-l-full bottom-4 px-3 py-1 right-0 uppercase z-10 text-ongoing"> {project.category}</div>
						<div className="absolute medium transform transition duration-300 ease-in-out bg-black text-white text-2-xs rounded-r-full bottom-4 px-3 py-1 left-0 uppercase z-10 text-ongoing"> {project.status}</div>
						<div className="w-full h-full relative">
							<img alt="" className="w-full h-full object-cover rounded-2xl" sizes="100vw" srcSet="" src={`${hostUrl}${project.images[0]?.path}`} style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }} />
						</div>
						<div className="project_project-overlay__k6Dzx absolute z-0 inset-0 w-full h-full rounded-2xl"></div>
					</div>
				</div>
				<div className="mt-2">
					<div className="flex w-full justify-between items-center">
						<h1 className="medium text-dark-grey w-11/12 h-10 project_project-title__Wtn2E">{project.name}</h1>
						<svg width="4" height="16" fill="none"
							xmlns="http://www.w3.org/2000/svg" className="hidden">
							<circle cx="2" cy="2" r="2" fill="#252117"></circle>
							<circle cx="2" cy="8" r="2" fill="#252117"></circle>
							<circle cx="2" cy="14" r="2" fill="#252117"></circle>
						</svg>
					</div>
					<div className="flex justify-between items-center sm:mt-4 mt-1">
						<div className="">
							<p className="uppercase text-2-xs text-input-border">Total Project Cost</p>
							<p className="uppercase text-sm text-dark-grey medium mt-1">{format(project.funding_amount[0])}</p>
						</div>
						<div className="">
							<p className="uppercase text-2-xs text-input-border">LGA</p>
							<p className="uppercase text-sm text-dark-grey medium truncate mt-1" >{project.local_goverment}</p>
						</div>
					</div>
				</div>
			</Link>
		</>
	)
}

export default ProjectCards
