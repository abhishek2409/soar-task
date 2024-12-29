import { createSlice } from '@reduxjs/toolkit';
import { ProfileState } from '../types';
import { fetchProfile, updateProfile } from '../thunks';

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
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(updateProfile.fulfilled, (state) => {
        state.isLoading = false;
        state.error = '';
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to update profile';
      });
  },
});

export default profileSlice.reducer;
