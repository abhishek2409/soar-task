import { createSlice } from '@reduxjs/toolkit';
import { ProfileState } from '../types';
import { fetchProfile } from '../thunks';

const initialState: ProfileState = {
  isLoading: false,
  error: '',
  data: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.data = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch profile';
        state.data = null;
      });
  },
});

export default profileSlice.reducer;
