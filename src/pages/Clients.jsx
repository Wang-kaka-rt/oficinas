import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Search, Plus, MoreHorizontal, ChevronLeft, ChevronRight, User } from 'lucide-react';
import ClientModal from '../components/ClientModal';

const Clients = () => {
  const [activeTab, setActiveTab] = useState('全部');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState(null);

  const tabs = ['全部', '个人客户', '企业客户'];

  const data = [
    {
      id: 'CLI-2026-001',
      name: '王小明',
      type: '个人客户',
      contact: '13800138000',
      source: '官网推荐',
      addedDate: '2026-04-01',
    },
    {
      id: 'CLI-2026-002',
      name: '腾讯科技',
      type: '企业客户',
      contact: '0755-86013388',
      source: '商务合作',
      addedDate: '2026-03-28',
    },
    {
      id: 'CLI-2026-003',
      name: '阿里国际',
      type: '企业客户',
      contact: 'contact@alibaba.com',
      source: '转介绍',
      addedDate: '2026-03-15',
    },
    {
      id: 'CLI-2026-004',
      name: '李华',
      type: '个人客户',
      contact: '13912345678',
      source: '线下活动',
      addedDate: '2026-04-02',
    }
  ];

  return (
    <div>
      <PageHeader 
        title="客户档案" 
        subtitle="管理客户基本信息与跟进记录" 
        rightElement={
          <button 
            onClick={() => {
              setEditingClient(null);
              setIsModalOpen(true);
            }}
            className="flex items-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            <Plus className="w-4 h-4 mr-2" />
            新增客户
          </button>
        }
      />
      
      <div className="mt-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-1 bg-gray-50 dark:bg-[#2a2a2a] p-1 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  activeTab === tab
                    ? 'bg-white dark:bg-[#333] text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="搜索客户编号、姓名或电话..."
              className="pl-9 pr-4 py-2 border border-gray-200 dark:border-[#333] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white w-72"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 dark:border-[#333]">
                <th className="py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">客户编号 / 名称</th>
                <th className="py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">客户类型</th>
                <th className="py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">联系方式</th>
                <th className="py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">来源渠道</th>
                <th className="py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">添加时间</th>
                <th className="py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">操作</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-200 dark:border-[#333] hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition-colors">
                  <td className="py-4 px-4">
                    <div className="text-xs text-gray-500 font-mono mb-1">{row.id}</div>
                    <div className="font-medium text-gray-900 dark:text-white">{row.name}</div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${row.type === '个人客户' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' : 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400'}`}>
                      {row.type}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-700 dark:text-gray-300">
                    {row.contact}
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{row.source}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{row.addedDate}</span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button 
                      onClick={() => {
                        setEditingClient(row);
                        setIsModalOpen(true);
                      }}
                      className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                    >
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination component */}
        <div className="flex items-center justify-between mt-6 border-t border-gray-100 dark:border-[#333] pt-4">
          <div className="text-sm text-gray-500">
            共 <span className="font-medium text-gray-900 dark:text-white">{data.length}</span> 条记录
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-1.5 rounded-md border border-gray-200 dark:border-[#333] text-gray-500 hover:bg-gray-50 dark:hover:bg-[#333] disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="px-3 py-1.5 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium">
              1
            </button>
            <button 
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={true}
              className="p-1.5 rounded-md border border-gray-200 dark:border-[#333] text-gray-500 hover:bg-gray-50 dark:hover:bg-[#333] disabled:opacity-50"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      <ClientModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(data) => {
          console.log('Saved client:', data);
          // Here you would typically update the state or call an API
        }}
        client={editingClient}
      />
    </div>
  );
};

export default Clients;