import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Briefcase, FileText, Workflow, FolderOpen } from 'lucide-react';

const OrderForm = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('basic'); // 'basic' or 'workflow'

  const [formData, setFormData] = useState({
    name: '',
    type: '移民类',
    client: '',
    assignee: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saved order:', formData);
    navigate('/orders');
  };

  const renderBasicForm = () => (
    <div className="bg-white dark:bg-[#16171d] rounded-2xl shadow-sm border border-gray-100 dark:border-[#2e303a] p-10 w-full max-w-3xl mx-auto mt-4">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              订单名称 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 dark:border-[#2e303a] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
              placeholder="例如：王先生优才计划"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              业务类型 <span className="text-red-500">*</span>
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 dark:border-[#2e303a] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
              required
            >
              <option value="移民类">移民类</option>
              <option value="民事类">民事类</option>
              <option value="商事类">商事类</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              关联客户 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="client"
              value={formData.client}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 dark:border-[#2e303a] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
              placeholder="输入客户姓名或公司名称"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              经办人 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="assignee"
              value={formData.assignee}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 dark:border-[#2e303a] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
              placeholder="输入经办人姓名"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            订单备注
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-200 dark:border-[#2e303a] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white resize-none"
            placeholder="添加关于该订单的详细说明或备注信息..."
          />
        </div>

        <div className="pt-8 mt-8 flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => navigate('/orders')}
            className="px-6 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-[#1f2028] border border-gray-200 dark:border-[#2e303a] rounded-lg hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition-colors"
          >
            取消
          </button>
          <button
            type="submit"
            className="flex items-center px-6 py-2.5 text-sm font-medium text-white bg-[#0f172a] dark:bg-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            <Save className="w-4 h-4 mr-2" />
            保存订单
          </button>
        </div>
      </form>
    </div>
  );

  const renderWorkflowConfig = () => (
    <div className="bg-white dark:bg-[#16171d] rounded-2xl shadow-sm border border-gray-100 dark:border-[#2e303a] p-10 w-full max-w-3xl mx-auto mt-4">
      <div className="text-center py-12 text-gray-500">
        <Workflow className="w-12 h-12 mx-auto text-gray-300 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">工作流配置</h3>
        <p>在此配置订单的具体流转步骤、审批节点和自动化动作。（功能开发中）</p>
      </div>
    </div>
  );

  const renderFilesConfig = () => (
    <div className="bg-white dark:bg-[#16171d] rounded-2xl shadow-sm border border-gray-100 dark:border-[#2e303a] p-10 w-full max-w-3xl mx-auto mt-4">
      <div className="text-center py-12 text-gray-500">
        <FolderOpen className="w-12 h-12 mx-auto text-gray-300 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">订单基本文件信息</h3>
        <p>管理该订单需要收集和提供的基础文件清单。（功能开发中）</p>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-[#fcfaf5] dark:bg-[#121212] text-gray-900 dark:text-gray-100">
      
      {/* 左侧导航栏 - 固定在全屏布局中 */}
      <aside className="w-64 h-screen border-r border-[#f0ece1] dark:border-[#2e303a] bg-[#fcfaf5] dark:bg-[#16171d] flex flex-col shrink-0">
        <div className="flex items-center px-6 py-6 border-b border-[#f0ece1] dark:border-[#2e303a]">
          <button 
            onClick={() => navigate('/orders')}
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
              新增订单
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
              订单基本信息
            </button>

            <button 
              onClick={() => setActiveTab('workflow')}
              className={`w-full flex items-center px-4 py-3 my-1 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'workflow'
                  ? 'text-primary bg-blue-50 dark:bg-blue-900/20'
                  : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#2a2a2a]'
              }`}
            >
              <Workflow className="w-5 h-5 mr-3" />
              工作流配置
            </button>

            <button 
              onClick={() => setActiveTab('files')}
              className={`w-full flex items-center px-4 py-3 my-1 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'files'
                  ? 'text-primary bg-blue-50 dark:bg-blue-900/20'
                  : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#2a2a2a]'
              }`}
            >
              <FolderOpen className="w-5 h-5 mr-3" />
              订单基本文件信息
            </button>
          </div>
        </nav>
      </aside>

      {/* 右侧主内容区域 */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden bg-[#fcfaf5] dark:bg-[#121212] relative">
        <header className="bg-[#fcfaf5] dark:bg-[#16171d] border-b border-[#f0ece1] dark:border-[#2e303a] px-8 py-5 flex items-center justify-between shadow-sm">
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {activeTab === 'basic' ? '创建新订单' : activeTab === 'workflow' ? '工作流配置' : '订单基本文件信息'}
            </h1>
            <p className="text-sm text-gray-500">
              {activeTab === 'basic' ? '填写订单的基本信息以创建一个新的业务流程。' : activeTab === 'workflow' ? '配置订单的具体流转步骤和审批节点。' : '管理该订单需要收集和提供的基础文件清单。'}
            </p>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-8">
          {activeTab === 'basic' && renderBasicForm()}
          {activeTab === 'workflow' && renderWorkflowConfig()}
          {activeTab === 'files' && renderFilesConfig()}
        </main>
      </div>
    </div>
  );
};

export default OrderForm;