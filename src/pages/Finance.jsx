import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Plus, MoreHorizontal, Edit } from 'lucide-react';

const Finance = () => {
  const navigate = useNavigate();
  const [openDropdownId, setOpenDropdownId] = useState(null);
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
  
  const stats = [
    { title: '待处理开票', value: '¥12,400', valueClass: 'text-gray-900 dark:text-white' },
    { title: '本月已开额', value: '¥156,000', valueClass: 'text-gray-900 dark:text-white' },
    { title: '发票异常', value: '0', valueClass: 'text-red-500' }
  ];

  const data = [
    {
      orderId: 'ORD-2026-001',
      id: 'INV-2026-001',
      company: '腾讯科技',
      amount: '¥125,000',
      status: '已开票',
      statusClass: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
      uploadStatus: '已上传',
      uploadStatusClass: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
    },
    {
      orderId: 'ORD-2026-002',
      id: 'INV-2026-002',
      company: '阿里国际',
      amount: '¥31,000',
      status: '未开票',
      statusClass: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400',
      uploadStatus: '未上传',
      uploadStatusClass: 'bg-gray-100 dark:bg-[#333] text-gray-600 dark:text-gray-300'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="财务中心" 
        subtitle="财务收支与税务发票管理" 
        rightElement={
          <button 
            onClick={() => navigate('/finance/new')}
            className="flex items-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            <Plus className="w-4 h-4 mr-2" />
            申请开票
          </button>
        }
      />
      
      <div className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-gray-50 dark:bg-[#2a2a2a] p-6 rounded-xl border border-gray-100 dark:border-[#333]">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">{stat.title}</div>
              <div className={`text-2xl font-bold ${stat.valueClass}`}>{stat.value}</div>
            </div>
          ))}
        </div>

        <div className="overflow-visible">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 dark:border-[#333]">
                <th className="py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">关联订单 / 编号</th>
                <th className="py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">抬头</th>
                <th className="py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">金额</th>
                <th className="py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">开票状态</th>
                <th className="py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">上传状态</th>
                <th className="py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">操作</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-200 dark:border-[#333] hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition-colors">
                  <td className="py-4 px-4">
                    <div className="text-xs text-gray-500 font-mono mb-1">{row.orderId}</div>
                    <div className="font-mono text-sm text-gray-900 dark:text-gray-400">{row.id}</div>
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900 dark:text-white">{row.company}</td>
                  <td className="py-4 px-4 text-sm font-bold text-gray-900 dark:text-white">{row.amount}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${row.statusClass}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${row.uploadStatusClass}`}>
                      {row.uploadStatus}
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
                                navigate(`/finance/${row.id}`);
                              }}
                              className="group flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2a2a2a]"
                            >
                              <Edit className="mr-3 h-4 w-4 text-gray-400 group-hover:text-gray-500 dark:text-gray-500" />
                              编辑
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
      </div>
    </div>
  );
};

export default Finance;
