import { createSlice } from '@reduxjs/toolkit';
import { fetchBeneficiaryList, sendMoney } from '../thunks';
import { QuickTransferState } from '../types';

const initialState: QuickTransferState = {
  isLoading: false,
  error: '',
  data: null,
};

const quickTransferSlice = createSlice({
  name: 'quickTransfer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBeneficiaryList.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchBeneficiaryList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.data = action.payload;
      })
      .addCase(fetchBeneficiaryList.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.error.message || 'Failed to fetch beneficiary list';
        state.data = null;
      })
      .addCase(sendMoney.pending, (state) => {
        state.sendMoneyLoading = true;
        state.sendMoneyError = '';
      })
      .addCase(sendMoney.fulfilled, (state, action) => {
        state.sendMoneyLoading = false;
        state.sendMoneyError = '';
        state.sendMoneyData = action.payload;
      })
      .addCase(sendMoney.rejected, (state, action) => {
        state.sendMoneyLoading = false;
        state.sendMoneyError = action.error.message || 'Failed to send money';
        state.sendMoneyData = null;
      });
  },
});

export default quickTransferSlice.reducer;
