'use client';

import { Box, Button, styled, useTheme } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

// Styled cover container
const CoverContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 290,
  borderRadius: 5,
  overflow: 'hidden',
  backgroundColor: theme.palette.grey[200],
}));

// Custom button styled exactly per Figma
const ChangeCoverButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: 292 - 49.23, // 242.77px from top of viewport, but relative to cover → calc from bottom
  right: 40, // ~20px from right edge (1920 - 1680 - 189.53 ≈ 40.47)
  width: 189.53,
  height: 49.23,
  backgroundColor: '#7185E7',
  color: '#FFFFFF',
  borderRadius: 11.02,
  border: '1.10191px solid rgba(118, 101, 101, 0.4)',
  fontFamily: '"Vazirmatn", sans-serif',
  fontWeight: 700,
  fontSize: 19.83,
  lineHeight: '31px',
  textTransform: 'none', // MUI default is uppercase
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: '#5E6FD1',
    borderColor: 'rgba(118, 101, 101, 0.6)',
  },
  '&:active': {
    transform: 'scale(0.98)',
  },
}));

// Optional: Upload overlay (hidden until hover/focus)
const UploadOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.4)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  fontSize: '16px',
  opacity: 0,
  transition: 'opacity 0.2s',
  cursor: 'pointer',
  '&:hover': {
    opacity: 1,
  },
}));

interface ProfileCoverSectionProps {
  coverUrl?: string | null;
  onCoverChange?: (file: File) => void;
}

export function ProfileCoverSection({
  coverUrl = '/images/default-cover.jpg',
  onCoverChange,
}: ProfileCoverSectionProps) {
  const theme = useTheme();
  const [hover, setHover] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onCoverChange) {
      onCoverChange(file);
    }
  };

  return (
    <CoverContainer>
      {/* Cover Image */}
      {coverUrl ? (
        <Image
          src={coverUrl}
          alt="profile cover"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      ) : (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            bgcolor: '#E0E0E0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#757575',
            fontSize: '18px',
            fontFamily: 'Vazirmatn',
          }}
        >
          بدون تصویر کاور
        </Box>
      )}

      {/* Hidden file input */}
      <input
        type="file"
        accept="image/*"
        id="cover-upload"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      {/* Change Cover Button */}
      <ChangeCoverButton
        onClick={() => document.getElementById('cover-upload')?.click()}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        تغییر عکس کاور
      </ChangeCoverButton>

      {/* Optional: hover overlay (enhancement) */}
      {hover && (
        <UploadOverlay>
          کلیک کنید یا فایل را بکشید
        </UploadOverlay>
      )}
    </CoverContainer>
  );
}