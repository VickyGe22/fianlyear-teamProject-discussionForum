import Link from 'next/link'
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import user from '@/app/(root)/page';

interface SubmitListProps {
  currentSubmits: any[];
}

const SubmitList: React.FC<SubmitListProps> = ({ currentSubmits }) =>{




  function handleCloseDiscussion(_id: any): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="pb-8 md:pb-16">
      <h2 className="text-4xl font-bold font-inter mb-10">Code samples list</h2>
      {/* List container */}
      <div className="flex flex-col">

        {currentSubmits.map((sample:any) => (

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
                        {sample.sampletitles}
                      </a>
                    </div>
                    <div className="-m-1">
                      <a
                        className={`text-xs text-gray-500 font-medium inline-flex px-2 py-0.5 hover:text-gray-600 rounded-md m-1 whitespace-nowrap transition duration-150 ease-in-out bg-indigo-50
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
                        className={`text-xs text-gray-500 font-medium inline-flex px-2 py-0.5 hover:text-gray-600 rounded-md m-1 whitespace-nowrap transition duration-150 ease-in-out bg-indigo-50
                          }`}
                        href="#0"
                      >
                        {sample.types}
                      </a>
                     
                      {sample.tags.map((tag:any) => (
                                <a
                                className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20 ml-1 mr-1 "
                                href="#0"
                              > { tag } </a>
                          ))}
  
                    </div>
                  </div>
                {user && !user.isAdmin ? (
                  <div className="min-w-[120px] flex items-center lg:justify-end space-x-3 lg:space-x-0">
                    <div className="lg:hidden group-hover:lg:block">
                      <Link className="btn-sm py-1.5 px-3 text-white bg-indigo-500 hover:bg-indigo-600 group shadow-sm" href={`/discussion/${sample._id}`}>
                        Go to discussion{' '}
                        <span className="tracking-normal text-indigo-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                          -&gt;
                        </span>
                      </Link>
                    </div>
                    <div className="group-hover:lg:hidden text-sm italic text-gray-500">{sample.numberReply}</div>
                  </div>
                ) : user && user.isAdmin ? (
                  <div className="min-w-[120px] flex flex-col items-center lg:items-end space-y-3 lg:space-y-0">
                    <div className="flex flex-col items-center space-y-3">
                      <Link className="btn-sm py-1.5 px-3 text-white bg-indigo-500 hover:bg-indigo-600 group shadow-sm" href={`/discussion/${sample._id}`}>
                        Go to discussion{' '}
                        <span className="tracking-normal text-indigo-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                          -&gt;
                        </span>
                      </Link>
                      <button
                        onClick={() => handleCloseDiscussion(sample._id)}
                        className="text-sm px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none transition duration-300 ease-in-out"
                      >
                        Close Discussion
                      </button>
                    </div>
                  </div>
                ): null}
                </div>
              </div>
            </div>
          </div>  
        ))}

      

      </div>
    </div>
  )
}
export default SubmitList;