import { Link } from 'react-router-dom';
import Icon from '../Icon';
import TextInput from '../TextInput';
import SearchIcon from '@/assets/svgs/search.svg?react';
import SettingsIcon from '@/assets/svgs/setting-shallow.svg?react';
import NotificationIcon from '@/assets/svgs/notification.svg?react';
import AvatarIcon from '@/assets/images/avatar1.png';
import Avatar from '../Avatar';

const Navbar = ({ title }: { title: string }) => {
  return (
    <div className="px-units-unit-40 py-units-unit-20">
      <div className="py-units-unit-13 flex justify-between pb-0">
        <h1 className="font-semibold text-units-unit-28 text-primaryText">
          {title}
        </h1>
        <div className="flex items-center justify-between gap-x-units-unit-30">
          <TextInput
            name="search"
            leftIcon={<SearchIcon />}
            type="search"
            placeholder="Search for something"
            className={{
              root: 'rounded-full border w-auto',
              input: 'rounded-full bg-primaryBG text-primaryText',
            }}
          />
          <Link to="/settings" className="m-0 p-0">
            <Icon
              svg={SettingsIcon}
              className="rounded-full bg-primaryBG p-3"
            />
          </Link>
          <Link to="/notifications" className="m-0 p-0">
            <Icon
              svg={NotificationIcon}
              className="rounded-full bg-primaryBG p-3"
            />
          </Link>
          <Avatar
            className="w-[60px] h-[60px] rounded-full flex-shrink-0"
            img={AvatarIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
