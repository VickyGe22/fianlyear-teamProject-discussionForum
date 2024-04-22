'use client';

import CodeBox from './codebox'
import MenuBox from './menubox'
import MenuBox1 from './menubox1'
import MenuBox2 from './menubox2'
import TagInput from './add_tag'

import { useState } from 'react';
import SubmitDialog from './SubmitDialog';
import Modal from "@/components/modal";
import Button from '../../../components/animation/button'



export default function SubmitSample() {

  const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

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
          <div>
            {/* Group #1 */}
            <div className="py-6">
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
              </div>
            </div>

            {/* Group #2 */}
            <div className="py-6">
              <div className="space-y-4">
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
          <a onClick={handleOpenModal}>
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
