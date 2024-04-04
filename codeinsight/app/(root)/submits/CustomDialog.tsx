import React, { useState, ChangeEvent } from 'react';

interface CustomDialogProps {
    onClose: () => void;
    onAddCustomOption: (customLanguage: string) => void;
}

const CustomDialog: React.FC<CustomDialogProps> = ({ onClose, onAddCustomOption }) => {
    const [customLanguage, setCustomLanguage] = useState('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCustomLanguage(event.target.value);
    };

    const handleAddCustomOption = () => {
        onAddCustomOption(customLanguage);
        onClose();
    };

    return (
        <div className="custom-modal">
            <div className="modal-panel">
                <div className="modal-content">
                    {/* <h3 className="modal-title">Enter Custom Language</h3> */}
                    <br/>
                    <input
                        type="text"
                        className="rounded-input border-gray-300  w-42 p-2 rounded-md"
                        value={customLanguage}
                        onChange={handleInputChange}
                        placeholder="Enter custom language"
                        />
                </div>
                <div className="modal-actions pl-20">
                    <button className="inline-flex items-center rounded-md #ddd px-3 py-1 
                    text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10" onClick={handleAddCustomOption}>Add</button>
                    <button className="inline-flex items-center rounded-md #ddd px-2 py-1 
                    text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default CustomDialog;
