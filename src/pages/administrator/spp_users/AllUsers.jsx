import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import useGetAllContractors from '../../../Hooks/useGetAllContractors';
import ContentHeader from '../../../components/ContentHeader';

const columns = [
	{ id: 'SPP_name', label: 'Spp Name', minWidth: 70 },
	{ id: 'SPP_rc_number', label: 'RC Number', minWidth: 170 },
	{
		id: 'username',
		label: 'Email',
		minWidth: 170
	},
	{ id: 'phone', label: "Phone", minWidth: 170 },
	{
		id: 'address',
		label: "Address",
		minWidth: 170
	}
];

export default function AllUser() {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const { data, loading, fetchContractors } = useGetAllContractors();

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	useEffect(() => {
		fetchContractors();
		console.log("Rendering...");
	}, [fetchContractors.name]);

	return <>
		<ContentHeader title="Contractors" />
		<section className="content">
			<div className="container-fluid">
				<div className="card">
					<div className="card-header">
						<h3 className="card-title">All Contractors</h3>
					</div>
					<div className="card-body">
						{
							!loading ?
							<Paper sx={{ width: '100%', overflow: 'hidden' }}>
								<TableContainer sx={{ maxHeight: 440 }}>
									<Table stickyHeader aria-label="sticky table">
										<TableHead>
											<TableRow>
												{columns.map((column) => (
													<TableCell
														key={column.id}
														align={column.align}
														style={{ minWidth: column.minWidth }}
													>
														{column.label}
													</TableCell>
												))}
											</TableRow>
										</TableHead>
										<TableBody>
											{data
												.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
												.map((row) => {
													return (
														<TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
															{columns.map((column) => {
																const value = row[column.id] 
																return (
																	<TableCell key={column.id} align={column.align}>
																		{value}
																	</TableCell>
																);
															})}
														</TableRow>
													);
												})}
										</TableBody>
									</Table>
								</TableContainer>
								<TablePagination
									rowsPerPageOptions={[10, 25, 100]}
									component="div"
									count={data.length}
									rowsPerPage={rowsPerPage}
									page={page}
									onPageChange={handleChangePage}
									onRowsPerPageChange={handleChangeRowsPerPage}
								/>
							</Paper>
							: <h4>Loading...</h4>
						}
					</div>
				</div>
			</div>
		</section>
	</>
}