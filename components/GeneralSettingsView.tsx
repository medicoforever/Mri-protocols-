import React, { useState } from 'react';
import { generalSettings } from '../data';

const GeneralSettingsView: React.FC = () => {
  // Access the root structure directly. 
  // Adjusted to match new data structure: Protocol_Parameters
  const rootData = generalSettings.Protocol_Parameters;
  const categories = Object.keys(rootData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // The data for the currently selected tab (e.g., "Routine" object)
  const currentCategoryData = (rootData as any)[activeCategory];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden h-full flex flex-col">
      {/* Tabs Navigation (Level 1: Routine, Resolution, Geometry...) */}
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="flex overflow-x-auto scrollbar-hide px-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-4 text-sm font-medium whitespace-nowrap transition-colors border-b-2 outline-none focus:text-indigo-800 ${
                activeCategory === category
                  ? 'border-indigo-600 text-indigo-600 bg-white'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-100'
              }`}
            >
              {category.replace(/_/g, ' ')}
            </button>
          ))}
        </div>
      </div>
      
      {/* Content Area */}
      <div className="p-6 overflow-y-auto custom-scrollbar flex-1 bg-slate-50/50">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Iterate over Sub-sections (Level 2: Common, Dynamic, AutoAlign...) */}
            {Object.entries(currentCategoryData).map(([subSectionKey, subSectionData]: [string, any]) => (
                <div key={subSectionKey} className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
                    <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                        <h3 className="font-semibold text-slate-700">{subSectionKey.replace(/_/g, ' ')}</h3>
                        {/* Visual indicator if empty */}
                        {(!subSectionData || Object.keys(subSectionData).length === 0) && (
                           <span className="text-xs text-slate-400 bg-slate-200 px-2 py-0.5 rounded">Empty</span>
                        )}
                    </div>
                    <div className="p-0 flex-1">
                        {(!subSectionData || Object.keys(subSectionData).length === 0) ? (
                            <div className="p-6 text-center text-slate-400 italic text-sm">
                                No parameters configured for this section.
                            </div>
                        ) : (
                            <table className="w-full text-sm">
                                <tbody className="divide-y divide-slate-50">
                                    {/* Iterate over Settings (Level 3: Slice_Group, Position...) */}
                                    {Object.entries(subSectionData).map(([settingKey, settingValue]) => (
                                        <tr key={settingKey} className="hover:bg-indigo-50/30 transition-colors group">
                                            <td className="py-3 pl-4 pr-2 text-slate-500 font-medium w-1/2 group-hover:text-indigo-600 transition-colors">
                                                {settingKey.replace(/_/g, ' ')}
                                            </td>
                                            <td className="py-3 pl-2 pr-4 text-slate-800 text-right font-mono text-xs sm:text-sm">
                                                {settingValue === null ? (
                                                    <span className="text-slate-300 select-none">-</span>
                                                ) : settingValue === "" ? (
                                                    <span className="text-slate-300 italic text-xs">Empty</span>
                                                ) : (
                                                    // Handle object values if any exist deep down, otherwise stringify
                                                    typeof settingValue === 'object' ? JSON.stringify(settingValue) : String(settingValue)
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GeneralSettingsView;