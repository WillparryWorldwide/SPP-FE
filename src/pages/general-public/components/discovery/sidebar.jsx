
import logo from "../../../../assets/images/SPPA LOGO.jpg";
import doubleArrow from "../../../../assets/images/doubleArrow.svg";
import Icon from "../../../../components/icon/icons";
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import { useState } from "react";

const SideBar = () => {
    const [size, setSize] = useState(false)
  return (
    <>
      <div className={`leftSideBar_sidebar__85S4S flex-shrink-0 z-[51] bg-white py-8 ${size ? 'w-[332px]' : 'w-32'}`}>
        <div>
            <div className="">
                <div className={`items-center flex space-x-2 mt-2 px-8 ${size ? 'justify-between': "justify-center"}`}>
                    <a href="/">
                        <span className="relative">
                            <span>
                                <img  alt=""  src={logo} />
                            </span>
                        </span>
                    </a>
                    <button onClick={()=> setSize(prv => !prv)} className="flex-shrink-0 focus:outline-none">
                        <span >
                            <img alt="" src={doubleArrow} className={`${size ? 'rotate-0' : 'rotate-180'}`} />
                        </span>
                    </button>
                </div>
                <div className="mt-10 mb-6  flex items-center min-h-[64px] relative justify-center bg-grey-white-2">
                    <div className="flex items-center min-w-0 mr-2">
                        <span className="mr-1 flex items-center">
                            <div className="h-10 w-10 relative">
                                <img alt="avatar" className="shadow rounded-full bg-black absolute h-full w-full text-transparent" src={logo} />
                            </div>
                            <span className="cursor-pointer ml-2">
                                <div className="relative stroke-black">
                                    <Icon drop_down='drop_down' />
                                </div>
                            </span>
                        </span>
                        <span className="font-filson-mediums font-medium text-sm truncate hidden" data-testid="active-tenant">Eyemark</span>
                    </div>
                    {/* <div className="items-center hidden">
                        <div className="h-[56px] bg-grey-stroke w-[1px] self-center"></div>
                        <div className="flex gap-2 ml-2">
                            <div className="cursor-pointer h-6 w-6 relative">
                                <img alt="avatar" loading="lazy" decoding="async" data-nimg="fill" className="shadow rounded-full absolute w-full h-full text-transparent" src="https://res.cloudinary.com/zst/image/upload/v1682948947/hi4tmxvrt29gcmay82f6.svg" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="flex flex-col py-4 text-med items-left px-8">
                <div className="leftSideBar_left-nav__H2cv9 text-light-grey-2 cursor-pointer ">
                    <ExploreOutlinedIcon className="mr-1" />
                    {size && <p>Discover</p>}
                </div>
                <div className="leftSideBar_left-nav__H2cv9 text-light-grey-2 cursor-pointer ">
                    <ExploreOutlinedIcon className="mr-1" />
                    {size && <p>Eyemarked</p>}
                </div>
                <div className="leftSideBar_left-nav__H2cv9 text-light-grey-2 cursor-pointer ">
                    <CategoryOutlinedIcon className="mr-1" />
                    {size && <p>Categories</p>}
                </div>
                <div className="leftSideBar_left-nav__H2cv9 text-light-grey-2 cursor-pointer ">
                    <NotificationsNoneIcon className="mr-1" />
                    {size && <p>Notifications</p>}
                </div>
                <div className="leftSideBar_left-nav__H2cv9 text-light-grey-2 cursor-pointer ">
                    <PersonIcon className="mr-1" />
                    {size && <p>Profile</p>}
                </div>
                <div className="leftSideBar_left-nav__H2cv9 text-light-grey-2 cursor-pointer ">
                    <SettingsIcon className="mr-1" />
                    {size && <p>Settings</p>}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SideBar
