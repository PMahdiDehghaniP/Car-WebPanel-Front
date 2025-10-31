import { InputBase, Select, styled } from '@mui/material';

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  borderRadius: '5rem',
  backgroundColor: '#405FF2',
  color: '#fff',
  width: '40%',
  transition: 'all 0.8s ease-in-out',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.2, 2, 1.2, 0),
    borderRadius: '5rem',
    '&::placeholder': {
      color: '#fff',
      opacity: 0.8
    }
  },
  '&:focus-within': {
    width: '100%',
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
