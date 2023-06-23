import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import useGetAllContractors from '../../../Hooks/useGetAllContractors';
import { SearchNav, Title } from '../components';
import IconSVG from '../../../Utils/svg';
import { Link } from 'react-router-dom';
import { IconPlus } from '@tabler/icons-react';
import { CircularProgress, Toolbar, Typography } from '@mui/material';
import useAllSectors from '../../../Hooks/useAllSectors';
import useAllMDA from '../../../Hooks/useAllMDA';

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

const sectorColumns = [
	{ id: 'name', label: 'Name', minWidth: 70 },
	{ id: 'code', label: 'Code', minWidth: 70 }
];

const MDAColumns = [
	{ id: 'name', label: 'Name', minWidth: 70 },
	{ id: 'code', label: 'Code', minWidth: 70 }
];

export default function AllUser() {
	const [page, setPage] = React.useState(0);
	const { mdas, loadingMdas, fetchMdas } = useAllMDA();
	const { sectors, loadingSectors, fetchSectors } = useAllSectors();
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
		fetchSectors();
		fetchMdas();
		console.log("Rendering...");
	}, []);

	return <>
		<div className="sticky top-0 z-50">
			<Title headText="Users"
				icon={
					<span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
						<span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
							<img alt="empty" aria-hidden="true" src={IconSVG.empty} style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }} />
						</span>
						<img alt="icon" src={IconSVG.categoryIcon} decoding="async" data-nimg="intrinsic" className="leftSideBar_nav-icon__7Dhay" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
						<noscript />
					</span>
				}>
				<Link to="/spp/dashboard/users/register/admin" className="mx-1 bg-grey-white cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke flex font-bold hover:bg-EB">
					<IconPlus />
					Add Admin
				</Link>
			</Title>
		</div>
		<div className="h-full  p-6">
			<div>
				<div className="flex flex-wrap p-0 pb-28 sm:pb-0" data-testid="discover-projects">
					{/* Contractors */}
					{
						!loading ?
							<Paper sx={{ width: '100%', marginBottom: "2em", overflow: 'hidden' }}>
								<Toolbar sx={{
									backgroundColor: "#3878f4"
								}}>
									<Typography
										sx={{ flex: '1 1 100%' }}
										variant="h6"
										color="white"
										id="tableTitle"
										component="div">
										Contractors
									</Typography>
									<Link to="/spp/dashboard/users/register/contractor" className="mx-1 bg-grey-white cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke flex font-bold hover:bg-EB">
										<IconPlus />
										Add Contractor
									</Link>
								</Toolbar>
								<TableContainer sx={{ maxHeight: 440 }}>
									<Table stickyHeader aria-label="sticky table" title='llll'>
										<TableHead>
											<TableRow>
												{columns.map((column) => (
													<TableCell
														key={column.id}
														align={column.align}
														style={{ minWidth: column.minWidth, backgroundColor: "rgba(224, 224, 224, 1)" }}
														sx={{
															border: ".3px solid var(--tw-ring-color)"
														}}>
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
																	<TableCell key={column.id} align={column.align}
																		sx={{
																			border: ".3px solid var(--tw-ring-color)"
																		}}>
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
							: <CircularProgress />
					}

					{/* Sector */}
					{
						!loadingSectors ?
							<Paper sx={{ width: '100%', marginBottom: "2em", overflow: 'hidden' }}>
								<Toolbar sx={{
									backgroundColor: "#3878f4"
								}}>
									<Typography
										sx={{ flex: '1 1 100%' }}
										variant="h6"
										color="white"
										id="tableTitle"
										component="div">
										Sectors
									</Typography>
									<Link to="/spp/dashboard/users/register/sector" className="mx-1 bg-grey-white cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke flex font-bold hover:bg-EB">
										<IconPlus />
										Add Sector
									</Link>
								</Toolbar>
								<TableContainer sx={{ maxHeight: 440 }}>
									<Table stickyHeader aria-label="sticky table" title='llll'>
										<TableHead>
											<TableRow>
												{sectorColumns.map((column) => (
													<TableCell
														key={column.id}
														align={column.align}
														style={{ minWidth: column.minWidth, backgroundColor: "rgba(224, 224, 224, 1)" }}
														sx={{
															border: ".3px solid var(--tw-ring-color)"
														}}>
														{column.label}
													</TableCell>
												))}
											</TableRow>
										</TableHead>
										<TableBody>
											{sectors
												.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
												.map((row) => {
													return (
														<TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
															{sectorColumns.map((column) => {
																const value = row[column.id]
																return (
																	<TableCell key={column.id} align={column.align} sx={{
																		border: ".3px solid var(--tw-ring-color)"
																	}}>
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
									count={sectors.length}
									rowsPerPage={rowsPerPage}
									page={page}
									onPageChange={handleChangePage}
									onRowsPerPageChange={handleChangeRowsPerPage}
								/>
							</Paper>
							: <CircularProgress />
					}

					{/* MDA */}
					{
						!loadingMdas ?
							<Paper sx={{ width: '100%', marginBottom: "2em", overflow: 'hidden' }}>
								<Toolbar sx={{
									backgroundColor: "#3878f4"
								}}>
									<Typography
										sx={{ flex: '1 1 100%' }}
										variant="h6"
										color="white"
										id="tableTitle"
										component="div">
										MDA
									</Typography>
									<Link to="/spp/dashboard/users/register/mda" className="mx-1 bg-grey-white cursor-pointer rounded-full w-fit items-center text-xs p-2 px-4 flex-shrink-0 border border-grey-stroke flex font-bold hover:bg-EB">
										<IconPlus />
										Add MDA
									</Link>
								</Toolbar>
								<TableContainer sx={{ maxHeight: 440 }}>
									<Table stickyHeader aria-label="sticky table" title='llll'>
										<TableHead>
											<TableRow>
												{MDAColumns.map((column) => (
													<TableCell
														key={column.id}
														align={column.align}
														style={{ minWidth: column.minWidth, backgroundColor: "rgba(224, 224, 224, 1)" }}
														sx={{
															border: ".3px solid var(--tw-ring-color)"
														}}>
														{column.label}
													</TableCell>
												))}
											</TableRow>
										</TableHead>
										<TableBody>
											{mdas
												.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
												.map((row) => {
													return (
														<TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
															{MDAColumns.map((column) => {
																const value = row[column.id]
																return (
																	<TableCell key={column.id} align={column.align}
																		sx={{
																			border: ".3px solid var(--tw-ring-color)"
																		}}>
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
									count={mdas.length}
									rowsPerPage={rowsPerPage}
									page={page}
									onPageChange={handleChangePage}
									onRowsPerPageChange={handleChangeRowsPerPage}
								/>
							</Paper>
							: <CircularProgress />
					}

				</div>
			</div>
		</div>
	</>
}