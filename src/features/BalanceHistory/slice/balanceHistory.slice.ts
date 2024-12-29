import { createSlice } from '@reduxjs/toolkit';
import { BalanceHistoryState } from '../types';
import { fetchBalanceHistory } from '../thunks';

const initialState: BalanceHistoryState = {
  isLoading: false,
  error: '',
  data: null,
};

const balanceHistorySlice = createSlice({
  name: 'balanceHistory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBalanceHistory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBalanceHistory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchBalanceHistory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default balanceHistorySlice.reducer;
