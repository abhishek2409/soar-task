import { ExpenseStats } from '@/features/ExpenseStatistics/components';
import { MyCardList } from '@/features/MyCards';
import { QuickTransfer } from '@/features/QuickTransfer/components';
import { TransactionList } from '@/features/Transactions';
import { WeeklyActivity } from '@/features/WeeklyActivity';

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-y-units-unit-24">
      <div className="flex w-full gap-x-units-unit-30 max-w-screen-2xl">
        <div className="w-2/3">
          <MyCardList />
        </div>
        <div className="w-1/3">
          <TransactionList />
        </div>
      </div>
      <div className="flex w-full gap-x-units-unit-30 max-w-screen-2xl">
        <div className="w-2/3">
          <WeeklyActivity />
        </div>
        <div className="w-1/3">
          <ExpenseStats />
        </div>
      </div>
      <div className="flex w-full gap-x-units-unit-30 max-w-screen-2xl">
        <div className="w-2/5">
          <QuickTransfer />
        </div>
        <div className="w-3/5">Balance History</div>
      </div>
    </div>
  );
};

export default Dashboard;
