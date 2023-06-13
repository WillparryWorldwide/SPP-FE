import { useState } from "react";
import { Link } from "react-router-dom";
import IconSVG from "../../../Utils/svg";
import SiteImages from "../../../Utils/images";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

const SideBar = () => {
	const userData = useAuthUser();
	const [size, setSize] = useState(false);
	const isAuthenticated = useIsAuthenticated();

	return (
		<>
			<div className={`leftSideBar_sidebar__85S4S flex-shrink-0 z-[51] bg-white py-8 ${size ? 'w-[332px]' : 'w-32'}`}>
				<div>
					<div className="">
						<div className={`items-center flex space-x-2 mt-2 px-8 ${size ? 'justify-between' : "justify-center"}`}>
							<a href="/">
								<span className="relative">
									<span>
										<img alt="logo" className={`rounded-full ${size ? 'w-28' : 'w-56'}`} src={SiteImages.logo} />
									</span>
								</span>
							</a>
							<button onClick={() => setSize(prv => !prv)} className="flex-shrink-0 focus:outline-none">
								<span >
									<img alt="doubleArrow" src={IconSVG.doubleArrow} className={`${size ? 'rotate-0' : 'rotate-180'}`} />
								</span>
							</button>
						</div>
						<div className="tab_tabs-active__ealQz mt-10 mb-6 flex items-center relative justify-center bg-grey-white-2 py-4">
							<div className="flex items-center min-w-0 mr-2">
								<span className="mr-1 flex items-center">
									<div className="relative">
										<span>{userData()? userData().role.toUpperCase(): "Menu"}</span>
									</div>
								</span>
								<span className="font-filson-mediums font-medium text-sm truncate hidden" data-testid="active-tenant">SPP</span>
							</div>
						</div>
					</div>
					<div className="flex flex-col py-4 text-med items-left px-8">
						{
							isAuthenticated() &&
							<>
								<Link to="/spp/dashboard" className="leftSideBar_left-nav__H2cv9 text-light-grey-2 cursor-pointer leftSideBar_left-nav-active__v4i8w w-full">
									<div className="leftSideBar_left-nav__H2cv9 text-light-grey-2 cursor-pointer ">
										<ExploreOutlinedIcon className="mr-1" />
										{size && <p>Dashboard</p>}
									</div>
								</Link>

								<Link to="/spp/dashboard/projects" className="leftSideBar_left-nav__H2cv9 text-light-grey-2 cursor-pointer w-full">
									<div className="leftSideBar_left-nav__H2cv9 text-light-grey-2 cursor-pointer ">
										<img alt="icon" src={IconSVG.categoryIcon} decoding="async" data-nimg="intrinsic" className="leftSideBar_nav-icon__7Dhay mr-1 w-7" />
										{size && <p>Projects</p>}
									</div>
								</Link>
								<Link to="/spp/dashboard/users" className="leftSideBar_left-nav__H2cv9 text-light-grey-2 cursor-pointer w-full">
									<div className="leftSideBar_left-nav__H2cv9 text-light-grey-2 cursor-pointer ">
										<PersonIcon className="mr-1" />
										{size && <p>SPP</p>}
									</div>
								</Link>
								<Link to="/spp/dashboard" className="leftSideBar_left-nav__H2cv9 text-light-grey-2 cursor-pointer w-full">
									<div className="leftSideBar_left-nav__H2cv9 text-light-grey-2 cursor-pointer ">
										<SettingsIcon className="mr-1" />
										{size && <p>Settings</p>}
									</div>
								</Link>
							</>
						}
						{
							!isAuthenticated() &&
							<>
						<div className="leftSideBar_left-nav__H2cv9 text-light-grey-2 cursor-pointer ">
							<ExploreOutlinedIcon className="mr-1" />
							{size && <p>Discover</p>}
						</div>
						<div className="leftSideBar_left-nav__H2cv9 text-light-grey-2 cursor-pointer ">
							<CategoryOutlinedIcon className="mr-1" />
							{size && <p>Categories</p>}
						</div>
							</>
						}
					</div>
				</div>
			</div>
		</>
	)
}

export default SideBar
