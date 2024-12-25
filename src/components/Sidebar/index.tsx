import { NavLink } from 'react-router-dom';
import CustomLink from '../CustomLink';
import { ElementType } from 'react';

export interface SidebarProps {
  menuItems: {
    label: string;
    icon: ElementType;
    link: string;
  }[];
  logo: {
    icon: JSX.Element;
    link: string;
    text: string;
  };
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems, logo }) => {
  return (
    <>
      <aside
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full bg-white border-r border-borderGray sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <div className=" py-units-unit-20 px-units-unit-30 ">
          <NavLink
            to={logo.link}
            className="flex items-center text-units-unit-24 font-bold text-heading gap-5 py-2.5 pl-4"
          >
            <span>{logo.icon}</span> <span>{logo.text}</span>
          </NavLink>
        </div>
        <div className="h-full overflow-y-auto bg-white">
          <ul>
            {menuItems.map(({ label, icon, link }, index) => (
              <li key={index} className="hover:menuActive mb-5">
                <CustomLink icon={icon} label={label} link={link} />
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
