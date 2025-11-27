'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import GarageHeader from './GarageHeader';
import GarageCanvas from './GarageCanvas';
import NewCategoryModal from './NewCategoryModal';
import GarajinoPagination from '@/app/components/GarajinoPagination';
import { chunk } from './utils/layout';
import { layoutPageItems } from './utils/layout';
import useContainerWidth from '@/lib/store/slices/useContainerWidth';

const BASE_CANVAS = 1920;
const MOBILE_CANVAS = 468;
const MOBILE_SCALE_BOOST = 1.08;
const DESKTOP_ITEMS_PER_PAGE = 4;
const MOBILE_ITEMS_PER_PAGE = 3;

export default function GaragePage() {
  const { theme } = useSelector((s) => s.theme);
  const containerRef = useContainerWidth();
  const containerWidth = containerRef.currentWidth;
  const isMobile = containerRef.isMobile;

  const [titles, setTitles] = useState(['لیست خرید', 'قیمت مناسب', 'چینی']);
  const [newCategoryModalOpen, setNewCategoryModalOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [currentPage, setCurrentPage] = useState(0); 

  const itemsPerPage = isMobile ? MOBILE_ITEMS_PER_PAGE : DESKTOP_ITEMS_PER_PAGE;

  const pages = useMemo(() => {
    const logical = titles.map((t, i) => ({ id: `cat_${i}`, title: t }));
    logical.push({ id: 'new', title: 'ساخت دسته جدید', isNew: true });
    const chunks = chunk(logical, itemsPerPage);

    return chunks.map((c) => layoutPageItems(c, isMobile));
  }, [titles, itemsPerPage, isMobile]);

  useEffect(() => {

    if (pages.length === 0) setCurrentPage(0);
    else setCurrentPage((p) => Math.max(0, Math.min(p, pages.length - 1)));

  }, [pages.length]);

  const scale = isMobile ?
    Math.min(
        1,Math.max( 0.5, ((containerWidth - 32) / MOBILE_CANVAS) * MOBILE_SCALE_BOOST))
        : Math.max(0.5, Math.min(1, containerWidth / BASE_CANVAS));

  const pageBoxes = pages[currentPage] || [];

  const handleAddNewCategory = () => {
    const name = newCategoryName.trim();
    if (!name) return;
    const updated = [...titles, name];
    setTitles(updated);
    setNewCategoryName('');
    setNewCategoryModalOpen(false);
    const total = updated.length + 1; 
    const lastPageIndex = Math.max(0, Math.floor((total - 1) / itemsPerPage));
    setCurrentPage(lastPageIndex);
  };

  const handlePaginationChange = (event, value) => {
    setCurrentPage(value - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const paginationPlaceholderItems = pages.length > 0 ? new Array(pages.length * 20) : [];
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        bgcolor: theme === 'dark' ? '#000' : '#fff',
        overflowX: 'hidden',
        py: 0,
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Box sx={{ width: '100%', maxWidth: `${BASE_CANVAS}px`, position: 'relative', mx: 'auto' }}>
        <GarageHeader isMobile={isMobile} scale={scale} />

        <GarageCanvas
          containerRef={containerRef.ref}
          pages={pages}
          currentPage={currentPage}
          isMobile={isMobile}
          scale={scale}
          pageBoxes={pageBoxes}
          setNewCategoryModalOpen={setNewCategoryModalOpen}
        />

        <Box
          component="img"
          src={theme === 'dark' ? '/garageDarkBack.png' : '/garageLightback.png'}
          className={theme === 'dark' ? 'car-dark-animation' : 'car-light-animation'}
          sx={{
            display: 'block',
            width: '100%',
            height: 'auto',
            mt: isMobile ? -13 : -80,
            pointerEvents: 'none',
            userSelect: 'none',
            py: 10
          }}
        />

        
        <Box sx={{  display: 'flex', justifyContent: 'center' }}>
          <GarajinoPagination
            page={currentPage + 1} 
            handlePageChange={handlePaginationChange}
            items={paginationPlaceholderItems}
          />
        </Box>
        

        <NewCategoryModal 
          // sx= {{
          //   mb: 0
          // }}
          open={newCategoryModalOpen}
          onClose={() => setNewCategoryModalOpen(false)}
          name={newCategoryName}
          setName={setNewCategoryName}
          onAdd={handleAddNewCategory}
          isMobile={isMobile}
        />
      </Box>
    </Box>
  );
}
