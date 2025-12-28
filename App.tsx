import React, { useState, useMemo, useEffect } from 'react';
import { rawData } from './data';
import { groupData, fillMissingDurations } from './utils';
import Sidebar from './components/Sidebar';
import ProtocolCard from './components/ProtocolCard';
import CategoryCard from './components/CategoryCard';
import DownloadFooter from './components/DownloadFooter';
import GeneralSettingsView from './components/GeneralSettingsView';
import { Protocol } from './types';

// Map Categories to vibrant Tailwind Gradients
const CATEGORY_STYLES: Record<string, string> = {
  "Head": "from-blue-500 to-cyan-400",
  "Spine": "from-violet-600 to-indigo-500",
  "Breast": "from-pink-500 to-rose-400",
  "Abdomen": "from-emerald-500 to-teal-400",
  "Pelvis": "from-fuchsia-600 to-purple-500",
  "Upper Extremity": "from-orange-400 to-amber-400",
  "Lower Extremity": "from-teal-500 to-green-400",
  "Angio": "from-red-500 to-orange-500",
  "Whole Body": "from-sky-500 to-blue-600",
  "Heart": "from-rose-600 to-red-500",
  "TMJ": "from-yellow-500 to-orange-400",
  "peripheral angiography": "from-red-600 to-pink-600",
};

const DEFAULT_GRADIENT = "from-slate-500 to-slate-400";

const App: React.FC = () => {
  // Enrich data by filling in missing durations (e.g. for liverfat sequence issue)
  const enrichedData = useMemo(() => fillMissingDurations(rawData), []);
  
  const groupedData = useMemo(() => groupData(enrichedData), [enrichedData]);
  const categories = Object.keys(groupedData).sort();

  // Initialize with 'ALL' to show the Category Dashboard
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [activeSubCategory, setActiveSubCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');

  // Get current subcategories for the mobile menu
  const currentSubCategories = useMemo(() => {
    if (activeCategory === 'ALL' || activeCategory === 'GENERAL_SETTINGS' || !groupedData[activeCategory]) return [];
    return Object.keys(groupedData[activeCategory]).sort();
  }, [activeCategory, groupedData]);

  // Auto-select first subcategory when entering a specific category
  useEffect(() => {
    if (activeCategory === 'ALL' || activeCategory === 'GENERAL_SETTINGS') {
      setActiveSubCategory('');
      return;
    }

    if (activeCategory && groupedData[activeCategory]) {
      const subs = Object.keys(groupedData[activeCategory]).sort();
      if (subs.length > 0 && !subs.includes(activeSubCategory)) {
        setActiveSubCategory(subs[0]);
      }
    }
  }, [activeCategory, groupedData, activeSubCategory]);

  // Filter logic
  const filteredProtocols = useMemo(() => {
    // 1. Search Mode: Search across enriched data
    if (searchQuery.trim().length > 0) {
      const query = searchQuery.toLowerCase();
      return enrichedData.filter(p => 
        p.protocol_name.toLowerCase().includes(query) ||
        p.sequences.some(s => s.name.toLowerCase().includes(query)) ||
        (p.additional_info && p.additional_info.toLowerCase().includes(query))
      );
    }

    // 2. Dashboard Mode (ALL) or Settings: Return empty list (handled by dedicated render view)
    if (activeCategory === 'ALL' || activeCategory === 'GENERAL_SETTINGS') {
      return []; 
    }

    // 3. Category View: Return protocols for active category/subcategory
    if (!activeCategory || !activeSubCategory) return [];
    
    return groupedData[activeCategory]?.[activeSubCategory] || [];
  }, [activeCategory, activeSubCategory, searchQuery, groupedData, enrichedData]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setSearchQuery('');
  };

  const handleBackToDashboard = () => {
    setActiveCategory('ALL');
    setActiveSubCategory('');
    setSearchQuery('');
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* Sidebar - Desktop Only */}
      <Sidebar 
        data={groupedData}
        activeCategory={activeCategory}
        setActiveCategory={(cat) => {
            setActiveCategory(cat);
            setSearchQuery('');
        }}
        activeSubCategory={activeSubCategory}
        setActiveSubCategory={(sub) => {
            setActiveSubCategory(sub);
            setSearchQuery('');
        }}
        className="w-64 hidden md:block z-20"
      />

      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-4 md:px-8 py-5 shadow-sm z-10 flex-shrink-0">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3 md:gap-4 flex-1">
                   {/* Back Button */}
                   {activeCategory !== 'ALL' && !searchQuery && (
                       <button 
                         onClick={handleBackToDashboard}
                         className="p-2 rounded-full bg-slate-100 hover:bg-indigo-100 text-slate-500 hover:text-indigo-600 transition-colors group border border-slate-200 flex-shrink-0"
                         title="Back to Dashboard"
                       >
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                         </svg>
                       </button>
                   )}

                   <div className="flex-1 overflow-hidden">
                       {searchQuery ? (
                            <h1 className="text-xl md:text-2xl font-bold text-slate-800 truncate">Search Results</h1>
                       ) : activeCategory === 'ALL' ? (
                           <>
                            <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 truncate">
                              MRI Protocols
                            </h1>
                            <p className="text-slate-500 text-xs md:text-sm mt-1 truncate">Select a clinical category</p>
                           </>
                       ) : activeCategory === 'GENERAL_SETTINGS' ? (
                           <>
                            <h1 className="text-2xl md:text-3xl font-bold text-slate-800 truncate">General Settings</h1>
                            <p className="text-slate-500 text-xs md:text-sm mt-1 truncate">Sequence configuration parameters</p>
                           </>
                       ) : (
                           <>
                            <h1 className="text-xl md:text-2xl font-bold text-slate-800 truncate">{activeCategory}</h1>
                            {/* Hide subcategory subtitle on mobile as we have the nav bar now */}
                            <p className="text-indigo-600 font-medium text-sm mt-1 hidden md:block truncate">{activeSubCategory}</p>
                           </>
                       )}
                   </div>
                </div>
                
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <div className="relative flex-1 md:flex-none">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="pl-10 pr-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-full md:w-80 text-sm transition-shadow shadow-sm focus:shadow-md"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Mobile Settings Button */}
                    <button 
                         onClick={() => {
                             setActiveCategory('GENERAL_SETTINGS');
                             setSearchQuery('');
                         }}
                         className="md:hidden p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200 transition-colors"
                         title="General Settings"
                    >
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                         </svg>
                    </button>
                </div>
            </div>
        </header>

        {/* Mobile Subcategory Navigation (Visible only on mobile/tablet when inside a category) */}
        {activeCategory !== 'ALL' && activeCategory !== 'GENERAL_SETTINGS' && !searchQuery && currentSubCategories.length > 0 && (
            <div className="md:hidden bg-white border-b border-slate-200 shadow-sm z-10">
                <div className="flex overflow-x-auto px-4 py-3 gap-2 scrollbar-hide">
                    {currentSubCategories.map((sub) => (
                        <button
                            key={sub}
                            onClick={() => setActiveSubCategory(sub)}
                            className={`flex-none px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors border ${
                                activeSubCategory === sub
                                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                            }`}
                        >
                            {sub}
                        </button>
                    ))}
                </div>
            </div>
        )}

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar bg-slate-50/50">
            {/* 1. Category Dashboard (Home Screen) */}
            {activeCategory === 'ALL' && !searchQuery && (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 animate-fadeIn">
                    {categories.map((category) => {
                        const subCats = Object.keys(groupedData[category]);
                        const totalProtocols = Object.values(groupedData[category]).flat().length;
                        const gradient = CATEGORY_STYLES[category] || DEFAULT_GRADIENT;

                        return (
                            <CategoryCard 
                                key={category}
                                title={category}
                                count={totalProtocols}
                                subCategories={subCats.length}
                                gradient={gradient}
                                onClick={() => handleCategoryClick(category)}
                            />
                        );
                    })}
                </div>
            )}
            
            {/* 2. General Settings View */}
            {activeCategory === 'GENERAL_SETTINGS' && !searchQuery && (
                 <GeneralSettingsView />
            )}

            {/* 3. Protocol List View (Category or Search) */}
            {(activeCategory !== 'ALL' && activeCategory !== 'GENERAL_SETTINGS' || searchQuery) && (
                <>
                    {filteredProtocols.length === 0 ? (
                        <div className="text-center py-24 animate-fadeIn">
                            <div className="inline-flex items-center justify-center p-6 rounded-full bg-slate-100 text-slate-300 mb-6">
                                <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-medium text-slate-700">No protocols found</h3>
                            <p className="text-slate-500 mt-2">Try adjusting your search terms or navigate back home.</p>
                            {searchQuery && (
                                <button 
                                    onClick={() => setSearchQuery('')}
                                    className="mt-6 text-indigo-600 font-medium hover:text-indigo-800 underline underline-offset-2"
                                >
                                    Clear search
                                </button>
                            )}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 animate-fadeIn">
                            {filteredProtocols.map((protocol, idx) => (
                                <ProtocolCard key={`${protocol.protocol_name}-${idx}`} protocol={protocol} />
                            ))}
                        </div>
                    )}
                </>
            )}

            {/* Download Options Footer */}
            <DownloadFooter data={enrichedData} />
        </div>
      </main>
    </div>
  );
};

export default App;