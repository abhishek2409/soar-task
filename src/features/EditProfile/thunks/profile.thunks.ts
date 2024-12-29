import axiosInstance from '@/services/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Profile } from '../types';

export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/profile');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch profile');
    }
  }
);

export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async (payload: Profile, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put('/profile', payload);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || 'Failed to update profile'
      );
    }
  }
);
