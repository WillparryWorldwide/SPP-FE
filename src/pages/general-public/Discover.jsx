import React, { useEffect } from 'react'
import useGetAllProject from "../../Hooks/usegetallproject";
import { Link } from 'react-router-dom';

const Discover = () => {
    const { fetchProject, data, hostUrl } = useGetAllProject();
    console.log(data);
    useEffect(() => {
        import('../../assets/css/143c6ce6ba741688.css')
        import('../../assets/css/d35beeb833360611.css')
        import('../../assets/css/9120b63ab911b239.css')
        import('../../assets/css/tailwind.css')
    })
    return (
        <>
            <div className="appLayout_dash-contents__f3VlW">
                <div className="appLayout_mainContents__Fvfpc overflow-y-auto flex flex-col w-full pb-16 lg:pb-0 ">
                    <div className="sticky top-0 z-50">
                        <div className="w-full bg-white flex lg:px-6 px-2 relative items-center justify-between">
                            <div className="md:flex bg-grey-white cursor-pointer  hidden items-center font-bold text-xs py-2 px-4 mr-2 flex-shrink-0 border-grey-stroke border rounded-full ">
                                <Link to="/">
                                    <img alt="logo" src="" style={{ position:'absolute', top: '0', left: '0', bottom: '0', right: '0', boxSizing: 'border-box', padding: '0',border: 'none', margin: 'auto', display: 'block', width: '0', height: '0', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                </Link>
                            </div>
                            <div className="md:w-11/12 w-full">
                                <div className="py-4 px-4 sm:px-8 bg-white w-full">
                                    <div className="flex items-center">
                                        <div className="w-full flex justify-between items-center relative">
                                            <div className="text-tiny px-5 rounded-full bg-gray-200 items-center flex flex-row justify-between relative w-full">
                                                <input type="text" className="border-transparent outline-none text-light-grey search-input flex-grow px-2 py-3 bg-gray-200 w-full" id="search" placeholder="Search for any Project, LGA, State or Contractor" autoComplete="off" />
                                                <button className="bg-accepted rounded-r-full px-5 h-full items-center absolute right-0 top-0 flex">
                                                    <img alt="search" loading="lazy" width="16" height="15" style={{ color: 'transparent' }} src="" />
                                                </button>
                                            </div>
                                            <div className="lg:w-9/12 w-8/12 discover_recent-searches__bVR6U hidden">
                                                <p className="text-light-grey-2 text-xs">Recent Search</p>
                                                <div className="mt-3"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:flex bg-grey-white cursor-pointer  hidden items-center font-bold text-xs py-2 px-4 mr-2 flex-shrink-0 border-grey-stroke border rounded-full ">
                                <p>Login</p>
                            </div>
                        </div>

                        <div className="h-full  p-6">
					<div>
						<div className="flex flex-wrap p-0 pb-28 sm:pb-0" data-testid="discover-projects">
							{/* <!--  --> */}
							<a className="3xl:w-2/12 xl:w-3/12 md:w-4/12 sm:w-6/12 flex-shrink-0 mb-6 w-full cursor-pointer sm:px-3 overflow-hidden" data-testid="project-individual_SpecialProjects" href="/project/second-niger-bridge-10111101">
								<div className="w-full aspect-[294/280] rounded-2xl">
									<div className="relative h-full">
										<div className="absolute medium transform transition duration-300 ease-in-out bg-white text-2-xs rounded-r-full bottom-4 px-3 py-1 left-0 uppercase z-10 text-ongoing"> Ongoing</div>
										<div className="w-full h-full relative">
											<img alt="" loading="lazy"
												decoding="async" data-nimg="fill"
												className="w-full h-full object-cover rounded-2xl" sizes="100vw"
												srcSet=""
												src=""
												style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }} />
										</div>
										<div className="project_project-overlay__k6Dzx absolute z-0 inset-0 w-full h-full rounded-2xl"></div>
									</div>
								</div>
								<div className="mt-2">
									<div className="flex w-full justify-between items-center">
										<h1 className="medium text-dark-grey w-11/12 h-10 project_project-title__Wtn2E">Second Niger Bridge</h1>
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
											<p className="uppercase text-sm text-dark-grey medium mt-1">₦336.00B</p>
										</div>
										<div className="">
											<p className="uppercase text-2-xs text-input-border">STATE</p>
											<p className="uppercase text-sm text-dark-grey medium truncate mt-1" >ANAMBRA...</p>
										</div>
										<svg width="35" height="34" fill="none" xmlns="http://www.w3.org/2000/svg"
											className="undefined cursor-pointer">
											<rect x="0.673" y="1.659" width="33.654" height="30.962" rx="15.481"
												fill="#000" fillOpacity="0.5"></rect>
											<path
												d="M12.117 11.757c0-.744.603-1.347 1.346-1.347h8.077c.744 0 1.346.603 1.346 1.346v9.687a1.346 1.346 0 0 1-2.06 1.141l-3.324-2.078-3.325 2.078a1.346 1.346 0 0 1-2.06-1.141v-9.687Z"
												fill="#000" fillOpacity="0.5"></path>
											<path
												d="M21.81 11.532v10.543l-3.231-2.13c-.216-.112-.754-.56-1.077-.56-.323 0-1.077.56-1.077.56l-3.23 2.13V11.532h8.614Zm1.076.224c0-.743-.602-1.346-1.346-1.346h-8.077c-.743 0-1.346.603-1.346 1.347v9.686a1.346 1.346 0 0 0 2.06 1.141l3.325-2.078 3.325 2.078c.896.56 2.06-.084 2.06-1.141v-9.687Z"
												fill="#fff"></path>
											<rect x="0.673" y="1.659" width="33.654" height="30.962" rx="15.481"
												stroke="#DCDCDC" strokeWidth="1.346"></rect>
										</svg>
									</div>
								</div>
							</a>
							{/* <!--  --> */}
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