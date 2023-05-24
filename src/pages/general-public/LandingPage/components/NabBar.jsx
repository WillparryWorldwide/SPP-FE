// NavBar
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/SPPA LOGO.jpg";
import IconSVG from "../../components/svg";

const NavBar = () => {
	return <nav className="relative flex justify-between items-center xl:px-32 sm:px-20 px-7 py-7  bg-white">

		<div className="flex items-center lg:hidden cursor-pointer">
			<img alt="logo" loading="lazy" width="118" height="28" decoding="async" data-nimg="1" src={logo} style={{ width: "100%", color: "transparent" }} />

		</div>
		<button className="lg:hidden relative z-20">
			<img alt="menu" loading="lazy" width="24" height="18" decoding="async" data-nimg="1" src={IconSVG.menu} style={{ color: "transparent" }} />
		</button>

		<div className="transform ease-in-out transition duration-500 lg:flex-grow hidden -translate-x-full lg:translate-x-0 lg:flex">
			<div className="flex flex-col lg:flex-row justify-between items-center w-full">

				<Link to="/">
					<div className="items-center hidden lg:flex cursor-pointer relative">
						<img alt="logo" loading="lazy" width="118" height="28" decoding="async" data-nimg="1" src={logo} style={{ width: "100%", color: "transparent" }} />
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
						<Link className="text-light-grey text-base lg:text-sm" to="/projects">
							<p className="medium">Discover</p>
						</Link>
						<Link className="text-light-grey text-base lg:text-sm" to="/">
							<p className="medium">Ministries</p>
						</Link>
						<Link className="text-light-grey text-base lg:text-sm" to="/">
							<p className="medium">States</p>
						</Link>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row items-start lg:items-center w-full lg:w-auto space-y-3 lg:space-y-0 lg:py-0 py-4 lg:space-x-5">
					<Link to="/spp">
						<button className="whitespace-nowrap text-sm flex items-center px-6 py-3 bg-accepted-light rounded-full text-accepted backdrop-blur-3xl">
							<span className="medium mr-2">Login Account</span>
							<svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
								<path d="M6.99922 6.0001C6.99922 6.2001 6.89922 6.4001 6.69922 6.5001L1.89922 11.3001C1.59922 11.6001 1.09922 11.6001 0.799219 11.3001C0.499219 11.0001 0.499219 10.5001 0.799219 10.2001L4.99922 6.0001L0.899219 1.8001C0.599219 1.5001 0.599219 1.0001 0.899219 0.700098C1.19922 0.400098 1.69922 0.400098 1.99922 0.700098L6.69922 5.5001C6.89922 5.6001 6.99922 5.8001 6.99922 6.0001Z" fill={"rgb(56 120 244 )"} />
							</svg>
						</button>
					</Link>
				</div>
			</div>
		</div>
	</nav>
}

export default NavBar;