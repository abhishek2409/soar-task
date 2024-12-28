import { BalanceHistory } from '@/features/BalanceHistory';
import { ExpenseStats } from '@/features/ExpenseStatistics';
import { MyCardList } from '@/features/MyCards';
import { QuickTransfer } from '@/features/QuickTransfer';
import { TransactionList } from '@/features/Transactions';
import { WeeklyActivity } from '@/features/WeeklyActivity';

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-y-units-unit-24">
      <div className="flex w-full gap-x-units-unit-30 max-w-screen-2xl md:flex-row flex-col">
        <div className="w-full md:w-2/3">
          <MyCardList />
        </div>
        <div className="md:w-1/3">
          <TransactionList />
        </div>
      </div>
      <div className="flex w-full gap-x-units-unit-30 max-w-screen-2xl md:flex-row flex-col">
        <div className="md:w-2/3">
          <WeeklyActivity />
        </div>
        <div className="md:w-1/3">
          <ExpenseStats />
        </div>
      </div>
      <div className="flex w-full gap-x-units-unit-30 max-w-screen-2xl md:flex-row flex-col">
        <div className="md:w-2/5">
          <QuickTransfer />
        </div>
        <div className="md:w-3/5">
          <BalanceHistory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
