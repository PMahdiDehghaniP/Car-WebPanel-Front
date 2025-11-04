import { createSlice } from '@reduxjs/toolkit';
const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light'
  },
  reducers: {
    setMuiTheme: (state, action) => {
      state.theme = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    }
  }
});
export const themeReducer = themeSlice.reducer;
export const { setMuiTheme, toggleTheme } = themeSlice.actions;
