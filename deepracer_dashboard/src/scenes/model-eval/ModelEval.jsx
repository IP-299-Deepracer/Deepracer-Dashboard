// Importing required libraries and components
import { Box, Select, MenuItem, useTheme, Button } from "@mui/material"; // Added Button
import Header from "../../components/Header";
import React, { useState, useEffect } from 'react';
import { Line, Scatter } from 'react-chartjs-2';
import { styled } from '@mui/material/styles';
import { tokens } from "../../theme";
import axios from 'axios';

const ModelEval = () => {
  // Extracting theme and colors for styling
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Creating a styled version of the Select component
  const StyledSelect = styled(Select)({
    backgroundColor: "#f79400",
    color: "#FFFFFF",
    fontSize: "14px",
    fontWeight: "bold",
    padding: "1px 25px",
    margin: "10px",
    width: "400px"
  });

  // Creating a styled version of the Button component
  const StyledButton = styled(Button)({
    backgroundColor: "#f79400",
    color: "#FFFFFF",
    fontSize: "18px",
    fontWeight: "bold",
    padding: "8px 25px",
    margin: "10px",
  });

  // State initialization
  const initialData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    datasets: [{ label: 'Legend' }]
  };
  const [selectedOption, setSelectedOption] = useState('1');
  const [data, setData] = useState(initialData);
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState('1');
  const [chartKey, setChartKey] = useState(0);


  //Random color function
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    } return color;
  };


  // Fetching models data from the backend
  useEffect(() => {
    axios.get('http://localhost:3001/models')
      .then(response => {
        setModels(response.data.data);
      })
      .catch(error => console.error("Error fetching models:", error));
  }, []);


  // Reset datasets when switching graph type
  useEffect(() => { setData(initialData) }, [selectedOption]);


  // Get average_reward metric from model
  const fetchAndSetDataAverageRewards = (collectionName) => {
    axios.get(`http://localhost:3001/models/${collectionName}/reward-metrics`)
      .then(response => {
        const newDataset = {
          label: collectionName,
          data: response.data.average_rewards,
          backgroundColor: getRandomColor() + '99',
          borderColor: getRandomColor(),
          borderWidth: 1
        };
        const currentDatasets = data.datasets;
        const mergedDatasets = [...currentDatasets, newDataset];
        const newChartData = {
          labels: Array.from({ length: response.data.average_rewards.length }, (_, i) => i + 1),
          datasets: mergedDatasets
        };
        setData(newChartData);
      })
      .catch(error => console.error("Error fetching reward metrics:", error));
  };


  //Get Speed And Steer Angle from model
  const fetchAndSetDataSpeedAndSteer = (collectionName) => {
    axios.get(`http://localhost:3001/models/${collectionName}/avg-speed-steering`)
      .then(response => {
        const datasetColor = getRandomColor();
        const avgSpeedSteeringData = response.data.avg_speed_steering;

        const speedDataset = {
          label: collectionName + ' - Speed',
          data: avgSpeedSteeringData.map(item => item.speed),
          yAxisID: 'speed',
          backgroundColor: getRandomColor() + '99',
          borderColor: datasetColor,
          borderWidth: 1
        };

        const steerDataset = {
          label: collectionName + ' - Steer',
          data: avgSpeedSteeringData.map(item => item.steer),
          yAxisID: 'steer',
          backgroundColor: getRandomColor() + '99',
          borderColor: datasetColor,
          borderWidth: 1
        };

        const newChartData = {
          labels: avgSpeedSteeringData.map(item => item.closest_checkpoint),
          datasets: [...data.datasets, speedDataset, steerDataset]
        };

        setData(newChartData);
      })
      .catch(error => console.error("Error fetching speed and steer data:", error));
  };


  //render speed and steer
  const renderSpeedAndSteerChart = () => {
    return (
      <Line
        data={data}
        responsive={true}
        maintainAspectRatio={true}
        options={{
          scales: {
            y: { display: false },
            speed: {
              type: 'linear',
              position: 'left',
              title: {
                display: true,
                text: 'Average Speed'
              }
            },
            steer: {
              type: 'linear',
              position: 'right',
              title: {
                display: true,
                text: 'Average Steer'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Checkpoint'
              }
            }
          },
          layout: { padding: { right: 0, bottom: 0 } },
          plugins: { legend: { align: 'end' } },
        }}
        key={chartKey} />
    );
  };


  //handels selection of models
  const handleModelSelect = (e, setSelectedModel) => {
    const collectionName = e.target.value;
    setSelectedModel(collectionName);
    if (selectedOption === 'line') {
      fetchAndSetDataAverageRewards(collectionName);
    }
    else if (selectedOption === 'speedandsteer') {
      fetchAndSetDataSpeedAndSteer(collectionName);
    }
  };


  const removeDataset = () => {
    const newData = { ...data };
    if (newData.datasets.length > 1 && selectedOption === 'speedandsteer') {
      newData.datasets.pop();
      newData.datasets.pop();
    } else if (newData.datasets.length) {
      newData.datasets.pop();
    }
    setData(newData);
    setChartKey(prevKey => prevKey + 1);  // Update the key to force a re-render when model is chosen in dropdown  -fix a bug-
  };

  
  //Render Normal Line Chart
  const renderChart = () => {
    const commonProps = {
      data: data,
      responsive: true,
      maintainAspectRatio: true,
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Iteration'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Reward'
            }
          }
        },
        plugins: { legend: { align: 'end' } },
      },
    };

    switch (selectedOption) {
      case 'line': return <Line {...commonProps} key={chartKey} />;
      case 'scatter': return <Scatter {...commonProps} key={chartKey} />;
      case 'speedandsteer': return renderSpeedAndSteerChart();
      default: return null;
    }
  };

  return (
    <Box m="3vw">
      <Box height="70vh">
        <Header title="Model Evaluation" />

        <Box display="flex" alignItems="center">
          <StyledSelect value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} variant="filled">
            <MenuItem value="1" disabled>Chart Type</MenuItem>
            <MenuItem value="line">Rewards Per Iteration</MenuItem>
            <MenuItem value="scatter">Scatter Chart</MenuItem>
            <MenuItem value="speedandsteer">Average Speed And Steering Angle By Checkpoint</MenuItem>
          </StyledSelect>

          <StyledSelect value={selectedModel} onChange={(e) => handleModelSelect(e, setSelectedModel)}
            variant="filled">
            <MenuItem value="1" disabled>Select Model</MenuItem>
            {models.map(model => (
              <MenuItem value={model} key={model}>{model}</MenuItem>
            ))}
          </StyledSelect>

          <StyledButton onClick={removeDataset} variant="contained">Remove Dataset</StyledButton>
        </Box>

        <Box
          sx={{
            border: "1px solid " + colors.purpleAccent[500],
            padding: "2vw",
            marginTop: "1vw",
            width: "75vw",
            height: "70vh",
            maxWidth: "1700px",
            maxHeight: "1700px",
            minWidth: "200px",
            minHeight: "100px",
            backgroundColor: "#f79400",
            borderRadius: "10px",
          }}>
          <Box width="100%" height="100%">
            {renderChart()}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ModelEval;
