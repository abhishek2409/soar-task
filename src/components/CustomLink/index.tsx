import { ElementType, FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';

interface CustomLinkProps {
  icon?: ElementType;
  label: string;
  link: string;
  activeBarPosition?: 'bottom' | 'left';
  className?: {
    root?: string;
    active?: string;
    inactive?: string;
  };
}

const CustomLink: FC<CustomLinkProps> = ({
  icon: Icon = () => null,
  label,
  link,
  activeBarPosition = 'left',
  className,
}) => {
  const location = useLocation();
  const isActive =
    location.pathname === link ||
    (link === '/settings' && location.pathname.includes('settings'));
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        clsx(
          `relative font-medium  flex items-center p-2    hover:text-menuActive group  ${
            isActive
              ? className?.active ?? 'text-menuActive '
              : className?.inactive ?? 'text-menuInactive '
          }`,
          className?.root
        )
      }
    >
      {isActive && activeBarPosition === 'left' && (
        <span
          className={`absolute top-0 left-0 h-[60px] w-1.5 bg-menuActive rounded-tr-lg rounded-br-lg `}
        />
      )}
      {isActive && activeBarPosition === 'bottom' && (
        <span
          className={`absolute bottom-0 left-0 h-[3px] w-full bg-menuActive rounded-tl-full rounded-tr-full `}
        />
      )}
      <Icon className="ml-units-unit-38 mr-units-unit-26 hover:text-menuActive" />
      <span>{label}</span>
    </NavLink>
  );
};

export default CustomLink;
