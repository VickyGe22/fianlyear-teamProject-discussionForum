'use client'

import React from 'react';

interface SidebarProps {
  categories: {
    levels: string[];
    languages: string[];
    types: string[];
  };
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ categories, selectedCategories, onCategoryChange }) => {
  return (
    <aside className="mb-8 md:mb-0 md:w-64 lg:w-72 md:ml-12 lg:ml-20 md:shrink-0 md:order-1">
      <div data-sticky="" data-margin-top="32" data-sticky-for="768" data-sticky-wrap="">
        <div className="relative bg-gray-50 rounded-xl border border-gray-200 p-5">
          <div className="absolute top-5 right-5 leading-none">
            <button className="text-sm font-medium text-indigo-500 hover:underline">Clear</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
            {/* Group 1 */}
            <div>
              <div className="text-sm text-gray-800 font-semibold mb-3">Category</div>
              <div className="mb-4">
                <div className="text-sm text-gray-600 font-semibold mb-2">Levels</div>
                <ul className="space-y-2">
                  {categories.levels.map(level => (
                    <li key={level}>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox"
                          checked={selectedCategories.includes(level)}
                          onChange={() => onCategoryChange(level)}
                        />
                        <span className="text-sm text-gray-600 ml-2">{level}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Group 2 */}
            <div>
              <div className="text-sm text-gray-800 font-semibold mb-3">Languages</div>
              <ul className="space-y-2">
                {categories.languages.map(language => (
                  <li key={language}>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        checked={selectedCategories.includes(language)}
                        onChange={() => onCategoryChange(language)}
                      />
                      <span className="text-sm text-gray-600 ml-2">{language}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            {/* Group 3 */}
            <div>
              <div className="text-sm text-gray-800 font-semibold mb-3">Types</div>
              <ul className="space-y-2">
                {categories.types.map(type => (
                  <li key={type}>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        checked={selectedCategories.includes(type)}
                        onChange={() => onCategoryChange(type)}
                      />
                      <span className="text-sm text-gray-600 ml-2">{type}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;