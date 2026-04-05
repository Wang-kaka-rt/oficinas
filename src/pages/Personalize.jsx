import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Sun, Moon } from 'lucide-react';

const Personalize = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light';
  });

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div>
      <PageHeader 
        title="个性化设置" 
        subtitle="选择你喜欢的系统主题界面，设置会自动保存。" 
      />
      
      <div className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Light Theme Card */}
          <button 
            onClick={() => handleThemeChange('light')}
            className={`flex flex-col items-center justify-center p-8 rounded-xl border-2 transition-all ${
              theme === 'light' 
                ? 'border-primary bg-blue-50 dark:bg-blue-900/10' 
                : 'border-gray-200 dark:border-[#333] hover:border-primary/50'
            }`}
          >
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${theme === 'light' ? 'bg-white dark:bg-black shadow-sm' : 'bg-gray-100 dark:bg-[#2a2a2a]'}`}>
              <Sun className={`w-8 h-8 ${theme === 'light' ? 'text-primary' : 'text-gray-400'}`} />
            </div>
            <span className={`font-medium ${theme === 'light' ? 'text-primary' : 'text-gray-600 dark:text-gray-400'}`}>
              浅色模式
            </span>
          </button>

          {/* Dark Theme Card */}
          <button 
            onClick={() => handleThemeChange('dark')}
            className={`flex flex-col items-center justify-center p-8 rounded-xl border-2 transition-all ${
              theme === 'dark' 
                ? 'border-primary bg-blue-50 dark:bg-blue-900/10' 
                : 'border-gray-200 dark:border-[#333] hover:border-primary/50'
            }`}
          >
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${theme === 'dark' ? 'bg-white dark:bg-black shadow-sm' : 'bg-gray-100 dark:bg-[#2a2a2a]'}`}>
              <Moon className={`w-8 h-8 ${theme === 'dark' ? 'text-primary' : 'text-gray-400'}`} />
            </div>
            <span className={`font-medium ${theme === 'dark' ? 'text-primary' : 'text-gray-600 dark:text-gray-400'}`}>
              深色模式
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Personalize;
