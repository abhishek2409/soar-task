import { createSlice } from '@reduxjs/toolkit';
import { fetchMyExpenses } from '../thunks';
import { ExpenseStatsState } from '../types';

const initialState: ExpenseStatsState = {
  isLoading: false,
  error: '',
  data: null,
};

const expenseStatsSlice = createSlice({
  name: 'expenseStats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyExpenses.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchMyExpenses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.data = action.payload;
      })
      .addCase(fetchMyExpenses.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.error.message || 'Failed to fetch expense statistics';
      });
  },
});

export default expenseStatsSlice.reducer;
