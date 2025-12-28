import React from 'react';

interface CategoryCardProps {
  title: string;
  count: number;
  subCategories: number;
  gradient: string;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, count, subCategories, gradient, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-left h-48 group w-full`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
      
      {/* Decorative circles */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-white opacity-10 rounded-full"></div>
      <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white opacity-10 rounded-full"></div>
      
      <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
        <div>
          <h3 className="text-2xl font-bold tracking-tight mb-1">{title}</h3>
          <p className="text-white/80 text-sm font-medium">{subCategories} sub-categories</p>
        </div>
        
        <div className="flex justify-between items-end">
          <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg">
            <span className="text-lg font-bold">{count}</span>
            <span className="text-xs uppercase ml-1 opacity-75">Protocols</span>
          </div>
          
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:text-indigo-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
};

export default CategoryCard;