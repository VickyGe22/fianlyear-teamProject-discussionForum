'use client';
import Link from 'next/link';
import Pagination from './submit-pagination';
import { SetStateAction, useEffect, useState } from 'react';
import Modal from '@/components/modal';
import SubmitDialog from './deletepopup';
import { Submit } from '../../../models/interfaces/submit';



export default function SubmitList() {
  const [submits, setSubmits] = useState<Submit[] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSampleId, setSelectedSampleId] = useState(null);
  const [numbersamples, setNumbersamples] = useState(0);

  const fetchSubmit = async () => {
    try {
      const response = await fetch("./api/submits?acceptance=false");
      
      if (!response.ok) {
        throw new Error('Failed to fetch submit');
      }
      const data = await response.json();
      const samples = data.submits.filter((submit: { acceptance: boolean, discuss_close: boolean }) => !submit.acceptance && !submit.discuss_close);
      const numbersamples = samples.length
      setNumbersamples(numbersamples);
  
      setSubmits(data.submits.filter((product: { discuss_close: any; }) => !product.discuss_close));
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    fetchSubmit();
  }, []);

  const handleAcceptance = async (id: any) => {
    console.log("Submitting:", id);
    const res = await fetch(`/api/submits/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ acceptance: true }),
    });
    if (res.ok) {
      window.location.reload();
    }
  };


  const handleOpenModal = (id: SetStateAction<null>) => {
    setSelectedSampleId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    window.location.reload();
    setIsModalOpen(false);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 20;
  const totalPages = submits ? Math.ceil(submits.length / postsPerPage) : 0;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentSubmits = submits ? submits.slice(indexOfFirstPost, indexOfLastPost) : [];

  const handlePageChange = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="pb-8 md:pb-16">
      <h2 className="text-4xl font-bold font-inter mb-10">Sample List</h2>
      <div className="flex flex-col">

        {currentSubmits.map((sample) => (
          <div
            key={sample._id}
            className={`[&:nth-child(-n+12)]:-order-1 group ${true && 'border-b border-gray-200'}`}
          >
            <div className="px-4 py-6 rounded-xl" >
              <div className="sm:flex items-center space-y-3 sm:space-y-0 sm:space-x-5">
                <div className="grow lg:flex items-center justify-between space-y-5 lg:space-x-2 lg:space-y-0">
                  <div>
                    <div className="mb-2" >
                      <Link className="text-lg text-gray-800 font-bold" href={`/acceptdetail/${sample._id}`}>
                        {sample.sampletitles}
                      </Link>
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
                      {sample.tags.map((tag) => (
                        <a
                          className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20 ml-1 mr-1"
                          href="#0"
                        > {tag} </a>
                      ))}
                    </div>
                  </div>
                  <div className="min-w-[120px] flex items-center lg:justify-end space-x-3 lg:space-x-0">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleAcceptance(sample._id)}
                        className="text-sm text-black-500 hover:text-green-700 focus:outline-none bg-green-100 hover:bg-green-200 p-3 rounded-full"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleOpenModal(sample._id)}
                        className="text-sm text-red-500 hover:text-red-700 focus:outline-none"
                      >
                        Delete
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
          numberOfItems={numbersamples}
        />

        <Modal isOpen={isModalOpen} closeModal={handleCloseModal}>
          <SubmitDialog onClose={handleCloseModal} id={selectedSampleId}/>
        </Modal>

      </div>
    </div>
  )
}
