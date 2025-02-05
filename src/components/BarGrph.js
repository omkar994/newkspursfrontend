import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';


export default function BarGrph() {
    const [xData, setXdata] = useState([]);
    const [yData, setYdata] = useState([]);

    const loadData = async () => {
        try {
            let responsedata = await fetch(`http://3.85.219.160:5000/transaction`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });

            if (!responsedata.ok) {
                throw new Error('Failed to fetch data');
            }

            responsedata = await responsedata.json();
            console.log(responsedata);

            if (Array.isArray(responsedata)) {
                 const categories = responsedata.map(obj => Object.keys(obj)[0]);
                 const amounts = responsedata.map(obj => Object.values(obj)[0]);

                 setXdata(categories);
                 setYdata(amounts);
            }
            else {
                console.error('Response data is not an array:', responsedata);
            }
        }
        catch (error) {
            console.error('Error fetching or processing data:', error);
        }
    }
    useEffect(() => {
        loadData();
    }, []);

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Expenses",
            },
        },
    };
    const labels = xData;
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: yData,
                backgroundColor: 'rgba(255,99,132,0.5)'
            }

        ]
    };



    return (
        <div><h2>Bar Graph</h2>
            <Bar options={options} data={data} /></div>
    )
}


