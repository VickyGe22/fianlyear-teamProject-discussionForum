import React, { useState } from 'react';
import CustomDialog from './customdialog'; 

const MenuBox2 = ({
    selectedtype, // This is now passed as a prop from the parent component
    setSelectedtype, // This function is also passed from the parent to allow updating the languages list
}: {
    selectedtype: string;
    setSelectedtype: (type: string) => void;
}) => {
    const [types, settypes] = useState(['','Assignment', 'Exam', 'Quiz', 'Group project']);
    const [showCustomDialog2, setShowCustomDialog2] = useState(false);

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        console.log(selectedtype);
        if (value === 'other') {
            setShowCustomDialog2(true);
        } else {
            setSelectedtype(value);
        }
    };

    const handleAddCustomOption = (customtype:string) => {
        if (!types.includes(customtype)) {
            settypes([...types, customtype]);
          }
        setSelectedtype(customtype);
        setShowCustomDialog2(false);
    };


    const handleCloseCustomDialog = () => {
        setShowCustomDialog2(false);
    };

    return (
        <div>
            <div className="flex flex-col">
                {/* type*/}
                <div className="flex flex-col  mb-4">
                    <label className="block text-xl text-gray-800 font-medium mb-1" htmlFor="types">
                    Types <span className="text-rose-500">*</span>
                    </label>
                    <select
                        id="types"
                        className="form-select text-xl py-2"
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
            
            {showCustomDialog2 && (
                <CustomDialog onClose={handleCloseCustomDialog} onAddCustomOption={handleAddCustomOption} />
            )}

        </div>
    );
};

export default MenuBox2;
