'use client';
import Link from 'next/link';
import nlp from 'compromise';
import Pagination from './submit-pagination';
import { useEffect, useState } from 'react';


{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-nYiLDB5ZiysUjZMqB3/2KqgCrvq5vG9eFz5vYQqfxZZHc4EGOgGYHQD4NG8NQ2Hg7whgCvNG+JJK0cdF3zAjTw==" crossorigin="anonymous" referrerpolicy="no-referrer" /> */}

// function generateTitle(codeDescription: string): string {
//   let doc = nlp(codeDescription);
//   doc.verbs().toInfinitive();
//   doc.nouns().toSingular();

//   const words = doc.text('normal').split(/\s+/);

//   const frequencyMap = new Map();
//   words.forEach(word => {
//     frequencyMap.set(word, (frequencyMap.get(word) ?? 0) + 1);
//   });

//   const tfidfMap = new Map();
//   words.forEach(word => {
//     const tf = frequencyMap.get(word);
//     const idf = 1 + Math.log(1 + 1 / (1 + frequencyMap.get(word)));
//     tfidfMap.set(word, tf * idf);
//   });

//   const sortedWords = Array.from(tfidfMap.entries()).sort((a, b) => b[1] - a[1]);

//   const importantWords = sortedWords.slice(0, 5).map(([word]) => word);

//   const title = importantWords.join(' ');
//   return title;
// }


export default function SubmitList() {
  const [submits, setSubmits] = useState(null);

  const fetchSubmit = async () => {
    try {
      const response = await fetch("./api/submits");
      if (!response.ok) {
        throw new Error('Failed to fetch submit');
      }
      const data = await response.json();
      setSubmits(data.submits);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    fetchSubmit();
  }, []);

  // useEffect(() => {
  //   if (submits) {
  //     for (let i = 0; i < submits.length; i++) {
  //       submits[i].sampletitles = generateTitle(submits[i].issuedescriptions);
  //     }
  //   }
  // }, [submits]);

  const handleSubmission = async (id: any) => {
    try {
      const response = await fetch(`/api/submits/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to submit sample');
      }
      const updatedSubmits = submits.filter(submit => submit._id !== id);
      console.log(updatedSubmits); // Add this line to debug
      setSubmits(updatedSubmits);
      alert('Sample submitted successfully!');
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  const handleAcceptance = async (id:any) => {
    // id.preventDefault(); // Prevent default form submit behavior
  
    console.log("Submitting:", id);
    const res = await fetch(`/api/submits/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ acceptance: true } ),
    });
    
    // Clear the input after submit
  };




  // const handleDeletion = async (id) => {
  //   try {
  //     const response = await fetch(`/api/submits/${id}/delete`, {
  //       method: 'DELETE',
  //     });
  //     if (!response.ok) {
  //       throw new Error('Failed to delete sample');
  //     }
  //     const updatedSubmits = submits.filter(submit => submit._id !== id);
  //     console.log(updatedSubmits); // Add this line to debug
  //     setSubmits(updatedSubmits);
  //   } catch (error) {
  //     console.error('Deletion error:', error);
  //   }
  // };



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
      <h2 className="text-3xl font-bold font-inter mb-10">Sample List</h2>
      <div className="flex flex-col">

        {currentSubmits.map((sample: any) => (
          <div
            key={sample._id}
            className={`[&:nth-child(-n+12)]:-order-1 group ${true && 'border-b border-gray-200'}`}
          >
            <div className="px-4 py-6 rounded-xl" >
              <div className="sm:flex items-center space-y-3 sm:space-y-0 sm:space-x-5">
                <div className="grow lg:flex items-center justify-between space-y-5 lg:space-x-2 lg:space-y-0">
                  <div>
                    <div className="mb-2">
                      <a className="text-lg text-gray-800 font-bold">
                        {sample.tags[0]}
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
                      {sample.tags.map((tag: any) => (
                        <a
                          className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20"
                          href="#0"
                        > {tag} </a>
                      ))}
                    </div>
                  </div>
                  <div className="min-w-[120px] flex items-center lg:justify-end space-x-3 lg:space-x-0">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleAcceptance(sample._id)}
                        className="text-sm text-green-500 hover:text-green-700 focus:outline-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </button>

                      <button
                        onClick={() => handleDeletion(sample._id)}
                        className="text-sm text-red-500 hover:text-red-700 focus:outline-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"

                        >

                          <path

                            fillRule="evenodd"
                            d="M5.707 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 11-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
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
