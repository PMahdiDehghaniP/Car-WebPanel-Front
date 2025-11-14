'use client';

import { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip
} from 'chart.js';
import { Box, Button, ButtonGroup } from '@mui/material';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip
);

const CarChart = () => {
  const [active, setActive] = useState('day');
  const chartRef = useRef(null);

  const datasets = {
    day: {
      labels: ['7 am', '9 am', '11 am', '1 pm', '3 pm', '5 pm', '7 pm', '9 pm'],
      data: [20, 80, 170, 130, 40, 20, 70, 55]
    },
    week: {
      labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      data: [40, 100, 160, 70, 90, 140, 120]
    },
    month: {
      labels: Array.from({ length: 30 }, (_, i) => i + 1),
      data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 200))
    }
  };

  const chartData = {
    labels: datasets[active].labels,
    datasets: [
      {
        data: datasets[active].data,
        borderColor: '#3b82f6',
        borderWidth: 2,
        tension: 0.5,
        pointRadius: 0,
        fill: true,
        backgroundColor: (ctx) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, 'rgba(59,130,246,0.4)');
          gradient.addColorStop(1, 'rgba(59,130,246,0)');
          return gradient;
        }
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { enabled: true } },
    scales: {
      x: { grid: { display: false }, ticks: { color: '#999' } },
      y: {
        grid: { display: false },
        ticks: {
          callback: (v) => `$${v}k`,
          color: '#999'
        }
      }
    }
  };

  return (
    <Box sx={{ width: '100%',paddingX:'1rem' ,display:"flex",flexDirection:'column',gap:"2rem",alignItems:"end"}}>
   <ButtonGroup size='small' sx={{direction:"ltr",width:'20%'}} >
        <Button
          onClick={() => setActive('day')}
          sx={{
            padding: '6px 16px',
            borderRadius: 12,
            background: active === 'day' ? '#3b82f6' : '#eee',
            color: active === 'day' ? '#fff' : '#444'
          }}
        >
          روز
        </Button>

        <Button
          onClick={() => setActive('week')}
          sx={{
            padding: '6px 16px',
            borderRadius: 12,
            background: active === 'week' ? '#3b82f6' : '#eee',
            color: active === 'week' ? '#fff' : '#444'
          }}
        >
          هفته
        </Button>

        <Button
          onClick={() => setActive('month')}
          sx={{
            padding: '6px 16px',
            borderRadius: 12,
            background: active === 'month' ? '#3b82f6' : '#eee',
            color: active === 'month' ? '#fff' : '#444'
          }}
        >
          ماه
        </Button>
      </ButtonGroup>

      <Box sx={{width:"80%",height:'400px'}}>
        <Line  ref={chartRef} data={chartData} options={options} />
      </Box>
    </Box>
  );
};
export default CarChart;
