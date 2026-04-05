import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Save, Briefcase, FileText, Image, Edit } from 'lucide-react';

const InvoiceForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);
  const [activeTab, setActiveTab] = useState('basic');

  const [formData, setFormData] = useState({
    orderId: '',
    companyName: '',
    taxId: '',
    amount: '',
    bankAccount: '',
    addressPhone: '',
    remarks: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted invoice:', formData);
    navigate('/finance');
  };

  const renderBasicForm = () => (
    <div className="bg-white dark:bg-[#16171d] rounded-2xl shadow-sm border border-gray-100 dark:border-[#2e303a] p-10 w-full max-w-3xl mx-auto mt-4">
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100 dark:border-[#2e303a]">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">开票详细信息</h2>
        <button 
          type="button" 
          className="flex items-center text-sm font-medium text-primary hover:text-blue-700 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:text-blue-300 px-4 py-2 rounded-lg transition-colors"
        >
          <Edit className="w-4 h-4 mr-2" />
          修改信息
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              关联订单 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="orderId"
              value={formData.orderId}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 dark:border-[#2e303a] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
              placeholder="例如：ORD-2026-001"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              发票金额 (¥) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 dark:border-[#2e303a] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
              placeholder="请输入开票金额"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              开票抬头 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 dark:border-[#2e303a] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
              placeholder="输入公司名称"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              纳税人识别号 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="taxId"
              value={formData.taxId}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 dark:border-[#2e303a] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
              placeholder="统一社会信用代码"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              开户行及账号
            </label>
            <input
              type="text"
              name="bankAccount"
              value={formData.bankAccount}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 dark:border-[#2e303a] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
              placeholder="选填"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              企业地址及电话
            </label>
            <input
              type="text"
              name="addressPhone"
              value={formData.addressPhone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 dark:border-[#2e303a] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
              placeholder="选填"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            开票备注
          </label>
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2 border border-gray-200 dark:border-[#2e303a] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white resize-none"
            placeholder="添加备注信息..."
          />
        </div>

        <div className="pt-8 mt-8 flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => navigate('/finance')}
            className="px-6 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-[#1f2028] border border-gray-200 dark:border-[#2e303a] rounded-lg hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition-colors"
          >
            取消
          </button>
          <button
            type="submit"
            className="flex items-center px-6 py-2.5 text-sm font-medium text-white bg-[#0f172a] dark:bg-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            <Save className="w-4 h-4 mr-2" />
            提交申请
          </button>
        </div>
      </form>
    </div>
  );

  const renderPreview = () => (
    <div className="bg-white dark:bg-[#16171d] rounded-2xl shadow-sm border border-gray-100 dark:border-[#2e303a] p-10 w-full max-w-3xl mx-auto mt-4">
      <div className="text-center py-12 text-gray-500">
        <Image className="w-12 h-12 mx-auto text-gray-300 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">发票预览</h3>
        <p>在此预览根据填写的开票信息生成的发票样式或上传的文件。（功能开发中）</p>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-[#fcfaf5] dark:bg-[#121212] text-gray-900 dark:text-gray-100">
      
      {/* 左侧导航栏 */}
      <aside className="w-64 h-screen border-r border-[#f0ece1] dark:border-[#2e303a] bg-[#fcfaf5] dark:bg-[#16171d] flex flex-col shrink-0">
        <div className="flex items-center px-6 py-6 border-b border-[#f0ece1] dark:border-[#2e303a]">
          <button 
            onClick={() => navigate('/finance')}
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回列表
          </button>
        </div>
        
        <div className="px-6 py-6">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-black dark:bg-white rounded-md flex items-center justify-center mr-3">
              <Briefcase className="w-5 h-5 text-white dark:text-black" />
            </div>
            <span className="text-xl font-bold dark:text-white">NexLegal</span>
          </div>
        </div>

        <nav className="flex-1 px-4 overflow-y-auto">
          <div className="mb-4">
            <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              {isEdit ? '发票编辑' : '申请开票'}
            </div>
            
            <button 
              onClick={() => setActiveTab('basic')}
              className={`w-full flex items-center px-4 py-3 my-1 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'basic'
                  ? 'text-primary bg-blue-50 dark:bg-blue-900/20'
                  : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#2a2a2a]'
              }`}
            >
              <FileText className="w-5 h-5 mr-3" />
              开票信息
            </button>

            <button 
              onClick={() => setActiveTab('preview')}
              className={`w-full flex items-center px-4 py-3 my-1 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'preview'
                  ? 'text-primary bg-blue-50 dark:bg-blue-900/20'
                  : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#2a2a2a]'
              }`}
            >
              <Image className="w-5 h-5 mr-3" />
              发票预览
            </button>
          </div>
        </nav>
      </aside>

      {/* 右侧主内容区域 */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden bg-[#fcfaf5] dark:bg-[#121212] relative">
        <header className="bg-[#fcfaf5] dark:bg-[#16171d] border-b border-[#f0ece1] dark:border-[#2e303a] px-8 py-5 flex items-center justify-between shadow-sm">
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {activeTab === 'basic' ? (isEdit ? '发票编辑页' : '申请开票') : '发票预览'}
            </h1>
            <p className="text-sm text-gray-500">
              {activeTab === 'basic' ? '填写发票的抬头、税号及金额等信息以提交开票申请。' : '在此预览根据填写的开票信息生成的发票样式或上传的文件。'}
            </p>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-8">
          {activeTab === 'basic' && renderBasicForm()}
          {activeTab === 'preview' && renderPreview()}
        </main>
      </div>
    </div>
  );
};

export default InvoiceForm;