import { ExpenseStats } from '@/features/ExpenseStatistics/components';
import { MyCardList } from '@/features/MyCards';
import { TransactionList } from '@/features/Transactions';
import { WeeklyActivity } from '@/features/WeeklyActivity';

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-y-units-unit-24">
      <div className="flex w-full gap-x-units-unit-30">
        <div className="w-2/3">
          <MyCardList />
        </div>
        <div className="w-1/3">
          <TransactionList />
        </div>
      </div>
      <div className="flex w-full gap-x-units-unit-30">
        <div className="w-2/3">
          <WeeklyActivity />
        </div>
        <div className="w-1/3">
          <ExpenseStats />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
