'use client';

import React from 'react';
import { Box, Avatar, Typography, List, ListItem } from '@mui/material';
import { FaCrown } from 'react-icons/fa6';

const TopThreeItem = ({ item, position }) => {
  const isCenter = position === 'center';
  return (
    <Box sx={{ width: isCenter ? 140 : 100, textAlign: 'center', position: 'relative' }}>
      {isCenter && (
        <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%) translateY(-10px)', zIndex: 3 }}>
          <FaCrown size={25} color="#0b79ff" />
        </Box>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: isCenter ? 0.5 : 0 }}>
        <Avatar src={item.src} sx={{ width: isCenter ? 86 : 62, height: isCenter ? 86 : 62, boxShadow: isCenter ? '0 6px 18px rgba(11,121,255,0.12)' : 'none', border: '3px solid white' }} />
      </Box>
      <Typography sx={{ mt: 1, fontWeight: 800, fontSize: isCenter ? 15 : 13 }}>{item.name}</Typography>
      <Typography sx={{ fontSize: 13, color: '#666' }}>{item.likes} لایک</Typography>
    </Box>
  );
};

const TopThreeBox = ({ topThree = [] }) => {
  const left = topThree[1] || topThree[0] || {};
  const center = topThree[0] || {};
  const right = topThree[2] || topThree[1] || {};

  return (
    <Box sx={{ bgcolor: '#fff', borderRadius: 2, p: 2, boxShadow: '0 6px 18px rgba(0,0,0,0.04)', width: '100%' }}>
      <Typography sx={{ textAlign: 'center', fontWeight: 900, mb: 1.5 }}>جدول برترین‌ها</Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, alignItems: 'flex-end', position: 'relative' }}>
        <TopThreeItem item={left} position="left" />
        <TopThreeItem item={center} position="center" />
        <TopThreeItem item={right} position="right" />
      </Box>
    </Box>
  );
};
const RankRow = ({ row, highlight = false }) => {
  const bubbleBg = highlight ? '#fff' : '#f0f0f0';
  const bubbleColor = highlight ? '#1976d2' : '#666';

  return (
    <ListItem sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      bgcolor: highlight ? '#1976d2' : '#fff', 
      color: highlight ? '#fff' : 'inherit',
      borderRadius: 8,
      mb: 1.25,
      py: 1.25,
      px: 1.5,
      boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, minWidth: 0 }}>
        <Box sx={{ width: 30, height: 30, borderRadius: '50%', bgcolor: bubbleBg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: bubbleColor, fontWeight: 700, flexShrink: 0 }}>
          {row.rank}
        </Box>
        <Avatar src={row.src} sx={{ width: 36, height: 36, flexShrink: 0 }} />
        <Box sx={{ overflow: 'hidden', textAlign: 'right' }}>
          <Typography sx={{ fontWeight: 700, fontSize: 14, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{row.name}</Typography>
        </Box>
      </Box>
      {/* left side: likes */}
      <Typography sx={{ fontSize: 13, color: highlight ? '#fff' : '#666', fontWeight: 700 }}>{row.likes} لایک</Typography>
    </ListItem>
  );
};
const BottomList = ({ others = [] }) => {
  return (
    <Box sx={{ mt: 2, bgcolor: '#F1F5E8', borderRadius: 2, p: 1.5 }}>
      <List disablePadding>
        {others.map((r, idx) => (
          <RankRow key={r.rank ?? idx} row={r} highlight={r.highlight} />
        ))}
      </List>
    </Box>
  );
};
const EventTopRanking = ({ topThree = [], others = [] }) => {
  return (
    <Box  sx={{ width: '100%', minWidth: 280 , border : '1px solid #BEBEBE', borderRadius: 2 }}>
      <TopThreeBox topThree={topThree} />
      <BottomList others={others} />
    </Box>
  );
};
export default EventTopRanking;