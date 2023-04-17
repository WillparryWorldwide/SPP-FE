import React from 'react'
import ContentHeader from '../../components/ContentHeader'
import SmallBox from '../../components/SmallBox'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const Welcome = () => {
    return (
        <>
            <ContentHeader title="Dashboard" />
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <SmallBox title="Total Number of Project(s)" number={10} bg="bg-warning" />
                        <SmallBox title="Total Number of Active SPP" number={10} bg="bg-success" />
                        <SmallBox title="Total Number of successful projects" number={10} bg="bg-danger" />
                        <SmallBox title="Pending Project(s)" number={10} bg="bg-info" />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card card-danger">
                                <div className="card-header">
                                    <h3 className="card-title">Donut Chart</h3>
                                </div>
                                <div className="card-body">
                                    <Doughnut
                                        data={data}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card card-danger">
                                <div className="card-header">
                                    <h3 className="card-title">Pie Chart</h3>
                                </div>
                                <div className="card-body">
                                    <Pie
                                        data={data}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Welcome