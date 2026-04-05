import { useState } from 'react';
import { useNavigate, useParams, NavLink } from 'react-router-dom';
import { ArrowLeft, Save, Briefcase, FileText, ClipboardList, Plus, Edit, Trash2, X, GripVertical } from 'lucide-react';

const CategoryForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [activeTab, setActiveTab] = useState('basic'); // 'basic' or 'custom-forms'

  const [formData, setFormData] = useState(() => {
    if (isEdit) {
      const mockData = [
        { title: '香港优才/高才', description: '处理香港优才、高才通相关业务申请与跟进。' },
        { title: '股权纠纷诉讼', description: '处理公司股权纠纷、民事诉讼等业务代理。' },
        { title: '企业年度顾问', description: '提供企业年度法律顾问服务，包括合同审查、风险控制等。' }
      ];
      return mockData[parseInt(id)] || mockData[0];
    }
    return {
      title: '',
      description: ''
    };
  });

  // Custom Forms State
  const [customForms] = useState([
    { id: 1, name: '客户基础信息表', fieldCount: 8, updatedAt: '2026-04-01' },
    { id: 2, name: '资产申报附属表', fieldCount: 15, updatedAt: '2026-04-03' }
  ]);
  
  // Form Modal State
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [currentCustomForm, setCurrentCustomForm] = useState({ name: '', fields: [] });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save logic here (e.g., API call)
    console.log('Saving:', formData);
    navigate('/settings/categories');
  };

  const openFormModal = (formItem = null) => {
    if (formItem) {
      setCurrentCustomForm({ ...formItem });
    } else {
      setCurrentCustomForm({ name: '', fields: [] });
    }
    setIsFormModalOpen(true);
  };

  const closeFormModal = () => {
    setIsFormModalOpen(false);
    setCurrentCustomForm({ name: '', fields: [] });
  };

  const renderBasicForm = () => (
    <div className="bg-white dark:bg-[#16171d] rounded-2xl shadow-sm border border-gray-100 dark:border-[#2e303a] p-10 w-full max-w-3xl mx-auto mt-4">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            分类名称 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-200 dark:border-[#2e303a] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
            placeholder="例如：投资移民"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            描述说明
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-200 dark:border-[#2e303a] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white resize-none"
            placeholder="添加关于该业务分类的详细说明..."
          />
        </div>

        <div className="pt-8 mt-8 flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => navigate('/settings/categories')}
            className="px-6 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-[#1f2028] border border-gray-200 dark:border-[#2e303a] rounded-lg hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition-colors"
          >
            取消
          </button>
          <button
            type="submit"
            className="flex items-center px-6 py-2.5 text-sm font-medium text-white bg-[#0f172a] dark:bg-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            <Save className="w-4 h-4 mr-2" />
            {isEdit ? '保存更改' : '创建分类'}
          </button>
        </div>
      </form>
    </div>
  );

  const renderCustomForms = () => (
    <div className="bg-white dark:bg-[#16171d] rounded-2xl shadow-sm border border-gray-100 dark:border-[#2e303a] p-10 w-full max-w-4xl mx-auto mt-4">
      <div className="flex flex-col space-y-3">
        {customForms.map((form) => (
          <div 
            key={form.id} 
            className="bg-gray-50 dark:bg-[#2a2a2a] rounded-xl border border-gray-100 dark:border-[#333] p-4 flex items-center justify-between hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                <ClipboardList className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">{form.name}</h3>
                <p className="text-sm text-gray-500">包含 {form.fieldCount} 个字段 · 最后更新 {form.updatedAt}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => openFormModal(form)}
                className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-[#444] rounded-lg"
              >
                <Edit className="w-4 h-4" />
              </button>
              <button 
                className="p-2 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-[#444] rounded-lg"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
        {customForms.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            暂无自定义表单，点击右上角新建。
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-[#fcfaf5] dark:bg-[#121212] text-gray-900 dark:text-gray-100">
      
      {/* 左侧导航栏 - 固定在全屏布局中 */}
      <aside className="w-64 h-screen border-r border-[#f0ece1] dark:border-[#2e303a] bg-[#fcfaf5] dark:bg-[#16171d] flex flex-col shrink-0">
        <div className="flex items-center px-6 py-6 border-b border-[#f0ece1] dark:border-[#2e303a]">
          <button 
            onClick={() => navigate('/settings/categories')}
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
              {isEdit ? "编辑分类" : "新增分类"}
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
              分类编辑
            </button>

            {/* 自定义表单只在编辑已有分类时显示（或者也可在新增时显示） */}
            <button 
              onClick={() => setActiveTab('custom-forms')}
              className={`w-full flex items-center px-4 py-3 my-1 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'custom-forms'
                  ? 'text-primary bg-blue-50 dark:bg-blue-900/20'
                  : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#2a2a2a]'
              }`}
            >
              <ClipboardList className="w-5 h-5 mr-3" />
              自定义表单
            </button>
          </div>
        </nav>
      </aside>

      {/* 右侧主内容区域 */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden bg-[#fcfaf5] dark:bg-[#121212] relative">
        <header className="bg-[#fcfaf5] dark:bg-[#16171d] border-b border-[#f0ece1] dark:border-[#2e303a] px-8 py-5 flex items-center justify-between shadow-sm">
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {activeTab === 'basic' ? (isEdit ? "编辑业务分类" : "新增业务分类") : "自定义表单"}
            </h1>
            <p className="text-sm text-gray-500">
              {activeTab === 'basic' ? "配置详细的分类信息以便于系统对案件进行更好的归档与统计。" : "为该分类配置专属的客户信息收集表或内部流转表单。"}
            </p>
          </div>
          {activeTab === 'custom-forms' && (
            <button 
              onClick={() => openFormModal()}
              className="flex items-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              <Plus className="w-4 h-4 mr-2" />
              新建表单
            </button>
          )}
        </header>
        
        <main className="flex-1 overflow-y-auto p-8">
          {activeTab === 'basic' ? renderBasicForm() : renderCustomForms()}
        </main>
      </div>

      {/* 表单编辑弹窗 Modal */}
      {isFormModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-xl w-full max-w-4xl flex flex-col max-h-[90vh] border border-gray-100 dark:border-[#333]">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-[#333]">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {currentCustomForm.id ? '编辑自定义表单' : '新建自定义表单'}
              </h3>
              <button 
                onClick={closeFormModal}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1 bg-gray-50 dark:bg-[#121212]">
              <div className="mb-6 bg-white dark:bg-[#1e1e1e] p-6 rounded-xl border border-gray-200 dark:border-[#333]">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  表单名称 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={currentCustomForm.name}
                  onChange={(e) => setCurrentCustomForm({...currentCustomForm, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-200 dark:border-[#333] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                  placeholder="例如：客户资产申报表"
                />
              </div>

              <div className="mb-4 flex justify-between items-center">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">表单字段设计</h4>
                <button className="text-sm text-primary font-medium hover:text-blue-700 flex items-center bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-lg transition-colors">
                  <Plus className="w-4 h-4 mr-1" /> 添加字段
                </button>
              </div>

              <div className="space-y-3">
                {/* 模拟的字段列表编辑器 */}
                {[1, 2, 3].map((fieldIdx) => (
                  <div key={fieldIdx} className="bg-white dark:bg-[#1e1e1e] p-4 rounded-xl border border-gray-200 dark:border-[#333] flex items-center gap-4 group">
                    <GripVertical className="w-5 h-5 text-gray-400 cursor-grab hover:text-gray-600" />
                    <div className="flex-1 grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">字段名称</label>
                        <input 
                          type="text" 
                          defaultValue={`自定义字段 ${fieldIdx}`}
                          className="w-full px-3 py-2 border border-gray-200 dark:border-[#333] rounded-lg text-sm bg-transparent dark:text-white focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">字段类型</label>
                        <select className="w-full px-3 py-2 border border-gray-200 dark:border-[#333] rounded-lg text-sm bg-transparent dark:text-white [&>option]:bg-white dark:[&>option]:bg-[#1e1e1e] focus:outline-none focus:ring-1 focus:ring-primary">
                          <option>单行文本</option>
                          <option>多行文本</option>
                          <option>单项选择</option>
                          <option>多项选择</option>
                          <option>日期选择</option>
                          <option>附件上传</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 ml-4 pt-4">
                      <label className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary w-4 h-4" defaultChecked={fieldIdx === 1} />
                        <span>必填项</span>
                      </label>
                      <button className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 dark:border-[#333] flex justify-end space-x-3 bg-white dark:bg-[#1e1e1e] rounded-b-2xl">
              <button
                onClick={closeFormModal}
                className="px-6 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-[#1f2028] border border-gray-200 dark:border-[#333] rounded-lg hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition-colors"
              >
                取消
              </button>
              <button
                onClick={closeFormModal}
                className="flex items-center px-6 py-2.5 text-sm font-medium text-white bg-[#0f172a] dark:bg-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                <Save className="w-4 h-4 mr-2" />
                保存表单设计
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default CategoryForm;
