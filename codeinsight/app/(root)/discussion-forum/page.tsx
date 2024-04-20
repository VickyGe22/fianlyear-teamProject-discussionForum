
// import GeneralComments from "./discuss-subpage/generalcomments";
// import Issue from "./discuss-subpage/issuepage";
// import { PlusIcon } from '@heroicons/react/20/solid'
// import SolutionDisplay from "./discuss-subpage/solution_display";
// import AddIssue from "./discuss-subpage/addissue";


// export default function Home() {

//     return(
//         <>
//             <a href="/code-sample-repository" className="flex py-10 px-16 items-center text-sm font-medium text-blue-600 hover:text-blue-800">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
//                     </svg>
//                     Back to discussed code sample lists
//             </a>

//             <div className="overflow-hidden px-28 rounded-lg bg-white shadow">
//                 <div className="px-4 py-5 sm:p-6 shadow-lg">
//                     <SolutionDisplay />
//                 </div>
//             </div>

//             <div className="divide-y py-20 px-28 divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
//                 <div className="sm:px-6 mb-4">
//                     <h1 className="text-2xl font-bold text-black">Issues Forum</h1>
//                     <div className="text-gray-500">Please share your new insights below for discussion.</div>
//                 </div>
            
//                 <div className="px-4 py-4 sm:px-6">
//                     <Issue />
//                 </div>
                
//                 <div className="relative">
//                     <div className="absolute inset-0 flex items-center" aria-hidden="true">
//                         <div className="w-full border-t border-gray-300" />
//                     </div>
//                     <div className="relative py-10 flex justify-center">
                        
//                         <button
//                             type="button"
//                             className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
//                         >
//                             <PlusIcon className="-ml-1 -mr-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
//                             Add New Issue
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             <div className="divide-y px-28 divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
//                 <GeneralComments />
               
//                 <br></br>
//                 <br></br>
//                 <br></br>
//                 <br></br>
     
//             </div>



//         </>

//     )

    
// }
'use client';
import GeneralComments from "./discuss-subpage/generalcomments";
import Issue from "./discuss-subpage/issuepage";
import { PlusIcon } from '@heroicons/react/20/solid'
import SolutionDisplay from "./discuss-subpage/solution_display";
import AddIssue from "./discuss-subpage/addissue";
import { useState } from 'react'; // 导入 useState

export default function Home() {
    // 定义一个状态来控制是否显示 AddIssue 组件
    const [isAddIssueVisible, setIsAddIssueVisible] = useState(false);

    // 处理点击事件的函数
    const handleAddIssueClick = () => {
        setIsAddIssueVisible(true); // 设置状态为 true，显示 AddIssue 组件
    };

    return(
        <>
            <a href="/code-sample-repository" className="flex py-10 px-16 items-center text-sm font-medium text-blue-600 hover:text-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    Back to discussed code sample lists
            </a>

            <div className="overflow-hidden px-28 rounded-lg bg-white shadow">
                <div className="px-4 py-5 sm:p-6 shadow-lg">
                    <SolutionDisplay />
                </div>
            </div>

            <div className=" py-20 px-28 divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
                <div className="sm:px-6 mb-4">
                    <h1 className="text-2xl font-bold text-black">Issues Forum</h1>
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
                            onClick={handleAddIssueClick} // 设置点击事件处理函数
                        >
                            <PlusIcon className="-ml-1 -mr-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                            Add New Issue
                        </button>
                    </div>
                </div>
            </div>

            {isAddIssueVisible && (
                <div className="px-28">
                    <AddIssue />
                </div>
            )}

            <div className="divide-y px-28 divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
                <GeneralComments />
               
                <br></br>
                <br></br>
                <br></br>
                <br></br>
     
            </div>
        </>
    )
}
