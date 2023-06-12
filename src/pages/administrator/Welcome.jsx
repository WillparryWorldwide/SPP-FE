import React, { useEffect, useState } from "react";
import { Title } from "./components";
import IconSVG from "../../Utils/svg";
import SiteImages from "../../Utils/images";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import useGetAllContractors from '../../Hooks/useGetAllContractors';
import useAllSectors from '../../Hooks/useAllSectors';
import { CircularProgress, Toolbar, Typography } from '@mui/material';
import useAllMDA from "../../Hooks/useAllMDA";
import useSearchProject from '../../Hooks/usesearchproject';
import useAllUpdateHistory from "../../Hooks/useHistory";
import moment from "moment/moment";
import SearchBar from "../components/discovery/searchBar";
import ItemList from "../components/muiComponent/list";

const historyCol = [
	{ id: 'changed_by', label: 'User', minWidth: 70, force: (val) => val?.firstname },
	{ id: 'type', label: 'Updated', minWidth: 70 },
	{ id: 'createdAt', label: 'Time', minWidth: 70, force: (val) => moment(val).startOf("days").fromNow() }
];

const Welcome = () => {
	const [option, setOption] = useState(null);

	const [page, setPage] = React.useState(0);
	const { sectors, fetchSectors } = useAllSectors();
	const { mdas, fetchMdas } = useAllMDA();
	const { searchProject, data: searchData, loading: searchLoading } = useSearchProject()
	const { updateHistory, fetchUpdateHistory, loadingUpdateHistory } = useAllUpdateHistory();
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const { data: allContractors, fetchContractors } = useGetAllContractors();

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};
	
	const handleOption = (value) => {
		console.log("option", value);
		setOption(value)
	};

	useEffect(() => {
		fetchUpdateHistory();
		fetchContractors();
		fetchSectors();
		fetchMdas();
		console.log("Rendering...");
	}, []);

	// Make All Project Fetch Request
	useEffect(() => {
		//  Make Search Request
		const makeSearchFetch = async () => {
			await searchProject(option);
		}

		//  Set project to Search Request Data
		if (option) makeSearchFetch();

		console.log("Rendering...");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [option]);

	return (
		<>
			<div className="sticky top-0 z-50">
				<SearchBar handleOption={handleOption} />
				<div style={{
					position: "relative"
				}}>
					{
						option && <ItemList dataArray={searchData} isLoading={searchLoading} />
					}
				</div>
				<Title
					headText="Welcome"
					icon={
						<span>
							<span>
								<img
									alt="empty"
									aria-hidden="true"
									src={IconSVG.empty}
								/>
							</span>
							<img
								alt="discover"
								src={IconSVG.discoverIcon}
								decoding="async"
								data-nimg="intrinsic"
								className="leftSideBar_nav-icon__7Dhay"
							/>
						</span>
					}
				/>
			</div>
			<div className="h-full  p-6">
				<div>
					<div className="flex flex-wrap p-0 pb-28 sm:pb-0" data-testid="discover-projects">
						<div className="flex justify-start gap-8 px-3 sm:px-8 pt-8 pb-10 bg-grey-white w-full">
							<div data-testid="Sectors-card" className="w-fit bg-white rounded-lg cursor-pointer overflow-hidden flex-shrink-0 flex flex-col sm:flex-row items-center justify-between p-4">
								<div>
									<div className="flex items-center lg:mb-14">
										<span>
											<span>
												<img
													alt="something"
													aria-hidden="true"
													src={SiteImages.developer}
													className="w-20"
												/>
											</span>
										</span>
										<p className="medium ml-4">Projects 7</p>
									</div>
								</div>
							</div>
							<div data-testid="Sectors-card" className="w-fit bg-white rounded-lg cursor-pointer overflow-hidden flex-shrink-0 flex flex-col sm:flex-row items-center justify-between p-4">
								<div>
									<div className="flex items-center lg:mb-14">
										<span>
											<span>
												<img
													alt="something"
													aria-hidden="true"
													src={SiteImages.developer}
													className="w-20"
												/>
											</span>
										</span>
										<p className="medium ml-4">Contractor {allContractors?.length}</p>
									</div>
								</div>
							</div>
							<div data-testid="Sectors-card" className="w-fit bg-white rounded-lg cursor-pointer overflow-hidden flex-shrink-0 flex flex-col sm:flex-row items-center justify-between p-4">
								<div>
									<div className="flex items-center lg:mb-14">
										<span>
											<span>
												<img
													alt="something"
													aria-hidden="true"
													src={SiteImages.developer}
													className="w-20"
												/>
											</span>
										</span>
										<p className="medium ml-4">Sectors {sectors.length}</p>
									</div>
								</div>
							</div>
							<div data-testid="Sectors-card" className="w-fit bg-white rounded-lg cursor-pointer overflow-hidden flex-shrink-0 flex flex-col sm:flex-row items-center justify-between p-4">
								<div>
									<div className="flex items-center lg:mb-14">
										<span>
											<span>
												<img
													alt="something"
													aria-hidden="true"
													src={SiteImages.developer}
													className="w-20"
												/>
											</span>
										</span>
										<p className="medium ml-4">MDA {mdas.length}</p>
									</div>
								</div>
							</div>
						</div>
						<div className="flex justify-start gap-8 px-3 sm:px-8 pt-8 pb-10 bg-grey-white w-full">
							<div data-testid="Sectors-card" className="w-full bg-white rounded-lg cursor-pointer overflow-hidden p-4">
								<div>
									{/* History */}
									{
										!loadingUpdateHistory ?
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
														History
													</Typography>
												</Toolbar>
												<TableContainer sx={{ maxHeight: 440 }}>
													<Table stickyHeader aria-label="sticky table" title='llll'>
														<TableHead>
															<TableRow>
																{historyCol.map((column) => (
																	<TableCell
																		key={column.id}
																		align={column.align}
																		style={{ minWidth: column.minWidth }}
																		sx={{
																			border: ".3px solid #e0e0e0"
																		}}>
																		{column.label}
																	</TableCell>
																))}
															</TableRow>
														</TableHead>
														<TableBody>
															{updateHistory
																.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
																.map((row) => {
																	return (
																		<TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
																			{historyCol.map((column) => {
																				let value = row[column.id];
																				if (column.force) value = column.force(value);

																				return (
																					<TableCell key={column.id} align={column.align}
																						sx={{
																							border: ".3px solid #e0e0e0"
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
													count={updateHistory.length}
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
					</div>
				</div>
			</div>
		</>
	);
};

export default Welcome;