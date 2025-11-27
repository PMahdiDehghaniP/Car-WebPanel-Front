'use client';
import React from 'react';
import { Box, TextField } from '@mui/material';

export default function NewCategoryModal({ open, onClose, name, setName, onAdd, isMobile }) {
  if (!open) return null;
  return (
    <Box sx={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: '#fff', p: isMobile ? 2 : 3, borderRadius: isMobile ? 2 : 3, boxShadow: '0 15px 35px rgba(0,0,0,0.15)', width: isMobile ? '90vw' : 420, maxWidth: 420, minHeight: isMobile ? 150 : 180, display: 'flex', flexDirection: 'column', gap: isMobile ? 2 : 2.5, zIndex: 2000 }}>
      <TextField placeholder="نام دسته" value={name} onChange={(e) => setName(e.target.value)} size={isMobile ? 'small' : 'medium'} fullWidth inputProps={{ style: { fontSize: isMobile ? 14 : 16 } }} />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
        <Box component="button" onClick={onClose} sx={{ cursor: 'pointer' }}>لغو</Box>
        <Box component="button" onClick={onAdd} sx={{ cursor: 'pointer' }}>اضافه کردن</Box>
      </Box>
    </Box>
  );
}