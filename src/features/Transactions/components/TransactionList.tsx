import SectionTitle from '@/components/SectionTitle';
import { RootState, useAppDispatch } from '@/store';
import { useEffect } from 'react';
import { fetchMyTransactions } from '../thunks/transaction.thunks';
import { useSelector } from 'react-redux';
import Loader, { LoaderType } from '@/components/Loader';
import TransactionListItem from './TransactionListItem';

export const TransactionList = () => {
  const { data, isLoading } = useSelector(
    (state: RootState) => state.transactions
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!data) dispatch(fetchMyTransactions());
  }, []);
  return (
    <div className="flex flex-col w-full  gap-y-5 h-full">
      <SectionTitle title="Recent Transaction" />
      {isLoading && <Loader type={LoaderType.LIST_SHIMMER} />}

      {!!data?.length && !isLoading && (
        <div className="flex flex-col bg-white rounded-units-unit-25  p-units-unit-26 gap-y-units-unit-10 max-h-[280px] overflow-auto">
          {data.map((transaction) => (
            <TransactionListItem key={transaction.id} {...transaction} />
          ))}
        </div>
      )}
    </div>
  );
};
