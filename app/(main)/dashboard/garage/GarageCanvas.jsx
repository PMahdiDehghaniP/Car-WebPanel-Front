'use client';
import React from 'react';
import { Box } from '@mui/material';
import CategoryBox from './CategoryBox';
import NewCategory from './NewCategory';

export default function GarageCanvas({ containerRef, pages, currentPage, pageBoxes, isMobile, scale, setNewCategoryModalOpen }) {
  const maxBottom = pageBoxes.length
    ? Math.max(
        ...pageBoxes.map((b) =>
          b.top + (b.height ?? (isMobile ? Math.round( (Math.min(400, Math.max(240, 468 - 48)) * 0.58) ) : 700))
        )): 200;

  const wrapperHeight = Math.max(
    ...pageBoxes.map((b) => Math.round((b.top + (b.height ?? 0)) * scale))
  );
  return (
    <Box
      ref={containerRef}
      sx={{ position: 'relative', width: '100%', height: `${wrapperHeight}px`, overflow: 'visible', mx: 'auto' }}
    >
      {pageBoxes.map((b) => {
        const left = Math.round(b.left * scale);
        const top = Math.round(b.top * scale);
        const width = Math.round((b.width ?? (isMobile ? Math.min(400, Math.max(240, 468 - 48)) : 700)) * scale);
        const height = Math.round((b.height ?? (isMobile ? Math.round(Math.min(400, Math.max(240, 468 - 48)) * 0.58) : 700)) * scale);
        return (
          <Box key={b.id} sx={{ position: 'absolute', left, top, width, height, cursor: b.isNew ? 'default' : 'pointer' }}>
            {b.isNew ? (
              <NewCategory onClick={() => setNewCategoryModalOpen(true)} mobile={isMobile} />
            ) : (
              <CategoryBox title={b.title} cars={b.cars} id={b.id} mobile={isMobile} />
            )}
          </Box>
        );
      })}

    </Box>
  );
}
