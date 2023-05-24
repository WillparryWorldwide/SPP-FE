import React, { useEffect, useState } from 'react'
import axios from 'axios';

import '../../assets/css/9120b63ab911b239.css'
import DiscoveryNavBar from './components/discovery/nav';
import ProjectCards from './components/discovery/cards';
import SideBar from './components/discovery/sidebar';

const Discover = () => {

	const [projects, setProjects] = useState([])
	const hostUrl = process.env.REACT_APP_BASE_URL.slice(0, process.env.REACT_APP_BASE_URL.search("api/"))
	const [isLoading, setIsloading] = useState(false)
	const [option, setOption] = useState(null)

	const fetchProjects = async () => {
		try {
			const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/project/all`);
			console.log(data);
			setProjects(data.data.result)
			setIsloading(true)
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchProjects()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	// useEffect(() => {
		// window.onscroll = function () { scroll() };
		// var header = document.getElementById("myHeader");
		// var sticky = header.offsetTop;

		// function scroll() {
		// 	if (window.pageYOffset > sticky) {
		// 		header.classList.add("sticky");
		// 	} else {
		// 		header.classList.remove("sticky");
		// 	}
		// }
	// })

	const format = (amount) => {
		const formatted = parseFloat(amount).toLocaleString("en", {
			style: "currency",
			currency: "NGN",
		});
		return formatted;
	}

	const handleOption = (value) =>{
		setOption(value)
	}

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
						{!isLoading ? <div className="loader_setting-loader__1qM63"><div className="loader_setting-load-line__zN4EY"></div></div> : ''}
						<div className="h-full  p-6">
							<div>
								<div className="flex flex-wrap p-0 pb-28 sm:pb-0" data-testid="discover-projects">
									{projects.map((project, index) => (
										<ProjectCards
											project={project}
											hostUrl={hostUrl}
											format={format}
											index={index}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Discover