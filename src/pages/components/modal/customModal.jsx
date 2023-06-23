// Import Dependency
import { useEffect, useRef, useState } from "react";
import useUpdateProject from "../../../Hooks/useupdateproject";
import CircularProgress from '@mui/material/CircularProgress';
import { Close } from "@mui/icons-material";

const CustomModal = ({ title, open, children, confirm }) => {
	// handle cancel delete function
	const handleDeleteCancel = () => {
		open.set(false);
	}

	return (
		open.init ?
			<div onClick={handleDeleteCancel} className='fixed p-2 md:p-5 top-0 left-0 w-full h-full bg-black/[.3] flex justify-center items-center z-[1000] '>
				<div
					className='bg-white w-full md:w-5/6 lg:w-3/6 rounded-lg max-h-[90%] overflow-scroll client-overflow-scroll'
					onClick={(e) => e.stopPropagation()}>
					<div className='text-center p-4'>
						<div className="flex justify-between items-center">
							<div className="flex items-center space-x-3">
								<h4 className="text-xs medium truncate">{title}</h4>
							</div>
							<Close onClick={handleDeleteCancel} />
						</div>
						<hr className="mb-3" />
						{children}
					</div>
					{
						confirm && <div className="px-8 py-3 text-sm flex space-x-3 justify-end bg-primary">
							<button onClick={() => handleDeleteCancel()} className="py-2 px-5 hover:bg-sky-700 rounded-full text-white medium">
								<p>{confirm.cancelText}</p>
							</button>
							<button onClick={() => confirm.handleConfirm(confirm.parameter)} className="py-2 px-5 rounded-full medium text-white bg-features-brown">
								{confirm.isLoading ? <CircularProgress size={10} sx={{ color: 'white' }} /> : <p>{confirm.confirmText}</p>}
							</button>
						</div>
					}
				</div>
			</div>
			: null
	)
}



export default CustomModal;