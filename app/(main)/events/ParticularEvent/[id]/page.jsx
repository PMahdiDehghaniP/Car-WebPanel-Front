// app/(main)/events/ParticularEvent/page.jsx
'use client';

import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import EventBox from '../../components/EventBox';
import { useSelector } from 'react-redux';
import EventPostCard from '../../components/EventPostCard';
import MedalsBox from '../../components/MedalsBox';
import EventTopRanking from '../../components/EventTopRanking';
import SharedEventPostCard from '../../components/SharedEventPostCard';

const topThree = [
  { src: '/avatar-1.jpg', name: 'Bryan Wolf', likes: 35 },
  { src: '/avatar-2.jpg', name: 'Meghan Jess', likes: 35 },
  { src: '/avatar-3.jpg', name: 'Alex Turner', likes: 35 }
];

const others = [
  { rank: 4, src: '/avatar-4.jpg', name: 'Becky Bartell', likes: 35 },
  { rank: 5, src: '/avatar-5.jpg', name: 'Juanita Cormier', likes: 35 },
  { rank: 6, src: '/avatar-6.jpg', name: 'شما', likes: 35, highlight: true },
  { rank: 7, src: '/avatar-7.jpg', name: 'Tamara Schmidt', likes: 35 },
  { rank: 8, src: '/avatar-8.jpg', name: 'Ricardo Veum', likes: 35 },
  { rank: 9, src: '/avatar-9.jpg', name: 'Gary Sanford', likes: 35 },
  { rank: 10, src: '/avatar-10.jpg', name: 'Becky Bartell', likes: 35 }
];

export default function Page({ params }) {
  const { id } = params;
  const isMobile = useMediaQuery('(max-width:900px)');
  const { theme } = useSelector((state) => state.theme || { theme: 'light' });
  const sample = {
    image: '/GreenEvent.jpg',
    caption: 'ماشین بن تن باشه',
    likes: 233,
    avatars: ['/avatar1.jpg']
  };

  const rootRef = useRef(null);
  const [bgTopPx, setBgTopPx] = useState(null);
  const placementFactor = isMobile ? 0.62 : 0.7; 

  const computeBgTop = () => {
    const el = rootRef.current;
    if (!el) return;
    const totalHeight = Math.max(el.scrollHeight, el.offsetHeight, window.innerHeight);
    const topPx = Math.round(totalHeight * placementFactor);
    const clamped = Math.max(100, Math.min(topPx, totalHeight - 50));
    setBgTopPx(clamped);
  };

  useLayoutEffect(() => {
    computeBgTop();
    const onResize = () => computeBgTop();
    window.addEventListener('resize', onResize);
    const roTarget = rootRef.current;
    let mo;
    if (roTarget && typeof MutationObserver !== 'undefined') {
      mo = new MutationObserver(() => {
        window.requestAnimationFrame(computeBgTop);
      });
      mo.observe(roTarget, { childList: true, subtree: true, characterData: true });
    }

    return () => {
      window.removeEventListener('resize', onResize);
      if (mo) mo.disconnect();
    };
  }, [isMobile]);

  useEffect(() => {
    computeBgTop();
  }, []);

  return (
    <Box ref={rootRef} sx={{ position: 'relative', p: 2, boxSizing: 'border-box', gap: 5 }}>
      {bgTopPx !== null && (
        <Box
          component="img"
          src="/particularBackGround.png"
          alt=""
          sx={{
            position: 'absolute',
            left: '50%',
            top: `${bgTopPx}px`,
            transform: 'translate(-50%, -50%)',
            width: '100vw',
            height: 'auto',
            objectFit: 'cover',
            zIndex: 0, 
            pointerEvents: 'none',
            opacity: 0.12,
            userSelect: 'none',
          }}
        />
      )}

      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <EventBox isMobile={isMobile} isParticularPage={true} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: 10,
            alignItems: 'stretch',
            mt: 2,
            minHeight: isMobile ? 'auto' : '80vh'
          }}
        >
          <Box
            sx={{
              flex: '0 0 50%',
              width: '50%',
              minWidth: 280,
              display: 'flex',
              flexDirection: 'column',
              p: 2,
              justifyContent: 'flex-start',
              alignItems: 'flex-start'
            }}
          >
            <Box sx={{ width: '100%', mb: 2, mr: 4 }}>
              <Box sx={{ fontWeight: 800, fontSize: 24 }}>پست‌های ارسالی</Box>
            </Box>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                pt: 4
              }}
            >
              <Box sx={{ width: '100%', maxWidth: 760, display: 'flex', justifyContent: 'center' }}>
                <SharedEventPostCard
                  avatar="/sample-avatar-1.jpg"
                  username="کاربر ویژه"
                  caption="این پست داخل باکسِ پست‌های ارسالی قرار دارد. کارت افقی وسط قرار دارد و از بالای باکس شروع می‌شود."
                  image="/sample-post-1.jpg"
                  createdAt={Date.now() - 1000 * 60 * 60}
                  initialLikes={128}
                  maxWidth="92%"
                  fullHeight={false}
                  imageHeight={320}
                />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              flex: '1 1 50%',
              width: '65%',
              minWidth: 320,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 5,
              p: 2,
              mt: 14
            }}
          >
            <Box sx={{ width: '100%' }}>
              <EventPostCard initialPost={sample} />
            </Box>
            <Box sx={{ width: '100%', overflowY: 'auto' }}>
              <EventTopRanking topThree={topThree} others={others} />
            </Box>
            <Box sx={{ width: '100%' }}>
              <MedalsBox />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}