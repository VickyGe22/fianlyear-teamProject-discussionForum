import React, { useState } from 'react';
import CustomDialog from './CustomDialog';


const MenuBox1 = ({
    selectedLevel, // This is now passed as a prop from the parent component
    setSelectedLevel, // This function is also passed from the parent to allow updating the languages list
}: {
    selectedLevel: string;
    setSelectedLevel: (level: string) => void;
}) => {
    const [levels, setLevels] = useState(['','Bachelor-cs1', 'Bachelor-cs2', 'Bachelor-cs3', 'Bachelor-cs4', 'Master-cs1', 'Master-cs2']);
    const [showCustomDialog1, setShowCustomDialog1] = useState(false);

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        console.log(selectedLevel);
        if (value === 'other') {
            setShowCustomDialog1(true);
        } else {
            setSelectedLevel(value);
        }
    };

    const handleAddCustomOption = (customLevel:string) => {
        setLevels([...levels, customLevel]);
        setSelectedLevel(customLevel);
        setShowCustomDialog1(false); // 关闭自定义对话框
    };


    const handleCloseCustomDialog = () => {
        setShowCustomDialog1(false);
    };

    return (
        <div>
        {/* 不展开的话用justify-left */}
            <div className="flex flex-col">
                {/* level*/}
                <div className="flex flex-col  mb-4">
                    <label className="block text-xl text-gray-800 font-medium mb-1" htmlFor="levels">
                        Levels <span className="text-rose-500">*</span>
                    </label>
                    <select
                        id="levels"
                        className="form-select text-xl py-2"
                        value={selectedLevel}
                        onChange={handleLanguageChange}
                        required
                    >
                        {levels.map((level, index) => (
                            <option key={index} value={level}>
                                {level}
                            </option>
                        ))}
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
            
            {/* 自定义对话框 */}
            {showCustomDialog1 && (
                <CustomDialog onClose={handleCloseCustomDialog} onAddCustomOption={handleAddCustomOption} />
            )}

        </div>
    );
};

export default MenuBox1;
