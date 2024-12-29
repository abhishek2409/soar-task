import { MyCardList } from '@/features/MyCards';
import { TransactionList } from '@/features/Transactions';
import { lazy } from 'react';

const BalanceHistory = lazy(() =>
  import('@/features/BalanceHistory').then((module) => ({
    default: module.BalanceHistory,
  }))
);
const ExpenseStats = lazy(() =>
  import('@/features/ExpenseStatistics').then((module) => ({
    default: module.ExpenseStats,
  }))
);
const QuickTransfer = lazy(() =>
  import('@/features/QuickTransfer').then((module) => ({
    default: module.QuickTransfer,
  }))
);
const WeeklyActivity = lazy(() =>
  import('@/features/WeeklyActivity').then((module) => ({
    default: module.WeeklyActivity,
  }))
);

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-y-units-unit-24">
      <div className="flex w-full gap-x-units-unit-30 max-w-screen-2xl lg:flex-row flex-col gap-y-units-unit-24 lg:gap-y-0">
        <div className="w-full lg:w-1/2 xl:w-2/3">
          <MyCardList />
        </div>
        <div className="w-full lg:w-1/2 xl:w-1/3">
          <TransactionList />
        </div>
      </div>
      <div className="flex w-full gap-x-units-unit-30 max-w-screen-2xl lg:flex-row flex-col gap-y-units-unit-24 lg:gap-y-0">
        <div className="w-full lg:w-1/2 xl:w-2/3">
          <WeeklyActivity />
        </div>
        <div className="w-full lg:w-1/2 xl:w-1/3">
          <ExpenseStats />
        </div>
      </div>
      <div className="flex w-full gap-x-units-unit-30 max-w-screen-2xl lg:flex-row flex-col gap-y-units-unit-24 lg:gap-y-0">
        <div className="w-full lg:w-1/2 xl:w-2/5">
          <QuickTransfer />
        </div>
        <div className="w-full lg:w-1/2 xl:w-3/5">
          <BalanceHistory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
