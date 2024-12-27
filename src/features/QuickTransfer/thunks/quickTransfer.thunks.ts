import axiosInstance from '@/services/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBeneficiaryList = createAsyncThunk(
  'quickTransfer/fetchBeneficiaryList',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/beneficiaries');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || 'Failed to fetch beneficiaries'
      );
    }
  }
);
