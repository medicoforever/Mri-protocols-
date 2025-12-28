import React from 'react';
import { GroupedData } from '../types';

interface SidebarProps {
  data: GroupedData;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  activeSubCategory: string;
  setActiveSubCategory: (cat: string) => void;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  data, 
  activeCategory, 
  setActiveCategory,
  activeSubCategory,
  setActiveSubCategory,
  className 
}) => {
  const categories = Object.keys(data).sort();

  return (
    <aside className={`bg-white border-r border-slate-200 h-screen overflow-y-auto custom-scrollbar sticky top-0 ${className}`}>
      <div className="p-6">
        <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          Protocol Viewer
        </h2>
        
        <nav className="space-y-1">
          <div className="mb-2">
            <button
              onClick={() => {
                setActiveCategory('ALL');
                setActiveSubCategory('');
              }}
              className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                activeCategory === 'ALL'
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              All Protocols
            </button>
          </div>

          <div className="mb-2">
            <button
              onClick={() => {
                setActiveCategory('GENERAL_SETTINGS');
                setActiveSubCategory('');
              }}
              className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                activeCategory === 'GENERAL_SETTINGS'
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              General Settings
            </button>
          </div>
          
          <div className="h-px bg-slate-200 my-2 mx-2"></div>

          {categories.map((category) => (
            <div key={category} className="mb-2">
              <button
                onClick={() => {
                   setActiveCategory(category);
                }}
                className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {category}
              </button>
              
              {/* Subcategories (only show if category is active) */}
              {activeCategory === category && (
                <div className="ml-4 mt-1 border-l-2 border-indigo-100 pl-2 space-y-1">
                  {Object.keys(data[category]).sort().map(subCat => (
                    <button
                      key={subCat}
                      onClick={() => setActiveSubCategory(subCat)}
                      className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors ${
                        activeSubCategory === subCat
                        ? 'text-indigo-600 font-medium bg-white shadow-sm'
                        : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      {subCat}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;