'use client';
import dynamic from 'next/dynamic';
import GeneralComments from "../generalcomments";
import Issue from "../issuepage";
import { PlusIcon } from '@heroicons/react/20/solid';
import SolutionDisplay from "../solution_display";
import AddIssue from '../addissue';
import Modal from "@/components/modal";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// 使用动态导入确保组件只在客户端渲染
// const GeneralComments = dynamic(() => import("../generalcomments"), { ssr: false });
// const Issue = dynamic(() => import("../issuepage"), { ssr: false });
// const SolutionDisplay = dynamic(() => import("../solution_display"), { ssr: false });


export default function Home() {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pageId, setPageId] =  useState<string | string[] | undefined>(undefined);  // 初始化pageId状态

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    const router = useRouter();
    
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search); // 使用 useSearchParams 获取查询参数
        const pageId = searchParams.get('pageid');
        if (pageId) {
            setPageId(pageId);
        }
    }, [router]);


    // useEffect(() => {
    //     if (router.isReady) {
    //         // Access the query parameters using the method that your Next.js version supports.
    //         // This might require referring to the documentation for your specific version.
    //         const queryPageId = router.getQueryParam('pageid'); // This is a hypothetical function, check your Next.js documentation.
    //         if (queryPageId) {
    //             setPageId(queryPageId);
    //         }
    //     }
    // }, [router]);

    // // 使用useEffect来确保组件挂载后获取pageId
    // useEffect(() => {
    //     if (router.isReady) {  // 确保路由系统已准备好
    //         const queryPageId = router.query.pageid as string;;  // 从路由查询参数中获取pageId
    //         setPageId(queryPageId);
    //     }
    // }, [router.isReady, router.query.pageid]);  // 依赖项包括路由准备状态和pageId变化

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
                        <SolutionDisplay pageId={pageId} />
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