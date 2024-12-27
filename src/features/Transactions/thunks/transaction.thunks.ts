import { createAsyncThunk } from '@reduxjs/toolkit';
import { TransactionData } from '../types/transaction.type';
import axiosInstance from '@/services/axios';

export const fetchMyTransactions = createAsyncThunk<TransactionData[]>(
  'transactions/fetchMyTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/transactions');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch cards');
    }
  }
);
