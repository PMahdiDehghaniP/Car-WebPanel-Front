'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import CarCard from '@/app/components/Home/CarSlider/CarCard';

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

  const bgCard = theme === 'dark' ? '#20263C' : '#fff';
  const bgInner = theme === 'dark' ? '#2E3B55' : '#F7F7F7';
  const textColor = theme === 'dark' ? '#fff' : '#222';
  const borderColor =
    theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.04)';
  const shadow =
    theme === 'dark'
      ? '0 2px 4px rgba(0,0,0,0.5)'
      : '0 2px 4px rgba(0,0,0,0.15)';
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
  const centerW = 250;
  const centerH = 350;
  const sideW = 190;
  const sideH = 300;
  const backW = 140;
  const backH = 210;
  const sideScale = 0.9;
  const backScale = 0.75;
  const sideOpacity = 0.6;
  const backOpacity = 0.45;
  const sideOffset = 56;
  const backOffset = 110;

  const mCenterW = 160;
  const mCenterH = 220;
  const mSideW = 120;
  const mSideH = 170;
  const mBackW = 92;
  const mBackH = 120;
  const mSideScale = 0.92;
  const mBackScale = 0.78;
  const mSideOffset = 34;
  const mBackOffset = 64;
  const mSideOpacity = 0.65;
  const mBackOpacity = 0.5;

  if (mobile) {
    return (
      <Box
        onClick={handleClick}
        sx={{
          width: '100%',
          height: '148px',
          backgroundColor: bgCard,
          borderRadius: '8px',
          boxShadow: shadow,
          display: 'flex',
          flexDirection: 'row',
          overflow: 'hidden',
          cursor: 'pointer'
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
              textAlign: 'center',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
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
          <Box sx={{ width: 120, height: 140, zIndex: 4 }}>
            <CarCard
              imageSrc={allCars[2].image}
              imageAlt={allCars[2].name}
              carName={allCars[2].name}
              description={allCars[2].desc}
              carInformation={allCars[2].info}
              price={allCars[2].price}
              maxWidth={120}
              maxHeight={140}
            />
          </Box>
          <Box
            sx={{
              width: 90,
              height: 120,
              position: 'absolute',
              left: `calc(50% - 60px - 25px)`,
              zIndex: 3,
              opacity: 0.6,
              transform: 'scale(0.85)',
              pointerEvents: 'none'
            }}
          >
            <CarCard {...allCars[1]} maxWidth={90} maxHeight={120} />
          </Box>
          <Box
            sx={{
              width: 90,
              height: 120,
              position: 'absolute',
              left: `calc(50% + 60px + 25px - 90px)`,
              zIndex: 3,
              opacity: 0.6,
              transform: 'scale(0.85)',
              pointerEvents: 'none'
            }}
          >
            <CarCard {...allCars[3]} maxWidth={90} maxHeight={120} />
          </Box>
          <Box
            sx={{
              width: 60,
              height: 90,
              position: 'absolute',
              left: `calc(50% - 60px - 45px)`,
              zIndex: 2,
              opacity: 0.45,
              transform: 'scale(0.7)',
              pointerEvents: 'none'
            }}
          >
            <CarCard {...allCars[0]} maxWidth={60} maxHeight={90} />
          </Box>
          <Box
            sx={{
              width: 60,
              height: 90,
              position: 'absolute',
              left: `calc(50% + 60px + 45px - 60px)`,
              zIndex: 2,
              opacity: 0.45,
              transform: 'scale(0.7)',
              pointerEvents: 'none'
            }}
          >
            <CarCard {...allCars[4]} maxWidth={60} maxHeight={90} />
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
        <Box sx={{ width: centerW, height: centerH, zIndex: 5 }}>
          <CarCard
            imageSrc={allCars[2].image}
            imageAlt={allCars[2].name}
            carName={allCars[2].name}
            description={allCars[2].desc}
            carInformation={allCars[2].info}
            price={allCars[2].price}
            maxWidth={centerW}
            maxHeight={centerH}
          />
        </Box>
        <Box
          sx={{
            width: sideW,
            height: sideH,
            position: 'absolute',
            left: `calc(50% - ${centerW / 2}px - ${sideOffset}px)`,
            zIndex: 4,
            opacity: sideOpacity,
            transform: `scale(${sideScale})`,
            transformOrigin: 'center center',
            pointerEvents: 'none',
            transition: 'transform .25s ease, opacity .25s ease'
          }}
        >
          <CarCard
            imageSrc={allCars[1].image}
            imageAlt={allCars[1].name}
            carName={allCars[1].name}
            description={allCars[1].desc}
            carInformation={allCars[1].info}
            price={allCars[1].price}
            maxWidth={sideW}
            maxHeight={sideH}
          />
        </Box>
        <Box
          sx={{
            width: sideW,
            height: sideH,
            position: 'absolute',
            left: `calc(50% + ${centerW / 2}px + ${sideOffset - sideW}px)`,
            zIndex: 4,
            opacity: sideOpacity,
            transform: `scale(${sideScale})`,
            transformOrigin: 'center center',
            pointerEvents: 'none',
            transition: 'transform .25s ease, opacity .25s ease'
          }}
        >
          <CarCard
            imageSrc={allCars[3].image}
            imageAlt={allCars[3].name}
            carName={allCars[3].name}
            description={allCars[3].desc}
            carInformation={allCars[3].info}
            price={allCars[3].price}
            maxWidth={sideW}
            maxHeight={sideH}
          />
        </Box>
        <Box
          sx={{
            width: backW,
            height: backH,
            position: 'absolute',
            left: `calc(50% - ${centerW / 2}px - ${backOffset}px)`,
            zIndex: 3,
            opacity: backOpacity,
            transform: `scale(${backScale})`,
            transformOrigin: 'center center',
            pointerEvents: 'none',
            transition: 'transform .25s ease, opacity .25s ease'
          }}
        >
          <CarCard
            imageSrc={allCars[0].image}
            imageAlt={allCars[0].name}
            carName={allCars[0].name}
            description={allCars[0].desc}
            carInformation={allCars[0].info}
            price={allCars[0].price}
            maxWidth={backW}
            maxHeight={backH}
          />
        </Box>
        <Box
          sx={{
            width: backW,
            height: backH,
            position: 'absolute',
            left: `calc(50% + ${centerW / 2}px + ${backOffset - backW}px)`,
            zIndex: 3,
            opacity: backOpacity,
            transform: `scale(${backScale})`,
            transformOrigin: 'center center',
            pointerEvents: 'none',
            transition: 'transform .25s ease, opacity .25s ease'
          }}
        >
          <CarCard
            imageSrc={allCars[4].image}
            imageAlt={allCars[4].name}
            carName={allCars[4].name}
            description={allCars[4].desc}
            carInformation={allCars[4].info}
            price={allCars[4].price}
            maxWidth={backW}
            maxHeight={backH}
          />
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
          sx={{ fontWeight: 700, fontSize: '1.2rem', color: textColor }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
