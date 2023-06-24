// section
import _ from "lodash";
import "../../../css/chart.css";
import mdaImg from "../../../../assets/images/mda_m30ptu.webp";
import citizen from "../../../../assets/images/citizen_edns1x.webp"
import { useEffect, useState } from "react";
import IconSVG from "../../../../Utils/svg";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { CircularProgress, Toolbar, Typography } from '@mui/material';
import {
	Chart as ChartJS, CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDetailsModal from "../../../components/modal/chartdetailsmodal";
import useGetSelectedProject from '../../../../Hooks/usegetselectedproject'
import useAllSectorsChartData from "../../../../Hooks/useSectorChart";
import useAllLGAChartData from "../../../../Hooks/useLAGChart";
import useGetAllProject from "../../../../Hooks/usegetallproject";
import SiteImages from "../../../../Utils/images";
import { useNavigate } from "react-router-dom";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);


const sty = { color: "transparent", maxWwidth: "100%", height: "auto" };


const LandingSection = () => {
	const { fetchSectorsChartData, loadingSectorsChartData, sectorsChartData } = useAllSectorsChartData();
	const { LGAChartData, fetchLGAChartData, loadingLGAChartData } = useAllLGAChartData();
	const [labelFontSize, setLabelFontSize] = useState();
	const [maintainAspectRatio, setMaintainAspectRatio] = useState();
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
	}, []);

	useEffect(() => {
		setChartData(initChatData(LGAChartData));
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
	}, [buttonSwitch, projectDetailsOption, data])


	useEffect(() => {
		const fetchAsyncData = async () => {
			await fetchSelectedProject(filterOption, filter)
		}
		if (filter !== '') {
			fetchAsyncData()
		}

	}, [filter])

	// Set Fontsize When windows size changes
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setLabelFontSize(6); // Set the desired font size for small screens
				setMaintainAspectRatio(true)
			} else {
				setLabelFontSize(14); // Set the desired font size for larger screens
				setMaintainAspectRatio(false)
			}
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	// Set font size on page load
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setLabelFontSize(6); // Set the desired font size for small screens
				setMaintainAspectRatio(true)
			} else {
				setLabelFontSize(14); // Set the desired font size for larger screens
				setMaintainAspectRatio(false)
			}
		};
		handleResize()
	}, [])

	// get max bar height 
	const getMaximumHeight = (data) => {
		let maxSum = 0;

		for (let i = 0; i < data.labels.length; i++) {
			let sum = 0;

			for (let j = 0; j < data.datasets.length; j++) {
				sum += data.datasets[j].data[i];
			}

			if (sum > maxSum) {
				maxSum = sum;
			}
		}

		return maxSum;
	};

	const options = {
		onClick: (event, chartElements) => {
			console.log(chartData)
			console.log(event)
			console.log(chartElements)
			if (chartElements && chartElements.length > 0) {
				const clickedBarIndex = chartElements[0].index;
				// Perform actions based on the clicked bar index
				setFilter(event.chart.data.labels[chartElements[0].index])
				setProjectDetailsOption(true)
				//   console.log(`Clicked bar index: ${event.chart.data.labels[chartElements[0].index]}`);
				// console.log(`Clicked bar index: ${chartElements[0].index}`);
			}
		},
		plugins: {
			title: {
				display: false,
			},
		},
		responsive: true,
		maintainAspectRatio: maintainAspectRatio, // Enable maintaining aspect ratio
		aspectRatio: 1,
		scales: {
			x: {
				stacked: true,
				ticks: {
					font: {
						size: labelFontSize, // Set the font size based on the state value
					},
				},
			},
			y: {
				stacked: true,
				beginAtZero: true, // Set the minimum value for the y-axis
				max: getMaximumHeight(chartData) + 1, // Set the maximum value for the y-axis
			},
		},
	};
	return (
		<>
			<div className="my-[99px] xl:py-36">
				<div className="home_landing-section__J_2Eo">
					<div className="absolute w-full justify-center top-16 right-0 hidden lg:flex">
						<a className="cursor-pointer" href="#x">
							<img alt="scroll down" loading="lazy" width="24" height="26" decoding="async" data-nimg="1" src={IconSVG.scrollDown} style={sty} />
						</a>
					</div>
					<div className="home_image-section__FkGkS flex flex-col items-center order-2 lg:order-1" id="first-section">
						<img alt="ministries&amp;contractors" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" src={SiteImages.mda} style={sty} />
						<a className="lg:hidden inline-block" href="/projects">
							<div className="home_explore-projects-green__fe_1K">
								<p className="medium home_green-explore-projects-button__B_r9D mr-5">
									Explore all projects
								</p>
								<img alt="right-icon" loading="lazy" width="7" height="13" decoding="async" data-nimg="1" className="ml-5" src={IconSVG.greenGradientCaret} style={sty} />
							</div>
						</a>
					</div>
					<div className="home_text-section__8_eBv order-1 lg:order-2">
						<p className="home_text-head__oI2Wu text-accepted medium">
							Ministries &amp; Contractors
						</p>
						<h1 className="home_text-title__Wm_fr medium">Explore MDA Projects</h1>
						<p className="home_text-subtitle__2Gieq">
							Do you want to know what's happening with specific Ministries,
							Departments, Agencies or contractor projects? Be one of the first to get all the updates you need straight
							from MDAs and Contractors.
						</p>
						<a className="hidden lg:inline-block mt-10" href="discover.html">
							<div className="home_explore-projects-green__fe_1K transform hover:-translate-y-1 transition duration-1000 ease-in-out">
								<p className="medium home_green-explore-projects-button__B_r9D mr-5">
									Explore all projects
								</p>
								<img alt="right-icon" loading="lazy" width="7" height="13" decoding="async" data-nimg="1" style={sty} src={IconSVG.greenGradientCaret} />
							</div>
						</a>
					</div>
				</div>
				<div className="w-full p-4 bg-white ">
					<p className="w-full text-center mb-4 mt-4 font-bold text-lg">{chartTitle}</p>
					{
						!loadingLGAChartData || !loadingSectorsChartData ?
							<div className='p-2 w-full'>
								<div className=' w-full mb-5 flex justify-center items-center  md:p-2.5'>
									<button onClick={() => setButtonSwitch('project')} className="w-fit px-1 md:px-3 py-2 mr-5 border-primary text-xs md:text-base bg-primary rounded-lg text-white">Project Analysis</button>
									<button onClick={() => setButtonSwitch('sector')} className="w-fit px-1 md:px-3 py-2 mr-5 border-primary text-xs md:text-base bg-primary rounded-lg text-white">Sector Analysis</button>
								</div>
								<div className="canvas-container w-full md:p-5 md:h-[600px] justify-center items-center flex">
									<Bar
										data={chartData && chartData}
										options={options}
									/>
								</div>
							</div>
							: <div className="w-full h-40 flex justify-center items-center">
								<CircularProgress />
							</div>
					}
				</div>
				{projectDetailsOption && <ProjectDetailsPopUp modalTitle={filter} data={data} loading={loading} />}
			</div>
		</>
	)
}

const lgaColumn = [
	{ id: "local_goverment", label: 'LGA', minWidth: 70 },
	{ id: "COMPLETED", label: 'COMPLETED', minWidth: 70, focus: (val) => val },
	{ id: "ONGOING", label: 'ONGOING', minWidth: 70, focus: (val) => val },
	{ id: "NOT_STARTED", label: 'NOT STARTED', minWidth: 70, focus: (val) => val },
	{ id: "WAITING_PAY", label: 'WAITING PAYMENT', minWidth: 70, focus: (val) => val },
	{ id: "MILESTONE_MISSED", label: 'MISSED MILESTONE', minWidth: 70, focus: (val) => val }
];

const LandingSection2 = () => {
	const navigate = useNavigate();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const { LGAChartData, fetchLGAChartData } = useAllLGAChartData();
	const { data: allProject, fetchProject, loading: loadingProject } = useGetAllProject();
	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	useEffect(() => {
		fetchProject();
		fetchLGAChartData();
		console.log("Rendering...5", LGAChartData);
	}, []);

	return (
		<>
			<div className="home_landing-section__J_2Eo pb-16">
				<div className="flex flex-col justify-start gap-8 bg-grey-white w-full">
					<div className="home_landing-section__J_2Eo pb-16">
						<div className="home_text-section__8_eBv">
							<p className="home_text-head__oI2Wu medium text-pending">
								citizens &amp;cso
							</p>
							<h1 className="home_text-title__Wm_fr medium">
								Review and engage with users on projects
							</h1>
							<p className="home_text-subtitle__2Gieq">
								You can post text reviews on projects and also view and engage with reviews from other citizens.
							</p>
							<a href="/projects">
								<button className="hidden lg:block mt-10">
									<div className="home_explore-projects-gold__HUoJN transform hover:-translate-y-1 transition duration-1000 ease-in-out">
										<p className="medium home_gold-explore-projects-button__9NQxt mr-5">
											Start Reviewing Projects
										</p>
										<img alt="right-icon" loading="lazy" width="7" height="13" decoding="async" data-nimg="1" style={sty} src={IconSVG.goldGradientCaret} />
									</div>
								</button>
							</a>
						</div>
						<div className="home_image-section__FkGkS flex flex-col items-center">
							<img alt="citizens&amp;cso" loading="lazy" width="1150" height="1000" decoding="async" data-nimg="1" src={SiteImages.landingPageImg} style={sty} />
							<a href="/projects">
								<button className="lg:hidden">
									<div className="home_explore-projects-gold__HUoJN transform hover:-translate-y-1 transition duration-1000 ease-in-out">
										<p className="medium home_gold-explore-projects-button__9NQxt mr-5">
											Sign up to Review Projects
										</p>
										<img alt="right-icon" loading="lazy" width="7" height="13" decoding="async" data-nimg="1" style={sty} src={IconSVG.goldGradientCaret} />
									</div>
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div data-testid="Sectors-card" className="w-full bg-white rounded-lg cursor-pointer overflow-hidden p-4  md:px-16">
				<p>Local Government Project Analysis</p>
				<div>
					{
						(!loadingProject && LGAChartData?.COMPLETED) ?
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
										Local Governments Project Report
									</Typography>
								</Toolbar>
								<TableContainer sx={{ maxHeight: 440 }}>
									<Table stickyHeader aria-label="sticky table">
										<TableHead>
											<TableRow>
												{lgaColumn.map((column, i) => (
													<TableCell
														key={column.id + i}
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
											{_.uniqBy(allProject, "local_goverment")
												.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
												.map((row) => {
													return (
														<TableRow hover role="checkbox" tabIndex={-1} key={row._id} onClick={() => {
															window.localStorage.setItem("query", row.local_goverment);
															navigate("/projects");
														}}>
															{lgaColumn.map((column) => {
																let value = row[column.id];

																column.id !== "local_goverment" && Object.keys(LGAChartData[column.id]).forEach(k => (k === row["local_goverment"]) ? value = LGAChartData[column.id][k]: null);

																if (column.id !== "local_goverment" && !Object.keys(LGAChartData[column.id]).length) value = 0;

																return (
																	<TableCell key={column.id + column.label} align={column.align}
																		sx={{
																			border: ".3px solid var(--tw-ring-color)"
																		}}>
																		{value ? value: 0}
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
									count={_.uniqBy(allProject, "local_goverment").length}
									rowsPerPage={rowsPerPage}
									page={page}
									onPageChange={handleChangePage}
									onRowsPerPageChange={handleChangeRowsPerPage}
								/>
							</Paper>
							: <div className="w-full h-40 flex justify-center items-center">
								<CircularProgress />
							</div>
					}
				</div>
			</div>
		</>
	)
}

const Sections = {
	LandingSection,
	LandingSection2
}

export default Sections;