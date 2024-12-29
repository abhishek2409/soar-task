import { Link } from 'react-router-dom';
import Icon from '../Icon';
import TextInput from '../TextInput';
import SearchIcon from '@/assets/svgs/search.svg?react';
import SettingsIcon from '@/assets/svgs/setting-shallow.svg?react';
import NotificationIcon from '@/assets/svgs/notification.svg?react';
import AvatarIcon from '@/assets/images/avatar1.png';
import Avatar from '../Avatar';
import { useSidebar } from '@/providers';

const Navbar = ({ title }: { title: string }) => {
  const { setOpen, isOpen } = useSidebar();
  return (
    <nav className="p-units-unit-26 pb-0 xl:px-units-unit-40 xl:py-units-unit-20 sticky top-0 z-50 bg-white xl:border-b xl:border-borderGray border-none">
      <div className="xl:py-units-unit-13 flex justify-between pb-0 items-center">
        <button
          onClick={() => setOpen(!isOpen)}
          type="button"
          className="inline-flex items-center  text-sm text-gray-500 rounded-lg xl:hidden focus:outline-none  focus:bg-transparent"
        >
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 13C18 13.5523 17.4801 14 16.8387 14L1.16129 14C0.519928 14 -6.78526e-08 13.5523 -4.37114e-08 13C-1.95703e-08 12.4477 0.519928 12 1.16129 12L16.8387 12C17.4801 12 18 12.4477 18 13Z"
              fill="#343C6A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 7C18 7.55228 17.5523 8 17 8L1 8C0.447716 8 -6.78525e-08 7.55228 -4.37114e-08 7C-1.95703e-08 6.44771 0.447716 6 1 6L17 6C17.5523 6 18 6.44772 18 7Z"
              fill="#343C6A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 0.999998C18 1.55228 17.4801 2 16.8387 2L1.16129 2C0.519928 2 -6.78526e-08 1.55229 -4.37115e-08 1C-1.95704e-08 0.447719 0.519928 3.94468e-06 1.16129 3.7939e-06L16.8387 -5.07615e-08C17.4801 -2.61145e-07 18 0.447714 18 0.999998Z"
              fill="#343C6A"
            />
          </svg>
        </button>
        <h1 className="font-semibold text-units-unit-20 xl:text-units-unit-28 text-primaryText">
          {title}
        </h1>
        <div className="flex items-center justify-between gap-x-units-unit-30">
          <TextInput
            name="search"
            leftIcon={<SearchIcon />}
            type="search"
            placeholder="Search for something"
            className={{
              root: 'rounded-full border-none w-auto hidden xl:flex',
              input:
                'rounded-full bg-primaryBG text-primaryText py-units-unit-13',
            }}
          />
          <Link to="/settings" className="m-0 p-0  items-center hidden xl:flex">
            <Icon
              svg={SettingsIcon}
              className="rounded-full bg-primaryBG p-3 w-[50px] h-[50px]"
            />
          </Link>
          <Link
            to="/notifications"
            className="m-0 p-0  items-center hidden xl:flex"
          >
            <Icon
              svg={NotificationIcon}
              className="rounded-full bg-primaryBG p-3 w-[50px] h-[50px]"
            />
          </Link>
          <Avatar
            className="w-[35px] h-[35px] xl:w-[60px] xl:h-[60px] rounded-full flex-shrink-0"
            img={AvatarIcon}
          />
        </div>
      </div>
      <TextInput
        name="search"
        leftIcon={<SearchIcon />}
        type="search"
        placeholder="Search for something"
        className={{
          root: 'rounded-full border-none w-auto  xl:hidden my-units-unit-20',
          input:
            'rounded-full bg-primaryBG text-primaryText py-units-unit-13 text-units-unit-13',
        }}
      />
    </nav>
  );
};

export default Navbar;
