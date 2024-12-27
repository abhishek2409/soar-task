import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/services/axios';
import { WeeklyActivityData } from '../types';

export const fetchWeeklyActivity = createAsyncThunk<WeeklyActivityData[]>(
  'weeklyActivity/fetchWeeklyActivity',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/weekly-activity');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || 'Failed to fetch weekly activity'
      );
    }
  }
);
