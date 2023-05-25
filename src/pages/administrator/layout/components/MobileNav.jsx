




const MobileNav = () => {
	return <div className="lg:hidden w-full justify-around sm:justify-center sm:gap-14 bg-white flex items-center py-4 fixed bottom-0 inset-x-0 appLayout_bottom-nav__CNkbR">
		<a className="lg:hover:text-accepted transition duration-300 ease-in-out text-light-grey-2 flex flex-col justify-center appLayout_bottom-nav-active__Uy27B" href="/citizen/discover">
			<div className="appLayout_nav-icon__fHazs h-4 mx-auto">
				<span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
					<span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
						<img alt="something" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2717%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }} />
					</span>
					<img alt="Eyemark" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
					<noscript />
				</span>
			</div>
			<p className="mt-1 text-2-xs">Discover</p>
		</a>
		<a className="lg:hover:text-accepted transition duration-300 ease-in-out text-light-grey-2 flex flex-col justify-center false" href="/categories">
			<div className="appLayout_nav-icon__fHazs h-4 mx-auto">
				<span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
					<span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
						<img alt="something" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2714%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }} />
					</span>
					<img alt="Eyemark" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
					<noscript />
				</span>
			</div>
			<p className="mt-1 text-2-xs">Categories</p>
		</a>
		<div className="cursor-pointer relative">
			<img alt="avatar" loading="lazy" width={32} height={32} decoding="async" data-nimg={1} className="shadow rounded-full object-cover h-8" srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser.9747a638.png&w=32&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser.9747a638.png&w=64&q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser.9747a638.png&w=64&q=75" style={{ color: 'transparent' }} />
			<img alt="profile harmburger" loading="lazy" width={16} height={15} decoding="async" data-nimg={1} className="absolute right-0 bottom-0" src="/_next/static/media/harmburger.b6257175.svg" style={{ color: 'transparent' }} />
		</div>
		<div className="lg-hidden fixed w-[332px] right-0 top-0 bottom-0 flex flex-col justify-between transform ease-in-out transition-all duration-300 bg-white py-8 -translate-x-[-332px]">
			<div>
				<div className="mt-10 mb-6  flex items-center min-h-[64px] relative pl-8 pr-6 justify-between bg-grey-white-2">
					<div className="flex items-center min-w-0 mr-2">
						<span className="mr-1 flex items-center">
							<div className="h-10 w-10 relative">
								<img alt="avatar" loading="lazy" decoding="async" data-nimg="fill" className="shadow rounded-full bg-black" src="/assets/SVG/general/eyeMark.svg" style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, color: 'transparent' }} />
							</div>
							<span className="cursor-pointer ml-2 hidden">
								<div className="relative">
									<img alt="Expand icon" loading="lazy" width={12} height={8} decoding="async" data-nimg={1} className="cursor-pointer" src="/_next/static/media/downcaret.3b2c224b.svg" style={{ color: 'transparent' }} />
								</div>
							</span>
						</span>
						<span className="font-filson-mediums font-medium text-sm truncate" data-testid="active-tenant">
							Eyemark
						</span>
					</div>
					<div className="flex items-center">
						<div className="h-[56px] bg-grey-stroke w-[1px] self-center" />
						<div className="flex gap-2 ml-2">
							<div className="cursor-pointer h-6 w-6 relative">
								<img alt="avatar" loading="lazy" decoding="async" data-nimg="fill" className="shadow rounded-full" src="https://res.cloudinary.com/zst/image/upload/v1682948947/hi4tmxvrt29gcmay82f6.svg" style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, color: 'transparent' }} />
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col py-4 text-med items-start px-8" />
			</div>
			<div>
				<div className="px-6">
					<a target="_blank" rel="noreferrer" href="https://forms.gle/CvUffCikLe7XhYWA7" className="mt-5 px-8 h-9">
						<button className="bg-sub-text flex justify-center items-center rounded-[4px] w-full py-2 font-filson-bold text-white text-xs font-bold">
							<span className="mr-3">
								<span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
									<span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
										<img alt="something" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%274%27%20height=%2715%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }} />
									</span>
									<img alt="exclamation icon" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
									<noscript />
								</span>
							</span>
							<p className="ml-1">Give Feedback</p>
						</button>
					</a>
				</div>
			</div>
		</div>
	</div>
}

export default MobileNav;