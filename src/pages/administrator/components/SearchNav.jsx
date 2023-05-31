import IconSVG from "../../../components/icon/svg";

const SearchNav = () => {
	return <div className="w-full bg-white flex lg:px-6 px-2 relative items-center justify-between">
		<div className="md:w-11/12 w-full">
			<div className="py-4 px-4 sm:px-8 bg-white w-full">
				<div className="flex items-center">
					<div className="w-full flex justify-between items-center relative">
						<div className="text-tiny px-5 rounded-full bg-gray-200 items-center flex flex-row justify-between relative w-full">
							<input type="text" className="border-transparent outline-none text-light-grey search-input flex-grow px-2 py-3 bg-gray-200 w-full" id="search" placeholder="Search for any Project, LGA, State or Contractor" />
							<button className="bg-accepted rounded-r-full px-5 h-full items-center absolute right-0 top-0 flex">
								<img alt="search" loading="lazy" width={16} height={15} decoding="async" data-nimg={1} src={IconSVG.searchIcon} style={{ color: 'transparent', filter: "brightness(2)" }} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="md:flex bg-grey-white cursor-pointer  hidden items-center font-bold text-xs py-2 px-4 mr-2 flex-shrink-0 border-grey-stroke border rounded-full ">
			<p>Log out</p>
		</div>
	</div>
}

export default SearchNav;