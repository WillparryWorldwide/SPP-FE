import { useEffect, useState } from "react";
import { Title } from "./components";
import IconSVG from "../../Utils/svg";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import { BarChart, LineChart  } from "../components/charts/index";
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import { CircularProgress, Grid, Toolbar, Typography } from '@mui/material';
import useSearchProject from '../../Hooks/usesearchproject';
import useAllUpdateHistory from "../../Hooks/useHistory";
import moment from "moment/moment";
import SearchBar from "../components/discovery/searchBar";
import ItemList from "../components/muiComponent/list";
import useAllSectorsChartData from "../../Hooks/useSectorChart";
import _ from "lodash";
import useAllLGAChartData from "../../Hooks/useLAGChart";

const historyCol = [
	{ id: 'changed_by', label: 'User', minWidth: 70, force: (val) => val?.firstname },
	{ id: 'type', label: 'Updated', minWidth: 70 },
	{ id: 'createdAt', label: 'Time', minWidth: 70, force: (val) => moment(val).startOf("days").fromNow() }
];

const Welcome = () => {
	const [option, setOption] = useState(null);

	const initChatData = (data) => {
		return {
			labels: _.sortBy(data.LABELS)?.map(l => l.toUpperCase()),
			datasets: [
				{
					label: 'Completed project',
					data: _.sortBy(data.LABELS)?.map(l => data.COMPLETED[l] ? data.COMPLETED[l] : 0),
					backgroundColor: 'rgb(54 235 86 / 50%)',
					borderColor: 'rgb(54 235 86)',
					borderWidth: 1
				},
				{
					label: 'Ongoing project',
					data: _.sortBy(data.LABELS)?.map(l => data.ONGOING[l] ? data.ONGOING[l] : 0),
					backgroundColor: 'rgba(54, 162, 235, 0.5)',
					borderColor: 'rgba(54, 162, 235, 1)',
					borderWidth: 1
				},
				{
					label: 'Not Started',
					data: _.sortBy(data.LABELS)?.map(l => data.NOT_STARTED[l] ? data.NOT_STARTED[l] : 0),
					backgroundColor: 'rgba(162 152 152, 0.5)',
					borderColor: 'rgb(162 152 152)',
					borderWidth: 1
				},
				{
					label: 'Waiting Pay',
					data: _.sortBy(data.LABELS)?.map(l => data.WAITING_PAY[l] ? data.WAITING_PAY[l] : 0),
					backgroundColor: 'rgba(255, 206, 86, 0.5)',
					borderColor: 'rgba(255, 206, 86, 1)',
					borderWidth: 1
				},
				{
					label: 'Missed Milestone',
					data: _.sortBy(data.LABELS)?.map(l => data.MILESTONE_MISSED[l] ? data.MILESTONE_MISSED[l] : 0),
					backgroundColor: 'rgba(255, 99, 132, 0.5)',
					borderColor: 'rgba(255, 99, 132, 1)',
					borderWidth: 1
				}
			],
		}
	}

	const { fetchSectorsChartData, loadingSectorsChartData, sectorsChartData } = useAllSectorsChartData();
	const { LGAChartData, fetchLGAChartData, loadingLGAChartData } = useAllLGAChartData();
	const [sectorChart, setSectorChartData] = useState(initChatData(sectorsChartData));
	const [lgaChart, setLgaChart] = useState(initChatData(LGAChartData));

	const [page, setPage] = useState(0);
	const { searchProject, data: searchData, loading: searchLoading } = useSearchProject()
	const { updateHistory, fetchUpdateHistory, loadingUpdateHistory } = useAllUpdateHistory();
	const [rowsPerPage, setRowsPerPage] = useState(10);

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
		fetchSectorsChartData();
		fetchUpdateHistory();
		fetchLGAChartData();
		console.log("Rendering...");
	}, []);

	useEffect(() => {
		setLgaChart(initChatData(LGAChartData));
		setSectorChartData(initChatData(sectorsChartData));
	}, [LGAChartData, sectorsChartData]);

	// Make All Project Fetch Request
	useEffect(() => {
		//  Make Search Request
		const makeSearchFetch = async () => {
			searchProject(option);
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
				<Grid container>
					<Grid item xs={12} md={6}>
						<Paper sx={{ maxWidth: "50em", marginBottom: "2em", padding: ".3em", overflow: 'hidden' }}>
							<LineChart chartData={lgaChart} chartTitle="LGA Project" filterOption="local_goverment" isLoading={loadingLGAChartData} />
						</Paper>
					</Grid>
					<Grid item xs={12} md={6}>
						<Paper sx={{ maxWidth: "50em", marginBottom: "2em", padding: ".3em", overflow: 'hidden' }}>
							<BarChart chartData={sectorChart} chartTitle="Sector Project" filterOption="sector" isLoading={loadingSectorsChartData} />
						</Paper>
					</Grid>
					<Grid item xs={12}>
						<Paper sx={{ maxWidth: "100%", marginBottom: "2em", padding: ".3em", overflow: 'hidden' }}>
							<BarChart chartData={lgaChart} chartTitle="All LGA" filterOption="local_goverment" isLoading={loadingLGAChartData} />
						</Paper>
					</Grid>
				</Grid>
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
		</>
	);
};

export default Welcome;