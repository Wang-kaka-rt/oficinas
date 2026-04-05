import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Save, Upload } from 'lucide-react';

const CompanyInfo = () => {
  const [formData, setFormData] = useState({
    companyName: 'NexLegal 律所',
    taxId: '91440000X12345678Y',
    address: '广东省深圳市南山区科技园深南大道10000号',
    contactNumber: '0755-88888888',
    email: 'contact@nexlegal.com',
    website: 'https://www.nexlegal.com'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saved company info:', formData);
    // 这里可以接入 API 保存数据
  };

  return (
    <div>
      <PageHeader title="公司信息" subtitle="LAW FIRM MANAGEMENT OS" />
      
      <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-sm border border-gray-100 dark:border-[#333] p-8 max-w-4xl">
        <div className="mb-8 border-b border-gray-100 dark:border-[#333] pb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">基础信息</h2>
          <p className="text-sm text-gray-500">管理律所对外的基本展示信息与财务相关信息。</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Logo 上传区域 */}
          <div className="flex items-start space-x-8">
            <div className="flex-shrink-0">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                公司 Logo
              </label>
              <div className="w-24 h-24 bg-gray-50 dark:bg-[#2a2a2a] border-2 border-dashed border-gray-200 dark:border-[#444] rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-primary dark:hover:border-primary transition-colors">
                <Upload className="w-6 h-6 text-gray-400 mb-1" />
                <span className="text-xs text-gray-500">上传图片</span>
              </div>
            </div>
            <div className="flex-1 pt-9">
              <p className="text-sm text-gray-500 mb-2">建议上传 1:1 比例的 PNG 或 JPG 格式图片，</p>
              <p className="text-sm text-gray-500">文件大小不超过 2MB。该 Logo 将显示在发票和左侧导航栏中。</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                公司名称 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="taxId" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                统一社会信用代码 / 税号 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="taxId"
                name="taxId"
                value={formData.taxId}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                公司地址 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                联系电话
              </label>
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                对外邮箱
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                官方网站
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
              />
            </div>
          </div>

          <div className="pt-6 mt-6 flex justify-end border-t border-gray-100 dark:border-[#333]">
            <button
              type="submit"
              className="flex items-center px-6 py-2.5 text-sm font-medium text-white bg-[#0f172a] dark:bg-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              <Save className="w-4 h-4 mr-2" />
              保存设置
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyInfo;