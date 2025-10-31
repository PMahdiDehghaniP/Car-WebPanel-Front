import { Box, InputAdornment, MenuItem, Divider } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { NoBorderSelect, StyledInputBase } from './Styled/StyledMuiComponents';
import { selectMenuStyles } from '@/app/constants/Styles';

const SearchBar = () => {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box
      sx={{
        borderRadius: '5rem',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.5rem',
        width: '80%',
        padding: '0.5rem',
        overflow: 'hidden',
        transition: 'all 0.4s ease-in-out',
        zIndex: 999
      }}
    >
      <StyledInputBase
        placeholder="جستجو"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlined sx={{ color: '#fff' }} />
              </InputAdornment>
            )
          }
        }}
      />
      <Divider
        orientation="horizontal"
        sx={{ color: 'red', backgroundColor: 'red', fontSize: '20px' }}
      />
      <NoBorderSelect
        value={age}
        onChange={handleChange}
        displayEmpty
        MenuProps={{ ...selectMenuStyles }}
        sx={{ color: '#050B20' }}
      >
        <MenuItem value=""> تاریخ ورود به بازار</MenuItem>
        <MenuItem value={20}>بیست</MenuItem>
        <MenuItem value={30}>سی</MenuItem>
      </NoBorderSelect>
      <NoBorderSelect
        value={age}
        onChange={handleChange}
        displayEmpty
        MenuProps={{ ...selectMenuStyles }}
        sx={{ color: '#050B20' }}
      >
        <MenuItem value=""> مدل خودرو</MenuItem>
        <MenuItem value={10}> </MenuItem>
        <MenuItem value={20}>بیست</MenuItem>
        <MenuItem value={30}>سی</MenuItem>
      </NoBorderSelect>
      <NoBorderSelect
        value={age}
        onChange={handleChange}
        displayEmpty
        sx={{ color: '#050B20' }}
        MenuProps={{ ...selectMenuStyles }}
      >
        <MenuItem value=""> برند خودرو </MenuItem>
        <MenuItem value={10}> </MenuItem>
        <MenuItem value={20}>بیست</MenuItem>
        <MenuItem value={30}>سی</MenuItem>
      </NoBorderSelect>
    </Box>
  );
};

export default SearchBar;
