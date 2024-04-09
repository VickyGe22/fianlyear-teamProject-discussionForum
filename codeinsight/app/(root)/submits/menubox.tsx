
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
import CustomDialog from './customDialog'; 

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
