
'use client'; 
import React, { useState } from 'react';
import CustomDialog from './CustomDialog'; 

const MenuBox = () => {
    const [languages, setLanguages] = useState(['Python', 'C', 'C++', 'C#', 'Java', 'JavaScript']);
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [showCustomDialog, setShowCustomDialog] = useState(false);

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        if (value === 'other') {
            setShowCustomDialog(true);
        } else {
            setSelectedLanguage(value);
        }
    };

    const handleAddCustomOption = (customLanguage:string) => {
        setLanguages([...languages, customLanguage]);
        setSelectedLanguage(customLanguage);
        setShowCustomDialog(false); // 关闭自定义对话框
    };


    const handleCloseCustomDialog = () => {
        setShowCustomDialog(false);
    };

    return (
        <div>
            <div className="flex flex-col">
                {/* language*/}
                <div className="flex flex-col mb-4">
                    <label className="block text-sm text-gray-800 font-medium mb-1" htmlFor="languages">
                        Languages <span className="text-rose-500">*</span>
                    </label>
                    <select
                        id="languages"
                        className="form-select text-sm py-2"
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
            
            {/* 自定义对话框 */}
            {showCustomDialog && (
                <CustomDialog onClose={handleCloseCustomDialog} onAddCustomOption={handleAddCustomOption} />
            )}

        </div>
    );
};

export default MenuBox;
