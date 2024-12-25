import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 p-4 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
