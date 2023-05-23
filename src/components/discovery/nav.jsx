
import search from '../../assets/images/search.svg'
import logo from '../../assets/logo/logo.png'
import { Link } from 'react-router-dom';

const DiscoveryNavBar = () => {
  return (
    <>
        <div className="w-full bg-white flex lg:px-6 px-2 relative items-center justify-between" id="myHeader">
            <div className="md:flex w-24 bg-grey-white cursor-pointer overflow-hidden  hidden items-center font-bold text-xs py-2 px-4 mr-2 flex-shrink-0 border-grey-stroke border rounded-full ">
                <Link to="/">
                    <img alt="logo" src={logo} className='w-full h-full object-fill object-center'  />
                </Link>
            </div>
            <div className="md:w-11/12 w-full">
                <div className="py-4 px-4 sm:px-8 bg-white w-full">
                    <div className="flex items-center">
                        <div className="w-full flex justify-between items-center relative">
                            <div className="text-tiny px-5 rounded-full bg-gray-200 items-center flex flex-row justify-between relative w-full">
                                <input type="text" className="border-transparent outline-none text-light-grey search-input flex-grow px-2 py-3 bg-gray-200 w-full" id="search" placeholder="Search for any Project, LGA, State or Contractor" autoComplete="off" />
                                <button className="bg-accepted rounded-r-full px-5 h-full items-center absolute right-0 top-0 flex">
                                    <img alt="search" loading="lazy" width="16" height="15" style={{ color: 'transparent' }} src={search} />
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
    </>
  )
}

export default DiscoveryNavBar
