'use client';

import { IconButton, Box, MenuItem, Menu } from '@mui/material';
import { BiSortDown } from 'react-icons/bi';
import CloseIcon from '@mui/icons-material/Close';
import { selectMenuStyles } from '../constants/Styles';

const FilterButton = ({
  isOpen,
  anchorRef,
  handleToggle,
  handleSelect,
  handleClose
}) => (
  <Box
    sx={{
      position: 'relative',
      display: { laptop: 'inline-block', xs: 'none' }
    }}
  >
    <IconButton
      ref={anchorRef}
      onClick={handleToggle}
      sx={{
        width: 75,
        height: 75,
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 4px 0px #00000040',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': { backgroundColor: '#ffffff' }
      }}
    >
      <Box
        sx={{
          width: 55,
          height: 55,
          borderRadius: '50%',
          backgroundColor: '#405FF2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease-in-out',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
        }}
      >
        {isOpen ? (
          <CloseIcon sx={{ fontSize: 35, color: '#fff' }} />
        ) : (
          <BiSortDown size={35} color="#fff" />
        )}
      </Box>
    </IconButton>

    <Menu
      anchorEl={anchorRef.current}
      open={isOpen}
      onClose={handleClose}
      {...selectMenuStyles}
    >
      <MenuItem onClick={() => handleSelect('پرفروش')}>پرفروش</MenuItem>
      <MenuItem onClick={() => handleSelect('الفبا (A-Z)')}>
        الفبا (A-Z)
      </MenuItem>
      <MenuItem onClick={() => handleSelect('جدیدترین')}>جدیدترین</MenuItem>
    </Menu>
  </Box>
);

export default FilterButton;
