'use client';

import CodeBox from './codebox'
import MenuBox from './menubox'
import MenuBox1 from './menubox1'
import MenuBox2 from './menubox2'
import TagInput from './addtag'

import { useEffect, useState } from 'react';
import SubmitDialog from './submitpopup';
import Modal from "@/components/modal";
import Button from '../../../components/animation/button'
import { XCircleIcon } from '@heroicons/react/20/solid'

import nlp from 'compromise';
import { WordTokenizer } from 'natural';
import stopwords from 'stopword';


function generateTitle(codeDescription: string): string {

    let doc = nlp(codeDescription);
    doc.verbs().toInfinitive();
    doc.nouns().toSingular();
    const words = doc.text('normal').split(/\s+/);
    const frequencyMap = new Map();
    words.forEach(word => {
        frequencyMap.set(word, (frequencyMap.get(word) ?? 0) + 1);
    });
    const tfidfMap = new Map();
    words.forEach(word => {
        const tf = frequencyMap.get(word);
        const idf = 1 + Math.log(1 + 1 / (1 + frequencyMap.get(word)));
        tfidfMap.set(word, tf * idf);
    });

    const sortedWords = Array.from(tfidfMap.entries()).sort((a, b) => b[1] - a[1]);

    const importantWords = sortedWords.slice(0, 5).map(([word]) => word);

    const title = importantWords.join(' ');
    return title;
}



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
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);
    const [title = generateTitle(comment), setTitle] = useState('');


    useEffect(() => {
      console.log("Code status:", code);
    }, [code]);

     useEffect(() => {
        const title = generateTitle(comment);
      }, [setTitle]); // This ensures the loop runs only after `submits` is set.

    const handleSubmit = async (e:any) => {
  
      const res = await fetch("./api/submits", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ codesamples: code, languages: selectedLanguage, levels: selectedLevel, types: selectedtype, 
                  issuedescriptions:comment, tags: tags, sampletitles: title} ),
      });

      
  
      const { msg, success } = await res.json();
      setError(msg);
      setSuccess(success);
  
      if (success) {
        console.log("Clearing data...");
        setCode("");
        setSelectedLanguage("");
        setSelectedLevel("");
        setSelectedtype("");
        setComment("");
        setTags([]);
        setIsModalOpen(true);
      }
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
                  <div className="text-xs text-gray-500 italic mt-2">Example: “Boolean comparison attempted with while loop” / "Unused variable" / "Redundant typecast" / "Non utilization of elif/else statement"</div>
                </div>
              </div>
            </div>
          </div>
        </form>

{/* 显示错误信息 */}
      <div className="flex flex-col pl-6">
        {error && !success &&
          error.map((e) => (
            <div className={`${success ? "bg-green-50" : "text-red-600"} px-5 py-2`}>

            <div className="flex rounded-md bg-red-50 p-4">
              <div className="flex-shrink-0">
                <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
              </div>
              {/* <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">There were 2 errors with your submission</h3> */}
                <div className=" text-sm text-red-700">
                  <ul role="list" className="list-disc space-y-1 pl-5">
                  {e}
                  </ul>
                </div>
              {/* </div> */}
            </div>
            </div>
          ))}
      </div>

        <div className="mt-6 flex justify-center">
            <Button onClick={handleSubmit}/>
        </div>
         
        <Modal isOpen={isModalOpen} closeModal={handleCloseModal}>
          <SubmitDialog onClose={handleCloseModal} />
        </Modal>
      </div>

    </>
  );
}
