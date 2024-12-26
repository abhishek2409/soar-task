import { configureStore } from '@reduxjs/toolkit';
import myCardReducer from '@/features/MyCards/slice/mycard.slice';
import { useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    myCards: myCardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppState = () => useSelector((state: RootState) => state);
export default store;
