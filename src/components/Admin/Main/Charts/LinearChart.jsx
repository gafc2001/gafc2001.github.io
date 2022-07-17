import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

export const LinearChart = () => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display : false
          },
          title: {
            display: true,
            text: 'Visitors per month',
          },
        },
    };
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
        labels,
        datasets: [
          {
            label: 'Visitors per day',
            data: [1,4,3,45,1,2,3,2,5],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            tension: 0.5
          },
        ],
      };
    return (
        <Line options={options}
            data={data}
            />
    )
}