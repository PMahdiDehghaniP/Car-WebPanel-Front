'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import CardStack from './CarStack';
import CardTray from './CardStackTray';

export default function CategoryBox({
  title = 'دسته',
  id,
  mobile = false,
  cars = []
}) {
  const router = useRouter();
  const { theme } = useSelector((state) => state.theme);

  const handleClick = () => {
    if (id) router.push(`/dashboard/garage/category/${id}`);
  };
  const bgCard = theme === 'dark' ? '#20263C' : '#E9E8E800';
  const bgInner = theme === 'dark' ? '#2E3B55' : '#E9E8E800';
  const textColor = theme === 'dark' ? '#fff' : '#222';
  const borderColor =
    theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.04)';

  const defaultCars = [
    {
      image: '/forgotPasswordImage.png',
      name: 'Car 1',
      desc: 'Desc 1',
      info: {},
      price: '$20000'
    },
    {
      image: '/forgotPasswordImage.png',
      name: 'Car 2',
      desc: 'Desc 2',
      info: {},
      price: '$21000'
    },
    {
      image: '/forgotPasswordImage.png',
      name: 'Car 3',
      desc: 'Desc 3',
      info: {},
      price: '$22000'
    },
    {
      image: '/forgotPasswordImage.png',
      name: 'Car 4',
      desc: 'Desc 4',
      info: {},
      price: '$19000'
    },
    {
      image: '/forgotPasswordImage.png',
      name: 'Car 5',
      desc: 'Desc 5',
      info: {},
      price: '$23000'
    }
  ];
  const allCars = [
    (cars && cars[0]) || defaultCars[0],
    (cars && cars[1]) || defaultCars[1],
    (cars && cars[2]) || defaultCars[2],
    (cars && cars[3]) || defaultCars[3],
    (cars && cars[4]) || defaultCars[4]
  ];
  if (mobile) {
    return (
      <Box
        onClick={handleClick}
        sx={{
          width: '100%',
          height: '148px',
          backgroundColor: bgCard,
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'row',
          overflow: 'hidden',
          cursor: 'pointer',
          backgroundColor: bgCard,
          boxShadow:
            theme === 'dark'
              ? '0px 6px 12px rgba(0,0,0,0.25)'
              : '0px 6px 12px rgba(0,0,0,0.08)'
        }}
      >
        <Box
          sx={{
            flex: 1,
            backgroundColor: bgCard,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: 1
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '0.85rem',
              color: textColor,
              textAlign: 'center'
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 3,
            backgroundColor: bgInner,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
            position: 'relative',
            overflow: 'hidden',
            px: 1
          }}
        >
          <CardTray width={220} height={28} mobile={true} />

          <Box
            sx={{ width: 220, height: 148, position: 'relative', zIndex: 1 }}
          >
            <CardStack
              cards={allCars}
              base={{
                baseTotalWidth: 360,
                centerW: 160,
                centerH: 220,
                sideW: 120,
                sideH: 170,
                backW: 92,
                backH: 120,
                sideOffset: 34,
                backOffset: 64,
                sideScale: 0.92,
                backScale: 0.78
              }}
            />
          </Box>
        </Box>
      </Box>
    );
  }
  return (
    <Box
      onClick={handleClick}
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: '20px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: bgCard,
        boxShadow:
          theme === 'dark'
            ? '0px 6px 12px rgba(0,0,0,0.25)'
            : '0px 6px 12px rgba(0,0,0,0.08)',
        transition: 'box-shadow 0.2s ease',
        '&:hover': {
          boxShadow:
            theme === 'dark'
              ? '0px 8px 16px rgba(0,0,0,0.35)'
              : '0px 8px 16px rgba(0,0,0,0.12)'
        }
      }}
    >
      <Box
        sx={{
          flex: 1,
          backgroundColor: bgInner,
          borderRadius: '20px',
          boxShadow:
            theme === 'dark'
              ? 'inset 0px -2px 5px rgba(0,0,0,0.4)'
              : 'inset 0px -2px 5px rgba(0,0,0,0.06)',
          border: `1px solid ${borderColor}`,
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2,
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            maxWidth: 920,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            pt: { xs: 2, md: 4 },
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <CardTray width={500} height={120} mobile={false} />
          <CardStack cards={allCars} />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: bgCard,
          borderBottomLeftRadius: '20px',
          borderBottomRightRadius: '20px',
          height: '80px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow:
            theme === 'dark'
              ? 'inset 0px 2px 4px rgba(255,255,255,0.05)'
              : 'inset 0px 2px 4px rgba(0,0,0,0.03)'
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '1.2rem',
            color: textColor
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
