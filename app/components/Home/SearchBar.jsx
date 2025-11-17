import { useState } from 'react';
import { Box, MenuItem, Slider, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { NoBorderSelect, StyledInputBase } from './Styled/StyledMuiComponents';
import { selectMenuStyles } from '@/app/constants/Styles';

const SearchBar = () => {
  const [formValues, setFormValues] = useState({
    carModel: '',
    priceRange: [10, 100],
    carBrand: '',
    entryDate: ''
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleSearchFocus = () => {
    setIsSearchOpen(true);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
    setSearchText('');
  };

  const handleChange = (field) => (event) => {
    setFormValues({
      ...formValues,
      [field]: event.target.value
    });
  };

  const handlePriceChange = (event, newValue) => {
    setFormValues({
      ...formValues,
      priceRange: newValue
    });
  };

  return (
    <Box
      sx={{
        borderRadius: '5rem',
        backgroundColor: '#FFFFFF',
        display: { laptop: 'flex', xs: 'none' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.5rem',
        width: { lg: '70%', laptop: '90%' },
        padding: '0.5rem',
        overflow: 'hidden',
        zIndex: 999,
        minHeight: '80px',
        boxShadow: '0px 2px 4px 0px #00000040;'
      }}
    >
      <Box
        sx={{
          position: 'relative',
          flex: isSearchOpen ? 1 : 'auto',
          height: '90%'
        }}
      >
        <StyledInputBase
          placeholder="جستجو..."
          isopen={isSearchOpen}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={handleSearchFocus}
          onBlur={handleSearchClose}
        />
        {isSearchOpen && (
          <IconButton
            onClick={handleSearchClose}
            sx={{
              position: 'absolute',
              height: '56px',
              width: '56px',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#fff',
              padding: '4px',
              zIndex: 1,
              backgroundColor: '#405FF2',
              '&:hover': {
                backgroundColor: '#405FF2'
              }
            }}
          >
            <Close sx={{ fontSize: 36 }} />
          </IconButton>
        )}
      </Box>

      <NoBorderSelect
        value={formValues.priceRange}
        displayEmpty
        MenuProps={{ ...selectMenuStyles }}
        sx={{ color: '#050B20', display: isSearchOpen ? 'none' : 'flex' }}
        renderValue={() => 'بازه قیمت'}
      >
        <div
          style={{
            width: '90%',
            height: '100px',
            padding: '0 10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Slider
            value={formValues.priceRange}
            onChange={handlePriceChange}
            sx={{ marginRight: '2rem' }}
            min={0}
            max={100}
          />
          <div style={{ fontSize: 12, marginTop: 4 }}>
            {formValues.priceRange[1]} - {formValues.priceRange[0]}
          </div>
        </div>
      </NoBorderSelect>

      <NoBorderSelect
        value={formValues.entryDate}
        onChange={handleChange('entryDate')}
        displayEmpty
        MenuProps={{ ...selectMenuStyles }}
        sx={{ color: '#050B20', display: isSearchOpen ? 'none' : 'flex' }}
        renderValue={(selected) => selected || 'تاریخ ورود به بازار'}
      >
        <MenuItem value="">همه تاریخ‌ها</MenuItem>
        <MenuItem value="2023">۲۰۲۳</MenuItem>
        <MenuItem value="2022">۲۰۲۲</MenuItem>
        <MenuItem value="2021">۲۰۲۱</MenuItem>
      </NoBorderSelect>

      <NoBorderSelect
        value={formValues.carModel}
        onChange={handleChange('carModel')}
        displayEmpty
        MenuProps={{ ...selectMenuStyles }}
        sx={{ color: '#050B20', display: isSearchOpen ? 'none' : 'flex' }}
        renderValue={(selected) => selected || 'مدل خودرو'}
      >
        <MenuItem value="">همه مدل‌ها</MenuItem>
        <MenuItem value="model1">مدل ۱</MenuItem>
        <MenuItem value="model2">مدل ۲</MenuItem>
        <MenuItem value="model3">مدل ۳</MenuItem>
      </NoBorderSelect>

      <NoBorderSelect
        value={formValues.carBrand}
        onChange={handleChange('carBrand')}
        displayEmpty
        sx={{ color: '#050B20', display: isSearchOpen ? 'none' : 'flex' }}
        MenuProps={{ ...selectMenuStyles }}
        renderValue={(selected) => selected || 'برند خودرو'}
      >
        <MenuItem value="">همه برندها</MenuItem>
        <MenuItem value="brand1">برند ۱</MenuItem>
        <MenuItem value="brand2">برند ۲</MenuItem>
        <MenuItem value="brand3">برند ۳</MenuItem>
      </NoBorderSelect>
    </Box>
  );
};

export default SearchBar;
