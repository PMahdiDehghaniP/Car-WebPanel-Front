import { createSlice } from '@reduxjs/toolkit';
const systemSettingSlice = createSlice({
  name: 'systemSetting',
  initialState: {
    direction: 'rtl'
  },
  reducers: {
    setDirection: (state, action) => {
      state.direction = action.payload;
    }
  }
});
export const systemSettingReducer = systemSettingSlice.reducer;
export const { setDirection } = systemSettingSlice.actions;

