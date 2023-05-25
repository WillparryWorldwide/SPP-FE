import React from "react";
import { SearchNav, Title } from "./components";
import IconSVG from "../../components/icon/svg";

const Welcome = () => {
	return (
		<>
			<div className="sticky top-0 z-50">
				<SearchNav />
				<Title headText="Welcome" icon={<span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
					<span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
						<img alt="empty" aria-hidden="true" src={IconSVG.empty} style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }} />
					</span>
					<img alt="discover" src={IconSVG.discoverIcon} decoding="async" data-nimg="intrinsic" className="leftSideBar_nav-icon__7Dhay" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
					<noscript />
				</span>} />
			</div>
			<div className="h-full  p-6">
				<div>
					<div className="flex flex-wrap p-0 pb-28 sm:pb-0" data-testid="discover-projects">
						<a className="3xl:w-2/12 xl:w-3/12 md:w-4/12 sm:w-6/12 flex-shrink-0 mb-6 w-full cursor-pointer sm:px-3 overflow-hidden" data-testid="project-individual_SpecialProjects" href="/project/itakpe-ajaokuta-warri-rail-line-10011101">
							<div className="w-full aspect-[294/280] rounded-2xl">
								<div className="relative h-full">
									<div className="absolute medium transform transition duration-300 ease-in-out bg-white text-2-xs rounded-r-full bottom-4 px-3 py-1 left-0 uppercase z-10 text-complete">
										Completed
									</div>
									<div className="w-full h-full relative">
										{/* what */}
									</div>
									<div className="project_project-overlay__k6Dzx absolute z-0 inset-0 w-full h-full rounded-2xl" />
								</div>
							</div>
							<div className="mt-2">
								<div className="flex w-full justify-between items-center">
									<h1 className="medium text-dark-grey w-11/12 h-10 project_project-title__Wtn2E">
										Itakpe - Ajaokuta - Warri Rail Line
									</h1>
									<svg width={4} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden">
										<circle cx={2} cy={2} r={2} fill="#252117" />
										<circle cx={2} cy={8} r={2} fill="#252117" />
										<circle cx={2} cy={14} r={2} fill="#252117" />
									</svg>
								</div>
								<div className="flex justify-between items-center sm:mt-4 mt-1">
									<div className>
										<p className="uppercase text-2-xs text-input-border">
											Total Project Cost
										</p>
										<p className="uppercase text-sm text-dark-grey medium mt-1">
											$200.00M
										</p>
									</div>
									<div className>
										<p className="uppercase text-2-xs text-input-border">
											STATE
										</p>
										<p className="uppercase text-sm text-dark-grey medium truncate mt-1" data-testid="KOGI...">
											KOGI...
										</p>
									</div>
									<svg width={35} height={34} fill="none" xmlns="http://www.w3.org/2000/svg" className="undefined cursor-pointer">
										<rect x="0.673" y="1.659" width="33.654" height="30.962" rx="15.481" fill="#000" fillOpacity="0.5" />
										<path d="M12.117 11.757c0-.744.603-1.347 1.346-1.347h8.077c.744 0 1.346.603 1.346 1.346v9.687a1.346 1.346 0 0 1-2.06 1.141l-3.324-2.078-3.325 2.078a1.346 1.346 0 0 1-2.06-1.141v-9.687Z" fill="#000" fillOpacity="0.5" />
										<path d="M21.81 11.532v10.543l-3.231-2.13c-.216-.112-.754-.56-1.077-.56-.323 0-1.077.56-1.077.56l-3.23 2.13V11.532h8.614Zm1.076.224c0-.743-.602-1.346-1.346-1.346h-8.077c-.743 0-1.346.603-1.346 1.347v9.686a1.346 1.346 0 0 0 2.06 1.141l3.325-2.078 3.325 2.078c.896.56 2.06-.084 2.06-1.141v-9.687Z" fill="#fff" />
										<rect x="0.673" y="1.659" width="33.654" height="30.962" rx="15.481" stroke="#DCDCDC" strokeWidth="1.346" />
									</svg>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default Welcome