// ts-nocheck
"use client";

import { useEffect, useState } from "react";

const SolutionDisplay = ({ pageId }) => {

    const [submit, setSubmit] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchSubmit = async () => {
        if (!pageId) return;
      
        try {
          const response = await fetch(`/api/submits/${pageId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch submit');
          }
          const data = await response.json();
          setSubmit(data.submit); // 这里假设响应结构是 { submit: {...} }
        } catch (error) {
          console.error('Fetch error:', error);
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      
        useEffect(() => {
          fetchSubmit();
        }, [pageId]); 

        
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error}</div>;

    return (
        <div>
           
                <div className="bg-white px-4 py-5 sm:px-6">
                    <div className="flex space-x-3">
                        <div className="flex-shrink-0">
                            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-xl font-semibold text-gray-900">
                                {submit.tags[0]}
                            </p>
                            <p className="text-sm text-gray-500">
                                April 1 at 11:43 AM, 2024
                            </p>
                            <div className="flex flex-wrap gap-2 mb-5">
                                  <span className="inline-flex items-center rounded-md px-3 bg-indigo-50 text-xs font-normal text-gray-500 ring-1 ring-inset ring-green-600/20">{submit.languages}</span>
                                  <span className="inline-flex items-center rounded-md px-3 bg-indigo-50 text-xs font-normal text-gray-500 ring-1 ring-inset ring-green-600/20">{submit.levels}</span>
                                  <span className="inline-flex items-center rounded-md px-3 bg-indigo-50 text-xs font-normal text-gray-5000 ring-1 ring-inset ring-green-600/20">{submit.types}</span>
                                  {submit.tags.map((tag) => (
                                    <span className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20"> {tag} </span>
                                  ))}
                            </div>
                            < pre className="bg-gray-100 overflow-auto touch-auto p-4 rounded-md min-w-max">
                              <code className="text-sm text-black-600 font-mono whitespace-pre-wrap">
                                {submit.codesamples}
                              </code>
                            </pre>
                            <p className="text-sm text-gray-900 mt-4">
                                {submit.issuedescriptions}
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default SolutionDisplay;


