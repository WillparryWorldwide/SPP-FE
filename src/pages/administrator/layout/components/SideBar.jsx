import { Link } from "react-router-dom";
import SiteImages from "../../../../Utils/images";
import IconSVG from "../../../../components/icon/svg";

const SideBar = () => {
	return <div className="leftSideBar_sidebar__85S4S flex-shrink-0 z-20 max-w-[332px] bg-white py-8 justify-between">
		<div>
			<div>
				<div className="items-center flex space-x-2 mt-2 justify-between px-8">
					<Link to="/">
						<span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
							<span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
								<img alt="something" aria-hidden="true" src={SiteImages.logo} style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }} />
							</span>
							<img alt="Eyemark" src={SiteImages.logo} decoding="async" data-nimg="intrinsic"
							 style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />

						</span>
					</Link>
					<button className="flex-shrink-0 focus:outline-none">
						<span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
							<img alt="arrows" data-testid="expand-nav" src={IconSVG.doubleArrow} decoding="async" data-nimg="intrinsic" className="h-3 false" />
							<noscript />
						</span>
					</button>
				</div>
				<div className="mt-10 mb-6  flex items-center min-h-[64px] relative pl-8 pr-6 justify-between bg-grey-white-2">
					<div className="flex items-center min-w-0 mr-2">
						<span className="mr-1 flex items-center">
							<div className="h-10 w-10 relative">
								<img alt="avatar" loading="lazy" decoding="async" data-nimg="fill" className="shadow rounded-full bg-onhold" src={SiteImages.logo} style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, color: 'transparent' }} />
							</div>
							<span className="cursor-pointer ml-2 hidden">
								<div className="relative">
									<img alt="Expand icon" loading="lazy" width={12} height={8} decoding="async" data-nimg={1} className="cursor-pointer" src={IconSVG.darkCaret} style={{ color: 'transparent' }} />
								</div>
							</span>
						</span>
						<span className="font-filson-mediums font-medium text-sm truncate" data-testid="active-tenant">
							SPPA
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
			</div>
			<div className="flex flex-col py-4 text-med items-start px-8">
				<Link to="/spp/dashboard" className="leftSideBar_left-nav__H2cv9 text-light-grey-2 cursor-pointer leftSideBar_left-nav-active__v4i8w">
					<span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
						<span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
							<img alt="empty" aria-hidden="true" src={IconSVG.empty} style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }} />
						</span>
						<img alt="discover" src={IconSVG.discoverIcon} decoding="async" data-nimg="intrinsic" className="leftSideBar_nav-icon__7Dhay" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
						<noscript />
					</span>
					<span className="ml-1">Dashboard</span>
				</Link>
				<Link to="/spp/dashboard/project" className="leftSideBar_left-nav__H2cv9 text-light-grey-2 cursor-pointer false">
					<span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
						<span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
							<img alt="empty" aria-hidden="true" src={IconSVG.empty} style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }} />
						</span>
						<img alt="icon" src={IconSVG.categoryIcon} decoding="async" data-nimg="intrinsic" className="leftSideBar_nav-icon__7Dhay" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
						<noscript />
					</span>
					<span className="ml-1">Project</span>
				</Link>
			</div>
		</div>
		<a target="_blank" rel="noreferrer" href="https://forms.gle/CvUffCikLe7XhYWA7" className="mt-5 px-8 h-9 hidden">
			<button className="bg-sub-text flex justify-center items-center rounded-[4px] w-full py-2 font-filson-bold text-white text-xs font-bold">
				<span className="mr-3">
					<span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
						<span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
							<img alt="something" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%274%27%20height=%2715%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }} />
						</span>
						<img alt="exclamation icon" src="/_next/static/media/exclamation.8382b606.svg" decoding="async" data-nimg="intrinsic" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} srcSet="/_next/static/media/exclamation.8382b606.svg 1x" />
						<noscript />
					</span>
				</span>
				<p className="ml-1">Give Feedback</p>
			</button>
		</a>
	</div>
}

export default SideBar;