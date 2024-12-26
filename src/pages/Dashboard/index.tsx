import { MyCardList } from '@/features/MyCards';

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-y-units-unit-24">
      <div className="flex w-full gap-x-units-unit-30">
        <div className="w-2/3">
          <MyCardList />
        </div>
        <div className="w-1/3">Transaction</div>
      </div>
    </div>
  );
};

export default Dashboard;
