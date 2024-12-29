import axiosInstance from '@/services/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { SendMoneyPayload } from '../types';

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

export const sendMoney = createAsyncThunk(
  'quickTransfer/sendMoney',
  async (payload: SendMoneyPayload, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/quick-transfer', payload);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to send money');
    }
  }
);
