import PageHeader from '../components/PageHeader';
import { ShoppingCart, FileText, CheckCircle, ClipboardList, BarChart3 } from 'lucide-react';

const DashboardCard = ({ icon: Icon, title, value }) => (
  <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-[#333] flex flex-col justify-between">
    <div className="mb-4">
      <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-[#2a2a2a] flex items-center justify-center">
        {Icon && <Icon className="w-5 h-5 text-gray-400 dark:text-gray-500" />}
      </div>
    </div>
    <div>
      <h3 className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">{title}</h3>
      <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div>
      <PageHeader title="工作概览" subtitle="查看团队工作进度与数据统计" />
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <DashboardCard icon={ShoppingCart} title="活跃订单" value="3" />
        <DashboardCard icon={FileText} title="待签合同" value="4" />
        <DashboardCard icon={CheckCircle} title="本月结案" value="12" />
        <DashboardCard icon={ClipboardList} title="待办任务" value="07" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-[#333] min-h-[300px] flex flex-col">
          <h3 className="text-sm font-bold mb-4">活跃趋势</h3>
          <div className="flex-1 flex items-center justify-center">
            <BarChart3 className="w-16 h-16 text-gray-200 dark:text-gray-700" />
          </div>
        </div>

        <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-[#333] min-h-[300px]">
          <h3 className="text-sm font-bold mb-8">团队分配</h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2 font-medium">
                <span>移民组</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-[#333] rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2 font-medium">
                <span>民事组</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-[#333] rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2 font-medium">
                <span>商事组</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-[#333] rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
