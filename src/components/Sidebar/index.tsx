import { NavLink } from "react-router-dom";
import DashboardIcon from "@/assets/svgs/home.svg?react";

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-lg font-bold">Soar Task</div>
      <nav className="flex flex-col gap-4 mt-4 px-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-2 rounded ${isActive ? "bg-gray-700" : "hover:bg-gray-700"}`
          }
        >
          <DashboardIcon />
          Dashboard
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `p-2 rounded ${isActive ? "bg-gray-700" : "hover:bg-gray-700"}`
          }
        >
          Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
