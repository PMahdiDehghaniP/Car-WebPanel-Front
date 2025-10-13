import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isDrawerOpen: false
  },
  reducers: {
    setIsDrawerOpen: (state, action) => {
      state.isDrawerOpen = action.payload;
    }
  }
});
export const sidebarReducer = sidebarSlice.reducer;
export const { setIsDrawerOpen } = sidebarSlice.actions;

