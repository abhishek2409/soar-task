import { FC } from 'react';
import CustomLink from '../CustomLink';

interface TabsProps {
  tabs: {
    name: string;
    href: string;
  }[];
}

const Tabs: FC<TabsProps> = ({ tabs }) => {
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        {tabs.map((tab) => (
          <li className="xl:me-units-unit-60" key={tab.name}>
            <CustomLink
              label={tab.name}
              link={tab.href}
              activeBarPosition="bottom"
              className={{
                root: 'inline-block py-2.5 px-units-unit-15 font-medium hover:text-menuActive transition-colors ease-in-out duration-300 text-units-unit-13 xl:text-units-unit-16',
                active: 'text-menuActive',
                inactive: 'text-contentSubtitle',
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
