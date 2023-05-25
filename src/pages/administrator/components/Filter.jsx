


const Filter = () => {
	return <div className="bg-white relative h-14 z-30 border-t border-EB md:px-6 px-3 flex justify-between items-center w-full" data-testid="project-view_grid">
		<svg width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute cursor-pointer hidden md:block left-0">
			<path d="M0 0h20c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H0V0Z" fill="#666" />
			<path d="M13.74 16a.521.521 0 0 1 .152-.37l3.481-3.48a.522.522 0 0 1 .739.738L15 16l3.112 3.112a.522.522 0 0 1-.739.738l-3.48-3.48a.522.522 0 0 1-.153-.37Z" fill="#fff" />
		</svg>
		<div className="flex relative items-center space-x-2 h-full mr-2 md:ml-4 flex-shrink-0 " data-testid="set-project_view">
			<svg width={28} height={28} fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="set-view_grid" className="lg:block cursor-pointer flex-shrink-0 hover:text-grey-white text-transparent block text-accepted-light">
				<rect width={28} height={28} rx="8.167" fill="currentColor" />
				<path fill="#4BAA73" stroke="#4BAA73" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round" d="M8.105 8.105h4.421v4.421H8.105zM15.477 8.105h4.421v4.421h-4.421zM15.477 15.475h4.421v4.421h-4.421zM8.105 15.475h4.421v4.421H8.105z" />
			</svg>
			<svg width={38} height={38} fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="set-view_map" className="lg:block cursor-pointer flex-shrink-0 hover:text-grey-white text-transparent hidden text-white">
				<rect x="0.5" y="0.5" width={37} height={37} rx="6.5" fill="currentColor" stroke="#fff" />
				<path d="m15.368 11.79-2.736-.914A2 2 0 0 0 10 12.774v11.783a2 2 0 0 0 1.368 1.898l4 1.333a2 2 0 0 0 1.264 0l4.736-1.578a2 2 0 0 1 1.264 0l2.736.912A2.001 2.001 0 0 0 28 25.223V13.441a2 2 0 0 0-1.367-1.898l-4-1.333a2 2 0 0 0-1.265 0l-4.737 1.578a2 2 0 0 1-1.264 0l.001.001Z" stroke="#DCDCDC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M16 12v16M22 10v16" stroke="#DCDCDC" strokeWidth="1.5" strokeLinejoin="round" />
			</svg>
			<svg width={8} height={6} fill="none" xmlns="http://www.w3.org/2000/svg" className="md:hidden flex-shrink-0">
				<path d="M4 5.26a.52.52 0 0 1-.37-.153L.15 1.627A.522.522 0 0 1 .888.888L4 4 7.112.888a.522.522 0 0 1 .738.739l-3.48 3.48A.52.52 0 0 1 4 5.26Z" fill="#A0AFBF" />
			</svg>
			<div className="bg-grey-white cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke md:flex hidden font-bold hover:bg-EB" data-testid="around-you_pill">
				<svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
					<g clipPath="url(#a)" stroke="#252117" strokeWidth="1.333">
						<path d="M8 1.334v5.667" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M7.999 1.334a6.667 6.667 0 1 0 5.264 2.576" strokeLinecap="round" />
						<path d="M7.999 4.334a3.667 3.667 0 1 0 2.895 1.417" strokeLinecap="round" />
						<path d="M8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
					</g>
					<defs>
						<clipPath id="a">
							<path fill="#fff" d="M0 0h16v16H0z" />
						</clipPath>
					</defs>
				</svg>
				Around You!
			</div>
			<div className="h-8 bg-grey-stroke w-[1px]" />
		</div>
		<div className="flex w-full space-x-2 h-full items-center overflow-x-auto hide-scroll pr-4">
			<div className="bg-grey-white cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke flex md:hidden font-bold hover:bg-EB">
				<svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
					<g clipPath="url(#a)" stroke="#252117" strokeWidth="1.333">
						<path d="M8 1.334v5.667" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M7.999 1.334a6.667 6.667 0 1 0 5.264 2.576" strokeLinecap="round" />
						<path d="M7.999 4.334a3.667 3.667 0 1 0 2.895 1.417" strokeLinecap="round" />
						<path d="M8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
					</g>
					<defs>
						<clipPath id="a">
							<path fill="#fff" d="M0 0h16v16H0z" />
						</clipPath>
					</defs>
				</svg>
				Around You!
			</div>
			<div className="bg-grey-white cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke flex text-white bg-accepted" data-testid="tag-SpecialProjects">
				<svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
					<path d="M9 13h4v1H9v-1Zm0-2h6v1H9v-1Zm0-2h6v1H9V9Z" fill="#fff" />
					<path d="M10.275 5.609 8.001 1 5.726 5.609l-5.085.739 3.68 3.587L3.45 15l3.55-1.866v-1.13l-2.22 1.168.525-3.068.09-.518-.377-.367-2.23-2.173 3.081-.448.52-.075.233-.472 1.378-2.792 1.377 2.792.233.471.52.076 3.727.543.143-.991-3.726-.542Z" fill="#fff" />
				</svg>
				<p>Special Projects</p>
			</div>
		</div>
		<div className=" hidden md:block relative mr-4 flex-shrink-0 ">
			<button data-testid="toggle-filter" className="flex items-center space-x-2 py-2.5 px-3.5 lg:border hover:bg-grey-white border-grey-stroke rounded-lg">
				<svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M20.25 15.375h-1.985a2.624 2.624 0 0 0-5.03 0H3.75a.75.75 0 0 0 0 1.5h9.485a2.624 2.624 0 0 0 5.03 0h1.985a.75.75 0 1 0 0-1.5Zm-4.5 1.875a1.124 1.124 0 1 1 0-2.248 1.124 1.124 0 0 1 0 2.248Zm-12-8.625h3.485a2.625 2.625 0 0 0 5.03 0h7.985a.75.75 0 1 0 0-1.5h-7.985a2.624 2.624 0 0 0-5.03 0H3.75a.75.75 0 0 0 0 1.5Zm6-1.875a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25Z" fill="#252117" />
				</svg>
				<p className="text-sm hidden lg:block">Filter</p>
			</button>
			<div className="undefined max-h-[70vh]  overflow-hidden hide-scroll overflow-y-auto discover_search-filter-box__DWHjV z-[120]  hidden">
				<div className="border-b border-grey-blue">
					<div className="flex items-center justify-between px-4 py-4" data-testid="toggle-filter-timePeriod">
						<div className="flex space-x-3 items-center w-8/12 cursor-pointer">
							<button>
								<img alt="caret" loading="lazy" width={15} height={26} decoding="async" data-nimg={1} className="transform transition duration-500 ease-in-out h-3
				rotate-0
			" src="/_next/static/media/grey-caret-right.f2818630.svg" style={{ color: 'transparent' }} />
							</button>
							<p className="text-2-xs text-black">Time Period</p>
						</div>
						<div className="flex space-x-4">
							<input type="checkbox" id="group-checkbox" readOnly />
						</div>
					</div>
					<div className="show-title px-5 bg-grey-white show-options
			h-0 overflow-hidden">
						<div className="mt-4 flex space-x-3">
							<input type="radio" name="time_period" />
							<p className="text-xs text-brown capitalize">
								last quarter
							</p>
						</div>
						<div className="mt-4 flex space-x-3">
							<input type="radio" name="time_period" />
							<p className="text-xs text-brown capitalize">last year</p>
						</div>
						<div className="mt-4 flex space-x-3">
							<input type="radio" name="time_period" />
							<p className="text-xs text-brown capitalize">
								custom range
							</p>
						</div>
						<div className="flex mt-4">
							<div className="w-1/2 pr-2 border-r border-grey-stroke discover_date-container__eKbmm">
								<p className="text-2-xs text-light-grey-2">Start Date</p>
								<input type="date" id="startDate" className="mt-1 bg-transparent focus:outline-none pl-8 text-xs" defaultValue="2023-05-16T18:53:37.417Z" />
							</div>
							<div className="w-1/2 pl-2 discover_date-container__eKbmm">
								<p className="text-2-xs text-light-grey-2">End Date</p>
								<input type="date" id="endDate" className="mt-1 bg-transparent focus:outline-none pl-8 text-xs" defaultValue="2023-05-16T18:53:37.417Z" />
							</div>
						</div>
					</div>
				</div>
				<div className="border-b border-grey-blue">
					<div className="flex items-center justify-between px-4 py-4" data-testid="toggle-filter-location">
						<div className="flex space-x-3 items-center w-8/12 cursor-pointer">
							<button>
								<img alt="caret" loading="lazy" width={15} height={26} decoding="async" data-nimg={1} className="transform transition duration-500 ease-in-out h-3
				rotate-0
			" src="/_next/static/media/grey-caret-right.f2818630.svg" style={{ color: 'transparent' }} />
							</button>
							<p className="text-2-xs text-black">Location</p>
						</div>
						<div className="flex space-x-4">
							<input type="checkbox" id="group-checkbox" readOnly />
						</div>
					</div>
					<div className="show-title px-5 bg-grey-white show-options
			h-0 overflow-hidden">
						<div className="w-full flex justify-between mt-0 ">
							<div className="discover_check-wrapper__61LKN mt-4 py-1 px-2  bg-grey-blue text-light-grey">
								<p>NC</p>
							</div>
							<div className="discover_check-wrapper__61LKN mt-4 py-1 px-2  bg-grey-blue text-light-grey">
								<p>NE</p>
							</div>
							<div className="discover_check-wrapper__61LKN mt-4 py-1 px-2  bg-grey-blue text-light-grey">
								<p>NW</p>
							</div>
							<div className="discover_check-wrapper__61LKN mt-4 py-1 px-2  bg-grey-blue text-light-grey">
								<p>SE</p>
							</div>
							<div className="discover_check-wrapper__61LKN mt-4 py-1 px-2  bg-grey-blue text-light-grey">
								<p>SS</p>
							</div>
							<div className="discover_check-wrapper__61LKN mt-4 py-1 px-2  bg-grey-blue text-light-grey">
								<p>SW</p>
							</div>
						</div>
						<div className="h-5/6 overflow-y-hidden">
							<div className="h-full inline-flex flex-col flex-wrap overflow-y-hidden overflow-x-auto w-full">
								<div className="mt-4 space-x-5 pr-7 flex items-center
					">
									<input id="option-checkbox" name="FCT - Abuja" type="checkbox" />
									<p className="text-2-xs text-black">FCT - Abuja</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="border-b border-grey-blue">
					<div className="flex items-center justify-between px-4 py-4" data-testid="toggle-filter-status">
						<div className="flex space-x-3 items-center w-8/12 cursor-pointer">
							<button>
								<img alt="caret" loading="lazy" width={15} height={26} decoding="async" data-nimg={1} className="transform transition duration-500 ease-in-out h-3
				rotate-0
			" src="/_next/static/media/grey-caret-right.f2818630.svg" style={{ color: 'transparent' }} />
							</button>
							<p className="text-2-xs text-black">Status</p>
						</div>
						<div className="flex space-x-4">
							<input type="checkbox" id="group-checkbox" readOnly />
						</div>
					</div>
					<div className="show-title px-5 bg-grey-white show-options
			h-0 overflow-hidden">
						<div className="mt-5 flex justify-between flex-wrap space-x-1">
							<div data-testid="toggle-filter-status-NOT_STARTED" className="discover_check-wrapper__61LKN mt-4 py-1 px-1  bg-grey-blue text-light-grey">
								<p className="mr-1">Not Started</p>
								<div>
									<span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
										<span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
											<img alt="something" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%277%27%20height=%276%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }} />
										</span>
										<img alt="filter" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" className="transform transition duration-500 ease-in-out h-3 
				rotate-0
			" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
										<noscript />
									</span>
								</div>
							</div>
							<div data-testid="toggle-filter-status-ON_GOING" className="discover_check-wrapper__61LKN mt-4 py-1 px-1  bg-grey-blue text-light-grey">
								<p className="mr-1">Ongoing</p>
								<div>
									<span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
										<span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
											<img alt="something" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%277%27%20height=%276%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }} />
										</span>
										<img alt="filter" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" className="transform transition duration-500 ease-in-out h-3 
				rotate-0
			" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
										<noscript />
									</span>
								</div>
							</div>
							<div data-testid="toggle-filter-status-ON_HOLD" className="discover_check-wrapper__61LKN mt-4 py-1 px-1  bg-grey-blue text-light-grey">
								<p className="mr-1">On Hold</p>
								<div>
									<span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
										<span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
											<img alt="something" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%277%27%20height=%276%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }} />
										</span>
										<img alt="filter" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" className="transform transition duration-500 ease-in-out h-3 
				rotate-0
			" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
										<noscript />
									</span>
								</div>
							</div>
							<div data-testid="toggle-filter-status-COMPLETED" className="discover_check-wrapper__61LKN mt-4 py-1 px-1  bg-grey-blue text-light-grey">
								<p className="mr-1">Completed</p>
								<div>
									<span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
										<span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
											<img alt="something" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%277%27%20height=%276%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }} />
										</span>
										<img alt="filter" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" className="transform transition duration-500 ease-in-out h-3 
				rotate-0
			" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
										<noscript />
									</span>
								</div>
							</div>
							<div data-testid="toggle-filter-status-CANCELED" className="discover_check-wrapper__61LKN mt-4 py-1 px-1  bg-grey-blue text-light-grey">
								<p className="mr-1">Cancelled</p>
								<div>
									<span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
										<span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
											<img alt="something" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%277%27%20height=%276%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }} />
										</span>
										<img alt="filter" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" className="transform transition duration-500 ease-in-out h-3 
				rotate-0
			" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
										<noscript />
									</span>
								</div>
							</div>
							<div data-testid="toggle-filter-status-ABANDONED" className="discover_check-wrapper__61LKN mt-4 py-1 px-1  bg-grey-blue text-light-grey">
								<p className="mr-1">Abandoned</p>
								<div>
									<span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
										<span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
											<img alt="something" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%277%27%20height=%276%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }} />
										</span>
										<img alt="filter" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" className="transform transition duration-500 ease-in-out h-3 
				rotate-0
			" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
										<noscript />
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="border-b border-grey-blue">
					<div className="flex items-center justify-between px-4 py-4" data-testid="toggle-filter-mdaContractors">
						<div className="flex space-x-3 items-center w-8/12 cursor-pointer">
							<button>
								<img alt="caret" loading="lazy" width={15} height={26} decoding="async" data-nimg={1} className="transform transition duration-500 ease-in-out h-3
				rotate-0
			" src="/_next/static/media/grey-caret-right.f2818630.svg" style={{ color: 'transparent' }} />
							</button>
							<p className="text-2-xs text-black">
								Ministries &amp; Contractors
							</p>
						</div>
						<div className="flex space-x-4">
							<input type="checkbox" id="group-checkbox" readOnly />
						</div>
					</div>
					<div className="show-title px-5 bg-grey-white show-options
			h-0 overflow-hidden">
						<div className="mt-3 relative flex justify-between items-center">
							<div className="relative w-full flex items-center">
								<input id="search-filters" type="text" placeholder="Search..." className="focus:outline-none text-xs py-1 px-4 w-full" defaultValue />
							</div>
							<div className="rounded-b-lg z-20 border h-32 w-full bg-white border-brown absolute top-7 overflow-x-auto 
hidden
">
								<p className="text-xs text-center mt-3">
									No results found
								</p>
							</div>
						</div>
						<div className="mt-3">
							<div className="flex flex-wrap" />
						</div>
					</div>
				</div>
				<div className="border-b border-grey-blue">
					<div className="flex items-center justify-between px-4 py-4" data-testid="toggle-filter-budget">
						<div className="flex space-x-3 items-center w-8/12 cursor-pointer">
							<button>
								<img alt="caret" loading="lazy" width={15} height={26} decoding="async" data-nimg={1} className="transform transition duration-500 ease-in-out h-3
				rotate-0
			" src="/_next/static/media/grey-caret-right.f2818630.svg" style={{ color: 'transparent' }} />
							</button>
							<p className="text-2-xs text-black">Budget</p>
						</div>
						<div className="flex space-x-4">
							<input type="checkbox" id="group-checkbox" readOnly />
						</div>
					</div>
					<div className="show-title px-5 bg-grey-white show-options
			h-0 overflow-hidden">
						<div className="mt-5">
							<div className="text-xs flex justify-between">
								<p>Budget</p>
								<p>NGN</p>
							</div>
							<div className="mt-7 px-3">
								<div aria-disabled="false" className="input-range">
									<span className="input-range__label input-range__label--min">
										<span className="input-range__label-container">
											0
										</span>
									</span>
									<div className="input-range__track input-range__track--background">
										<div className="input-range__track input-range__track--active" style={{ left: '0%', width: '100%' }} />
										<span className="input-range__slider-container" style={{ position: 'absolute', left: '0%' }}>
											<span className="input-range__label input-range__label--value">
												<span className="input-range__label-container">
													0
												</span>
											</span>
											<div aria-valuemax={500000000} aria-valuemin={0} aria-valuenow={0} className="input-range__slider" draggable="false" role="slider" tabIndex={0} />
										</span>
										<span className="input-range__slider-container" style={{ position: 'absolute', left: '100%' }}>
											<span className="input-range__label input-range__label--value">
												<span className="input-range__label-container">
													500000000
												</span>
											</span>
											<div aria-valuemax={500000000} aria-valuemin={0} aria-valuenow={500000000} className="input-range__slider" draggable="false" role="slider" tabIndex={0} />
										</span>
									</div>
									<span className="input-range__label input-range__label--max">
										<span className="input-range__label-container">
											500000000
										</span>
									</span>
								</div>
							</div>
							<div className="mt-5 flex items-center justify-between">
								<div className="text-center w-5/12 py-2 text-xs rounded bg-light-grey-4">
									<div className="mt-9 flex items-center relative group rounded ani border pb-2 pt-4 px-4 focus:outline-none h-14 mt-0 px-0 pt-0 pb-0 h-4 border-none 
border-input-border">
										<label htmlFor="total-min-input" className="absolute h-full left-4 text-input-border ani z-10 duration-150 top-1 text-2-xs" />
										<input id="total-min-input" className="bg-transparent w-full text-center focus:outline-none text-xs text-black w-full h-full bg-transparent text-sm focus:outline-none relative z-20" min={0} max={500000000} defaultValue={0.00} />
									</div>
								</div>
								<hr className="border border-grey-stroke w-1/12" />
								<div className="text-center w-5/12 py-2 text-xs rounded bg-light-grey-4">
									<div className="mt-9 flex items-center relative group rounded ani border pb-2 pt-4 px-4 focus:outline-none h-14 mt-0 px-0 pt-0 pb-0 h-4 border-none 
border-input-border">
										<label htmlFor="total-max-input" className="absolute h-full left-4 text-input-border ani z-10 duration-150 top-1 text-2-xs" />
										<input id="total-max-input" className="bg-transparent w-full text-center focus:outline-none text-xs text-black w-full h-full bg-transparent text-sm focus:outline-none relative z-20" min={0} max={500000000} defaultValue="500,000,000" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="border-b border-grey-blue">
					<div className="flex items-center justify-between px-4 py-4" data-testid="toggle-filter-cost">
						<div className="flex space-x-3 items-center w-8/12 cursor-pointer">
							<button>
								<img alt="caret" loading="lazy" width={15} height={26} decoding="async" data-nimg={1} className="transform transition duration-500 ease-in-out h-3
				rotate-0
			" src="/_next/static/media/grey-caret-right.f2818630.svg" style={{ color: 'transparent' }} />
							</button>
							<p className="text-2-xs text-black">Total Project Cost</p>
						</div>
						<div className="flex space-x-4">
							<input type="checkbox" id="group-checkbox" readOnly />
						</div>
					</div>
					<div className="show-title px-5 bg-grey-white show-options
			h-0 overflow-hidden">
						<div className="mt-5">
							<div className="text-xs flex justify-between">
								<p>Total Project Cost</p>
								<p>NGN</p>
							</div>
							<div className="mt-7 px-3">
								<div aria-disabled="false" className="input-range">
									<span className="input-range__label input-range__label--min">
										<span className="input-range__label-container">
											0
										</span>
									</span>
									<div className="input-range__track input-range__track--background">
										<div className="input-range__track input-range__track--active" style={{ left: '0%', width: '100%' }} />
										<span className="input-range__slider-container" style={{ position: 'absolute', left: '0%' }}>
											<span className="input-range__label input-range__label--value">
												<span className="input-range__label-container">
													0
												</span>
											</span>
											<div aria-valuemax={500000000} aria-valuemin={0} aria-valuenow={0} className="input-range__slider" draggable="false" role="slider" tabIndex={0} />
										</span>
										<span className="input-range__slider-container" style={{ position: 'absolute', left: '100%' }}>
											<span className="input-range__label input-range__label--value">
												<span className="input-range__label-container">
													500000000
												</span>
											</span>
											<div aria-valuemax={500000000} aria-valuemin={0} aria-valuenow={500000000} className="input-range__slider" draggable="false" role="slider" tabIndex={0} />
										</span>
									</div>
									<span className="input-range__label input-range__label--max">
										<span className="input-range__label-container">
											500000000
										</span>
									</span>
								</div>
							</div>
							<div className="mt-5 flex items-center justify-between">
								<div className="text-center w-5/12 py-2 text-xs rounded bg-light-grey-4">
									<div className="mt-9 flex items-center relative group rounded ani border pb-2 pt-4 px-4 focus:outline-none h-14 mt-0 px-0 pt-0 pb-0 h-4 border-none 
border-input-border">
										<label htmlFor="total-min-input" className="absolute h-full left-4 text-input-border ani z-10 duration-150 top-1 text-2-xs" />
										<input id="total-min-input" className="bg-transparent w-full text-center focus:outline-none text-xs text-black w-full h-full bg-transparent text-sm focus:outline-none relative z-20" min={0} max={500000000} defaultValue={0.00} />
									</div>
								</div>
								<hr className="border border-grey-stroke w-1/12" />
								<div className="text-center w-5/12 py-2 text-xs rounded bg-light-grey-4">
									<div className="mt-9 flex items-center relative group rounded ani border pb-2 pt-4 px-4 focus:outline-none h-14 mt-0 px-0 pt-0 pb-0 h-4 border-none 
border-input-border">
										<label htmlFor="total-max-input" className="absolute h-full left-4 text-input-border ani z-10 duration-150 top-1 text-2-xs" />
										<input id="total-max-input" className="bg-transparent w-full text-center focus:outline-none text-xs text-black w-full h-full bg-transparent text-sm focus:outline-none relative z-20" min={0} max={500000000} defaultValue="500,000,000" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="px-4 mt-8 flex justify-between">
					<button className="py-2 border border-grey-blue text-center rounded bg-white w-4/12">
						Reset
					</button>
					<button data-testid="toggle-filter-apply" className="py-2 border border-accepted text-white text-center rounded bg-accepted w-7/12">
						Apply
					</button>
				</div>
			</div>
		</div>
		<svg width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute cursor-pointer right-0 hidden md:block">
			<path d="M0 12C0 5.373 5.373 0 12 0h20v32H12C5.373 32 0 26.627 0 20v-8Z" fill="#666" />
			<path d="M18.26 16a.521.521 0 0 1-.152.37l-3.481 3.48a.522.522 0 0 1-.739-.738L17 16l-3.112-3.112a.522.522 0 0 1 .739-.738l3.48 3.48a.522.522 0 0 1 .153.37Z" fill="#fff" />
		</svg>
	</div>
}

export default Filter;