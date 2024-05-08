'use client';
import Link from 'next/link'
// import nlp from 'compromise';
import Pagination from './submit-pagination';
import { useEffect, useState } from 'react';
// import { WordTokenizer } from 'natural';
// import stopwords from 'stopword';

// const getSubmit = async () => {
//   try{
//     const res = await fetch('http://localhost:3000/api/submits', {
//       cache: 'no-store',
//     });

//     if(!res.ok){
//       throw new Error('Network response was not ok');
//     }

//     return await res.json();
//   } catch (error){
//     console.error('There was an error!', error);
//   }
// }

// function generateTitle(codeDescription: string): string {
//     // 使用compromise处理文本
//     let doc = nlp(codeDescription);
//     // 词形还原
//     doc.verbs().toInfinitive();
//     doc.nouns().toSingular();

//     // 分词
//     const words = doc.text('normal').split(/\s+/);

//     // 计算词频（TF）
//     const frequencyMap = new Map();
//     words.forEach(word => {
//         frequencyMap.set(word, (frequencyMap.get(word) ?? 0) + 1);
//     });

//     // 计算TF-IDF
//     const tfidfMap = new Map();
//     words.forEach(word => {
//         const tf = frequencyMap.get(word);
//         // 假设IDF简化计算，你可以根据实际情况调整
//         const idf = 1 + Math.log(1 + 1 / (1 + frequencyMap.get(word)));
//         tfidfMap.set(word, tf * idf);
//     });

//     // 按TF-IDF值排序
//     const sortedWords = Array.from(tfidfMap.entries()).sort((a, b) => b[1] - a[1]);

//     // 选择最重要的5个词
//     const importantWords = sortedWords.slice(0, 5).map(([word]) => word);

//     // 生成标题
//     const title = importantWords.join(' ');
//     return title;
// }



export default function SubmitList() {

  // const { submits } = await getSubmit();

  const [submits, setSubmits] = useState(null);

  const fetchSubmit = async () => {
    try {
      const response = await fetch("./api/submits");
      if (!response.ok) {
        throw new Error('Failed to fetch submit');
      }
      const data = await response.json();
      console.log(data.submits);
      setSubmits(data.submits); // 这里假设响应结构是 { submit: {...} }
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
  // }, [submits]); // This ensures the loop runs only after `submits` is set.

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
                     
                      {sample.tags.map((tag:any) => (
                                <a
                                className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20"
                                href="#0"
                              > { tag } </a>
                          ))}
  
                    </div>
                  </div>
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