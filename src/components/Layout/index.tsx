import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import DashboardIcon from '@/assets/svgs/home.svg?react';
import TransactionIcon from '@/assets/svgs/transaction.svg?react';
import AccountIcon from '@/assets/svgs/user.svg?react';
import InvestmentIcon from '@/assets/svgs/investment.svg?react';
import CrediCardIcon from '@/assets/svgs/credt-card.svg?react';
import LoanIcon from '@/assets/svgs/loan.svg?react';
import ServicesIcon from '@/assets/svgs/service.svg?react';
import PrivilegeIcon from '@/assets/svgs/privilege.svg?react';
import SettingIcon from '@/assets/svgs/setting.svg?react';
import LogoIcon from '@/assets/svgs/logo.svg?react';
import { getPageTitle } from '@/utils';

const menuItems = [
  {
    label: 'Dashboard',
    icon: DashboardIcon,
    link: '/',
  },
  {
    label: 'Transactions',
    icon: TransactionIcon,
    link: '/transactions',
  },
  {
    label: 'Accounts',
    icon: AccountIcon,
    link: '/accounts',
  },
  {
    label: 'Investments',
    icon: InvestmentIcon,
    link: '/investments',
  },
  {
    label: 'Credit Cards',
    icon: CrediCardIcon,
    link: '/credit-cards',
  },
  {
    label: 'Loans',
    icon: LoanIcon,
    link: '/loans',
  },
  {
    label: 'Services',
    icon: ServicesIcon,
    link: '/services',
  },
  {
    label: 'My Privileges',
    icon: PrivilegeIcon,
    link: '/privileges',
  },
  {
    label: 'Settings',
    icon: SettingIcon,
    link: '/settings',
  },
];

const logo = {
  icon: <LogoIcon />,
  link: '/',
  text: 'Soar Task',
};

const Layout = () => {
  const location = useLocation();
  const title = getPageTitle(location.pathname);

  return (
    <>
      <Sidebar menuItems={menuItems} logo={logo} />
      <div className="flex flex-col flex-1 xl:ml-[250px]">
        <Navbar title={title} />
        <main className="flex-1 p-4 xl:bg-primaryBG py-units-unit-24 px-units-unit-25 xl:px-units-unit-40 xl:min-h-[calc(100vh-126px)]">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
