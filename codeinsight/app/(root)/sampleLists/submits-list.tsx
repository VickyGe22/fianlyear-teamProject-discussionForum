'use client';
import Link from 'next/link'
import Pagination from './submit-pagination';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function SubmitList() {

  const [submits, setSubmits] = useState(null);

  const fetchSubmit = async () => {
    try {
      const response = await fetch("./api/submits?acceptance=true");
      if (!response.ok) {
        throw new Error('Failed to fetch submit');
      }
      const data = await response.json();
      console.log(data.submits);
      setSubmits(data.submits); 
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);

  const fetchUser = async () => {
    try {
      const response = await axios.get('/api/auth/users');
      console.log('Fetched user:', response.data.data.isAdmin);
      setUser(response.data.data);
    } catch (error) {
      console.error('Failed to fetch user:', error);
    }
  };

  useEffect(() => {
    const token = document.cookie.includes('token');
    setIsLoggedIn(token);
    console.log('useEffect triggered');
    console.log('Token found:', token);

    fetchUser();
    fetchSubmit();

  }, []);


  const handleCloseDiscussion = async (id) => {
    try {
      console.log('Closing discussion for ID:', id);
      const response = await fetch(`/api/submits/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to close discussion');
      }
    } catch (error) {
      console.error('Close discussion error:', error);
    }
  };


  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 20;
  const totalPages = submits ? Math.ceil(submits.length / postsPerPage) : 0;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentSubmits = submits ? submits.slice(indexOfFirstPost, indexOfLastPost) : [];

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div className="pb-8 md:pb-16">
      <h2 className="text-3xl font-bold font-inter mb-10">Discuss Your Code Samples</h2>
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
                                className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20"
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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      </div>
    </div>
  )
}