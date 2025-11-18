'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Box, TextField, useMediaQuery, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CategoryBox from './CategoryBox';
import NewCategory from './NewCategory';
import { useSelector } from 'react-redux';
import './garageAnimations.css';

const FIGMA_BOX = { width: 700, height: 700, borderRadius: 350 };
const FIGMA_BOX_MOBILE = { width: 400, height: 400, borderRadius: 200 };
const COLUMN_LEFTS = [165, 1039];
const START_TOP = 200;
const START_TOP_MOBILE = 100;
const V_SPACING = 20;
const V_SPACING_MOBILE = 12;
const CAR_MARGIN_TOP = 20;
const MOBILE_CANVAS = 468;
const MOBILE_SCALE_BOOST = 1.08;
const sampleCars = [
  { imageSrc: '/car1.jpg', carName: 'BMW X5', description: 'ماشین لوکس' }
];
const DESKTOP_ITEMS_PER_PAGE = 4;
const MOBILE_ITEMS_PER_PAGE = 3;

const chunk = (arr, size) => {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

export default function GaragePage() {
  const isMobile = useMediaQuery('(max-width:900px)');
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(1200);
  const initialTitles = ['لیست خرید', 'قیمت مناسب', 'چینی'];
  const [titles, setTitles] = useState(initialTitles);
  const [newCategoryModalOpen, setNewCategoryModalOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const { theme } = useSelector((state) => state.theme);

  const itemsPerPage = isMobile
    ? MOBILE_ITEMS_PER_PAGE
    : DESKTOP_ITEMS_PER_PAGE;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () =>
      setContainerWidth(
        Math.min(el.clientWidth || window.innerWidth || 1200, 1920)
      );
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const layoutPageItems = (rawItems = [], mobile = false) => {
    const vSpacing = mobile ? V_SPACING_MOBILE : V_SPACING;
    const mobileBoxWidth = Math.min(
      FIGMA_BOX_MOBILE.width,
      Math.max(240, MOBILE_CANVAS - 48)
    );
    const mobileBoxHeight = Math.round(mobileBoxWidth * 0.58);
    const bottoms = mobile
      ? [START_TOP_MOBILE - vSpacing]
      : [START_TOP - vSpacing, START_TOP - vSpacing];
    const laid = [];

    rawItems.forEach((item, idx) => {
      const col = mobile ? 0 : idx % 2 === 0 ? 0 : 1;
      const left = mobile
        ? Math.max(24, Math.round((MOBILE_CANVAS - mobileBoxWidth) / 2))
        : COLUMN_LEFTS[col];
      const top = bottoms[col] + vSpacing;

      laid.push({
        id: item.id,
        title: item.title,
        left,
        top,
        ...(mobile
          ? {
              width: mobileBoxWidth,
              height: mobileBoxHeight,
              borderRadius: Math.round(mobileBoxHeight / 6)
            }
          : FIGMA_BOX),
        cars: item.cars ?? sampleCars,
        isNew: !!item.isNew
      });
      bottoms[col] = top + (mobile ? mobileBoxHeight : FIGMA_BOX.height);
    });

    return laid;
  };
  const pages = useMemo(() => {
    const logical = titles.map((t, i) => ({ id: `cat_${i}`, title: t }));
    logical.push({ id: 'new', title: 'ساخت دسته جدید', isNew: true });
    const chunks = chunk(logical, itemsPerPage);
    return chunks.map((chunkItems) => layoutPageItems(chunkItems, isMobile));
  }, [titles, itemsPerPage, isMobile]);
  useEffect(() => {
    if (pages.length === 0) setCurrentPage(0);
    else setCurrentPage((p) => Math.max(0, Math.min(p, pages.length - 1)));
  }, [pages.length]);

  const BASE_CANVAS = 1920;
  const scale = isMobile
    ? Math.min(
        1,
        Math.max(
          0.5,
          ((containerWidth - 32) / MOBILE_CANVAS) * MOBILE_SCALE_BOOST
        )
      )
    : Math.max(0.5, Math.min(1, containerWidth / BASE_CANVAS));

  const pageBoxes = pages[currentPage] || [];

  const maxBottom = pageBoxes.length
    ? Math.max(
        ...pageBoxes.map(
          (b) =>
            b.top +
            (b.height ??
              (isMobile
                ? Math.round(
                    Math.min(
                      FIGMA_BOX_MOBILE.width,
                      Math.max(240, MOBILE_CANVAS - 48)
                    ) * 0.58
                  )
                : FIGMA_BOX.height))
        )
      )
    : START_TOP;

  const wrapperHeight = Math.round(maxBottom * scale + CAR_MARGIN_TOP);
  const containerMinHeight = Math.max(
    wrapperHeight,
    typeof window !== 'undefined' ? window.innerHeight : wrapperHeight
  );

  const handleAddNewCategory = () => {
    const name = newCategoryName.trim();
    if (!name) return;
    const updatedTitles = [...titles, name];
    setTitles(updatedTitles);
    setNewCategoryName('');
    setNewCategoryModalOpen(false);
    const total = updatedTitles.length + 1;
    const lastPageIndex = Math.max(0, Math.floor((total - 1) / itemsPerPage));
    setCurrentPage(lastPageIndex);
  };

  const goPrev = () => setCurrentPage((p) => Math.max(0, p - 1));
  const goNext = () =>
    setCurrentPage((p) => Math.min(p + 1, Math.max(0, pages.length - 1)));

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        bgcolor: theme === 'dark' ? '#000' : '#fff',
        overflowX: 'hidden',
        py: 2,
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: `${BASE_CANVAS}px`,
          position: 'relative',
          minHeight: `${containerMinHeight}px`,
          mx: 'auto'
        }}
      >
        <Box
          ref={containerRef}
          sx={{
            position: 'relative',
            width: '100%',
            height: `${wrapperHeight}px`,
            overflow: 'visible',
            mx: 'auto'
          }}
        >
          {isMobile ? (
            <Box
              sx={{
                position: 'absolute',
                top: `${Math.round(20 * scale)}px`,
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: `${Math.round(32 * scale)}px`,
                fontWeight: 800,
                whiteSpace: 'nowrap',
                zIndex: 5
              }}
            >
              گاراژ من
            </Box>
          ) : (
            <Box
              sx={{
                position: 'absolute',
                top: `${Math.round(40 * scale)}px`,
                left: `${Math.round(1600 * scale)}px`,
                fontSize: `${Math.round(58 * scale)}px`,
                fontWeight: 800,
                zIndex: 5
              }}
            >
              گاراژ من
            </Box>
          )}

          {pageBoxes.map((b) => {
            const left = Math.round(b.left * scale);
            const top = Math.round(b.top * scale);
            const width = Math.round(
              (b.width ??
                (isMobile
                  ? Math.min(
                      FIGMA_BOX_MOBILE.width,
                      Math.max(240, MOBILE_CANVAS - 48)
                    )
                  : FIGMA_BOX.width)) * scale
            );
            const height = Math.round(
              (b.height ??
                (isMobile
                  ? Math.round(
                      Math.min(
                        FIGMA_BOX_MOBILE.width,
                        Math.max(240, MOBILE_CANVAS - 48)
                      ) * 0.58
                    )
                  : FIGMA_BOX.height)) * scale
            );
            return (
              <Box
                key={b.id}
                sx={{
                  position: 'absolute',
                  left,
                  top,
                  width,
                  height,
                  cursor: b.isNew ? 'default' : 'pointer'
                }}
              >
                {b.isNew ? (
                  <NewCategory
                    onClick={() => setNewCategoryModalOpen(true)}
                    mobile={isMobile}
                  />
                ) : (
                  <CategoryBox
                    title={b.title}
                    cars={b.cars}
                    id={b.id}
                    mobile={isMobile}
                  />
                )}
              </Box>
            );
          })}
        </Box>

        <Box
          component="img"
          src={
            theme === 'dark' ? '/garageDarkBack.png' : '/garageLightback.png'
          }
          className={
            theme === 'dark' ? 'car-dark-animation' : 'car-light-animation'
          }
          sx={{
            display: 'block',
            width: '100%',
            maxWidth: `${Math.round(1920 * scale)}px`,
            mt: isMobile ? -10 : -40
          }}
        />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
            mt: 2
          }}
        >
          <IconButton
            onClick={goPrev}
            disabled={currentPage === 0}
            aria-label="قبلی"
          >
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
          <IconButton
            onClick={goNext}
            disabled={currentPage >= Math.max(0, pages.length - 1)}
            aria-label="بعدی"
          >
            <ArrowBackIosNewIcon />
          </IconButton>
        </Box>

        {newCategoryModalOpen && (
          <Box
            sx={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: '#fff',
              p: isMobile ? 2 : 3,
              borderRadius: isMobile ? 2 : 3,
              boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
              width: isMobile ? '90vw' : 420,
              maxWidth: 420,
              minHeight: isMobile ? 150 : 180,
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? 2 : 2.5,
              zIndex: 2000
            }}
          >
            <TextField
              placeholder="نام دسته"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              size={isMobile ? 'small' : 'medium'}
              fullWidth
              inputProps={{ style: { fontSize: isMobile ? 14 : 16 } }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
              <Box
                component="button"
                onClick={() => {
                  setNewCategoryModalOpen(false);
                  setNewCategoryName('');
                }}
                sx={{ cursor: 'pointer' }}
              >
                لغو
              </Box>
              <Box
                component="button"
                onClick={handleAddNewCategory}
                sx={{ cursor: 'pointer' }}
              >
                اضافه کردن
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
