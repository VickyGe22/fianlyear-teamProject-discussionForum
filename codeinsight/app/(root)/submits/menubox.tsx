
// const MenuBox = () => {
//     // Component logic
//     return <div>
       
//         <div className="flex justify-left">
//             {/* Languages */}
//             <div className="flex flex-col">
//                 <label className="block text-sm text-gray-800 font-medium mb-1" htmlFor="languages">
//                     Languages <span className="text-rose-500">*</span>
//                 </label>
//                 <select id="languages" className="form-select text-sm py-2" required>
//                     <option>Python</option>
//                     <option>C</option>
//                     <option>C++</option>
//                     <option>C#</option>
//                     <option>Java</option>
//                     <option>JavaScript</option>
//                 </select>
//             </div>
//             {/* Level */}
//             <div className="flex flex-col pl-10">
//                 <label className="block text-sm text-gray-800 mb-1" htmlFor="level">
//                     Level <span className="text-rose-500">*</span>
//                 </label>
//                 <select id="level" className="form-select text-sm py-2" required>
//                     <option>Bacholer-cs1</option>
//                     <option>Bacholer-cs2</option>
//                     <option>Bacholer-cs3</option>
//                     <option>Bacholer-cs4</option>
//                     <option>Master-cs1</option>
//                     <option>Master-cs2</option>
//                 </select>
//             </div>
//             {/* Type */}
//             <div className="flex flex-col pl-10">
//                 <label className="block text-sm text-gray-800 font-medium mb-1" htmlFor="level">
//                     Type <span className="text-rose-500">*</span>
//                 </label>
//                 <select id="Type" className="form-select text-sm py-2" required>
//                     <option>Assignment</option>
//                     <option>Exam</option>
//                     <option>Quizzes</option>
//                     <option>Group Project</option>
//                     <option>Code Repositories</option>
                    
//                 </select>
//             </div>

//         </div>



//     </div>;
//   };
  
//   export default MenuBox;

'use client'; 
import React, { useState } from 'react';
import CustomDialog from './CustomDialog'; 

const MenuBox = () => {
    const [languages, setLanguages] = useState(['Python', 'C', 'C++', 'C#', 'Java', 'JavaScript']);
    const [levels, setLevels] = useState(['Bacholer-cs1', 'Bacholer-cs2', 'Bacholer-cs3', 'Bacholer-cs4', 'Master-cs1', 'Master-cs2']);
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedLevels, setSelectedLevels] = useState('');
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
        <div className = "flex justify-left">
            <div className="flex justify-left">
                {/* language*/}
                <div className="flex flex-col">
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


            {/* level*/}
            <div className="flex justify-left pl-10">
                <div className="flex flex-col">
                    <label className="block text-sm text-gray-800 font-medium mb-1" htmlFor="levels">
                        Levels <span className="text-rose-500">*</span>
                    </label>
                    <select
                        id="levels"
                        className="form-select text-sm py-2"
                        value={selectedLevels}
                        onChange={handleLanguageChange}
                        required
                    >
                        {levels.map((levels, index) => (
                            <option key={index} value={levels}>
                                {levels}
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
