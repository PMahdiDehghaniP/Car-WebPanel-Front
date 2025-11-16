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
import { Box, Button, ButtonGroup, Typography, useTheme } from '@mui/material';
import { formatNumber } from '@/utils/formatters';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip
);

const CarChart = () => {
  const theme = useTheme();
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
      tension: 0.4,
      pointRadius: 3,
      pointBackgroundColor: '#3b82f6',
      fill: true,
      backgroundColor: 'rgba(59,130,246,0.4)'
    }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
      backgroundColor: '#1e293b',
      titleColor: '#fff',
      bodyColor: '#fff',
      padding: 10,
      displayColors: false,
      callbacks: {
        label: (ctx) => `${ctx.raw} واحد`
      }
    }
  },
  scales: {
    x: { grid: { display: false }, ticks: { color: '#999' } },
    y: { grid: { display: false }, ticks: { color: '#999' } }
  }
};

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: '1rem',
        paddingX: '1rem'
      }}
    >
      <Box
        sx={{
          width: { md: '25%', xs: '100%' },
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          justifyContent: 'start'
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: '2rem' }}>
          وضعیت قیمت
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            width: '100%',
            boxShadow: '0px 4px 15.4px 0px #0000007A',
            borderRadius: '15px',
            padding: '1rem',
            border: `1px solid ${theme.palette.colors.colorPriceBoxOutline} `
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '4px',
              width: '100%',
              justifyContent: 'start',
              alignItems: 'center'
            }}
          >
            <Typography color="red">بیشترین</Typography>
            <Typography>قیمت در بازه کل :</Typography>
            <Typography>{formatNumber(68888)} دلار</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '4px',
              width: '100%',
              justifyContent: 'start'
            }}
          >
            <Typography color="green">کمترین</Typography>
            <Typography>قیمت در بازه کل :</Typography>
            <Typography>{formatNumber(68888)} دلار</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '4px',
              width: '100%',
              justifyContent: 'start'
            }}
          >
            <Typography>قیمت فعلی :</Typography>
            <Typography>{formatNumber(68888)} دلار</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            width: '100%',
            boxShadow: '0px 4px 15.4px 0px #0000007A',
            borderRadius: '15px',
            padding: '1rem',
            border: `1px solid ${theme.palette.colors.colorPriceBoxOutline} `
          }}
        >
          <Typography sx={{ color: theme.palette.colors.colorPriceRange }}>
            قیمت های بازه ی انتخابی:
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '4px',
              width: '100%',
              justifyContent: 'start'
            }}
          >
            <Typography color="green">کمترین</Typography>
            <Typography>
              قیمت در
              {active === 'day'
                ? ' روز '
                : active === 'week'
                  ? ' هفته '
                  : ' ماه '}{' '}
              :
            </Typography>
            <Typography>{formatNumber(68888)} دلار</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '4px',
              width: '100%',
              justifyContent: 'start'
            }}
          >
            <Typography color="red">بیشترین</Typography>
            <Typography>
              قیمت در
              {active === 'day'
                ? ' روز '
                : active === 'week'
                  ? ' هفته '
                  : ' ماه '}{' '}
              :
            </Typography>
            <Typography>{formatNumber(68888)} دلار</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: { md: '75%', xs: '100%' },
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          alignItems: 'end'
        }}
      >
        <ButtonGroup size="small" sx={{ direction: 'ltr', width: '20%' }}>
          <Button
            onClick={() => setActive('day')}
            sx={{
              padding: '6px 16px',
              borderRadius: 12,
              background:
                active === 'day' ? '#3b82f6' : theme.palette.colors.taxItemBg,
              color:
                active === 'day'
                  ? '#fff'
                  : theme.palette.colors.colorRangeButtonsText
            }}
          >
            روز
          </Button>

          <Button
            onClick={() => setActive('week')}
            sx={{
              padding: '6px 16px',
              borderRadius: 12,
              background:
                active === 'week' ? '#3b82f6' : theme.palette.colors.taxItemBg,
              color:
                active === 'week'
                  ? '#fff'
                  : theme.palette.colors.colorRangeButtonsText
            }}
          >
            هفته
          </Button>

          <Button
            onClick={() => setActive('month')}
            sx={{
              padding: '6px 16px',
              borderRadius: 12,
              background:
                active === 'month' ? '#3b82f6' : theme.palette.colors.taxItemBg,
              color:
                active === 'month'
                  ? '#fff'
                  : theme.palette.colors.colorRangeButtonsText
            }}
          >
            ماه
          </Button>
        </ButtonGroup>

        <Box sx={{ width: '100%', height: '400px' }}>
          <Line ref={chartRef} data={chartData} options={options} />
        </Box>
      </Box>
    </Box>
  );
};
export default CarChart;
