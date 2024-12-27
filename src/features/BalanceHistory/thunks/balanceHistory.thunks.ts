import { createAsyncThunk } from '@reduxjs/toolkit';
import { BalanceHistoryData } from '../types';
import axiosInstance from '@/services/axios';

export const fetchBalanceHistory = createAsyncThunk<BalanceHistoryData[]>(
  'balanceHistory/fetchBalanceHistory',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/balance-history');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || 'Failed to fetch balance history'
      );
    }
  }
);
