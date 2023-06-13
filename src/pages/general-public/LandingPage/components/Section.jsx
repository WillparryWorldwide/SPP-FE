// section
import _ from "lodash";
import mdaImg from "../../../../assets/images/mda_m30ptu.webp";
import citizen from "../../../../assets/images/citizen_edns1x.webp"
import { useEffect, useState } from "react";
import IconSVG from "../../../../Utils/svg";
import useAllUpdateHistory from "../../../../Hooks/useHistory";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { CircularProgress, Toolbar, Typography } from '@mui/material';
import moment from "moment/moment";
import {
	Chart as ChartJS, CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDetailsModal from "../../modal/chartdetailsmodal";
import useGetSelectedProject from '../../../../Hooks/usegetselectedproject'
import useAllSectorsChartData from "../../../../Hooks/useSectorChart";
import useAllLGAChartData from "../../../../Hooks/useLAGChart";

ChartJS.register(CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend);

const historyCol = [
	{ id: "local_goverment", label: 'LGA', minWidth: 70 },
	{ id: "local_goverment", label: 'COMPLETED', minWidth: 70 },
	{ id: "local_goverment", label: 'ONGOING', minWidth: 70 },
	{ id: "local_goverment", label: 'WAITING PAYMENT', minWidth: 70 },
	{ id: "local_goverment", label: 'MISSED MILESTONE', minWidth: 70 }
];

const sty = { color: "transparent", maxWwidth: "100%", height: "auto" };


const LandingSection = () => {

	const { fetchSectorsChartData, loadingSectorsChartData, sectorsChartData } = useAllSectorsChartData();
	const { LGAChartData, fetchLGAChartData, loadingLGAChartData } = useAllLGAChartData();

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
					label: 'Waiting Pay',
					data: _.sortBy(data.LABELS)?.map(l => data.NOT_STARTED[l] ? data.NOT_STARTED[l] : 0),
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

	const [chartData, setChartData] = useState(initChatData(LGAChartData));
	const [chartTitle, setChartTitle] = useState('')
	const [buttonSwitch, setButtonSwitch] = useState('projects')
	const { projectDetailsOption, setProjectDetailsOption, ProjectDetailsPopUp } = ChartDetailsModal()

	const { fetchSelectedProject, data, loading } = useGetSelectedProject()
	const [filter, setFilter] = useState('')
	const [filterOption, setFilterOption] = useState('local_goverment')


	useEffect(() => {
		fetchLGAChartData();
		fetchSectorsChartData();
		console.log("Rendering...");
	}, []);

	useEffect(() => {
		setChartData(initChatData(LGAChartData));
		console.log("Rendering...3");
	}, [LGAChartData]);

	useEffect(() => {
		if (buttonSwitch.toLowerCase() === 'project') {
			setChartData(initChatData(LGAChartData));
			setChartTitle('Project Analysis In All Local Government');
			setFilterOption('local_goverment');
		} else if (buttonSwitch.toLowerCase() === 'sector') {
			setChartData(initChatData(sectorsChartData));
			setChartTitle('Sector Analysis In Delta State');
			setFilterOption('sector');
		}
		console.log("Rendering...1");
	}, [buttonSwitch])

	useEffect(() => {
		const fetchAsyncData = async () => {
			await fetchSelectedProject(filterOption, filter)
		}
		if (filter !== '') {
			console.log('i ruun async:', filter)
			fetchAsyncData()
		}

	}, [filter])
	useEffect(() => {
		if (filter !== '') {
			fetchSelectedProject(filterOption, filter)
		}
		console.log("Rendering...2");
	}, [filter])

	const options = {
		onClick: (event, chartElements) => {
			console.log(event)
			if (chartElements && chartElements.length > 0) {
				const clickedBarIndex = chartElements[0].index;
				// Perform actions based on the clicked bar index
				setFilter(event.chart.data.labels[chartElements[0].index])
				setProjectDetailsOption(true)
				//   console.log(`Clicked bar index: ${event.chart.data.labels[chartElements[0].index]}`);
				console.log(`Clicked bar index: ${chartElements[0].index}`);
			}
		},
		plugins: {
			title: {
				display: false,
				text: 'Chart.js Bar Chart - Stacked',
			},
		},
		responsive: true,
		scales: {
			x: {
				stacked: true,
			},
			y: {
				stacked: true,
			},
		},
	};


	return (
		<>
			<div className="home_landing-section__J_2Eo xl:py-36 py-24">
				<div className="absolute w-full justify-center top-16 right-0 hidden lg:flex">
					<a className="cursor-pointer" href="#x">
						<img alt="scroll down" loading="lazy" width="24" height="26" decoding="async" data-nimg="1" src={IconSVG.scrollDown} style={sty} />
					</a>
				</div>
				<div className="w-full p-4 bg-white">
					<p className="w-full text-center mb-4 mt-4 font-bold text-lg">{chartTitle}</p>
					<div className='p-2 w-full' >
						<div className=' w-full mb-5 flex justify-center items-center p-2.5'>
							<button onClick={() => setButtonSwitch('project')} className="w-fit px-3 py-2 mr-5 border-primary bg-primary rounded-lg text-white">Project Analysis</button>
							<button onClick={() => setButtonSwitch('sector')} className="w-fit px-3 py-2 mr-5 border-primary bg-primary rounded-lg text-white">Sector Analysis</button>
						</div>
						<div className="canvas-container w-full max-h-[600px] p-5 justify-center items-center flex">
							{console.log("data", chartData)}
							{
								!loadingLGAChartData || !loadingSectorsChartData ?
									<Bar
										data={chartData && chartData}
										options={options}
									/> : <CircularProgress />
							}
						</div>
					</div>
				</div>
			</div>
			{projectDetailsOption && <ProjectDetailsPopUp modalTitle={filter} data={data} loading={loading} />}
		</>
	)
}

const LandingSection2 = () => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const { updateHistory, fetchUpdateHistory, loadingUpdateHistory } = useAllUpdateHistory();

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<div className="home_landing-section__J_2Eo pb-16">


			<div className="flex flex-col justify-start gap-8 bg-grey-white w-full">
				<p className="w-full text-center mb-4 mt-4 font-extrabold text-4xl">Projects Report</p>
				<div data-testid="Sectors-card" className="w-full bg-white rounded-lg cursor-pointer overflow-hidden p-4">
					<div>
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
										<Table stickyHeader aria-label="sticky table">
											<TableHead>
												<TableRow>
													{historyCol.map((column, i) => (
														<TableCell
															key={column.id + i}
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
		</div>)
}

const Sections = {
	LandingSection,
	LandingSection2
}

export default Sections;