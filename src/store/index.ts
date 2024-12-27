import { configureStore } from '@reduxjs/toolkit';
import myCardReducer from '@/features/MyCards/slice/mycard.slice';
import transactionReducer from '@/features/Transactions/slice/transaction.slice';
import weeklyActivityReducer from '@/features/WeeklyActivity/slice/weeklyActivity.slice';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    myCards: myCardReducer,
    transactions: transactionReducer,
    weeklyActivity: weeklyActivityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
