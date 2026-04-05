import PageHeader from '../components/PageHeader';
import { Plus, Layers, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const navigate = useNavigate();
  
  const data = [
    {
      title: '香港优才/高才',
      department: '移民组',
      cases: '12 案件',
    },
    {
      title: '股权纠纷诉讼',
      department: '民事组',
      cases: '8 案件',
    },
    {
      title: '企业年度顾问',
      department: '商事组',
      cases: '5 案件',
    }
  ];

  return (
    <div>
      <PageHeader title="业务分类管理" subtitle="LAW FIRM MANAGEMENT OS" />
      
      <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-sm border border-gray-100 dark:border-[#333] p-6">
        <div className="flex justify-between items-center mb-8">
          <p className="text-sm text-gray-500 font-medium">配置系统中可用的业务标签</p>
          <button 
            onClick={() => navigate('/settings/categories/new')}
            className="flex items-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            <Plus className="w-4 h-4 mr-2" />
            新增分类
          </button>
        </div>

        <div className="flex flex-col space-y-3">
          {data.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => navigate(`/settings/categories/${idx}`)}
              className="bg-gray-50 dark:bg-[#2a2a2a] rounded-xl border border-gray-100 dark:border-[#333] p-4 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 transition-colors shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">{item.title}</h3>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-white dark:bg-[#1e1e1e] px-3 py-1 rounded-full border border-gray-200 dark:border-[#444]">
                  {item.cases}
                </span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
