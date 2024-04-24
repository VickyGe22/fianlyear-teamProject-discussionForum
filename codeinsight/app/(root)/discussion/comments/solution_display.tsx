import CodeBox from "../../submits/codebox";

export default function solutionDisplay() {
  return (
    <div className="bg-white px-4 py-5 sm:px-6">
        <div className="flex space-x-3">
            <div className="flex-shrink-0">
                <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
                </div>
                <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-gray-900">
                    <a href="#" className="hover:underline">
                    Chelsea Hagon
                    </a>
                </p>
                <p className="text-sm text-gray-500">
                    <a href="#" className="hover:underline">
                    April 1 at 11:43 AM, 2024
                    </a>
                </p>
                
                <div className="py-3 text-2xl font-bold  text-black">
                    Duplicate Error
                </div>
                
                <div className="flex flex-wrap gap-2 mb-5">
                    <span className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20">Python</span>
                    <span className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20">Master-cs1</span>
                    <span className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20">Assignment</span>
                    <span className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20">Tags</span>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:p-6">
                    <CodeBox />
                </div>
            
            </div>
        
        </div>
    </div>
  )
}

