import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface SubmitDialogProps {
  onClose: () => void;
}

const SubmitDialog: React.FC<SubmitDialogProps> = ({ onClose }) => {
  const router = useRouter();

  const handleSubmitAnother = () => {
    onClose(); // Close the dialog
    router.push('/submits'); // Navigate to the "/submits" page
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Thank you for submitting!</h2>
        <p className="mb-6">What would you like to do next?</p>
        <div className="flex justify-center space-x-4">
          <button
            className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
            onClick={handleSubmitAnother}
          >
            Submit Another Code Sample
          </button>
          <Link href="/code-sample-repository">
            <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
              Go to Code Sample Repository
            </button>
          </Link>
          <Link href="/discussion-forum">
            <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
              Go to Discussion Forum
            </button>
          </Link>
        </div>
        <button
          className="mt-6 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SubmitDialog;