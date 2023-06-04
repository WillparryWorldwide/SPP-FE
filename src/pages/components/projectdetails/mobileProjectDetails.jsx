import IconSVG from "../../../Utils/svg";

const mobileDetails =  (project) => {
	return <div className="sm:hidden px-6">
		<div className="mt-20 flex flex-col items-center">
			<div className="w-full flex justify-between">
				<img alt="folder" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={IconSVG.folder} />
				<p className="medium w-9/12">{project?.name}</p>
			</div>
			<div className="mt-6 w-full flex justify-between medium">
				<div>
					<p className="text-sm text-dark-grey">25</p>
					<p className="mt-1 text-3-xs text-input-border uppercase">Verified</p>
				</div>
				<div>
					<p className="text-sm text-dark-grey">{project?.review?.comments?.length}</p>
					<p className="mt-1 text-3-xs text-input-border uppercase">REVIEWS</p>
				</div>
				<div>
					<p className="text-sm text-dark-grey capitalize">positive</p>
					<p className="mt-1 text-3-xs text-input-border uppercase">AVG. SENTIMENT</p>
				</div>
			</div>
			<p className="text-sub-text text-2-xs mt-5 text-center">{project?.description}</p>
			<div className="mt-4 w-4/12"><button data-testid="project-btn_SPP"
				className="undefined font-bold text-center w-full border py-2 text-xs sm:text-sm rounded-md tracking-wider flex-shrink-0 bg-accepted-light border-accepted text-accepted hover:bg-accepted hover:text-accepted-light transition ease-in-out duration-300">
				<p className="medium text-base">SPPA</p>
			</button></div>
		</div>
	</div>
}

export default mobileDetails;