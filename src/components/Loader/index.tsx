import { FC } from 'react';

export enum LoaderType {
  CARD_SHIMMER = 'CARD_SHIMMER',
  LIST_SHIMMER = 'LIST_SHIMMER',
  CHART_SHIMMER = 'CHART_SHIMMER',
  PAGE_LOADER = 'PAGE_LOADER',
}
interface LoaderProps {
  type: LoaderType;
  className?: string;
}

const CardShimmer = () => {
  return (
    <div
      role="status"
      className="w-full h-full animate-pulse flex  gap-x-units-unit-30"
    >
      <div className="w-[350px] bg-gray-200 rounded-units-unit-25" />
      <div className="w-[350px] bg-gray-200 rounded-units-unit-25" />
    </div>
  );
};

const ListShimmer = () => {
  return (
    <div
      role="status"
      className="max-w-sm p-4 border border-gray-200 rounded-units-unit-25 shadow animate-pulse md:p-6 bg-white"
    >
      <div className="h-20 rounded-units-unit-13 bg-gray-200  dark:bg-gray-700 mb-2.5"></div>
      <div className="h-20 rounded-units-unit-13 bg-gray-200  dark:bg-gray-700 mb-2.5"></div>
      <div className="h-20 rounded-units-unit-13 bg-gray-200  dark:bg-gray-700"></div>
    </div>
  );
};

const ChartLoader = () => {
  return (
    <div
      role="status"
      className="max-w-full animate-pulse dark:border-gray-700"
    >
      <div className="flex items-baseline mt-4">
        <div className="w-5 bg-gray-200 rounded-t-lg h-48 dark:bg-gray-700"></div>
        <div className="w-5 h-24 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
        <div className="w-5 bg-gray-200 rounded-t-lg h-48 ms-6 dark:bg-gray-700"></div>
        <div className="w-5 h-64 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
        <div className="w-5 bg-gray-200 rounded-t-lg h-36 ms-6 dark:bg-gray-700"></div>
        <div className="w-5 bg-gray-200 rounded-t-lg h-48 ms-6 dark:bg-gray-700"></div>
        <div className="w-5 bg-gray-200 rounded-t-lg h-36 ms-6 dark:bg-gray-700"></div>
        <div className="w-5 h-24 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
        <div className="w-5 bg-gray-200 rounded-t-lg h-48 ms-6 dark:bg-gray-700"></div>
        <div className="w-5 h-64 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
        <div className="w-5 bg-gray-200 rounded-t-lg h-36 ms-6 dark:bg-gray-700"></div>
        <div className="w-5 bg-gray-200 rounded-t-lg h-48 ms-6 dark:bg-gray-700"></div>
        <div className="w-5 h-24 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
        <div className="w-5 bg-gray-200 rounded-t-lg h-48 ms-6 dark:bg-gray-700"></div>
        <div className="w-5 h-64 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
        <div className="w-5 bg-gray-200 rounded-t-lg h-36 ms-6 dark:bg-gray-700"></div>
        <div className="w-5 bg-gray-200 rounded-t-lg h-48 ms-6 dark:bg-gray-700"></div>
        <div className="w-5 h-24 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
        <div className="w-5 bg-gray-200 rounded-t-lg h-48 ms-6 dark:bg-gray-700"></div>
        <div className="w-5 h-64 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
        <div className="w-5 bg-gray-200 rounded-t-lg h-36 ms-6 dark:bg-gray-700"></div>
        <div className="w-5 bg-gray-200 rounded-t-lg h-48 ms-6 dark:bg-gray-700"></div>
      </div>
    </div>
  );
};

const Loader: FC<LoaderProps> = ({ type }) => {
  switch (type) {
    case LoaderType.CARD_SHIMMER:
      return <CardShimmer />;
    case LoaderType.LIST_SHIMMER:
      return <ListShimmer />;
    case LoaderType.CHART_SHIMMER:
      return <ChartLoader />;
    default:
      return <></>;
  }
};

export default Loader;
