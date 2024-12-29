import { createSlice } from '@reduxjs/toolkit';
import { WeeklyActivityState } from '../types';
import { fetchWeeklyActivity } from '../thunks';

const initialState: WeeklyActivityState = {
  isLoading: false,
  error: '',
  data: null,
};

export const weeklyActivitySlice = createSlice({
  name: 'weeklyActivity',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeeklyActivity.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchWeeklyActivity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.data = action.payload;
      })
      .addCase(fetchWeeklyActivity.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch weekly activity';
      });
  },
});

export default weeklyActivitySlice.reducer;
