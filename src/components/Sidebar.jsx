import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Database, 
  FileText, 
  Settings, 
  ChevronDown, 
  ChevronRight,
  User,
  Briefcase,
  Moon,
  Sun,
  Palette
} from 'lucide-react';

const Sidebar = () => {
  const [settingsOpen, setSettingsOpen] = useState(true);
  const location = useLocation();

  const isSettingsActive = location.pathname.includes('/settings');

  const navItemClass = ({ isActive }) =>
    `flex items-center px-4 py-3 my-1 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? 'bg-gray-100 text-black dark:bg-gray-800 dark:text-white'
        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white'
    }`;

  const subNavItemClass = ({ isActive }) =>
    `flex items-center pl-11 pr-4 py-2.5 my-1 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? 'text-primary bg-blue-50 dark:bg-blue-900/20'
        : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
    }`;

  return (
    <aside className="w-64 h-screen border-r border-[#f0ece1] dark:border-darkBorder bg-[#fcfaf5] dark:bg-darkCard flex flex-col transition-colors">
      <div className="flex items-center px-6 py-6">
        <div className="w-8 h-8 bg-black dark:bg-white rounded-md flex items-center justify-center mr-3">
          <Briefcase className="w-5 h-5 text-white dark:text-black" />
        </div>
        <span className="text-xl font-bold dark:text-white">NexLegal</span>
      </div>

      <nav className="flex-1 px-4 overflow-y-auto mt-2">
        <NavLink to="/" className={navItemClass}>
          <LayoutDashboard className="w-5 h-5 mr-3" />
          工作概览
        </NavLink>
        <NavLink to="/orders" className={navItemClass}>
          <ShoppingCart className="w-5 h-5 mr-3" />
          业务订单
        </NavLink>
        <NavLink to="/clients" className={navItemClass}>
          <Database className="w-5 h-5 mr-3" />
          客户档案
        </NavLink>
        <NavLink to="/finance" className={navItemClass}>
          <FileText className="w-5 h-5 mr-3" />
          财务开票
        </NavLink>

        <div className="mt-2">
          <button
            onClick={() => setSettingsOpen(!settingsOpen)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              isSettingsActive ? 'text-black dark:text-white' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white'
            }`}
          >
            <div className="flex items-center">
              <Settings className="w-5 h-5 mr-3" />
              系统设置
            </div>
            {settingsOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
          
          {settingsOpen && (
            <div className="mt-1">
              <NavLink to="/settings/company" className={subNavItemClass}>
                <FileText className="w-4 h-4 mr-3" />
                公司信息
              </NavLink>
              <NavLink to="/settings/invoice" className={subNavItemClass}>
                <FileText className="w-4 h-4 mr-3" />
                发票设置
              </NavLink>
              <NavLink to="/settings/categories" className={subNavItemClass}>
                <LayoutDashboard className="w-4 h-4 mr-3" />
                业务分类
              </NavLink>
              <NavLink to="/settings/permissions" className={subNavItemClass}>
                <User className="w-4 h-4 mr-3" />
                用户权限
              </NavLink>
              
              <NavLink to="/settings/personalize" className={subNavItemClass}>
                <Palette className="w-4 h-4 mr-3" />
                个性化
              </NavLink>
            </div>
          )}
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-darkBorder">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mr-3">
            <User className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </div>
          <div>
            <div className="text-sm font-medium dark:text-white">Admin</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">PREMIUM</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
