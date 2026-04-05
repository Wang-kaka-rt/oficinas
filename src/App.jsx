import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Finance from './pages/Finance';
import Categories from './pages/Categories';
import CategoryForm from './pages/CategoryForm';
import Personalize from './pages/Personalize';
import CompanyInfo from './pages/CompanyInfo';

function App() {
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark') || 
                   localStorage.getItem('theme') === 'dark';
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="clients" element={<div className="p-4 text-gray-900 dark:text-white">客户档案 (待开发)</div>} />
        <Route path="finance" element={<Finance />} />
        <Route path="settings/company" element={<CompanyInfo />} />
        <Route path="settings/categories" element={<Categories />} />
        <Route path="settings/personalize" element={<Personalize />} />
        <Route path="settings/*" element={<div className="p-4 text-gray-900 dark:text-white">系统设置 (待开发)</div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
      
      {/* 独立于 Layout 的全屏页面 */}
      <Route path="/settings/categories/new" element={<CategoryForm />} />
      <Route path="/settings/categories/:id" element={<CategoryForm />} />
    </Routes>
  );
}

export default App;
