// section
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
import { Chart as ChartJS,CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDetailsModal from "../../modal/chartdetailsmodal";
import useGetSelectedProject from '../../../../Hooks/usegetselectedproject'

ChartJS.register(CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend);

const historyCol = [
	{ id: 'changed_by', label: 'User', minWidth: 70, force: (val) => val?.firstname },
	{ id: 'type', label: 'Updated', minWidth: 70 },
	{ id: 'createdAt', label: 'Time', minWidth: 70, force: (val) => moment(val).startOf("days").fromNow() }
];


const sty = { color: "transparent", maxWwidth: "100%", height: "auto" };

const LandingSection = () => {
	const [chartData, setChartData] = useState({
		labels: ['Oshimili' ,
				'Aniocha' ,
				'Aniocha South' ,
				'Ika South' ,
				'Ika North-East' ,
				'Ndokwa West' ,
				'Ndokwa East' ,
				'Isoko south' ,
				'Isoko North' ,
				'Bomadi' ,
				'Burutu' ,
				'Ughelli South' ,
				'Ughelli North' ,
				'Ethiope West' ,
				'Ethiope East' ,
				'Sapele' ,
				'Okpe' ,
				'Warri North' ,
				'Warri South' ,
				'Uvwie' ,
				'Udu' ,
				'Warri Central' ,
				'Ukwani' ,
				'Oshimili North' ,
				'Patani'],
		datasets: [
		  {
			label: 'Completed project',
			data: [10, 20, 30, 15, 25, 35,45,76,45,56,54,76,56,76,56,76,78,56,54,87,34,54,67,34,56],
			backgroundColor: 'rgba(54, 162, 235, 0.5)',
			borderColor: 'rgba(54, 162, 235, 1)',
			borderWidth: 1,
		  },
		  {
			label: 'Ongoing project',
			data: [15,25,35,65,43,76,45,76,34,67,89,56,54,56,78,45,56,34,56,67,87,5,78,45,7],
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
			borderColor: 'rgba(255, 99, 132, 1)',
			borderWidth: 1,
		  },
		  {
			label: 'Paused project',
			data: [20,0,40,56,67,56,76,54,34,6,54,5,3,65,76,45,65,34,2,45,76,3,34,76,54,],
			backgroundColor: 'rgba(255, 206, 86, 0.5)',
			borderColor: 'rgba(255, 206, 86, 1)',
			borderWidth: 1,
		  },
		],
	  })
	const [chartTitle, setChartTitle] = useState('')
	const [buttonSwitch, setButtonSwitch] = useState('projects')
	const { projectDetailsOption, setProjectDetailsOption, ProjectDetailsPopUp } = ChartDetailsModal()

	const { fetchSelectedProject, data, loading } = useGetSelectedProject()
	const [filter, setFilter] = useState('')
	const [filterOption, setFilterOption] = useState('local_goverment')
	
 

useEffect(()=>{
	if(buttonSwitch.toLowerCase() === 'project'){
		setChartData({
			labels: ['Oshimili' ,
					'Aniocha' ,
					'Aniocha South' ,
					'Ika South' ,
					'Ika North-East' ,
					'Ndokwa West' ,
					'Ndokwa East' ,
					'Isoko south' ,
					'Isoko North' ,
					'Bomadi' ,
					'Burutu' ,
					'Ughelli South' ,
					'Ughelli North' ,
					'Ethiope West' ,
					'Ethiope East' ,
					'Sapele' ,
					'Okpe' ,
					'Warri North' ,
					'Warri South' ,
					'Uvwie' ,
					'Udu' ,
					'Warri Central' ,
					'Ukwani' ,
					'Oshimili North' ,
					'Patani'],
			datasets: [
			  {
				label: 'Completed project',
				data: [10, 20, 30, 15, 25, 35,45,76,45,56,54,76,56,76,56,76,78,56,54,87,34,54,67,34,56],
				backgroundColor: 'rgba(54, 162, 235, 0.5)',
				borderColor: 'rgba(54, 162, 235, 1)',
				borderWidth: 1,
			  },
			  {
				label: 'Ongoing project',
				data: [15,25,35,65,43,76,45,76,34,67,89,56,54,56,78,45,56,34,56,67,87,5,78,45,7],
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 1,
			  },
			  {
				label: 'Paused project',
				data: [20,0,40,56,67,56,76,54,34,6,54,5,3,65,76,45,65,34,2,45,76,3,34,76,54,],
				backgroundColor: 'rgba(255, 206, 86, 0.5)',
				borderColor: 'rgba(255, 206, 86, 1)',
				borderWidth: 1,
			  },
			],
		  })
		setChartTitle('Project Analysis In All Local Government')
		setFilterOption('local_goverment')
	}else if(buttonSwitch.toLowerCase() === 'sector'){
		setChartData({
			labels: ['Sector 1' ,
					'Sector2' ,
					'sector 3' ,
					'sector 4' ,
					'sector 5' ,
					],
			datasets: [
			  {
				label: 'Completed project',
				data: [10, 20, 30, 15, 25],
				backgroundColor: 'rgba(54, 162, 235, 0.5)',
				borderColor: 'rgba(54, 162, 235, 1)',
				borderWidth: 1,
			  },
			  {
				label: 'Ongoing project',
				data: [15,25,35,65,43],
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 1,
			  },
			  {
				label: 'Paused project',
				data: [20,0,40,56,67],
				backgroundColor: 'rgba(255, 206, 86, 0.5)',
				borderColor: 'rgba(255, 206, 86, 1)',
				borderWidth: 1,
			  },
			],
		  })
		setChartTitle('Sector Analysis In Delta State')
		setFilterOption('sector')
	}
}, [buttonSwitch])

useEffect(()=>{
	const fetchAsyncData = async ()=>{
		await fetchSelectedProject(filterOption, filter)
	}
	if(filter !== ''){
		console.log('i ruun async:', filter)
		fetchAsyncData()
	}

}, [filter])

const options={
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
							<button onClick={()=>setButtonSwitch('project')} className="w-fit px-3 py-2 mr-5 border-primary bg-primary rounded-lg text-white">Project Analysis</button>
							<button onClick={()=>setButtonSwitch('sector')} className="w-fit px-3 py-2 mr-5 border-primary bg-primary rounded-lg text-white">Sector Analysis</button>
						</div>
						<div className="canvas-container w-full max-h-[600px] p-5 justify-center items-center flex">
							<Bar 
								data={chartData && chartData} 
								options={options}
							/>
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
													<TableCell>LGA</TableCell>
													<TableCell>Completed</TableCell>
													<TableCell>Ongoing</TableCell>
													<TableCell>Paused</TableCell>
													<TableCell>Abandon</TableCell>
													<TableCell>Closed</TableCell>
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