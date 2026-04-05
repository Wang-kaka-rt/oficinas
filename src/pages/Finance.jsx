import PageHeader from '../components/PageHeader';
import { Plus } from 'lucide-react';

const Finance = () => {
  const stats = [
    { title: '待处理开票', value: '¥12,400', valueClass: 'text-gray-900 dark:text-white' },
    { title: '本月已开额', value: '¥156,000', valueClass: 'text-gray-900 dark:text-white' },
    { title: '发票异常', value: '0', valueClass: 'text-red-500' }
  ];

  const data = [
    {
      id: 'INV-2026-001',
      company: '腾讯科技',
      amount: '¥125,000',
      status: '已开票',
      statusClass: 'bg-gray-100 dark:bg-[#333] text-gray-600 dark:text-gray-300'
    }
  ];

  return (
    <div>
      <PageHeader title="财务中心" subtitle="LAW FIRM MANAGEMENT OS" />
      
      <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-sm border border-gray-100 dark:border-[#333] p-6">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">财务与开票</h2>
            <p className="text-sm text-gray-500 mt-1">财务收支与税务发票管理</p>
          </div>
          <button className="flex items-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            申请开票
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-gray-50 dark:bg-[#2a2a2a] p-6 rounded-xl border border-gray-100 dark:border-[#333]">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">{stat.title}</div>
              <div className={`text-2xl font-bold ${stat.valueClass}`}>{stat.value}</div>
            </div>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 dark:border-[#333]">
                <th className="py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">编号</th>
                <th className="py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">抬头</th>
                <th className="py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">金额</th>
                <th className="py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider text-right w-1/4">状态</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-50 dark:border-[#2a2a2a] hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition-colors">
                  <td className="py-4 px-4 font-mono text-sm text-gray-500 dark:text-gray-400">{row.id}</td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900 dark:text-white">{row.company}</td>
                  <td className="py-4 px-4 text-sm font-bold text-gray-900 dark:text-white">{row.amount}</td>
                  <td className="py-4 px-4 text-right">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${row.statusClass}`}>
                      {row.status}
                    </span>
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
