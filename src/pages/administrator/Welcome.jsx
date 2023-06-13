import { useEffect, useState } from "react";
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
import { CircularProgress, Grid, Toolbar, Typography } from '@mui/material';
import useAllMDA from "../../Hooks/useAllMDA";
import useSearchProject from '../../Hooks/usesearchproject';
import useAllUpdateHistory from "../../Hooks/useHistory";
import moment from "moment/moment";
import SearchBar from "../components/discovery/searchBar";
import ItemList from "../components/muiComponent/list";
import { BarChart, LineChart, PieChart } from "../components/charts";

const historyCol = [
	{ id: 'changed_by', label: 'User', minWidth: 70, force: (val) => val?.firstname },
	{ id: 'type', label: 'Updated', minWidth: 70 },
	{ id: 'createdAt', label: 'Time', minWidth: 70, force: (val) => moment(val).startOf("days").fromNow() }
];

const Welcome = () => {
	const [option, setOption] = useState(null);
	const data = [
		{
			id: 1,
			year: 2017,
			completed: 320,
			ongoing: 293
		},
		{
			id: 2,
			year: 2018,
			completed: 230,
			ongoing: 245
		},
		{
			id: 3,
			year: 2019,
			completed: 220,
			ongoing: 193
		},
		{
			id: 4,
			year: 2020,
			completed: 320,
			ongoing: 293
		}
	]
	const [chartData, setChartData] = useState({
		labels: data.map(y => y.year),
		datasets: [{
			label: "Project Status",
			data: data.map(c => c.completed)
		}]
	});

	const [page, setPage] = useState(0);
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
				<Grid container>
					<Grid item xs>
						<Paper sx={{ width: "min-content", marginBottom: "2em", padding: "2em", overflow: 'hidden' }}>
							<BarChart chartData={chartData} />
						</Paper>
					</Grid>
					<Grid item xs>
						<Paper sx={{ width: "min-content", marginBottom: "2em", padding: "2em", overflow: 'hidden' }}>
							<PieChart chartData={chartData} />
						</Paper>
					</Grid>
					<Grid item xs>
						<Paper sx={{ width: "min-content", marginBottom: "2em", padding: "2em", overflow: 'hidden' }}>
							<LineChart chartData={chartData} />
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
		</>
	);
};

export default Welcome;