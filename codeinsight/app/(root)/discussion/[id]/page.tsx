'use client';
import GeneralComments from "../generalcomments";
import Issue from "../issuepage";
import { PlusIcon } from '@heroicons/react/20/solid';
import SolutionDisplay from "../solution_display";
import { useState } from 'react'; 
import AddIssue from '../addissue';
import Modal from "@/components/modal";

export default function Home() {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className='fadeIn' >
                <a href="/sampleLists" className=" flex py-10 px-16 items-center text-sm font-medium text-blue-600 hover:text-blue-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        Back to discuss other samples 
                </a>

                <div className="overflow-hidden px-28 rounded-lg bg-white shadow">
                    <div className="px-4 py-5 sm:p-6 shadow-lg">
                        <SolutionDisplay />
                    </div>
                </div>

                <div className=" py-20 px-28 divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
                    <div className="sm:px-6 mb-4">
                        <h1 className="text-2xl font-bold text-black">Other Issues</h1>
                        <div className="text-gray-500 mt-2">Please share your new insights below for discussion.</div>
                    </div>
                
                    <div className="px-4 py-4 sm:px-6">
                        <Issue />
                    </div>
                    
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative py-10 flex justify-center">
                            
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                onClick={handleOpenModal} 
                            >
                                <PlusIcon className="-ml-1 -mr-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                Add New Issue
                            </button>
                        </div>
                    </div>
                </div>

                <Modal isOpen={isModalOpen} closeModal={handleCloseModal}>
                    <AddIssue />
                </Modal>

                <div className="divide-y px-28 divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
                    <GeneralComments />
                
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
        
                </div>
            </div>
        </>
    );
}