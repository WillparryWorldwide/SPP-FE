
import { useEffect, useRef } from 'react';
import Icon from '../../../components/icon/icons';
import { camelCase } from 'lodash';
import useGetAllProject from '../../../Hooks/usegetallproject';
import FilterProject from '../helper/getFilterBy';
import IconSVG from '../../../Utils/svg';

const DiscoveryNavBar = ({ option, handleOption }) => {
	const searchRef = useRef();
	const { fetchProject, data } = useGetAllProject();
	const myFilters = new FilterProject(data);

	// Make All Project Fetch Request
	useEffect(() => {
		const makeFetch = async () =>{
			console.log('here1')
			fetchProject();
		}
		makeFetch();
		console.log("Rendering...");
	}, []);

	return (
		<>
			<div className="w-full bg-white flex lg:px-6 px-2 relative items-center justify-between" id="myHeader">
				{/* <Link to="/" className='h-10 md:flex w-24 bg-grey-white cursor-pointer overflow-hidden  hidden items-center font-bold text-xs p-2 mr-2 flex-shrink-0 border-grey-stroke border rounded-full'>
                    <img alt="logo" src={logo} className='w-full h-full object-fill object-center' />
                </Link> */}

				<div className="md:w-11/12 w-full">
					<div className="py-4 px-4 sm:px-8 bg-white w-full">
						<div className="flex items-center">
							<div className="w-full flex justify-between items-center relative">
								<div className="text-tiny px-5 rounded-full bg-gray-200 items-center flex flex-row justify-between relative w-full">
									<input ref={searchRef} type="text" className="border-transparent outline-none text-light-grey search-input flex-grow px-2 py-3 bg-gray-200 w-full" id="search" placeholder="Search for any Project, LGA, State or Contractor" autoComplete="off" />
									<button onClick={() => handleOption(searchRef.current.value)} className="bg-primary rounded-r-full px-5 h-full items-center absolute right-0 top-0 flex">
										<img alt="search" loading="lazy" width="16" height="15" style={{ color: 'transparent' }} src={IconSVG.search_icon} />
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
			<div className='bg-white rela            tive h-14 z-30 border-t border-EB md:px-6 px-3 flex justify-between items-center w-full'>
				<div className="flex relative items-center space-x-2 h-full mr-2 md:ml-4 flex-shrink-0 " data-testid="set-project_view">
					<div className="lg:block fill-primary cursor-pointer flex-shrink-0 hover:text-grey-white text-transparent block">
						<Icon grid_menu='grid_menu' />
					</div>
					<div className='lg:block fill-transparent cursor-pointer flex-shrink-0 hover:text-grey-white text-transparent hidden text-white'>
						<Icon list_menu='list_menu' />
					</div>
					<div className="md:hidden fill-transparent flex-shrink-0">
						<Icon drop_down='drop_down' />
					</div>
					<div onClick={() => handleOption('Around You')} className={`cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke md:flex hidden font-bold  ${option?.toLowerCase() === 'around you' ? ' bg-primary hover:bg-prmary/[.5] text-white stroke-white' : ' stroke-black bg-grey-white text-black hover:bg-EB'}`} data-testid="around-you_pill">
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
					{myFilters.category.length && <div className="h-8 bg-grey-stroke w-[1px]"></div>}
					{
						myFilters.category.map(category => <div key={category} onClick={() => handleOption(category)} className={`cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke flex ${option?.toLowerCase() === category.toLowerCase() ? 'bg-primary hover:bg-prmary/[.5] text-white fill-white' : 'bg-grey-white text-black hover:bg-EB'}`} data-testid={`tag-${camelCase(category)}`}>
							<p>{category.toUpperCase()}</p>
						</div>)
					}
					{myFilters.local_goverment.length && <div className="h-8 bg-grey-stroke w-[1px]"></div>}
					{
						myFilters.local_goverment.map(lga => <div key={lga} onClick={() => handleOption(lga)} className={`cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke flex ${option?.toLowerCase() === lga.toLowerCase() ? 'bg-primary hover:bg-prmary/[.5] text-white fill-white' : 'bg-grey-white text-black hover:bg-EB'}`} data-testid={`tag-${camelCase(lga)}`}>
							<p>{lga.toUpperCase()}</p>
						</div>)
					}
					{myFilters.state.length && <div className="h-8 bg-grey-stroke w-[1px]"></div>}
					{
						myFilters.state.map(state => <div key={state} onClick={() => handleOption(state)} className={`cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke flex ${option?.toLowerCase() === state.toLowerCase() ? 'bg-primary hover:bg-prmary/[.5] text-white fill-white' : 'bg-grey-white text-black hover:bg-EB'}`} data-testid={`tag-${camelCase(state)}`}>
							<p>{state.toUpperCase()}</p>
						</div>)
					}
				</div>
			</div>
		</>
	)
}

export default DiscoveryNavBar
