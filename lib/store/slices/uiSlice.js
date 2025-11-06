import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuOpen: false,
  isSearchOpen: false,
  activeItem: 'خانه',
  isDrawerOpen: false
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
    closeMenu: (state) => {
      state.menuOpen = false;
    },
    toggleSearch: (state) => {
      state.isSearchOpen = !state.isSearchOpen;
    },
    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
    },
    setIsDrawerOpen: (state, action) => {
      state.isDrawerOpen = action.payload;
    }
  }
});

export const {
  toggleMenu,
  closeMenu,
  toggleSearch,
  setActiveItem,
  setIsDrawerOpen
} = uiSlice.actions;

export default uiSlice.reducer;
