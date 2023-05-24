
import search from '../../assets/images/search.svg'
import logo from '../../assets/logo/logo.png'
import { Link } from 'react-router-dom';
import Icon from '../icon/icons';

const DiscoveryNavBar = ({option, handleOption}) => {
    console.log(option)
    return (
        <>
            <div className="w-full bg-white flex lg:px-6 px-2 relative items-center justify-between" id="myHeader">
                <div className="md:flex w-24 bg-grey-white cursor-pointer overflow-hidden  hidden items-center font-bold text-xs py-2 px-4 mr-2 flex-shrink-0 border-grey-stroke border rounded-full ">
                    <Link to="/">
                        <img alt="logo" src={logo} className='w-full h-full object-fill object-center' />
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
           <div className='bg-white relative h-14 z-30 border-t border-EB md:px-6 px-3 flex justify-between items-center w-full'>
                <div className="flex relative items-center space-x-2 h-full mr-2 md:ml-4 flex-shrink-0 " data-testid="set-project_view">
                    <div className="lg:block fill-transparent cursor-pointer flex-shrink-0 hover:text-grey-white text-transparent block text-accepted-light">
                            <Icon grid_menu='grid_menu' />
                        </div>
                    <div className='lg:block fill-transparent cursor-pointer flex-shrink-0 hover:text-grey-white text-transparent hidden text-white'>
                        <Icon list_menu='list_menu' />
                    </div>
                    <div className="md:hidden fill-transparent flex-shrink-0">
                            <Icon drop_down='drop_down' />
                        </div>
                    <div  onClick={() => handleOption('Around You')} className={`cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke md:flex hidden font-bold  ${option?.toLowerCase() === 'around you' ? ' bg-primary hover:bg-prmary/[.5] text-white stroke-white' : ' stroke-black bg-grey-white text-black hover:bg-EB'}`} data-testid="around-you_pill">
                        <div className='mr-1 fill-transparent'>
                            <Icon around_you='around_you' />
                        </div>
                        <p>Around You!</p>
                    </div>
                        <div className="h-8 bg-grey-stroke w-[1px]"> </div>
                </div>
                <div className="flex w-full space-x-2 h-full items-center overflow-x-auto hide-scroll pr-4">
                    <div onClick={() => handleOption('Around You')} className={`cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke flex md:hidden font-bold  ${option?.toLowerCase() === 'around you' ? ' bg-primary hover:bg-prmary/[.5] text-white stroke-white' : ' stroke-black bg-grey-white text-black hover:bg-EB'}`}>
                        <div className='mr-1 fill-transparent'>
                            <Icon around_you='around_you' />
                        </div>
                        <p>Around You!</p>
                    </div>
                    <div onClick={() => handleOption('Special Projects')} className={`cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke flex ${option?.toLowerCase() === 'special projects' ? ' bg-primary hover:bg-prmary/[.5] text-white fill-white' : 'bg-grey-white text-black hover:bg-EB'}`} data-testid="tag-SpecialProjects">
                        <div className='mr-1'>
                            <Icon special_projects='special_projects' />
                        </div>
                        <p>Special Projects</p>
                    </div>
                    <div onClick={() => handleOption('Major Roads')} className={`cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke flex ${option?.toLowerCase() === 'major roads' ? ' bg-primary hover:bg-prmary/[.5] text-white fill-white' : 'bg-grey-white text-black hover:bg-EB'}`} data-testid="tag-MajorRoads">
                        <div className='mr-1'>
                            <Icon major_roads='major_roads' />
                        </div>
                        <p>Major Roads</p>
                    </div>
                    <div onClick={() => handleOption('Railway')} className={`cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke flex ${option?.toLowerCase() === 'railway' ? ' bg-primary hover:bg-prmary/[.5] text-white fill-white' : 'bg-grey-white text-black hover:bg-EB'}`} data-testid="tag-Railway">
                        <div className='mr-1'>
                            <Icon railways='railways' />
                        </div>
                        <p>Railway</p>
                    </div>
                    <div onClick={() => handleOption('Most Discussed')} className={`cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke flex ${option?.toLowerCase() === 'most discussed' ? ' bg-primary hover:bg-prmary/[.5] text-white fill-white' : 'bg-grey-white text-black hover:bg-EB'}`} data-testid="tag-MostDiscussed">
                        <div className='mr-1'>
                            <Icon most_discussed='most_discussed' />
                        </div>
                        <p>Most Discussed</p>
                    </div>
                    <div onClick={() => handleOption('Bridges')} className={`cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke flex ${option?.toLowerCase() === 'bridges' ? ' bg-primary hover:bg-prmary/[.5] text-white fill-white' : 'bg-grey-white text-black hover:bg-EB'}`} data-testid="tag-Bridges">
                        <div className='mr-1'>
                            <Icon bridges='bridges' />
                        </div>
                        <p>Bridges</p>
                    </div>
                    <div onClick={() => handleOption('Power')} className={`cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke flex ${option?.toLowerCase() === 'power' ? ' bg-primary hover:bg-prmary/[.5] text-white fill-white' : 'bg-grey-white text-black hover:bg-EB'}`} data-testid="tag-Power">
                        <div className='mr-1'>
                            <Icon power='power' />
                        </div>
                        <p>Power</p>
                    </div>
                    <div onClick={() => handleOption('Renewable Energy')} className={`cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke flex ${option?.toLowerCase() === 'renewable energy' ? ' bg-primary hover:bg-prmary/[.5] text-white fill-white' : 'bg-grey-white text-black hover:bg-EB'}`} data-testid="tag-RenewableEnergy">
                        <div className='mr-1'>
                            <Icon renewable_energy='renewable_energy' />
                        </div>
                        <p>Renewable Energy</p>
                    </div>
                    <div onClick={() => handleOption('Health')} className={`cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke flex ${option?.toLowerCase() === 'health' ? ' bg-primary hover:bg-prmary/[.5] text-white fill-white' : 'bg-grey-white text-black hover:bg-EB'}`} data-testid="tag-Health">
                        <div className='mr-1'>
                            <Icon health='health' />
                        </div>
                            <p>Health</p>
                    </div>
                    <div onClick={() => handleOption('Schools')} className={`cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke flex ${option?.toLowerCase() === 'schools' ? ' bg-primary hover:bg-prmary/[.5] text-white fill-white' : 'bg-grey-white text-black hover:bg-EB'}`} data-testid="tag-Schools">
                        <div className='mr-1'>
                            <Icon schools='schools' />
                        </div>
                        <p>Schools</p>
                    </div>
                    <div onClick={() => handleOption('Housing')} className={`cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke flex ${option?.toLowerCase() === 'housing' ? ' bg-primary hover:bg-prmary/[.5] text-white fill-white' : 'bg-grey-white text-black hover:bg-EB'}`} data-testid="tag-Housing">
                        <div className='mr-1'>
                            <Icon housing='housing' />
                        </div>
                        <p>Housing</p>
                    </div>
                    <div onClick={() => handleOption('Oil & Gas')} className={`cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke flex ${option?.toLowerCase() === 'oil & gas' ? ' bg-primary hover:bg-prmary/[.5] text-white fill-white' : 'bg-grey-white text-black hover:bg-EB'}`} data-testid="tag-Oil&amp;Gas">
                        <div className='mr-1'>
                            <Icon oile_gas='oile_gas' />
                        </div>
                        <p>Oil & Gas</p>
                    </div>
                    <div onClick={() => handleOption('Ports')} className={`cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke flex ${option?.toLowerCase() === 'ports' ? ' bg-primary hover:bg-prmary/[.5] text-white fill-white' : 'bg-grey-white text-black hover:bg-EB'}`} data-testid="tag-Ports">
                        <div className='mr-1'>
                            <Icon ports='ports' />
                        </div>
                        <p>Ports</p>
                    </div>
                    <div onClick={() => handleOption('Agriculture')} className={`cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke flex ${option?.toLowerCase() === 'agriculture' ? ' bg-primary hover:bg-prmary/[.5] text-white fill-white' : 'bg-grey-white text-black hover:bg-EB'}`} data-testid="tag-Agriculture">
                        <div className='mr-1'>
                            <Icon agriculture='agriculture' />
                        </div>
                        <p>Agriculture</p>
                    </div>
                    <div onClick={() => handleOption('Transport')} className={`cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke flex ${option?.toLowerCase() === 'transport' ? ' bg-primary hover:bg-prmary/[.5] text-white fill-white' : 'bg-grey-white text-black hover:bg-EB'}`} data-testid="tag-Transport">
                        <div className='mr-1'>
                            <Icon transport='transport' />
                        </div>
                        <p>Transport</p>
                    </div>
                    <div onClick={() => handleOption('Newly Added')} className={`cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke flex ${option?.toLowerCase() === 'newly added' ? ' bg-primary hover:bg-prmary/[.5] text-white fill-white' : 'bg-grey-white text-black hover:bg-EB'}`} data-testid="tag-NewlyAdded">
                        <div className='mr-1'>
                            <Icon newly_added='newly_added' />
                        </div>
                        <p>Newly Added</p>
                    </div>
                    <div onClick={() => handleOption('Nearing Completion')} className={`cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke flex ${option?.toLowerCase() === 'nearing completion' ? ' bg-primary hover:bg-prmary/[.5] text-white fill-white' : 'bg-grey-white text-black hover:bg-EB'}`} data-testid="tag-NearingCompletion">
                        <div className='mr-1'>
                            <Icon nearing_completed='nearing_completed' />
                        </div>
                        <p>Nearing Completion</p>
                    </div>
                </div>
           </div>
    </>
  )
}

export default DiscoveryNavBar
