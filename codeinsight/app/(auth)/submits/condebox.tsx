// 'use client';

// import { useState } from 'react';

// const CodeLinter = () => {
//   const [code, setCode] = useState('');

//   const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setCode(event.target.value);
//   };

//   const renderLineNumbers = (input: string) => {
//     const numberOfLines = input.split('\n').length;
//     return Array.from({ length: numberOfLines }, (_, index) => (
//       <span className="inline-block text-right w-8 pr-4">{index + 1}.</span>
//     ));
//   };

//   return (
//     <div className="max-w-md mx-auto">
//       <div className="flex">
//         <div className="flex flex-col text-gray-500 select-none">
//           {renderLineNumbers(code)}
//         </div>
//         <textarea
//           className="flex-1 p-4 border-l border-gray-200 rounded-lg focus:outline-none"
//           value={code}
//           onChange={handleInputChange}
//           placeholder="Paste your code here"
//           rows={10}
//           style={{ fontFamily: 'monospace' }}
//         />
//       </div>
//       <div className="mt-4 space-y-2">
//         {/* {code.split('\n').map((line, index) => (
//           // <div key={index} className="font-mono bg-gray-100 p-2 rounded">
//           //   {line || <span className="text-gray-400">Empty line</span>}
//           // </div>
//         ))} */}
//       </div>
//     </div>
//   );
// };

// export default CodeLinter;



// 'use client';

// import { useState } from 'react';

// const CodeBox = () => {
//   const [code, setCode] = useState('');

//   const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setCode(event.target.value);
//   };

//   const renderLineNumbers = (input: string) => {
//     const numberOfLines = input.split('\n').length;
//     return Array.from({ length: numberOfLines }, (_, index) => (
//       <span className="inline-block text-right w-8 leading-loose">{`${index + 1}`}</span>
//     ));
//   };

//   return (
//     <div className="max-w-md mx-auto">
//       <div className="relative">
//         <div className="absolute left-0 top-0 bottom-0 select-none">
//           <div className="flex flex-col items-end pr-3 py-2">
//             {renderLineNumbers(code)}
//           </div>
//         </div>
//         <textarea
//           className="form-textarea p-4 border border-gray-200 rounded-lg block w-full min-h-[10rem] pl-12"
//           value={code}
//           onChange={handleInputChange}
//           placeholder="Paste your code here"
//           style={{ fontFamily: 'monospace', lineHeight: '1.75' }}
//         />
//       </div>
//     </div>
//   );
// };

// export default CodeBox;


'use client';

import { useState } from 'react';

const CodeBox = () => {
  const [code, setCode] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
  };

  // A helper function to generate the line numbers based on the current code input
  const lineNumbers = code.split('\n').map((_, i) => i + 1).join('\n');

  return (
    <div className="max-w-md mx-auto relative">
      <div className="flex">
        {/* Line numbers container */}
        <div
          className="text-gray-500 select-none text-right border-r border-gray-200"
          aria-hidden="true"
          style={{ minWidth: '3rem', paddingRight: '1rem' }}
        >
          <pre className="p-4">{lineNumbers}</pre>
        </div>
        {/* Textarea for code input */}
        <textarea
          className="flex-1 p-4 border border-gray-200 rounded-lg focus:outline-none"
          value={code}
          onChange={handleInputChange}
          placeholder="Paste your code here"
          style={{ minHeight: '10rem', fontFamily: 'monospace', resize: 'none' }}
        />
      </div>
    </div>
  );
};

export default CodeBox;
