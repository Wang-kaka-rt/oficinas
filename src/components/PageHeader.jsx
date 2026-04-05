const PageHeader = ({ title, subtitle, rightElement }) => {
  return (
    <div className="flex justify-between items-start mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{title}</h1>
        <p className="text-xs text-gray-500 font-medium tracking-wider uppercase">{subtitle}</p>
      </div>
      <div className="flex items-center space-x-4">
        {rightElement}
      </div>
    </div>
  );
};

export default PageHeader;
