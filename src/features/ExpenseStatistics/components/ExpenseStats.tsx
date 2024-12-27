import SectionTitle from '@/components/SectionTitle';
import { RootState, useAppDispatch } from '@/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Loader, { LoaderType } from '@/components/Loader';
import { fetchMyExpenses } from '../thunks';
import ExpenseStatsPieChart from './ExpenseStatsPieChart';

export const ExpenseStats = () => {
  const { data, isLoading } = useSelector(
    (state: RootState) => state.expenseStats
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!data) dispatch(fetchMyExpenses());
  }, []);
  return (
    <div className="flex flex-col w-full  gap-y-5 h-full">
      <SectionTitle title="Expense Statistics" />
      {isLoading && <Loader type={LoaderType.LIST_SHIMMER} />}

      {!!data?.length && !isLoading && (
        <div className="flex flex-col bg-white rounded-units-unit-25  p-units-unit-26 gap-y-units-unit-10  grow justify-center items-center">
          <ExpenseStatsPieChart data={data} />
        </div>
      )}
    </div>
  );
};
