'use client'; 
import React, { useState } from 'react';
import CustomDialog from './CustomDialog'; 

const MenuBox2 = () => {
    const [types, settypes] = useState(['Assignment', 'Exam', 'Quiz', 'Group Project']);
    const [selectedtype, setSelectedtype] = useState('');
    const [showCustomDialog2, setShowCustomDialog2] = useState(false);

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        if (value === 'other') {
            setShowCustomDialog2(true);
        } else {
            setSelectedtype(value);
        }
    };

    const handleAddCustomOption = (customLanguage:string) => {
        settypes([...types, customLanguage]);
        setSelectedtype(customLanguage);
        setShowCustomDialog2(false); // 关闭自定义对话框
    };


    const handleCloseCustomDialog = () => {
        setShowCustomDialog2(false);
    };

    return (
        <div>
        {/* 不展开的话用justify-left */}
            <div className="flex flex-col">
                {/* type*/}
                <div className="flex flex-col  mb-4">
                    <label className="block text-sm text-gray-800 font-medium mb-1" htmlFor="types">
                    Types <span className="text-rose-500">*</span>
                    </label>
                    <select
                        id="types"
                        className="form-select text-sm py-2"
                        value={selectedtype}
                        onChange={handleLanguageChange}
                        required
                    >
                        {types.map((type, index) => (
                            <option key={index} value={type}>
                                {type}
                            </option>
                        ))}
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
            
            {/* 自定义对话框 */}
            {showCustomDialog2 && (
                <CustomDialog onClose={handleCloseCustomDialog} onAddCustomOption={handleAddCustomOption} />
            )}

        </div>
    );
};

export default MenuBox2;
