import { createSlice } from '@reduxjs/toolkit';
import { MyCardState } from '../types/mycard.types';
import { fetchMyCards } from '../thunks/mycards.thunks';

const initialState: MyCardState = {
  isLoading: false,
  error: '',
  data: [],
};

const myCardSlice = createSlice({
  name: 'myCards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyCards.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchMyCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.data = action.payload;
      })
      .addCase(fetchMyCards.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch cards';
      });
  },
});

export default myCardSlice.reducer;
