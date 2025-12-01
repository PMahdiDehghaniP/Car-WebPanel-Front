'use client';

import React, { useEffect, useMemo } from 'react';
import {
  Box,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  useTheme,
  useMediaQuery,
  CircularProgress
} from '@mui/material';
import Image from 'next/image';
import { RadarChart, PolarGrid, Radar as ReRadar } from 'recharts';
import { BiChevronDown } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useLazyQuery } from '@apollo/client';
import { COMPARE_TWO_PAGES } from '@/schemas/GraphqlSchemas';
import { perfectCentering } from '@/app/constants/Styles';

export default function ComparePage() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const reduxTheme = useSelector((state) => state.theme.theme);

  const [
    getComparePage,
    { data: getComparePageData, loading: getComparePageLoading }
  ] = useLazyQuery(
    COMPARE_TWO_PAGES(`    cheaperMaintenanceCar
    economicalCar
    fasterCar
    morePowerfulEngineCar
    heavyCar
    newerCar
    quickerCar
    saferCar
    silandrCar
    spaciousCar
    strongerCar
    torqueCar
    car2 {
    acceleration0100
    availableColors
    combinedFuelConsumption
    curbWeightKg
    description
    dimensionsMm
    fuelType
    engine
    id
    multimediaSystem
    powerHp
    name
    releaseYear
    safetyAssistFeatures
    safetyRating
    seatingCapacity
    topSpeedKmh
    torqueNm
    trunkVolumeL
    wheelbaseMm
    pictureUrl
    price
    }
    car1 {
    acceleration0100
    availableColors
    combinedFuelConsumption
    curbWeightKg
    description
    pictureUrl
    dimensionsMm
    fuelType
    engine
    id
    multimediaSystem
    powerHp
    name
    price
    releaseYear
    safetyAssistFeatures
    safetyRating
    seatingCapacity
    topSpeedKmh
    torqueNm
    trunkVolumeL
    wheelbaseMm
    }`)
  );
  useEffect(() => {
    getComparePage({
      variables: {
        id1: '1',
        id2: '2'
      }
    });
  }, []);
  const labels = [
    'نوع سوخت',
    'مصرف ترکیبی',
    'وزن خالص',
    'ابعاد',
    'فاصله بین دو محور',
    'حجم صندوق',
    'ظرفیت سرنشین',
    'سیستم مالتی‌مدیا',
    'سیستم های ایمنی و کمکی',
    'ایمنی',
    'رنگ',
    'قیمت'
  ];

  const left = useMemo(
    () => [
      getComparePageData?.compareTwoCars?.car2?.fuelType,
      `${getComparePageData?.compareTwoCars?.car2?.combinedFuelConsumption} در  هر  100 کیلومتر `,
      `${getComparePageData?.compareTwoCars?.car2?.curbWeightKg} کیلوگرم`,
      `${getComparePageData?.compareTwoCars?.car2?.dimensionsMm} میلی متر`,
      `${getComparePageData?.compareTwoCars?.car2?.wheelbaseMm}  میلی متر `,
      `${getComparePageData?.compareTwoCars?.car2?.trunkVolumeL}  لیتر `,
      `${getComparePageData?.compareTwoCars?.car2?.seatingCapacity} نفر `,
      `${getComparePageData?.compareTwoCars?.car2?.multimediaSystem}`,
      `${getComparePageData?.compareTwoCars?.car2?.safetyAssistFeatures || 'Nothing'}`,
      `${getComparePageData?.compareTwoCars?.car2?.safetyRating} ستاره Euro NCAP`,
      'مشکی متالیک (Obsidian Black Metallic)',
      `${getComparePageData?.compareTwoCars?.car2?.price} دلار `
    ],
    [getComparePageData?.compareTwoCars?.car2]
  );

  const right = useMemo(
    () => [
      getComparePageData?.compareTwoCars?.car1?.fuelType,
      `${getComparePageData?.compareTwoCars?.car1?.combinedFuelConsumption} در  هر  100 کیلومتر `,
      `${getComparePageData?.compareTwoCars?.car1?.curbWeightKg} کیلوگرم`,
      `${getComparePageData?.compareTwoCars?.car1?.dimensionsMm} میلی متر`,
      `${getComparePageData?.compareTwoCars?.car1?.wheelbaseMm}  میلی متر `,
      `${getComparePageData?.compareTwoCars?.car1?.trunkVolumeL}  لیتر `,
      `${getComparePageData?.compareTwoCars?.car1?.seatingCapacity} نفر `,
      `${getComparePageData?.compareTwoCars?.car1?.multimediaSystem}`,
      `${getComparePageData?.compareTwoCars?.car1?.safetyAssistFeatures || 'Nothing'}`,
      `${getComparePageData?.compareTwoCars?.car1?.safetyRating} ستاره Euro NCAP`,
      'مشکی متالیک (Obsidian Black Metallic)',
      `${getComparePageData?.compareTwoCars?.car1?.price} دلار `
    ],
    [getComparePageData?.compareTwoCars?.car1]
  );

  const radarLeft = [
    { subject: 'قدرت', A: 80 },
    { subject: 'شتاب', A: 55 },
    { subject: 'هندلینگ', A: 85 },
    { subject: 'کیفیت', A: 80 },
    { subject: 'مصرف', A: 10 }
  ];
  const radarRight = [
    { subject: 'قدرت', A: 82 },
    { subject: 'شتاب', A: 75 },
    { subject: 'هندلینگ', A: 80 },
    { subject: 'کیفیت', A: 88 },
    { subject: 'مصرف', A: 70 }
  ];

  const TOP_IMG_WIDTH = isXs ? 100 : isSm ? 160 : 350;
  const TOP_IMG_HEIGHT = Math.round(TOP_IMG_WIDTH * 0.56);
  const RADAR_SIZE = isXs ? 140 : isSm ? 200 : 380;
  const STAR_SIZE = isXs ? 12 : isSm ? 16 : 26;

  const renderRadarChart = (data, color, size = RADAR_SIZE) => {
    const cx = size / 2;
    const cy = size / 2;
    const radius = Math.floor(size * 0.36);
    const offset = isXs ? 6 : isSm ? 10 : 18;

    const angles = data.map((_, i) => (360 / data.length) * i - 90);

    return (
      <RadarChart
        width={size}
        height={size}
        cx={cx}
        cy={cy}
        outerRadius={radius}
        data={data}
      >
        <PolarGrid />
        {data.map((item, i) => {
          const rad = (angles[i] * Math.PI) / 180;
          const x = cx + (radius + offset) * Math.cos(rad);
          const y = cy + (radius + offset) * Math.sin(rad);

          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={isXs ? 9 : isSm ? 11 : 14}
              fontWeight="bold"
              fill="#000"
            >
              {item.subject}
            </text>
          );
        })}

        <ReRadar dataKey="A" fill={color} fillOpacity={0.55} />
      </RadarChart>
    );
  };

  return getComparePageLoading || !getComparePageData ? (
    <Box sx={{ width: '100%', height: '100vh', ...perfectCentering }}>
      <CircularProgress size={64} />
    </Box>
  ) : (
    <>
      {' '}
      <Box
        sx={{
          width: '100%',
          direction: 'rtl',
          display: 'flex',
          justifyContent: 'center',
          minHeight: isXs ? '100vh' : '220vh',
          position: 'relative',
          background: reduxTheme === 'dark' ? '#20263C' : '#fff',
          overflowX: 'hidden',
          color: reduxTheme === 'dark' ? '#fff' : '#000'
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '1600px',
            mt: 5,
            position: 'relative',
            zIndex: 1,
            px: { xs: 2, md: 4 }
          }}
        >
          <Typography
            align="start"
            fontWeight="bold"
            fontSize={{ xs: 18, sm: 24, md: 36 }}
            mb={{ xs: 2, md: 5 }}
          >
            مقایسه مشخصات فنی
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '40px 1fr 1fr',
                sm: '120px 1fr 1fr',
                md: '250px calc((100% - 250px)/2) calc((100% - 250px)/2)'
              },
              gap: 2,
              alignItems: 'end',
              mb: { xs: 2, md: 8 }
            }}
          >
            <Box />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  bottom: isXs ? 28 : 50,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: isXs ? TOP_IMG_WIDTH * 1.1 : isSm ? 300 : 400,
                  height: isXs ? 28 : isSm ? 50 : 80,
                  borderRadius: '50%',
                  background:
                    'linear-gradient(174.99deg, #FFFFFF 35.19%, #DFE6FF 85.79%)',
                  zIndex: 0
                }}
              />

              <Box
                sx={{
                  width: TOP_IMG_WIDTH,
                  height: TOP_IMG_HEIGHT,
                  position: 'relative',
                  borderRadius: 1,
                  overflow: 'hidden',
                  zIndex: 2
                }}
              >
                <Image
                  src={getComparePageData?.compareTwoCars?.car1}
                  alt="car1"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>

              <Box display="flex" alignItems="center" gap={0.8} mt={0.6}>
                <BiChevronDown size={isXs ? 12 : 18} />
                <Typography
                  fontWeight="bold"
                  fontSize={isXs ? 10 : isSm ? 13 : 18}
                  noWrap
                >
                  Mercedes-Benz C300 AMG Line
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  bottom: isXs ? 28 : 50,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: isXs ? TOP_IMG_WIDTH * 1.1 : isSm ? 300 : 400,
                  height: isXs ? 28 : isSm ? 50 : 80,
                  borderRadius: '50%',
                  background:
                    'linear-gradient(174.99deg, #FFFFFF 35.19%, #DFE6FF 85.79%)',
                  zIndex: 0
                }}
              />

              <Box
                sx={{
                  width: TOP_IMG_WIDTH,
                  height: TOP_IMG_HEIGHT,
                  position: 'relative',
                  borderRadius: 1,
                  overflow: 'hidden',
                  zIndex: 2
                }}
              >
                <Image
                  src={getComparePageData?.compareTwoCars?.car2}
                  alt="Car2"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>

              <Box display="flex" alignItems="center" gap={0.8} mt={0.6}>
                <BiChevronDown size={isXs ? 12 : 18} />
                <Typography
                  fontWeight="bold"
                  fontSize={isXs ? 10 : isSm ? 13 : 18}
                  noWrap
                >
                  BMW M5 Competition
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              overflowX: { xs: 'auto', md: 'visible' },
              mb: { xs: 3, md: 6 }
            }}
          >
            <Table
              sx={{
                width: '100%',
                minWidth: { xs: 320, md: 760 },
                tableLayout: 'fixed',
                borderCollapse: 'separate',
                borderSpacing: '0 6px'
              }}
            >
              <colgroup>
                <col
                  style={{ width: isXs ? '33%' : isSm ? '180px' : '250px' }}
                />
                <col
                  style={{ width: isXs ? '33%' : 'calc((100% - 250px) / 2)' }}
                />
                <col
                  style={{ width: isXs ? '33%' : 'calc((100% - 250px) / 2)' }}
                />
              </colgroup>
              <TableBody>
                {labels.map((label, i) => {
                  const rowColor =
                    reduxTheme === 'dark'
                      ? '#20263C'
                      : i % 2 === 0
                        ? '#f7f7f7'
                        : '#ffffff';
                  return (
                    <TableRow
                      key={i}
                      sx={{
                        '& td': {
                          py: { xs: 0.6, sm: 1.2, md: 3 },
                          fontSize: { xs: 10, sm: 11, md: 14 }
                        }
                      }}
                    >
                      <TableCell
                        sx={{
                          backgroundColor: rowColor,
                          fontWeight: 700,
                          textAlign: 'start',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        {label}
                      </TableCell>
                      <TableCell
                        sx={{
                          backgroundColor: rowColor,
                          textAlign: 'start',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        {right[i]}
                      </TableCell>
                      <TableCell
                        sx={{
                          backgroundColor: rowColor,
                          textAlign: 'start',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        {left[i]}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Box>
          <Box
            sx={{
              overflowX: { xs: 'auto', md: 'visible' },
              px: { xs: 1, md: 0 }
            }}
          >
            <Grid
              container
              justifyContent="center"
              sx={{
                columnGap: { xs: 2, md: '240px' },
                mt: { xs: 2, md: 10 },
                flexWrap: 'nowrap',
                alignItems: 'flex-start'
              }}
            >
              {[
                { data: radarLeft, color: '#0ea5e9', score: 4.2, votes: 238 },
                { data: radarRight, color: '#ef4444', score: 4.9, votes: 456 }
              ].map((item, idx) => (
                <Grid
                  item
                  key={idx}
                  sx={{
                    flex: '0 0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    px: { xs: 1, md: 0 }
                  }}
                >
                  <Box
                    sx={{
                      width: RADAR_SIZE,
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    {renderRadarChart(item.data, item.color, RADAR_SIZE)}
                  </Box>

                  <Box
                    mt={1}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}
                  >
                    <Box
                      sx
                      style={{
                        direction: 'ltr',
                        display: 'flex',
                        gap: isXs ? 6 : 8
                      }}
                    >
                      {Array.from({ length: 5 }).map((_, starIdx) => (
                        <FaStar
                          key={starIdx}
                          size={STAR_SIZE}
                          color={
                            starIdx < Math.floor(item.score)
                              ? '#facc15'
                              : '#e5e7eb'
                          }
                        />
                      ))}
                    </Box>

                    <Typography
                      fontSize={isXs ? 14 : isSm ? 20 : 36}
                      fontWeight="bold"
                      mt={0.6}
                    >
                      {item.score}
                    </Typography>

                    <Typography
                      fontSize={isXs ? 10 : 14}
                      color="#6b7280"
                      mt={0.3}
                    >
                      {item.votes} رأی
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box
            sx={{
              mt: { xs: 6, md: 12 },
              width: '100%',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Box
              sx={{
                width: '100%',
                maxWidth: '520px',
                background: reduxTheme === 'dark' ? '#2E3B55' : '#ffffff',
                borderRadius: '22px',
                boxShadow: '0px 10px 25px rgba(0,0,0,0.12)',
                textAlign: 'center',
                py: 3,
                px: 2,
                color: reduxTheme === 'dark' ? '#fff' : '#000'
              }}
            >
              <Typography
                fontSize={{ xs: 18, md: 32 }}
                fontWeight="900"
                sx={{ mb: 1 }}
              >
                برنده نهایی
              </Typography>

              <Typography
                fontSize={{ xs: 14, md: 22 }}
                fontWeight="600"
                sx={{ mb: 1 }}
              >
                Mercedes-Benz C300 AMG Line
              </Typography>

              <Typography
                sx={{ color: reduxTheme === 'dark' ? '#fff' : '#000' }}
                fontSize={{ xs: 14, md: 20 }}
                fontWeight="700"
                color="#333"
              >
                با امتیاز: 77
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100vw',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              pointerEvents: 'none',
              zIndex: 0,
              px: { xs: 0, md: 0 },
              pb: { xs: 2, md: 4 },
              gap: 0,
              overflow: 'visible'
            }}
          >
            <Box
              component="img"
              src="/compare1.png"
              alt=""
              sx={{
                width: { xs: '100vw', sm: '50vw', md: '48vw' },
                height: 'auto',
                display: 'block',
                opacity: 0.12,
                objectFit: 'cover',
                userSelect: 'none',
                pointerEvents: 'none',
                transform: { xs: 'translateY(20px)', md: 'translateY(0px)' }
              }}
            />
            <Box
              component="img"
              src="/compare2.png"
              alt=""
              sx={{
                width: { xs: '100vw', sm: '50vw', md: '50vw' },
                height: 'auto',
                display: 'block',
                opacity: 0.12,
                objectFit: 'cover',
                userSelect: 'none',
                pointerEvents: 'none',
                transform: { xs: 'translateY(40px)', md: 'translateY(50px)' }
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
