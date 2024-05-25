// 'use client';
// import GeneralComments from "../generalcomments";
// import Issue from "../issuepage";
// import { PlusIcon } from '@heroicons/react/20/solid';
// import SolutionDisplay from "../solution_display";
// import AddIssue from '../addissue';
// import Modal from "@/components/modal";
// import { usePathname } from 'next/navigation';
// import { useEffect, useState } from 'react';

// export default function Home() {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [pageId, setPageId] = useState<string | string[] | undefined>(undefined);
//     const [isAddIssueDisabled, setIsAddIssueDisabled] = useState(false);

//     const handleOpenModal = () => {
//         setIsModalOpen(true);
//     };

//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//     };

//     const handleDisableAddIssue = () => {
//         setIsAddIssueDisabled(true);
//     };

//     const pathname = usePathname();

//     const extractId = (pathname: string): string => {
//         const match = pathname.match(/\/discussion\/([a-f0-9]+)/);
//         if (match && match[1]) {
//             return match[1];
//         }
//         return '';
//     };

//     useEffect(() => {
//         const pageId = extractId(pathname);
//         console.log('Page页面这里:', pageId);

//         if (pageId) {
//             setPageId(pageId);
//         }
//     }, [pathname]);

//     return (
//         <>
//             <div className='fadeIn'>
//                 <a href="/sampleLists" className="flex py-10 px-16 items-center text-sm font-medium text-blue-600 hover:text-blue-800">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12">Reply</path>
//                     </svg>
//                     Back to discuss other samples
//                 </a>

//                 <div className="overflow-hidden px-28 rounded-lg bg-white shadow">
//                     <div className="px-4 py-5 sm:p-6 shadow-lg">
//                         <SolutionDisplay pageId={pageId} />
//                     </div>
//                     <div className="border-t border-gray-300" />
//                     <div className="flex justify-center items-center mt-6 px-4">
//                         <button
//                             type="button"
//                             className="flex justify-center items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
//                             onClick={handleOpenModal}
//                             disabled={isAddIssueDisabled}  // Disable the button if isAddIssueDisabled is true
//                         >
//                             <PlusIcon className="-ml-1 -mr-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
//                             Click to Share and Discuss Your New Issues Found
//                         </button>
//                     </div>
//                 </div>

//                 <div className="py-5 px-28 divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
//                     <div className="px-4 py-4 sm:px-6">
//                         <Issue pageId={pageId} />
//                     </div>
//                 </div>

//                 <Modal isOpen={isModalOpen} closeModal={handleCloseModal}>
//                     <AddIssue pageId={pageId} />
//                 </Modal>
//                 <div className="flex justify-center items-center mt-6 px-4">
//                     <button
//                         type="button"
//                         className="flex justify-center items-center gap-x-1.5 rounded-full bg-red-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-red-300 hover:bg-red-500"
//                         onClick={handleDisableAddIssue}
//                     >
//                         Disable Add Issue
//                     </button>
//                 </div>
//                 <div className="divide-y py-10 px-28 divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
//                     <GeneralComments pageId={pageId} />
//                     <br />
//                     <br />
//                     <br />
//                     <br />
//                 </div>


//             </div>
//         </>
//     );
// }
'use client';
import GeneralComments from "../generalcomments";
import Issue from "../issuepage";
import { PlusIcon } from '@heroicons/react/20/solid';
import SolutionDisplay from "../solution_display";
import AddIssue from '../addissue';
import Modal from "@/components/modal";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pageId, setPageId] = useState<string | string[] | undefined>(undefined);
    const [isAddIssueVisible, setIsAddIssueVisible] = useState(true);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleDisableAddIssue = () => {
        setIsAddIssueVisible(false);
    };

    const pathname = usePathname();

    const extractId = (pathname: string): string => {
        const match = pathname.match(/\/discussion\/([a-f0-9]+)/);
        if (match && match[1]) {
            return match[1];
        }
        return '';
    };

    useEffect(() => {
        const pageId = extractId(pathname);
        console.log('Page页面这里:', pageId);

        if (pageId) {
            setPageId(pageId);
        }
    }, [pathname]);

    return (
        <>
            <div className='fadeIn'>
                <a href="/sampleLists" className="flex py-10 px-16 items-center text-sm font-medium text-blue-600 hover:text-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12">Reply</path>
                    </svg>
                    Back to discuss other samples
                </a>

                <div className="overflow-hidden px-28 rounded-lg bg-white shadow">
                    <div className="px-4 py-5 sm:p-6 shadow-lg">
                        <SolutionDisplay pageId={pageId} />
                    </div>
                    <div className="border-t border-gray-300" />
                    <div className="flex justify-center items-center mt-6 px-4">
                        {isAddIssueVisible && (
                            <button
                                type="button"
                                className="flex justify-center items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                onClick={handleOpenModal}
                            >
                                <PlusIcon className="-ml-1 -mr-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                Click to Share and Discuss Your New Issues Found
                            </button>
                        )}
                    </div>
                </div>

                <div className="py-5 px-28 divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
                    <div className="px-4 py-4 sm:px-6">
                        <Issue pageId={pageId} />
                    </div>
                </div>

                <Modal isOpen={isModalOpen} closeModal={handleCloseModal}>
                    <AddIssue pageId={pageId} />
                </Modal>
                <div className="flex justify-center items-center mt-6 px-4">
                    <button
                        type="button"
                        className="flex justify-center items-center gap-x-1.5 rounded-full bg-red-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-red-300 hover:bg-red-500"
                        onClick={handleDisableAddIssue}
                    >
                        Close Add Issue
                    </button>
                </div>

                <div className="divide-y py-10 px-28 divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
                    <GeneralComments pageId={pageId} />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>


            </div>
        </>
    );
}
