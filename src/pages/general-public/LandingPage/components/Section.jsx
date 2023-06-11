// section
import mdaImg from "../../../../assets/images/mda_m30ptu.webp";
import citizen from "../../../../assets/images/citizen_edns1x.webp"
import { useEffect, useState } from "react";
import IconSVG from "../../../../Utils/svg";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);


const sty = { color: "transparent", maxWwidth: "100%", height: "auto" };

const LandingSection = () => {
	const [chartData, setChartData] = useState([])
	const [chartLabel, setChartLabel] = useState([])
	const [chartSubLabel, setChartSubLabel] = useState('# of project')
	const [chartTitle, setChartTitle] = useState('Project Analysis In All Local Government')
	const [buttonSwitch, setButtonSwitch] = useState('project')
	const [data, setData] = useState({
		labels: chartLabel,
		datasets: [
		  {
			label: chartSubLabel,
			data: chartData,
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)',
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)',
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)',
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)',
				'rgba(255, 99, 132, 0.2)'
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(255, 99, 132, 1)'
			],
			borderWidth: 1,
		  },
		],
	  })
 

useEffect(()=>{
	if(buttonSwitch.toLowerCase() === 'project'){
		setChartData([
			125000,
			123000,
			150000,
			140000,
			180000,
			190000,
			130000,
			135000,
			170000,
			160000,
			120000,
			110000,
			200000,
			155000,
			145000,
			130000,
			165000,
			185000,
			170000,
			160000,
			140000,
			200000,
			135000,
			140000,
			150000
		  ])
		setChartLabel(['Oshimili' ,
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
		'Patani'])
		setChartSubLabel('# of project')
		setChartTitle('Project Analysis In All Local Government')
	}else if(buttonSwitch.toLowerCase() === 'sector'){
		setChartData([180, 25, 73, 64])
		setChartLabel(['Sector 1', 'Sector 2', 'Sector 3', 'Sector N'])
		setChartSubLabel('# of Sector')
		setChartTitle('Sector Analysis In Delta State')
	}
}, [buttonSwitch])

useEffect(()=>{
	setData({
		labels: chartLabel,
		datasets: [
		  {
			label: chartSubLabel,
			data: chartData,
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)',
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)',
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)',
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)',
				'rgba(255, 99, 132, 0.2)'
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(255, 99, 132, 1)'
			],
			borderWidth: 1,
		  },
		],
	  })
}, [chartData, chartLabel, chartTitle, chartTitle])

console.log(chartData)

	return <div className="home_landing-section__J_2Eo xl:py-36 py-24">
				<div className="absolute w-full justify-center top-16 right-0 hidden lg:flex">
					<a className="cursor-pointer" href="#x">
						<img alt="scroll down" loading="lazy" width="24" height="26" decoding="async" data-nimg="1" src={IconSVG.scrollDown} style={sty} />
					</a>
				</div> 
				<div className="w-full p-4 bg-white">
					<p className="w-full text-center mb-8 mt-4 font-bold text-lg">{chartTitle}</p>
					<div className='flex p-2 w-full h-[80vh]' >
						<div className='min-h-[400px] w-[20%] overflow-y-auto mr-5 p-2.5'>
							{data?.labels?.map((label, index) => (
							<div key={index} className="mb-4">
								<span
								className='w-3 h-3 inline-block mr-2.5'
								style={{
									backgroundColor: data?.datasets[0].backgroundColor[index]
								}}
								></span>
								{label}
							</div>
							))}
						</div>
						<div className="w-[60%] p-5 justify-center items-center flex">
							<Pie 
								data={data} 
								options= {{
									plugins: {
										legend: {
											display: false,
										
										},  
										tooltip: {
										mode: 'index',
										intersect: false
										} 
									}
							}}
							/>
						</div>
						<div className='min-h-[400px] w-[20%] overflow-hidden mr-5 flex flex-col justify-center items-center p-2.5'>
							<button onClick={()=>setButtonSwitch('project')} className="w-fit px-3 py-2 mb-5 border-primary bg-primary rounded-lg text-white">Project Analysis</button>
							<button onClick={()=>setButtonSwitch('sector')} className="w-fit px-3 py-2 mb-5 border-primary bg-primary rounded-lg text-white">Sector Analysis</button>
						</div>
					</div>
				</div>
			</div>
}

const LandingSection2 = () => {
	return <div className="home_landing-section__J_2Eo pb-16">
		<div className="home_text-section__8_eBv">
			<p className="home_text-head__oI2Wu medium text-pending">
				citizens &amp;cso
			</p>
			<h1 className="home_text-title__Wm_fr medium">
				Review and engage with users on projects
			</h1>
			<p className="home_text-subtitle__2Gieq">
				You can post text and media reviews on projects and also view and engage with reviews from other citizens.
			</p>
			<a href="user-type.html">
				<button className="hidden lg:block mt-10">
					<div className="home_explore-projects-gold__HUoJN transform hover:-translate-y-1 transition duration-1000 ease-in-out">
						<p className="medium home_gold-explore-projects-button__9NQxt mr-5">
							Sign up to Review Projects
						</p>
						<img alt="right-icon" loading="lazy" width="7" height="13" decoding="async" data-nimg="1" style={sty} src={IconSVG.goldGradientCaret} />
					</div>
				</button>
			</a>
		</div>
		<div className="home_image-section__FkGkS flex flex-col items-center">
		<img alt="citizens&amp;cso" loading="lazy" width="1150" height="1000" decoding="async" data-nimg="1" src={citizen} style={sty} />
			<a href="user-type.html">
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
}

const Sections = {
	LandingSection,
	LandingSection2
}

export default Sections;