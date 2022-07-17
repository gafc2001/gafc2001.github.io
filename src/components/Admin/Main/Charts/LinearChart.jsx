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

export const LinearChart = ({visitors}) => {
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
    const labels = visitors.days;
    const data = {
        labels,
        datasets: [
          {
            label: 'Visitors per day',
            data: visitors.visits,
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