import { createAsyncThunk } from '@reduxjs/toolkit';
import { CardData } from '../types/mycard.types';
import axiosInstance from '@/services/axios';

export const fetchMyCards = createAsyncThunk<CardData[]>(
  'myCards/fetchMyCards',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/cards');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch cards');
    }
  }
);
