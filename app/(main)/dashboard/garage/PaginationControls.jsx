'use client';

import React from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function PaginationControls({ pages, currentPage, setCurrentPage }) {
  const goPrev = () => setCurrentPage((p) => Math.max(0, p - 1));
  const goNext = () => setCurrentPage((p) => Math.min(p + 1, Math.max(0, pages.length - 1)));

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mt: 2 }}>
      <IconButton onClick={goPrev} disabled={currentPage === 0} aria-label="قبلی">
        <ArrowForwardIosIcon />
      </IconButton>

      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        {pages.map((_, idx) => (
          <Box
            key={idx}
            onClick={() => setCurrentPage(idx)}
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              bgcolor: idx === currentPage ? 'primary.main' : 'grey.300',
              color: idx === currentPage ? '#fff' : '#000',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              fontSize: 14,
              fontWeight: 600,
              userSelect: 'none'
            }}
          >
            {idx + 1}
          </Box>
        ))}
      </Box>

      <IconButton onClick={goNext} disabled={currentPage >= Math.max(0, pages.length - 1)} aria-label="بعدی">
        <ArrowBackIosNewIcon />
      </IconButton>
    </Box>
  );
}