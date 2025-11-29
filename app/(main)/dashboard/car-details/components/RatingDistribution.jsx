'use client';
import React from 'react';
import { Box, Typography, Rating, LinearProgress, Stack, useTheme } from '@mui/material';

const RatingDistribution = ({ getCarRatingsData }) => {
  const theme = useTheme();

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
        sx={{ flexBasis: { xs: '100%', md: 'auto' }, textAlign: { xs: 'center', md: 'left' } }}
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
          {getCarRatingsData?.averageRating}
        </Typography>
        <Rating
          value={getCarRatingsData?.averageRating}
          precision={0.5}
          readOnly
          sx={{
            '& .MuiRating-iconFilled': { color: '#ffc107' },
            '& .MuiRating-iconHover': { color: '#ffc107' },
            direction: 'ltr'
          }}
        />
        <Typography variant="body2" color="gray">
          بر اساس {getCarRatingsData?.totalReviews} رأی
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
        {getCarRatingsData?.breakdown.map((item) => {
          const percent = (item.count / getCarRatingsData?.totalReviews) * 100;

          return (
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
                value={percent}
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

              <Typography variant="body2" sx={{ minWidth: 30, textAlign: 'right' }}>
                {percent.toFixed(2)}%
              </Typography>
            </Stack>
          );
        })}
      </Box>
    </Box>
  );
};

export default RatingDistribution;
