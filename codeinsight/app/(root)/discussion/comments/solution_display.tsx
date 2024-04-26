import CodeBox from "../../submits/codebox";

const getSubmit = async () => {
    try{
      const res = await fetch('http://localhost:3000/api/submits', {
        cache: 'no-store',
      });
  
      if(!res.ok){
        throw new Error('Network response was not ok');
      }
  
      return await res.json();
    } catch (error){
      console.error('There was an error!', error);
    }
  }

export default async function solutionDisplay() {

    const { submits } = await getSubmit();
    
    return  (
        <div className="bg-white px-4 py-5 sm:px-6">
          <div className="flex space-x-3">
            
            {/* Commented out image and text
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
            </div>
            */}
            <div className="min-w-0 flex-1">
              {submits.map((sample:any) => (
                <div
                  key={sample._id} // Assuming each 'sample' has a unique '_id' provided by MongoDB
                  className="group border-b border-gray-200"
                >
                  <div className="py-3 text-2xl font-bold text-black">
                    {sample.issuedescriptions}{sample.levels}
                  </div>
                </div>
              ))}
            </div>
            {/* Commented out additional component
            <div className="bg-gray-50 px-4 py-5 sm:p-6">
              <CodeBox />
            </div>
            */}
            
          </div>
        </div>
      );
    }
    



// <div className="py-3 text-2xl font-bold  text-black">
//                     Duplicate Error
//                 </div>
                
//                 <div className="flex flex-wrap gap-2 mb-5">
//                     <span className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20">Python</span>
//                     <span className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20">Master-cs1</span>
//                     <span className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20">Assignment</span>
//                     <span className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20">Tags</span>
//                 </div> */}