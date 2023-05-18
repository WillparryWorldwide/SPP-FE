import React, { useCallback, useEffect, useState } from "react";
import ContentHeader from "../../components/ContentHeader"
import SmallBox from "../../components/SmallBox"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";
import useGetAllProject from "../../Hooks/usegetallproject";
import useGetAllContractors from "../../Hooks/useGetAllContractors";
import HistoryAccordion from "../../components/HistoryAccordion";

ChartJS.register(ArcElement, Tooltip, Legend);

const chartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
        {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
        },
    ],
};

const Welcome = () => {
    const { data: projectData, fetchProject, loading: isLoadingProjects } = useGetAllProject();
    const { data: contractorData, fetchContractors, loading: isLoadingContractions } = useGetAllContractors();

    const getTheProjects = useCallback(() => {
        fetchProject();
    });

    const getTheContractors = useCallback(() => {
        fetchContractors();
    });

    useEffect(() => {
        getTheProjects();
        getTheContractors();
    }, []);

    return (
        <>
            <ContentHeader title="Dashboard" />
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <SmallBox title="Total Number of Project(s)" number={projectData.length} bg="bg-primary" />
                        <SmallBox title="Total Number of Active SPP" number={contractorData.length} bg="bg-info" />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card card-danger">
                                <div className="card-header">
                                    <h3 className="card-title">Donut Chart</h3>
                                </div>
                                <div className="card-body">
                                    <Doughnut
                                        data={chartData}
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
                                        data={chartData}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <HistoryAccordion />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Welcome