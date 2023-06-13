// Import Dependency
import { useEffect, useRef, useState } from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {  Toolbar, Typography } from '@mui/material';



// Import Components




const ChartDetailsModal = () => {
	const [projectDetailsOption, setProjectDetailsOption] = useState(false)
	// const { loading, data } = useUpdateProject();

	const ProjectDetailsPopUp = ({ modalTitle, data, loading }) => {
		// handle cancel delete function
		const HandleModalCancel = () => {
			setProjectDetailsOption(false)
			console.log('i ran')
		}
  
console.log(data)
		return (
			<div onClick={HandleModalCancel} className='fixed p-2 md:p-5 top-0 left-0 w-full h-full bg-black/[.3] flex justify-center items-center z-[1000] '>
				<div
					className='bg-white w-full md:w-5/6 lg:w-3/6 rounded-lg max-h-[90%] overflow-scroll client-overflow-scroll'
					onClick={(e) => e.stopPropagation()}
				>
					<div className='text-center p-4'>
						<div className="flex justify-between items-center">
							<div className="flex items-center space-x-3">
								{/* <h4 className="text-xs medium truncate">{`${modalTitle.toUpperCase()} LGA Project Deatials`}</h4> */}
							</div>
							<p onClick={() => setProjectDetailsOption(false)} className='text-lg text-black'>X</p>
						</div>
						<Paper sx={{ width: '100%', marginBottom: "2em", overflow: 'hidden' }}>
							<Toolbar sx={{
								color: "white",
								backgroundColor: "#3878f4"
							}}>
								<Typography
									sx={{ flex: '1 1 100%' }}
									variant="h6"
									id="tableTitle"
									component="div">
									{`${modalTitle.toUpperCase()} LGA Project Deatials`}
								</Typography>
							</Toolbar>
							<TableContainer sx={{ maxHeight: 440 }}>
								<Table stickyHeader aria-label="sticky table" title='llll'>
									<TableHead>
										<TableRow>
												<TableCell>Name of Project</TableCell>
												<TableCell>Completed</TableCell>
												<TableCell>Ongoing</TableCell>
												<TableCell>Paused</TableCell>
												<TableCell>Abandon</TableCell>
												<TableCell>Closed</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow>
											<TableCell>LGA</TableCell>
											<TableCell>Completed</TableCell>
											<TableCell>Ongoing</TableCell>
											<TableCell>Paused</TableCell>
											<TableCell>Abandon</TableCell>
											<TableCell>Closed</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
							{/* <TablePagination
								rowsPerPageOptions={[10, 25, 100]}
								component="div"
								count={updateHistory.length}
								rowsPerPage={rowsPerPage}
								page={page}
								onPageChange={handleChangePage}
								onRowsPerPageChange={handleChangeRowsPerPage}
							/> */}
						</Paper>
					</div>

				</div>

			</div>
		)
	}
	return { projectDetailsOption, setProjectDetailsOption, ProjectDetailsPopUp }
}



export default ChartDetailsModal