import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import "./ProgressScoreGraph.scss";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const ProgressScoreGraph = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Average Grade',
                data: [65, 59, 80, 81, 56, 55, 40, 60, 75, 70, 85, 90],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: false,
                tension: 0.4,
            },
            {
                label: 'Exams',
                data: [50, 55, 60, 70, 66, 75, 82, 77, 68, 88, 92, 95],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: false,
                tension: 0.4,
                Randomize: true
            }
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: true,
                },
                ticks: {
                    display: false,
                },
                beginAtZero: true,
                border: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: true,
            },
        },
    };

    return (
        <div className='progress-score-graph'>
            <div className="time">
                <h2>Statistic</h2>
                <div className="date-indicator">
                    <span>{'< Aug 2023 >'}</span>
                </div>
            </div>
            <div className="graph">
                <h3>Progress Score</h3>
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default ProgressScoreGraph;
