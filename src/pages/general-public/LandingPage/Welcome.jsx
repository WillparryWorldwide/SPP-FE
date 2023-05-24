import React from "react";
import "../../../assets/css/143c6ce6ba741688.css";
import NavBar from "./components/NabBar";
import HeroSection from "./components/HeroSection";
import Sections from "./components/Section";
import Footer from "./components/Footer";

const Welcome = () => {

	return (
		<>
			<div className="Toastify"></div>
			<div className="false">
				<div className="bg-black absolute bg-opacity-10 min-h-screen h-full w-full z-50 inset-0 hidden"></div>
				<NavBar />
				<div style={{ position: "fixed", top: "100px", right: "10px", zIndex: "9999" }}></div>
				<HeroSection />
				<Sections.LandingSection />
				<Sections.LandingSection2 />
				<Footer />
			</div>
		</>
	)
}

export default Welcome