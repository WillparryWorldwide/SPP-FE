import {
	Chart as ChartJS, CategoryScale,
	LinearScale,
	ArcElement,
	Title,
	Tooltip,
	PieController,
	Legend
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDetailsModal from "../../modal/chartdetailsmodal";
import useGetSelectedProject from '../../../../Hooks/usegetselectedproject'
import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';

ChartJS.register(
	PieController,
	CategoryScale,
	LinearScale,
	ArcElement,
	Title,
	Tooltip,
	Legend
);

const PieChart = function ({chartData, isLoading, chartTitle, filterOption}) {
	const [labelFontSize, setLabelFontSize] = useState();
	const [maintainAspectRatio, setMaintainAspectRatio] = useState();
	const { projectDetailsOption, setProjectDetailsOption, ProjectDetailsPopUp } = ChartDetailsModal()
	const { fetchSelectedProject, data: selectedProjectData, loading } = useGetSelectedProject()
	const [filter, setFilter] = useState('')

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
	}, []);

	useEffect(() => {
		const fetchAsyncData = async () => {
			fetchSelectedProject(filterOption, filter)
		}
		if (filter !== '') {
			fetchAsyncData()
		}

	}, [filter])

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




	return <>
		<div className="w-full p-md-4 bg-white ">
			<p className="w-full text-center mb-4 mt-4 font-bold text-lg">{chartTitle}</p>
			{
				!isLoading ?
					<div className='p-2 w-full'>
						<div className="canvas-container w-full md:p-5 md:h-[600px] justify-center items-center flex">
							<Pie
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
		{console.log("Data", selectedProjectData)}
		{projectDetailsOption && <ProjectDetailsPopUp modalTitle={filter} data={selectedProjectData} loading={loading} />}
	</>
}

export default PieChart;