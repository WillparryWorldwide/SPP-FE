
const Title = ({ headText, icon, appendChild }) => {
	return <div className="bg-white relative h-14 z-30 border-t border-EB md:px-6 px-3 flex justify-between items-center w-full" data-testid="project-view_grid">

		<div className="flex relative items-center space-x-2 h-full mr-2 md:ml-4 flex-shrink-0 " data-testid="set-project_view">
			<div className="w-fit items-center text-md p-2 px-4 flex-shrink-0 md:flex font-bold" data-testid="around-you_pill">
				{icon}
				{headText}
			</div>
			<div className="h-8 bg-grey-stroke w-[1px]" />
		</div>
		<div className="flex w-full space-x-2 h-full items-center overflow-x-auto hide-scroll pr-4">
			<p>SPP App</p>
		</div>
		{appendChild}
	</div>
}

export default Title;