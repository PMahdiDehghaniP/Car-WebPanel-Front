'use client';

import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import EventBox from '../../components/EventBox';
import { useSelector } from 'react-redux';
import EventPostCard from '../../components/EventPostCard';
import MedalsBox from '../../components/MedalsBox';
import EventTopRanking from '../../components/EventTopRanking';

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
  const resolved = React.use(params); // ← فقط اگر Next 15 مجبور کند، فعلاً لازم نیست
  const id = resolved.id;

  const isMobile = useMediaQuery("(max-width:900px)");
  const { theme } = useSelector((state) => state.theme || { theme: 'light' });

  const sample = {
    image: '/GreenEvent.jpg',
    caption: 'ماشین بن تن باشه',
    likes: 233,
    avatars: ['/avatar1.jpg']
  };

  return (
    <Box>
      <EventBox isMobile={isMobile} isParticularPage={true} />
      <EventPostCard initialPost={sample} />
      <MedalsBox />
      <EventTopRanking topThree={topThree} others={others} />
    </Box>
  );
}
