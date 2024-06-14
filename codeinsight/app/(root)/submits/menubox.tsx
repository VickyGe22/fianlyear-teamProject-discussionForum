import React, { useState } from 'react';
import CustomDialog from './customDialog';

const MenuBox = ({
    selectedLanguage, // This is now passed as a prop from the parent component
    setSelectedLanguage, // This function is also passed from the parent to allow updating the languages list
}: {
    selectedLanguage: string;
    setSelectedLanguage: (language: string) => void;
}) => {
  const [languages, setLanguages] = useState(['','Python', 'C', 'C++', 'C#', 'Java', 'JavaScript']);
  const [showCustomDialog, setShowCustomDialog] = useState(false);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    console.log(value);
    if (value === 'other') {
      setShowCustomDialog(true);
    } else {
      setSelectedLanguage(value);
    }
  };

  const handleAddCustomOption = (customLanguage: string) => {
    if (!languages.includes(customLanguage)) {
      setLanguages([...languages, customLanguage]);
    }
    setSelectedLanguage(customLanguage);
    setShowCustomDialog(false); // Close the custom dialog
  };

  const handleCloseCustomDialog = () => {
    setShowCustomDialog(false);
  };

  return (
    <div>
      <div className="flex flex-col">
        {/* Language selection */}
        <div className="flex flex-col mb-4">
          <label className="block text-xl text-gray-800 font-medium mb-1" htmlFor="languages">
            Languages <span className="text-rose-500">*</span>
          </label>
          <select
            id="languages"
            className="form-select text-xl py-2"
            value={selectedLanguage}
            onChange={handleLanguageChange}
            required
          >
            {languages.map((language, index) => (
              <option key={index} value={language}>
                {language}
              </option>
            ))}
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      
      {/* Custom dialog */}
      {showCustomDialog && (
        <CustomDialog onClose={handleCloseCustomDialog} onAddCustomOption={handleAddCustomOption} />
      )}
    </div>
  );
};

export default MenuBox;
