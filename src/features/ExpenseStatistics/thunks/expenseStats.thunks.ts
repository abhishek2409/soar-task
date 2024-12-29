import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/services/axios';
import { ExpenseStatsData } from '../types';

export const fetchMyExpenses = createAsyncThunk<ExpenseStatsData[]>(
  'expenseStats/fetchMyExpenses',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/expense-stats');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || 'Failed to fetch expense statistics'
      );
    }
  }
);
