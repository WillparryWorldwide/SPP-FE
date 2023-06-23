// NavBar
import "./nav.css";
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import IconSVG from "../../../../Utils/svg";
import SiteImages from "../../../../Utils/images";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const NavBar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [showLGA, setShowLGA] = useState(false)
	const [showMinistry, setShowMinistry] = useState(false)
	const ref = useRef(null);
	const navigate = useNavigate()

	
	useEffect(() => {
		
		function handleClickOutside(event) {
		  if (ref.current && !ref.current.contains(event.target)) {
			setShowLGA(false);
			console.log('Clicked outside the component');
		  }
		}
	
		if(showLGA === true){
			// Attach the event listener when the component mounts
			document.addEventListener('click', handleClickOutside);
		}
		if(showLGA === false){
			// Clean up the event listener when the component unmounts
			return () => {
			document.removeEventListener('click', handleClickOutside);
			};
		}
	  }, [showLGA]);

	const handleState = async (state)=>{
		await window.localStorage.setItem("query", state.toUpperCase());
		await navigate("/projects");
	}

	const handleMinistry = async (ministry)=>{
		await window.localStorage.setItem("mda", ministry);
		await navigate("/projects");
	}

	return <nav className="relative flex justify-between items-center xl:px-32 sm:px-20 px-7 py-7  lg:z-30 bg-white">

		<div className="flex items-center w-16 lg:hidden cursor-pointer">
			<img alt="logo" loading="lazy" width="118" height="28" decoding="async" data-nimg="1" src={SiteImages.logo} style={{ width: "100%", color: "transparent" }} />

		</div>
		<button className="lg:hidden relative z-20" onClick={() => setShowMenu(!showMenu)}>
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
						<Link  ref={ref} className="text-light-grey text-base lg:text-sm relative" to="/">
							<p onClick={(e)=> {setShowLGA(false); setShowMinistry(prev => !prev)}} className="medium flex justify-between">Ministries <span className={`lg:hidden delay-100 ${showMinistry && 'rotate-90'} `}><ArrowForwardIosIcon sx={{fontSize: 15}} /></span></p>
							{showMinistry && <div className="lg:absolute bg-[#F5F4F0] lg:w-64 lg:top-8 py-2 lg:right-9 max-h-[30vh] lg:max-h-[60vh] overflow-y-scroll">
								<ul className=" lg:grid grid-cols-2 gap-4">
									<li onClick={()=> handleMinistry('Aniocha North')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Aniocha North</li>
									<li onClick={()=> handleMinistry('Aniocha South')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Aniocha South</li>
									<li onClick={()=> handleMinistry('Bomadi')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Bomadi</li>
									<li onClick={()=> handleMinistry('Burutu')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Burutu</li>
									<li onClick={()=> handleMinistry('Ethiope East')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Ethiope East</li>
									<li onClick={()=> handleMinistry('Ethiope West')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Ethiope West</li>
									<li onClick={()=> handleMinistry('Ika North East')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Ika North East</li>
									<li onClick={()=> handleMinistry('Ika South')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Ika South</li>
									<li onClick={()=> handleMinistry('Isoko North')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Isoko North</li>
									<li onClick={()=> handleMinistry('Isoko South')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Isoko South</li>
									<li onClick={()=> handleMinistry('Ndokwa East')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Ndokwa East</li>
									<li onClick={()=> handleMinistry('Ndokwa West')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Ndokwa West</li>
									<li onClick={()=> handleMinistry('Okpe')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Okpe</li>
									<li onClick={()=> handleMinistry('Oshimili North')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Oshimili North</li>
									<li onClick={()=> handleMinistry('Oshimili North')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Oshimili South</li>
									<li onClick={()=> handleMinistry('Patani')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Patani</li>
									<li onClick={()=> handleMinistry('Sapele')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Sapele</li>
									<li onClick={()=> handleMinistry('Udu')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Udu</li>
									<li onClick={()=> handleMinistry('Ughelli North')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Ughelli North</li>
									<li onClick={()=> handleMinistry('Ughelli South')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Ughelli South</li>
									<li onClick={()=> handleMinistry('Ukwuani')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Ukwuani</li>
									<li onClick={()=> handleMinistry('Uvwie')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Uvwie</li>
									<li onClick={()=> handleMinistry('Warri North')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Warri North</li>
									<li onClick={()=> handleMinistry('Warri South')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Warri South</li>
									<li onClick={()=> handleMinistry('Warri South West')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Warri South West</li>
								</ul>
							</div>}
						</Link>
						<Link  ref={ref} className="text-light-grey text-base lg:text-sm relative" to="/">
							<p onClick={(e)=> {setShowMinistry(false); setShowLGA(prev => !prev)}} className="medium flex justify-between">LGA <span className={`lg:hidden delay-100 ${showLGA && 'rotate-90'} `}><ArrowForwardIosIcon sx={{fontSize: 15}} /></span></p>
							{showLGA && <div className="lg:absolute bg-[#F5F4F0] lg:w-64 lg:top-8 py-2 lg:right-9 max-h-[30vh] lg:max-h-[60vh] overflow-y-scroll">
								<ul className=" lg:grid grid-cols-2 gap-4">
									<li onClick={()=> handleState('Aniocha North')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Aniocha North</li>
									<li onClick={()=> handleState('Aniocha South')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Aniocha South</li>
									<li onClick={()=> handleState('Bomadi')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Bomadi</li>
									<li onClick={()=> handleState('Burutu')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Burutu</li>
									<li onClick={()=> handleState('Ethiope East')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Ethiope East</li>
									<li onClick={()=> handleState('Ethiope West')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Ethiope West</li>
									<li onClick={()=> handleState('Ika North East')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Ika North East</li>
									<li onClick={()=> handleState('Ika South')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Ika South</li>
									<li onClick={()=> handleState('Isoko North')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Isoko North</li>
									<li onClick={()=> handleState('Isoko South')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Isoko South</li>
									<li onClick={()=> handleState('Ndokwa East')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Ndokwa East</li>
									<li onClick={()=> handleState('Ndokwa West')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Ndokwa West</li>
									<li onClick={()=> handleState('Okpe')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Okpe</li>
									<li onClick={()=> handleState('Oshimili North')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Oshimili North</li>
									<li onClick={()=> handleState('Oshimili North')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Oshimili South</li>
									<li onClick={()=> handleState('Patani')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Patani</li>
									<li onClick={()=> handleState('Sapele')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Sapele</li>
									<li onClick={()=> handleState('Udu')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Udu</li>
									<li onClick={()=> handleState('Ughelli North')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Ughelli North</li>
									<li onClick={()=> handleState('Ughelli South')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Ughelli South</li>
									<li onClick={()=> handleState('Ukwuani')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Ukwuani</li>
									<li onClick={()=> handleState('Uvwie')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Uvwie</li>
									<li onClick={()=> handleState('Warri North')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Warri North</li>
									<li onClick={()=> handleState('Warri South')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Warri South</li>
									<li onClick={()=> handleState('Warri South West')} className='px-1.5 py-0.5 hover:text-primary hover:bg-slate-300'>Warri South West</li>
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