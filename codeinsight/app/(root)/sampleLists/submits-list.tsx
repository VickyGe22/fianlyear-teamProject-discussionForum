import Link from 'next/link'

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


export default async function SubmitList() {

  const { submits } = await getSubmit();

  return (
    <div className="pb-8 md:pb-16">
      <h2 className="text-3xl font-bold font-inter mb-10">Discuss Your Code Samples</h2>
      {/* List container */}
      <div className="flex flex-col">

        {submits.map((sample:any) => (

          <div
          key={sample._id} // Assuming each 'sample' has a unique '_id' provided by MongoDB
          className={`[&:nth-child(-n+12)]:-order-1 group ${true && 'border-b border-gray-200'}`}
          >
            <div className= "px-4 py-6 rounded-xl" >
              <div className="sm:flex items-center space-y-3 sm:space-y-0 sm:space-x-5">
                <div className="grow lg:flex items-center justify-between space-y-5 lg:space-x-2 lg:space-y-0">
                  <div>
                    <div className="mb-2">
                      <a className="text-lg text-gray-800 font-bold">
                        {sample.issuedescriptions}
                      </a>
                    </div>
                    <div className="-m-1">
                      <a
                        className={`text-xs text-gray-500 font-medium inline-flex px-2 py-0.5 hover:text-gray-600 rounded-md m-1 whitespace-nowrap transition duration-150 ease-in-out bg-gray-100
                          }`}
                        href="#0"
                      >
                        {sample.languages}
                      </a>
                      <a
                        className={`text-xs text-gray-500 font-medium inline-flex px-2 py-0.5 hover:text-gray-600 rounded-md m-1 whitespace-nowrap transition duration-150 ease-in-out bg-indigo-50
                          }`}
                        href="#0"
                      >
                        {sample.levels}
                      </a>
                      <a
                        className={`text-xs text-gray-500 font-medium inline-flex px-2 py-0.5 hover:text-gray-600 rounded-md m-1 whitespace-nowrap transition duration-150 ease-in-out bg-gray-100
                          }`}
                        href="#0"
                      >
                        {sample.types}
                      </a>
                      <a
                        className={`text-xs text-gray-500 font-medium inline-flex px-2 py-0.5 hover:text-gray-600 rounded-md m-1 whitespace-nowrap transition duration-150 ease-in-out bg-gray-100
                          }`}
                        href="#0"
                      >
                        {sample.tags}
                      </a>
                    </div>
                  </div>
                  <div className="min-w-[120px] flex items-center lg:justify-end space-x-3 lg:space-x-0">
                    <div className="lg:hidden group-hover:lg:block">
                      <Link className="btn-sm py-1.5 px-3 text-white bg-indigo-500 hover:bg-indigo-600 group shadow-sm" href={`/discussion/${sample._id.$oid}`}>
                        Go to discussion{' '}
                        <span className="tracking-normal text-indigo-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                          -&gt;
                        </span>
                      </Link>
                    </div>
                    <div className="group-hover:lg:hidden text-sm italic text-gray-500">{sample.numberReply}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        ))}

      </div>
    </div>
  )
}
