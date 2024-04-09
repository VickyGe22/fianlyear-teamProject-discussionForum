import CodeBox from "../submits/codebox";
import GeneralComments from "./discuss-subpage/generalcomments";
import Issue from "./discuss-subpage/issuepage";
import { PlusIcon } from '@heroicons/react/20/solid'


export default function Home() {

    return(
        <>
            <a href="/code-sample-repository" className="flex py-5 px-16 items-center text-sm font-medium text-blue-600 hover:text-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    Back to discussed code sample lists
            </a>
            <div className="overflow-hidden px-28 rounded-lg bg-white shadow">
                <div className="px-4 py-5 sm:px-6 text-2xl font-bold mb-4 text-black">
                    Duplicate Error
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:p-6">
                    <CodeBox />
                </div>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center">
                        <button
                            type="button"
                            className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                            <PlusIcon className="-ml-1 -mr-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                            Add New Issue
                        </button>
                    </div>
                </div>
                
            </div>
            <div className="divide-y px-28 divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
                <div className="px-4 py-5 sm:px-6 text-2xl font-bold mb-4 text-black">
                    Issue Forum
                </div>
                <div className="px-4 py-4 sm:px-6">
                    <Issue />
                </div>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center">
                        <button
                            type="button"
                            className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                            <PlusIcon className="-ml-1 -mr-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                            Add New Issue
                        </button>
                    </div>
                </div>
            </div>

            <GeneralComments />
        </>

    )

    
}

