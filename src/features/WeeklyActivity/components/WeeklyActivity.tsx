import SectionTitle from '@/components/SectionTitle';
import { RootState, useAppDispatch } from '@/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchWeeklyActivity } from '../thunks';
import Loader, { LoaderType } from '@/components/Loader';
import WeeklyActivityChart from './WeeklyActivityChart';

export const WeeklyActivity = () => {
  const { data, isLoading } = useSelector(
    (state: RootState) => state.weeklyActivity
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!data) dispatch(fetchWeeklyActivity());
  }, []);
  return (
    <div className="flex flex-col w-full  gap-y-5">
      <SectionTitle title="Weekly Activity" />
      {isLoading && <Loader type={LoaderType.CHART_SHIMMER} />}
      {!isLoading && data && data.length > 0 && (
        <div className="shaodow p-units-unit-26 bg-white rounded-units-unit-25">
          <WeeklyActivityChart data={data} />
        </div>
      )}
    </div>
  );
};
