import { ElementType, FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface CustomLinkProps {
  icon: ElementType;
  label: string;
  link: string;
}

const CustomLink: FC<CustomLinkProps> = ({ icon: Icon, label, link }) => {
  const location = useLocation();
  const isActive = location.pathname === link;
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `relative font-medium text-units-unit-18 flex items-center p-2    hover:text-menuActive group  ${
          isActive ? 'text-menuActive ' : 'text-menuInactive '
        }`
      }
    >
      {isActive && (
        <span
          className={`absolute top-0 left-0 h-[60px] w-1.5 bg-menuActive rounded-tr-lg rounded-br-lg `}
        />
      )}
      <Icon className="ml-units-unit-38 mr-units-unit-26 hover:text-menuActive" />
      <span>{label}</span>
    </NavLink>
  );
};

export default CustomLink;
