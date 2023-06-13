// Hero section
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import heroMotif from "../../../../assets/fonts/heroMotif.36145ce0.svg";

const HeroSection = () => {
	const search = useRef();
	const navigate = useNavigate();
	const handleSearch = () => {
		window.localStorage.setItem("query", search.current.value);
		navigate("/projects");
	}

	return <div className="home_landing-hero__u3Jsj">
		<div className="lg:w-5/12 sm:w-7/12 mx-auto relative z-20">
			<h1 className="xl:text-7xl sm:text-5xl text-4xl text-white text-center w-full font-bold">
				Sherrif Project Progress App
			</h1>
			<p className="mt-6 text-sm xl:w-10/12 mx-auto w-full text-center text-lightGreen2">
				SPP is the easiest way to discover and track government projects anytime, anywhere in Nigeria
			</p>
			<div className="flex justify-center w-full lg:absolute -bottom-24">
				<div className="home_explore-input__BUzQA">
					<input type="text" id="discover" placeholder="Search for any Project, LGA, State or Contractor" ref={search} className="text-xs text-light-grey-6 medium focus:outline-none flex-grow truncate" />
					<button className="bg-accepted medium text-xs rounded-full px-4 py-2.5 text-white flex items-center" onClick={handleSearch}>
						<span>Explore</span><span className="hidden lg:block ml-1">Projects</span>
					</button>
				</div>
			</div>
			<div className="mt-16 lg:mt-12">
				<p className="uppercase text-sm text-center medium text-white">
					our partners:
				</p>
				<div className="xl:w-9/12 lg:w-11/12 mx-auto mt-6 flex items-center justify-center">
					<span className="home_partners__bh3Bi home_partner1__LGjvq"></span>
				</div>
			</div>
		</div>
		<div className="absolute -top-20 sm:top-0 h-full bottom-0 -right-40 lg:right-0 z-0 overflow-hidden">
			<img alt="motif" width="589" height="509" decoding="async" data-nimg="1" style={{ color: "transparent", maxWidth: "100%", height: "auto" }} src={heroMotif} />
		</div>
	</div>
}

export default HeroSection;