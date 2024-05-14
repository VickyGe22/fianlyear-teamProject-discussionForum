'use client';
import SolutionDisplay from "../../../(root)/discussion/solution_display";

import {  usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';


export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pageId, setPageId] =  useState<string | string[] | undefined>(undefined);  // 初始化pageId状态

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // const [searchParams] = useSearchParams();  // 使用 useSearchParams 钩子
    const pathname = usePathname();

    const extractId = (pathname: string): string => {
        const match = pathname.match(/\/adminSinglesample\/([a-f0-9]+)/);
        if (match && match[1]) {
        return match[1];
        }
        return ''; // 如果没有找到匹配项，返回空字符串
    };
    

    useEffect(() => {
        // const pageId = searchParams.get('id');  // 使用 searchParams 获取查询参数
        const pageId = extractId(pathname);

        console.log('Page页面这里:', pageId);
        
        if (pageId) {
            setPageId(pageId);
        }
    }, [pathname]);  // 更新 useEffect 的依赖为 searchParams

    
    return (
        <>
            <div className='fadeIn' >
                <a href="/acceptance" className=" flex py-10 px-16 items-center text-sm font-medium text-blue-600 hover:text-blue-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12">Reply</path>
                        </svg>
                        Back to acceptance 
                </a>

                <div className="overflow-hidden px-28 rounded-lg bg-white shadow">
                    <div className="px-4 py-5 sm:p-6 shadow-lg">
                        <SolutionDisplay pageId={pageId} />
                    </div>
                </div>
            </div>
        </>
    );
}