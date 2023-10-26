import React, { useState } from 'react';
import Chart from 'chart.js/auto';
import { Scatter } from 'react-chartjs-2';

const ScatterChart = () => {
    const [datasets, setDatasets] = useState([]);

    const addDataset = () => {
        const newDataset = {
            label: `Sample Test Data ${datasets.length + 1}`,
            data: [
                { x: Math.random() * 100, y: Math.random() * 100 },
                { x: Math.random() * 100, y: Math.random() * 100 },
                { x: Math.random() * 100, y: Math.random() * 100 },
                { x: Math.random() * 100, y: Math.random() * 100 },
                { x: Math.random() * 100, y: Math.random() * 100 },
                { x: Math.random() * 100, y: Math.random() * 100 },
            ],
            backgroundColor: `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.4)`,
            borderColor: `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},1)`,
            borderWidth: 1,
            hoverBackgroundColor: `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.2)`,
            hoverBorderColor: `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},1)`,
        };
        setDatasets(prevDatasets => [...prevDatasets, newDataset]);
    };

    const removeDataset = () => {
        setDatasets(prevDatasets => {
            if (prevDatasets.length >= 1) {
                return prevDatasets.slice(0, prevDatasets.length - 1);
            }
            return prevDatasets;
        });
    };

    const options = {
        plugins: {
            legend: {
              position: 'top',},
            title: {
              display: true,
              text: 'Model Evaluation Scatter Chart'}},
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
            }
        }
    };

    return (
        <div>
            <h2>Scatter Chart Test</h2>
            <button onClick={addDataset}>Add Dataset</button>
            <button onClick={removeDataset}>Remove Dataset</button>
            <Scatter data={{ datasets }} options={options} />
        </div>
    );
};

export default ScatterChart;
