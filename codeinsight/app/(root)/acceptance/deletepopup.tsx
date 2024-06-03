import { CheckIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useRouter } from 'next/navigation';

interface SubmitDialogProps {
  onClose: () => void;
  id: string; // 添加 id 属性
}


const SubmitDialog: React.FC<SubmitDialogProps> = ({ onClose, id }) => {
  const router = useRouter();

  const handleClose = async (id: string) => {
    const res = await fetch(`/api/submits/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ discuss_close: true }),
    });
    if (res.ok) {
      // Refresh the page if the request was successful
      window.location.reload();
    }
  };

  const back = async (reason: string) => {
    await handleClose(id);
    // Optionally log or send the reason for rejection
    console.log(`Reason for rejection: ${reason}`);
    onClose(); // Close the dialog
    router.push('/acceptance'); // Navigate to the "/acceptance" page
  };

  return (
    <div>
      <div className="mt-3 text-center sm:mt-5">
        <h3 className="tracking-wide text-lg font-bold leading-6 text-gray-900">
          Please select one reason for rejection
        </h3>
      </div>
      <div className="mt-5 sm:mt-6 flex flex-col items-center space-y-3">
        <button
          className="tracking-wide inline-flex w-64 justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => back('Lack subjective error')}
        >
          Missing subjective error
        </button>
        <button
          className="tracking-wide inline-flex w-64 justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => back('Complex Code example')}
        >
          Code example too complex
        </button>
        <button
          className="tracking-wide inline-flex w-64 justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => back('Already discussed before')}
        >
          Already discussed
        </button>
      </div>
    </div>
  );
};

export default SubmitDialog;
