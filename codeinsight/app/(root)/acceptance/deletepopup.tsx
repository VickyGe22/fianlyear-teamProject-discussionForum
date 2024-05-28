import { CheckIcon } from '@heroicons/react/24/outline'
import React from 'react';
import { useRouter } from 'next/navigation';

interface SubmitDialogProps {
  onClose: () => void;
}

const SubmitDialog: React.FC<SubmitDialogProps> = ({ onClose }) => {

  const router = useRouter();

  const back = () => {
    onClose(); // Close the dialog
    router.push('/acceptance'); // Navigate to the "/submits" page
  };


  return (

    <div>
      {/* <div>
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <h3 className="tracking-wide text-lg font-semibold leading-6 text-gray-900">
            Successfully deleted the sample!
          </h3>
        </div>
      </div> */}
      <div className="mt-3 text-center sm:mt-5">
          <h3 className="tracking-wide text-lg font-bold leading-6 text-gray-900">
            Please select one reason for rejection
          </h3>
        </div>
        <div className="mt-5 sm:mt-6 flex flex-col items-center space-y-3">
          <button
            className="tracking-wide inline-flex w-64 justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={back}
          >
            Lack subjective error
          </button>
          <button
            className="tracking-wide inline-flex w-64 justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={back}
          >
            Complex Code example
          </button>
          <button
            className="tracking-wide inline-flex w-64 justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={back}
          >
            Already discussed before
          </button>
        </div>
    </div>

  )
}

export default SubmitDialog;