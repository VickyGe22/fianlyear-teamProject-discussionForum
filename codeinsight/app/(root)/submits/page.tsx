'use client';

import Image from 'next/image'
import UploadImage from '@/public/images/upload.jpg'

import Link from 'next/link'
import CodeBox from './codebox'
import MenuBox from './menubox'
import MenuBox1 from './menubox1'
import MenuBox2 from './menubox2'
import TagInput from './add_tag'

import { useState } from 'react';
import SubmitDialog from './SubmitDialog';
import Modal from "@/components/modal";
import Button from '../../../components/animation/button'


// Consider using the server-side rendering with the metadata export or Using client-side rendering with the useState hook
//export const metadata = {
//  title: 'Submits - Submit Code Sample',
//  description: 'Submit Code Sample',
//}

export default function SubmitSample() {
  // const [showDialog, setShowDialog] = useState(false);

  // const handleSubmit = () => {
  //   // Display the success dialog
  //   // Don't need to handle the submission logic yet 
  //   setShowDialog(true);
  // };

  const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

  // const handleCloseDialog = () => {
  //   setShowDialog(false);
  // };


  return (
    <>
      <div className='fadeIn py-10 px-32' >
        <div className="mb-3 pl-10 ">
          <br></br>
          <h1 className="text-4xl font-extrabold font-inter mb-5">Share Your Code Samples</h1>
          <div className="text-gray-500  text-1xl">Welcome to the CodeInsight submission page, here you can submit 
          code samples and offer your insights to enlighten and inspire. <br/>Try to transform suboptimal code into learning opportunities!</div>
        </div>
        

        {/* Form */}
        <form className="mb-12 pl-10 pr-10 ">
          {/* <div className="divide-y divide-gray-200 -my-6"> */}
          <div>
            {/* Group #1 */}
            <div className="py-6">
              {/* <div className="text-lg font-bold text-gray-800 mb-5">
                <span className="text-indigo-500"> Step 1.</span> Copy code sample here
              </div> */}
              {/*code samples*/}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Code sample <span className="text-red-500">*</span>
                  </label>
                  <CodeBox />
                  
                </div>
                {/* gap-8是两个flexbox之间的间隔 */}
                <div className="flex justify-left  gap-8">
                <MenuBox /> <MenuBox1 /> <MenuBox2 /> 
                </div>
              {/*comments*/}
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="email">
                    Issue Description <span className="text-red-500">*</span>
                  </label>
                  <CodeBox />
                </div>
                {/* <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="file">
                    Submit file <span className="text-gray-500">(optional)</span>
                  </label>
                  <div className="flex items-center">
                    <div className="shrink-0 mr-4">
                      <Image className="object-cover w-16 h-16 rounded-full border border-gray-200" src={UploadImage} alt="Upload" />
                    </div>
                    <div>
                      <input
                        id="file"
                        type="file"
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-indigo-500 file:text-white hover:file:bg-indigo-600 transition duration-150 ease-in-out cursor-pointer"
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Group #2 */}
            <div className="py-6">
              {/* <div className="text-lg font-bold text-gray-800 mb-5">
                <span className="text-indigo-500">2.</span> Issue Classification
              </div> */}
              <div className="space-y-4">
                {/* <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="position">
                    Class <span className="text-red-500">*</span>
                  </label>
                  <input id="position" className="form-input w-full" type="text" required placeholder="E.g., Senior Software Engineer" />
                </div> */}
                
                {/* <div>
                  <label className="block text-sm text-gray-800 font-medium mb-1" htmlFor="role">
                    Category <span className="text-rose-500">*</span>
                  </label>
                  <select id="role" className="form-select text-sm py-2 w-full" required>
                    <option>Python</option>
                    <option>C</option>
                    <option>C++ / Finance</option>
                  </select>
                </div> */}
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="salary">
                    Tags <span className="text-gray-500">(optional)</span>
                  </label>
                  {/* <input id="salary" className="form-input w-full" type="text" /> */}
                  <TagInput />
                  <div className="text-xs text-gray-500 italic mt-2">Example: “while-duplicate”</div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="mt-6 flex justify-center">
          <a className='' onClick={handleOpenModal}>
            <Button />
          </a>
                
        </div>
        
        <Modal isOpen={isModalOpen} closeModal={handleCloseModal}>
          <SubmitDialog onClose={handleCloseModal} />
        </Modal>
      </div>
    </>
  );
}
