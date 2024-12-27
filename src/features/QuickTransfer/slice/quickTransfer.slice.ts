import { createSlice } from '@reduxjs/toolkit';
import { fetchBeneficiaryList } from '../thunks';
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
      });
  },
});

export default quickTransferSlice.reducer;
