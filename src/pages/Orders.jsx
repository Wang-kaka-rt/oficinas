import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Search, Plus, MoreHorizontal, ChevronLeft, ChevronRight, Edit, Workflow, FolderOpen, X } from 'lucide-react';

const Orders = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('全部');
  const [currentPage, setCurrentPage] = useState(1);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [workflowModalOpen, setWorkflowModalOpen] = useState(false);
  const [filesModalOpen, setFilesModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdownId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.addEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const tabs = ['全部', '进行中', '已结案'];

  const data = [
    {
      id: 'ORD-2026-001',
      name: '王先生优才计划',
      type: '移民类',
      client: '王小明',
      assignee: '张三',
      status: '进行中',
      statusColor: 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400'
    },
    {
      id: 'ORD-2026-002',
      name: '某司股权纠纷案',
      type: '民事类',
      client: '腾讯科技',
      assignee: '李四',
      status: '文件上传中',
      statusColor: 'text-orange-600 bg-orange-50 dark:bg-orange-900/20 dark:text-orange-400'
    },
    {
      id: 'ORD-2026-003',
      name: '跨境贸易合同审核',
      type: '商事类',
      client: '阿里国际',
      assignee: '王五',
      status: '已完成',
      statusColor: 'text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="业务订单" 
        subtitle="管理全流程法律服务订单与进度" 
        rightElement={
          <button 
            onClick={() => navigate('/orders/new')}
            className="flex items-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            <Plus className="w-4 h-4 mr-2" />
            创建新订单
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
              placeholder="搜索订单号或客户名..."
              className="pl-9 pr-4 py-2 border border-gray-200 dark:border-[#333] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white w-64"
            />
          </div>
        </div>

        <div className="overflow-visible">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 dark:border-[#333]">
                <th className="py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">订单编号 / 名称</th>
                <th className="py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">业务类型</th>
                <th className="py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">关联客户</th>
                <th className="py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">经办人</th>
                <th className="py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
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
                    <span className="bg-gray-100 dark:bg-[#333] text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-md text-xs font-medium">
                      {row.type}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-700 dark:text-gray-300">
                    {row.client}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-[#444] text-xs flex items-center justify-center text-gray-600 dark:text-gray-300 mr-2">
                        {row.assignee.charAt(0)}
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{row.assignee}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${row.statusColor}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="relative inline-block text-left" ref={openDropdownId === row.id ? dropdownRef : null}>
                      <button 
                        onClick={() => setOpenDropdownId(openDropdownId === row.id ? null : row.id)}
                        className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                      >
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                      
                      {openDropdownId === row.id && (
                        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-[#1e1e1e] ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 dark:divide-[#333] focus:outline-none z-50 border border-gray-200 dark:border-[#333]">
                          <div className="py-1">
                            <button
                              onClick={() => {
                                setOpenDropdownId(null);
                                navigate(`/orders/${row.id}`);
                              }}
                              className="group flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2a2a2a]"
                            >
                              <Edit className="mr-3 h-4 w-4 text-gray-400 group-hover:text-gray-500 dark:text-gray-500" />
                              编辑
                            </button>
                            <button
                              onClick={() => {
                                setOpenDropdownId(null);
                                setSelectedOrder(row);
                                setWorkflowModalOpen(true);
                              }}
                              className="group flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2a2a2a]"
                            >
                              <Workflow className="mr-3 h-4 w-4 text-gray-400 group-hover:text-gray-500 dark:text-gray-500" />
                              工作流
                            </button>
                            <button
                              onClick={() => {
                                setOpenDropdownId(null);
                                setSelectedOrder(row);
                                setFilesModalOpen(true);
                              }}
                              className="group flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2a2a2a]"
                            >
                              <FolderOpen className="mr-3 h-4 w-4 text-gray-400 group-hover:text-gray-500 dark:text-gray-500" />
                              文件
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination component */}
        <div className="flex items-center justify-between mt-6 border-t border-gray-100 dark:border-[#333] pt-4">
          <div className="text-sm text-gray-500">
            共 <span className="font-medium text-gray-900 dark:text-white">3</span> 条记录
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

      {/* Workflow Modal */}
      {workflowModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-xl w-full max-w-2xl flex flex-col max-h-[90vh] border border-gray-100 dark:border-[#333]">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-[#333]">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">工作流配置</h3>
                <p className="text-sm text-gray-500 mt-1">订单：{selectedOrder?.name} ({selectedOrder?.id})</p>
              </div>
              <button 
                onClick={() => setWorkflowModalOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-8 overflow-y-auto flex-1 flex flex-col items-center justify-center text-center">
              <Workflow className="w-16 h-16 text-gray-300 dark:text-[#333] mb-4" />
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">订单工作流详情</h4>
              <p className="text-gray-500 max-w-md">
                此处将展示该订单的工作流节点、审批进度和当前所处的阶段。（功能开发中）
              </p>
            </div>
            
            <div className="p-6 border-t border-gray-100 dark:border-[#333] flex justify-end">
              <button
                onClick={() => setWorkflowModalOpen(false)}
                className="px-6 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-[#1f2028] border border-gray-200 dark:border-[#333] rounded-lg hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition-colors"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Files Modal */}
      {filesModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-xl w-full max-w-2xl flex flex-col max-h-[90vh] border border-gray-100 dark:border-[#333]">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-[#333]">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">文件管理</h3>
                <p className="text-sm text-gray-500 mt-1">订单：{selectedOrder?.name} ({selectedOrder?.id})</p>
              </div>
              <button 
                onClick={() => setFilesModalOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-8 overflow-y-auto flex-1 flex flex-col items-center justify-center text-center">
              <FolderOpen className="w-16 h-16 text-gray-300 dark:text-[#333] mb-4" />
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">订单关联文件</h4>
              <p className="text-gray-500 max-w-md">
                此处将展示该订单所需收集的资料清单、已上传的文件和模板下载链接。（功能开发中）
              </p>
            </div>
            
            <div className="p-6 border-t border-gray-100 dark:border-[#333] flex justify-end">
              <button
                onClick={() => setFilesModalOpen(false)}
                className="px-6 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-[#1f2028] border border-gray-200 dark:border-[#333] rounded-lg hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition-colors"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Orders;
