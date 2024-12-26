import { RootState, useAppDispatch } from '@/store';
import { useEffect } from 'react';
import { fetchMyCards } from '../thunks';
import Loader, { LoaderType } from '@/components/Loader';
import { Link } from 'react-router-dom';
import MyCardItem from './MyCardItem';
import { useSelector } from 'react-redux';

export const MyCardList = () => {
  const { data, isLoading } = useSelector((state: RootState) => state.myCards);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!data) dispatch(fetchMyCards());
  }, []);

  return (
    <div className="flex flex-col w-full  gap-y-5">
      <div className="flex justify-between items-center">
        <h2 className="text-primaryText text-units-unit-22 font-semibold">
          My Cards
        </h2>
        <Link
          to="/all-cards"
          className="text-primaryText font-semibold text-units-unit-17"
        >
          See All
        </Link>
      </div>
      {isLoading && (
        <div className="h-48">
          <Loader type={LoaderType.CARD_SHIMMER} />
        </div>
      )}
      <div className="flex flex-nowrap overflow-x-auto md:max-w-screen-md lg:max-w-screen-lg gap-x-units-unit-30 pb-units-unit-24">
        {!!data?.length &&
          !isLoading &&
          data.map((card) => <MyCardItem key={card.id} {...card} />)}
      </div>
    </div>
  );
};
