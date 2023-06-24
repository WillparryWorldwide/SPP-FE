// NavBar
import "./nav.css";
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import IconSVG from "../../../../Utils/svg";
import SiteImages from "../../../../Utils/images";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useAllMDA from "../../../../Hooks/useAllMDA";
import useGetAllProject from "../../../../Hooks/usegetallproject";
import _ from "lodash";
import { CircularProgress } from "@mui/material";


const NavBar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [showLGA, setShowLGA] = useState(false)
	const [showMinistry, setShowMinistry] = useState(false)
	const { fetchMdas, loadingMdas, mdas } = useAllMDA();
	const { data: allProject, loading: loadingProject, fetchProject } = useGetAllProject();
	const ref = useRef(null);
	const navigate = useNavigate()

	const handleNavigate = async (query) => {
		await window.localStorage.setItem("query", query);
		await navigate("/projects");
	}

	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				setShowLGA(false);
				setShowMenu(false);
				setShowMinistry(false);
				console.log('Clicked outside the component');
			}
		}

		// if (showLGA || showMinistry) {
		// 	// Attach the event listener when the component mounts
		// 	document.addEventListener('click', handleClickOutside);
		// }

		fetchMdas();
		fetchProject();
		console.log("Rendering...", showMenu, showLGA, showMinistry);

		// if (!showLGA || !showMinistry) {
			// Clean up the event listener when the component unmounts
			// return () => {
			// console.log("dismount");
			// document.removeEventListener('click', handleClickOutside);
			// };
		// }
	}, [showLGA, showMenu, showMinistry, mdas.length, allProject.length]);

	return <nav className="relative flex justify-between items-center xl:px-32 sm:px-20 px-7 py-7  lg:z-30 bg-white">

		<div className="flex items-center w-16 lg:hidden cursor-pointer">
			<img alt="logo" loading="lazy" width="118" height="28" decoding="async" data-nimg="1" src={SiteImages.logo} style={{ width: "100%", color: "transparent" }} />

		</div>
		<button className="lg:hidden relative z-20" onClick={() => setShowMenu(pre => !pre)}>
			<img alt="menu" loading="lazy" width="24" height="18" decoding="async" data-nimg="1" src={IconSVG.menu} style={{ color: "transparent" }} />
		</button>

		<div className={`transform ease-in-out transition duration-500 lg:flex-grow hidden -translate-x-full lg:translate-x-0 lg:flex ${showMenu && "mobileNav"}`}>
			<div className="flex flex-col lg:flex-row justify-between items-center w-full">

				<Link to="/">
					<div className="items-center hidden w-16 lg:flex cursor-pointer relative">
						<img alt="logo" loading="lazy" width="118" height="28" decoding="async" data-nimg="1" src={SiteImages.logo} style={{ width: "100%", color: "transparent" }} />
					</div>
				</Link>
				<div className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
					<div className="flex flex-col lg:items-center lg:flex-row w-full space-y-3 lg:space-y-0 lg:space-x-8 lg:border-none border-b py-4 lg:py-0 border-grey-stroke text-light-grey">
						<Link className="text-base lg:text-sm text-black" to="/">
							<p className="medium">Home</p>
						</Link>
						<Link className="text-base lg:text-sm " to="/">
							<p className="medium">FAQs</p>
						</Link>
						<Link className="text-base lg:text-sm " to="/">
							<p className="medium">Bounty</p>
						</Link>
						<div className="items-center flex-shrink-0 hidden lg:flex">
							<img alt="separator" loading="lazy" width="2" height="17" decoding="async" data-nimg="1" src="/_next/static/media/separator.b19041fb.svg" style={{ color: "transparent" }} />
						</div>
					</div>

					<div className="lg:ml-8 flex flex-col lg:flex-row w-full lg:w-auto space-y-3 lg:space-y-0 lg:space-x-8 border-b lg:border-none py-4 lg:py-0 border-grey-stroke">
						<Link className="text-light-grey text-base lg:text-sm" to="/projects" onClick={() => window.localStorage.setItem("query", '')}>
							<p className="medium">Projects</p>
						</Link>
						{/* <Link ref={ref} className="text-light-grey text-base lg:text-sm relative" to="/">
							<p onClick={(e) => { setShowLGA(false); setShowMinistry(prev => !prev); console.log("hee", showMinistry) }} className="medium flex justify-between">Ministries <span className={`lg:hidden delay-100 ${showMinistry && 'rotate-90'} `}><ArrowForwardIosIcon sx={{ fontSize: 15 }} /></span></p>
							{showMinistry && <div className="lg:absolute bg-[#F5F4F0] lg:w-64 lg:top-8 py-2 lg:right-9 max-h-[30vh] lg:max-h-[60vh] overflow-y-scroll">
								<ul className=" lg:grid grid-cols-2 gap-4">
									{
										!loadingMdas ? _.sortBy(mdas, "name").map(m => {
											return <li key={m.name} onClick={() => handleNavigate(m.name)} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>{m.name}</li>
										})
											: <CircularProgress />
									}
								</ul>
							</div>}
						</Link> */}
						<Link ref={ref} className="text-light-grey text-base lg:text-sm relative" to="/">
							<p onClick={(e) => { setShowLGA(false); setShowMinistry(prev => !prev) }} className="medium flex justify-between">Ministries <span className={`lg:hidden delay-100 ${showMinistry && 'rotate-90'} `}><ArrowForwardIosIcon sx={{ fontSize: 15 }} /></span></p>
							{showMinistry && <div className="lg:absolute bg-[#F5F4F0] lg:w-64 lg:top-8 py-2 lg:right-9 max-h-[30vh] lg:max-h-[60vh] overflow-y-scroll">
								<ul className=" lg:grid grid-cols-2 gap-4">
									{
										!loadingMdas ? _.sortBy(mdas, "name").map(p => <li key={p._id} onClick={() => {handleNavigate(p.name); console.log('on click')}} style={{fontSize: ".6em",maxWidth: "10em"}} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>{p.name}</li>)
											: <CircularProgress />
									}
								</ul>
							</div>}
						</Link>
						<Link ref={ref} className="text-light-grey text-base lg:text-sm relative" to="/">
							<p onClick={(e) => { setShowMinistry(false); setShowLGA(prev => !prev) }} className="medium flex justify-between">LGA <span className={`lg:hidden delay-100 ${showLGA && 'rotate-90'} `}><ArrowForwardIosIcon sx={{ fontSize: 15 }} /></span></p>
							{showLGA && <div className="lg:absolute bg-[#F5F4F0] lg:w-64 lg:top-8 py-2 lg:right-9 max-h-[30vh] lg:max-h-[60vh] overflow-y-scroll">
								<ul className=" lg:grid grid-cols-2 gap-4">
									{
										!loadingProject ? _.sortBy(_.uniqBy(allProject, "local_goverment"), "local_goverment").map(p => <li key={p._id} onClick={() => handleNavigate(p.local_goverment)} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>{p.local_goverment}</li>)
											: <CircularProgress />
									}
								</ul>
							</div>}
						</Link>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row items-start lg:items-center w-full lg:w-auto space-y-3 lg:space-y-0 lg:py-0 py-4 lg:space-x-5">
					<Link to="/spp">
						<button className="whitespace-nowrap text-sm flex items-center px-6 py-3 bg-accepted-light rounded-full text-accepted backdrop-blur-3xl">
							<span className="medium mr-2">Login Account</span>
							<img alt="caret" loading="lazy" width="7" height="12" decoding="async" data-nimg="1" src={IconSVG.greenCaret} style={{ color: "transparent" }}></img>
						</button>
					</Link>
				</div>
			</div>
		</div>
	</nav>
}

export default NavBar;