import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const ClientModal = ({ isOpen, onClose, onSubmit, client }) => {
  const [formData, setFormData] = useState({
    name: '',
    passportNumber: '',
    chineseId: '',
    gender: '男',
    maritalStatus: '单身',
    nationality: '',
    address: '',
    postalCode: '',
    occupation: '',
    nieNumber: '',
    birthDate: '',
    birthPlace: '',
    contactPhone: '',
    email: '',
    fatherName: '',
    motherName: ''
  });

  useEffect(() => {
    if (client) {
      setFormData({ ...formData, ...client });
    } else {
      setFormData({
        name: '',
        passportNumber: '',
        chineseId: '',
        gender: '男',
        maritalStatus: '单身',
        nationality: '',
        address: '',
        postalCode: '',
        occupation: '',
        nieNumber: '',
        birthDate: '',
        birthPlace: '',
        contactPhone: '',
        email: '',
        fatherName: '',
        motherName: ''
      });
    }
  }, [client, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-[#1e1e1e] w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl shadow-xl border border-gray-100 dark:border-[#333]">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-[#333]">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            {client ? '编辑客户档案' : '新增客户档案'}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-[#333] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <form id="client-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-orange-50 dark:bg-orange-900/20 text-orange-800 dark:text-orange-300 p-3 rounded-lg text-sm mb-6 border border-orange-100 dark:border-orange-900/30">
              *请填写以下个人信息。这些信息将用于 EX 表单 & TASA790 表格 & 签证申请表。
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  名字 <span className="text-gray-400 text-xs font-normal">(拼音填写，名在前，姓在后)</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                  required
                />
              </div>

              {/* Passport */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  护照号
                </label>
                <input
                  type="text"
                  name="passportNumber"
                  value={formData.passportNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                  required
                />
              </div>

              {/* Chinese ID */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  中国身份证号码
                </label>
                <input
                  type="text"
                  name="chineseId"
                  value={formData.chineseId}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  性别
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                >
                  <option value="男">男</option>
                  <option value="女">女</option>
                </select>
              </div>

              {/* Marital Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  婚姻状况
                </label>
                <select
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                >
                  <option value="单身">单身</option>
                  <option value="已婚">已婚</option>
                  <option value="丧偶">丧偶</option>
                  <option value="离异">离异</option>
                </select>
              </div>

              {/* Nationality */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  国籍
                </label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                />
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  住址
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                />
              </div>

              {/* Postal Code */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  邮编
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                />
              </div>

              {/* Occupation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  职业
                </label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                />
              </div>

              {/* NIE Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  NIE号 <span className="text-gray-400 text-xs font-normal">(西班牙外国人身份证号码，没有的话不用填写)</span>
                </label>
                <input
                  type="text"
                  name="nieNumber"
                  value={formData.nieNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                />
              </div>

              {/* Contact Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  联系电话
                </label>
                <input
                  type="text"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                />
              </div>

              {/* Birth Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  出生日期
                </label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                />
              </div>

              {/* Birth Place */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  出生地
                </label>
                <input
                  type="text"
                  name="birthPlace"
                  value={formData.birthPlace}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email 电子邮箱
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                />
              </div>

              {/* Father's Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  父亲姓名
                </label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                />
              </div>

              {/* Mother's Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  母亲姓名
                </label>
                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-200 dark:border-[#333] rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="px-6 py-4 border-t border-gray-100 dark:border-[#333] flex justify-end space-x-3 bg-gray-50 dark:bg-[#16171d] rounded-b-2xl">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-[#2a2a2a] border border-gray-200 dark:border-[#444] rounded-lg hover:bg-gray-50 dark:hover:bg-[#333] transition-colors"
          >
            取消
          </button>
          <button
            form="client-form"
            type="submit"
            className="px-5 py-2.5 text-sm font-medium text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            保存档案
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientModal;
