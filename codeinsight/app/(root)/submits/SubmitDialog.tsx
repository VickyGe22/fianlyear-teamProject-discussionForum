// import React from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';

// interface SubmitDialogProps {
//   onClose: () => void;
// }

// const SubmitDialog: React.FC<SubmitDialogProps> = ({ onClose }) => {
//   const router = useRouter();

//   const handleSubmitAnother = () => {
//     onClose(); // Close the dialog
//     router.push('/submits'); // Navigate to the "/submits" page
//   };

//   return (
    
//     <div className="fixed inset-0 flex items-center justify-center z-50">
//       <div className="bg-white p-8 rounded shadow-lg">
//         <h2 className="text-2xl font-bold mb-4">Thank you for submitting!</h2>
//         <p className="mb-6">What would you like to do next?</p>
//         <div className="flex justify-center space-x-4">
//           <button
//             className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
//             onClick={handleSubmitAnother}
//           >
//             Submit Another Code Sample
//           </button>
//           <Link href="/code-sample-repository">
//             <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
//               Go to Code Sample Repository
//             </button>
//           </Link>
//           <Link href="/discussion-forum">
//             <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
//               Go to Discussion Forum
//             </button>
//           </Link>
//         </div>
//         <button
//           className="mt-6 text-gray-500 hover:text-gray-700"
//           onClick={onClose}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SubmitDialog;


import { CheckIcon } from '@heroicons/react/24/outline'
import React from 'react';
import { useRouter } from 'next/navigation';

interface SubmitDialogProps {
  onClose: () => void;
}

const SubmitDialog: React.FC<SubmitDialogProps> = ({ onClose }) => {
  
  const router = useRouter();

  const handleSubmit = () => {
    onClose(); // Close the dialog
    router.push('/submits'); // Navigate to the "/submits" page
  };

  const handlDiscussion = () => {
    onClose(); // Close the dialog
    router.push('/code-sample-repository'); // Navigate to the "/submits" page
  };

  const handlHome = () => {
    onClose(); // Close the dialog
    router.push('/'); // Navigate to the "/submits" page
  };

  return (

              <div>
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <h3 className="tracking-wide text-lg font-semibold leading-6 text-gray-900">
                        Thanks for your submission!
                    </h3>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-3 sm:gap-3">
                  <button
                    className="tracking-wide inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={handleSubmit}
                  >
                    Submit Another Sample
                  </button>
                  <button
                    className="tracking-wide inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={handlDiscussion}
                  >
                    Go to Discussion
                  </button>
                  <button
                    className="tracking-wide inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={handlHome}
                  >
                    Back to Homepage
                  </button>

                </div>
              </div>
            
  )
}

export default SubmitDialog;