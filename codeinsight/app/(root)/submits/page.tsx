'use client';

import CodeBox from './codebox'
import MenuBox from './menubox'
import MenuBox1 from './menubox1'
import MenuBox2 from './menubox2'
import TagInput from './add_tag'

import { useState } from 'react';
import SubmitDialog from './submit-popup';
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

    //传输codebox和menubox的数据
    const [code, setCode] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');
    const [selectedtype, setSelectedtype] = useState('');
    const [comment, setComment] = useState('');
    const [tags, setTags] = useState<string[]>([]);

    const handleSubmit = async () => {
        const response = await fetch('./api/submits', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ codesamples: code, languages: selectedLanguage, levels: selectedLevel, types: selectedtype, 
            issuedescriptions:comment, tags: tags})
        });
    
        const data = await response.json();
        console.log(data);
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
                  <CodeBox code={code} setCode={setCode} />
                  
                </div>
                {/* gap-8是两个flexbox之间的间隔 */}
                <div className="flex justify-left  gap-8">
                  <MenuBox selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} /> 
                  <MenuBox1 selectedLevel={selectedLevel} setSelectedLevel={setSelectedLevel} /> 
                  <MenuBox2 selectedtype={selectedtype} setSelectedtype={setSelectedtype} /> 
                </div>
              {/*comments*/}
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="email">
                    Issue Description <span className="text-red-500">*</span>
                  </label>
                  <div onSubmit={handleSubmit}>
                    <textarea
                      rows={4}
                      name="comment"
                      id="comment"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </div>
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
                  <TagInput tags={tags} setTags={setTags}/>
                  <div className="text-xs text-gray-500 italic mt-2">Example: “while-duplicate”</div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="mt-6 flex justify-center">
          <a onClick={handleOpenModal}>
            <Button onClick={handleSubmit}/>
          </a>
        </div>
        <Modal isOpen={isModalOpen} closeModal={handleCloseModal}>
          <SubmitDialog onClose={handleCloseModal} />
        </Modal>
      </div>
    </>
  );
}
