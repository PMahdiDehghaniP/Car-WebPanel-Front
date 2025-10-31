import { InputBase, Select, styled } from '@mui/material';

export const StyledInputBase = styled(InputBase)(({ theme, isopen }) => ({
  borderRadius: '5rem',
  backgroundColor: '#405FF2',
  color: '#fff',
  width: isopen ? '90%' : '70%',
  transition: 'all 0.8s ease-in-out',
  position: 'relative',

  // responsive adjustments
  [theme.breakpoints.up('lg')]: {
    width: isopen ? '95%' : '80%'
  },
  [theme.breakpoints.down('md')]: {
    width: isopen ? '85%' : '40%'
  },

  '& .MuiInputBase-input': {
    padding: theme.spacing(4, 4, 4, 2),
    borderRadius: '5rem',
    textAlign: 'right',
    '&::placeholder': {
      color: '#fff',
      opacity: 0.8
    }
  },
  '&:focus-within': {
    backgroundColor: '#3048c5'
  }
}));
export const NoBorderSelect = styled(Select)({
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  },
  '& .MuiSelect-select': {
    padding: '8px 24px 8px 8px'
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  },
  '& .MuiOutlinedInput-root': {
    border: 'none',
    boxShadow: 'none'
  }
});
