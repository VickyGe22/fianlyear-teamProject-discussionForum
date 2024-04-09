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
                        className="rounded-input border-gray-300  w-40 p-2 rounded-sm"
                        value={customLanguage}
                        onChange={handleInputChange}
                        placeholder="Enter custom word"
                        />
                </div>
                <div className="modal-actions flex justify-end space-x-4 mt-2">
                    <button type="button" className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm
                     hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                      focus-visible:outline-indigo-600 " onClick={handleAddCustomOption}>
                    Add
                    </button>
                    <button type="button" className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm
                     hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                      focus-visible:outline-indigo-600 " onClick={onClose}>
                    Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomDialog;
