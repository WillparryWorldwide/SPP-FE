
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import { useIsAuthenticated } from 'react-auth-kit';
import IconSVG from '../../../Utils/svg';


const BottomNav = () => {
	const isAuthenticated = useIsAuthenticated();

	return (
		<>
			<div className='lg:hidden w-full justify-around sm:justify-center sm:gap-14 bg-white flex text-xs items-center py-4 fixed bottom-0 inset-x-0 appLayout_bottom-nav__CNkbR'>
				{
					isAuthenticated() &&
					<>
						<Link to="/spp/dashboard">
							<div className="text-light-grey-2 cursor-pointer flex flex-col item-center justify-center hover:text-primary">
								<ExploreOutlinedIcon sx={{ width: 20 }} className="mr-1" />
							</div>
						</Link>

						<Link to="/spp/dashboard/projects">
							<div className="text-light-grey-2 cursor-pointer flex flex-col item-center justify-center hover:text-primary">
								<img alt="icon" src={IconSVG.categoryIcon} decoding="async" data-nimg="intrinsic" className="leftSideBar_nav-icon__7Dhay mr-1 w-7" />
							</div>
						</Link>
						<Link to="/spp/dashboard/users">
							<div className="text-light-grey-2 cursor-pointer flex flex-col item-center justify-center hover:text-primary">
								<PersonIcon sx={{ width: 20 }} className="mr-1" />
							</div>
						</Link>
						<Link to="/spp/dashboard">
							<div className="text-light-grey-2 cursor-pointer flex flex-col item-center justify-center hover:text-primary">
								<SettingsIcon sx={{ width: 20 }} className="mr-1" />
							</div>
						</Link>
					</>
				}
				{
					!isAuthenticated() &&
					<>
						<Link to="/">
							<div className="text-light-grey-2 cursor-pointer flex flex-col item-center justify-center hover:text-primary">
								<ExploreOutlinedIcon sx={{ width: 20 }} className="mr-1" />
							</div>
						</Link>
						<Link to="/projects">
							<div className="text-light-grey-2 cursor-pointer flex flex-col item-center justify-center hover:text-primary">
								<CategoryOutlinedIcon sx={{ width: 20 }} className="mr-1" />
							</div>
						</Link>
					</>
				}
			</div>
		</>
	)
}

export default BottomNav
