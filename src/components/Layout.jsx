import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="flex h-screen bg-[#fcfaf5] dark:bg-[#121212] overflow-hidden text-gray-900 dark:text-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#fcfaf5] dark:bg-[#121212] p-6 md:p-8">
        <div className="w-full h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
