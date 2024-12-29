import { createSlice } from '@reduxjs/toolkit';
import { TransactionState } from '../types';
import { fetchMyTransactions } from '../thunks/transaction.thunks';

const initialState: TransactionState = {
  isLoading: false,
  error: '',
  data: null,
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyTransactions.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchMyTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.data = action.payload;
      })
      .addCase(fetchMyTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch transaction';
      });
  },
});

export default transactionSlice.reducer;
