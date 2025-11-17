'use client';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Rating,
  LinearProgress,
  Stack,
  useTheme
} from '@mui/material';

const ratingsData = [
  { stars: 5, percentage: 40, animationKey: 'rate5' },
  { stars: 4, percentage: 20, animationKey: 'rate4' },
  { stars: 3, percentage: 10, animationKey: 'rate3' },
  { stars: 2, percentage: 20, animationKey: 'rate2' },
  { stars: 1, percentage: 10, animationKey: 'rate1' }
];

const totalReviews = 34;
const averageRating = 4.6;

export const RatingDistribution = () => {
  const theme = useTheme();
  const [ratingValues, setRatingValues] = useState({
    rate1: 0,
    rate2: 0,
    rate3: 0,
    rate4: 0,
    rate5: 0
  });

  useEffect(() => {
    const raterAnimation = setInterval(() => {
      setRatingValues((old) => ({
        rate5: Math.min(
          old.rate5 + Math.random() * 5,
          ratingsData[0].percentage
        ),
        rate4: Math.min(
          old.rate4 + Math.random() * 5,
          ratingsData[1].percentage
        ),
        rate3: Math.min(
          old.rate3 + Math.random() * 5,
          ratingsData[2].percentage
        ),
        rate2: Math.min(
          old.rate2 + Math.random() * 5,
          ratingsData[3].percentage
        ),
        rate1: Math.min(
          old.rate1 + Math.random() * 5,
          ratingsData[4].percentage
        )
      }));
    }, 100);

    return () => clearInterval(raterAnimation);
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'center', md: 'center' },
        gap: '1rem',
        px: 2,
        py: 4,
        flexWrap: 'wrap'
      }}
    >
      <Typography
        variant="h3"
        sx={{
          flexBasis: { xs: '100%', md: 'auto' },
          textAlign: { xs: 'center', md: 'left' }
        }}
      >
        نظرات کابران
      </Typography>
      <Box
        component="img"
        src="/userrevs.png"
        height={250}
        sx={{ flexShrink: 0, maxWidth: { xs: '100%', md: 'auto' } }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.5,
          flexShrink: 0,
          width: { xs: '100%', md: 'auto' }
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          {averageRating}
        </Typography>
        <Rating
          value={averageRating}
          precision={0.5}
          readOnly
          sx={{
            '& .MuiRating-iconFilled': { color: '#ffc107' },
            '& .MuiRating-iconHover': { color: '#ffc107' },
            direction: 'ltr'
          }}
        />
        <Typography variant="body2" color="gray">
          بر اساس {totalReviews} رأی
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          width: { xs: '100%', md: 'auto' }
        }}
      >
        {ratingsData.map((item) => (
          <Stack
            key={item.stars}
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ width: '100%' }}
          >
            <Typography variant="body2" sx={{ minWidth: 20 }}>
              {item.stars}★
            </Typography>
            <LinearProgress
              variant="determinate"
              value={ratingValues[item.animationKey]}
              sx={{
                height: 8,
                borderRadius: 4,
                flex: 1,
                backgroundColor: theme.palette.colors.colorCommentRatingBars,
                '& .MuiLinearProgress-bar': {
                  backgroundColor: theme.palette.colors.colorCommentsStars,
                  borderRadius: 4
                }
              }}
            />
            <Typography
              variant="body2"
              sx={{ minWidth: 30, textAlign: 'right' }}
            >
              {item.percentage}%
            </Typography>
          </Stack>
        ))}
      </Box>
    </Box>
  );
};

export default RatingDistribution;
