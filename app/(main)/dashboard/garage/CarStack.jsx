import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Box } from '@mui/material';
import CarCard from '@/app/components/Home/CarSlider/CarCard';

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

function useContainerSize(ref) {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    if (!ref.current) return undefined;
    const el = ref.current;
    const ro = new ResizeObserver(entries => {
      for (const entry of entries) {
        const cr = entry.contentRect;
        setSize({ width: Math.round(cr.width), height: Math.round(cr.height) });
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref]);
  return size;
}

const DEFAULTS = {
  baseTotalWidth: 700,
  centerW: 250,
  centerH: 350,
  sideW: 190,
  sideH: 300,
  backW: 140,
  backH: 210,
  sideOffset: 56,
  backOffset: 110,
  sideOpacity: 0.6,
  backOpacity: 0.45,

  globalScale: 0.8,
  minScale: 0.28,
  maxScale: 1,

  compactBreakpoint: 480,
  compactMultiplier: 0.8,

  centerVisualScaleMultiplier: 0.75,
  sideVisualScaleMultiplier: 0.85,
  backVisualScaleMultiplier: 0.7,

  offsetMultiplier: 1.2,
  verticalOffsetPercent: 0.12
};

export function CardStack({ cards = [], base = {}, className = '' }) {
  const ref = useRef(null);
  const { width: containerWidth, height: containerHeight } = useContainerSize(ref);

  const cfg = useMemo(() => ({ ...DEFAULTS, ...base }), [base]);
  const scale = useMemo(() => {
    if (!containerWidth || !containerHeight) return cfg.globalScale;

    const scaleByWidth = containerWidth / cfg.baseTotalWidth;
    const approxBaseHeight = cfg.centerH + 60;
    const scaleByHeight = containerHeight / approxBaseHeight;

    const responsiveFactor = containerWidth < cfg.compactBreakpoint
      ? clamp(containerWidth / cfg.compactBreakpoint, 0.45, 1) * cfg.compactMultiplier
      : 1.05;

    const raw = Math.min(scaleByWidth, scaleByHeight) * cfg.globalScale * responsiveFactor;
    const damped = Math.pow(raw, 0.95);
    return clamp(damped, cfg.minScale, cfg.maxScale);
  }, [containerWidth, containerHeight, cfg]);

  const sizes = useMemo(() => {
    const centerW = Math.round(cfg.centerW * scale);
    const centerH = Math.round(cfg.centerH * scale);
    const sideW = Math.round(cfg.sideW * scale);
    const sideH = Math.round(cfg.sideH * scale);
    const backW = Math.round(cfg.backW * scale);
    const backH = Math.round(cfg.backH * scale);

    const visualBoost = containerWidth >= 1200 ? 1.22 : (containerWidth >= 992 ? 1.12 : (containerWidth >= 768 ? 1.06 : 1));
    const spacingBoostBase = visualBoost > 1 ? (1 + (visualBoost - 1) * 0.85) : 1;

    const compactSpacing = containerWidth < 480 ? 2.2 : (containerWidth < 640 ? 1.20 : 1);
    const mobileSpacingExtra = containerWidth < 360 ? 1.06 : 1;
    const spacingBoost = spacingBoostBase * compactSpacing * mobileSpacingExtra;

    const sideOffset = Math.round(cfg.sideOffset * scale * cfg.offsetMultiplier * spacingBoost);
    const backOffset = Math.round(cfg.backOffset * scale * cfg.offsetMultiplier * spacingBoost);

    const centerVisualScale = clamp(scale * cfg.centerVisualScaleMultiplier * visualBoost, 0.22, 1.15);
    const sideVisualScale = clamp(centerVisualScale * cfg.sideVisualScaleMultiplier, 0.16, 1.15);
    const backVisualScale = clamp(centerVisualScale * cfg.backVisualScaleMultiplier, 0.12, 1.15);

    const centerVisW = Math.round(centerW * centerVisualScale);
    const centerVisH = Math.round(centerH * centerVisualScale);
    const sideVisW = Math.round(sideW * sideVisualScale);
    const sideVisH = Math.round(sideH * sideVisualScale);
    const backVisW = Math.round(backW * backVisualScale);
    const backVisH = Math.round(backH * backVisualScale);

    const responsiveVerticalOffsetPercent = containerWidth < 480
      ? 0.42
      : (containerWidth < 768 ? 0.32 : (containerWidth < 992 ? 0.20 : cfg.verticalOffsetPercent));

    const leftCenter = containerWidth ? Math.round(containerWidth / 2 - centerVisW / 2) : null;
    const topCenter = containerHeight
      ? Math.round(containerHeight / 2 - centerVisH / 2) - Math.round(containerHeight * responsiveVerticalOffsetPercent)
      : null;

    const leftSide = leftCenter != null ? leftCenter - sideOffset : null;
    const leftRight = leftCenter != null ? Math.round(leftCenter + centerVisW + sideOffset - sideVisW) : null;
    const leftBackLeft = leftCenter != null ? leftCenter - backOffset : null;
    const leftBackRight = leftCenter != null ? Math.round(leftCenter + centerVisW + backOffset - backVisW) : null;

    const sideTop = topCenter != null ? topCenter + Math.round(centerVisH * 0.06) : null;
    const backTop = topCenter != null ? topCenter + Math.round(centerVisH * 0.14) : null;

    return {
      centerW, centerH, sideW, sideH, backW, backH,
      centerVisW, centerVisH, sideVisW, sideVisH, backVisW, backVisH,
      leftCenter, topCenter, leftSide, leftRight, leftBackLeft, leftBackRight,
      sideTop, backTop,
      sideOpacity: cfg.sideOpacity,
      backOpacity: cfg.backOpacity,
      centerVisualScale, sideVisualScale, backVisualScale
    };
  }, [cfg, scale, containerWidth, containerHeight]);
  const all = useMemo(() => {
    const d = [
      { image: '/forgotPasswordImage.png', name: 'Car 1', desc: '', info: {}, price: '' },
      { image: '/forgotPasswordImage.png', name: 'Car 2', desc: '', info: {}, price: '' },
      { image: '/forgotPasswordImage.png', name: 'Car 3', desc: '', info: {}, price: '' },
      { image: '/forgotPasswordImage.png', name: 'Car 4', desc: '', info: {}, price: '' },
      { image: '/forgotPasswordImage.png', name: 'Car 5', desc: '', info: {}, price: '' }
    ];
    return Array.from({ length: 5 }).map((_, i) => (cards && cards[i] ? cards[i] : d[i]));
  }, [cards]);
  const positions = useMemo(() => {
    return [
      {
        index: 0,
        left: sizes.leftBackLeft,
        top: sizes.backTop,
        width: sizes.backW,
        height: sizes.backH,
        zIndex: 3,
        opacity: sizes.backOpacity,
        scale: sizes.backVisualScale,
        pointerEvents: 'none'
      },
      {
        index: 1,
        left: sizes.leftSide,
        top: sizes.sideTop,
        width: sizes.sideW,
        height: sizes.sideH,
        zIndex: 4,
        opacity: sizes.sideOpacity,
        scale: sizes.sideVisualScale,
        pointerEvents: 'none'
      },
      {
        index: 2,
        left: sizes.leftCenter,
        top: sizes.topCenter,
        width: sizes.centerW,
        height: sizes.centerH,
        zIndex: 5,
        opacity: 1,
        scale: sizes.centerVisualScale,
        pointerEvents: 'auto'
      },
      {
        index: 3,
        left: sizes.leftRight,
        top: sizes.sideTop,
        width: sizes.sideW,
        height: sizes.sideH,
        zIndex: 4,
        opacity: sizes.sideOpacity,
        scale: sizes.sideVisualScale,
        pointerEvents: 'none'
      },
      {
        index: 4,
        left: sizes.leftBackRight,
        top: sizes.backTop,
        width: sizes.backW,
        height: sizes.backH,
        zIndex: 3,
        opacity: sizes.backOpacity,
        scale: sizes.backVisualScale,
        pointerEvents: 'none'
      }
    ];
  }, [sizes]);

  return (
    <Box
      ref={ref}
      className={className}
      sx={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}
    >
      {positions.map(pos => (
        <Box
          key={pos.index}
          sx={{
            position: 'absolute',
            left: pos.left != null ? `${pos.left}px` : '50%',
            top: pos.top != null ? `${pos.top}px` : '50%',
            width: pos.width,
            height: pos.height,
            zIndex: pos.zIndex,
            opacity: pos.opacity,
            transform: `scale(${pos.scale})`,
            transformOrigin: 'center center',
            pointerEvents: pos.pointerEvents,
            transition: 'transform .18s ease, opacity .18s ease'
          }}
        >
          <CarCard
            imageSrc={all[pos.index].image}
            imageAlt={all[pos.index].name}
            carName={all[pos.index].name}
            description={all[pos.index].desc}
            carInformation={all[pos.index].info}
            price={all[pos.index].price}
            maxWidth={pos.width}
            maxHeight={pos.height}
          />
        </Box>
      ))}
    </Box>
  );
}

export default CardStack;
