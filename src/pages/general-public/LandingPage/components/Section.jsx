// section
import IconSVG from "../../components/svg";
import mdaImg from "../../../../assets/images/mda_m30ptu.webp";
import citizen from "../../../../assets/images/citizen_edns1x.webp"

const sty = { color: "transparent", maxWwidth: "100%", height: "auto" };

const LandingSection = () => {
	return <div className="home_landing-section__J_2Eo xl:py-36 py-24">
		<div className="absolute w-full justify-center top-16 right-0 hidden lg:flex">
			<a className="cursor-pointer" href="#x">
				<img alt="scroll down" loading="lazy" width="24" height="26" decoding="async" data-nimg="1" src={IconSVG.scrollDown} style={sty} />
			</a>
		</div>
		<div className="home_image-section__FkGkS flex flex-col items-center order-2 lg:order-1" id="first-section">
			<img alt="ministries&amp;contractors" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" src={mdaImg} style={sty} />
			<a className="lg:hidden inline-block" href="discover.html">
				<div className="home_explore-projects-green__fe_1K">
					<p className="medium home_green-explore-projects-button__B_r9D mr-5">
						Explore all projects
					</p>
					<img alt="right-icon" loading="lazy" width="7" height="13" decoding="async" data-nimg="1" className="ml-5" src={IconSVG.greenGradientCaret} style={sty} />
				</div>
			</a>
		</div>
		<div className="home_text-section__8_eBv order-1 lg:order-2">
			<p className="home_text-head__oI2Wu text-accepted medium">
				Ministries &amp; Contractors
			</p>
			<h1 className="home_text-title__Wm_fr medium">Explore MDA Projects</h1>
			<p className="home_text-subtitle__2Gieq">
				Do you want to know what's happening with specific Ministries,
				Departments, Agencies or contractor projects? Create an account
				and be one of the first to get all the updates you need straight
				from MDAs and Contractors.
			</p>
			<a className="hidden lg:inline-block mt-10" href="discover.html">
				<div className="home_explore-projects-green__fe_1K transform hover:-translate-y-1 transition duration-1000 ease-in-out">
					<p className="medium home_green-explore-projects-button__B_r9D mr-5">
						Explore all projects
					</p>
					<img alt="right-icon" loading="lazy" width="7" height="13" decoding="async" data-nimg="1" style={sty} src={IconSVG.greenGradientCaret} />
				</div>
			</a>
		</div>
		<div className="absolute bottom-0 -mb-56 inset-x-0 w-full z-0">
			<img alt="motif" loading="lazy" width="1440" height="814" decoding="async" data-nimg="1" style={sty} src={IconSVG.landingMotif} />
		</div>
	</div>
}

const LandingSection2 = () => {
	return <div className="home_landing-section__J_2Eo pb-16">
		<div className="home_text-section__8_eBv">
			<p className="home_text-head__oI2Wu medium text-pending">
				citizens &amp;cso
			</p>
			<h1 className="home_text-title__Wm_fr medium">
				Review and engage with users on projects
			</h1>
			<p className="home_text-subtitle__2Gieq">
				You can post text and media reviews on projects and also view and engage with reviews from other citizens.
			</p>
			<a href="user-type.html">
				<button className="hidden lg:block mt-10">
					<div className="home_explore-projects-gold__HUoJN transform hover:-translate-y-1 transition duration-1000 ease-in-out">
						<p className="medium home_gold-explore-projects-button__9NQxt mr-5">
							Sign up to Review Projects
						</p>
						<img alt="right-icon" loading="lazy" width="7" height="13" decoding="async" data-nimg="1" style={sty} src={IconSVG.goldGradientCaret} />
					</div>
				</button>
			</a>
		</div>
		<div className="home_image-section__FkGkS flex flex-col items-center">
		<img alt="citizens&amp;cso" loading="lazy" width="1150" height="1000" decoding="async" data-nimg="1" src={citizen} style={sty} />
			<a href="user-type.html">
				<button className="lg:hidden">
					<div className="home_explore-projects-gold__HUoJN transform hover:-translate-y-1 transition duration-1000 ease-in-out">
						<p className="medium home_gold-explore-projects-button__9NQxt mr-5">
							Sign up to Review Projects
						</p>
						<img alt="right-icon" loading="lazy" width="7" height="13" decoding="async" data-nimg="1" style={sty} src={IconSVG.goldGradientCaret} />
					</div>
				</button>
			</a>
		</div>
	</div>
}

const Sections = {
	LandingSection,
	LandingSection2
}

export default Sections;