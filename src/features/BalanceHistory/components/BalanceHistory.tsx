import { RootState, useAppDispatch } from '@/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchBalanceHistory } from '../thunks';
import SectionTitle from '@/components/SectionTitle';
import Loader, { LoaderType } from '@/components/Loader';
import BalanceHistoryChart from './BalanceHistoryChart';

export const BalanceHistory = () => {
  const { data, isLoading } = useSelector(
    (state: RootState) => state.balanceHistory
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!data) dispatch(fetchBalanceHistory());
  }, []);
  return (
    <div className="flex flex-col w-full  gap-y-5 h-full">
      <SectionTitle title="Balance History" />
      {isLoading && <Loader type={LoaderType.CHART_SHIMMER} />}

      {!!data?.length && !isLoading && (
        <div className="flex    grow bg-white rounded-units-unit-25  xl:p-units-unit-26">
          <BalanceHistoryChart data={data} />
        </div>
      )}
    </div>
  );
};
