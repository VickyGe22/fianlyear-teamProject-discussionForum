'use client'

import { useState } from 'react'

const CodeLinter = () => {
    
  const [code, setCode] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputLines = event.target.value.split('\n');
    if (inputLines.length <= 10) {
      setCode(event.target.value);
    } else {
      // Optionally, show an error message or handle the overflow.
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <textarea
        className="w-full p-4 border border-gray-200 rounded-lg"
        value={code}
        onChange={handleInputChange}
        placeholder="Paste your code here (max 10 lines)"
        rows={10}
      />
    </div>
  );
};

export default CodeLinter;
