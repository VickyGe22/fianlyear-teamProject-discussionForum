// ts-nocheck
"use client";

import { useEffect, useState } from "react";
import { Disclosure } from '@headlessui/react';
import IssueReply from "./issuereply";

type AuthorAvatars = {
  [key: string]: string;
};

const authorAvatars: AuthorAvatars = {
  'Anonymous': 'https://randomuser.me/api/portraits/women/1.jpg',
  // 'Anonymous': 'https://randomuser.me/api/portraits/men/2.jpg',
  // 'Anonymous': 'https://randomuser.me/api/portraits/men/3.jpg',
  // 'Anonymous': 'https://randomuser.me/api/portraits/women/4.jpg'
};


const Issue = ({ pageId }:{pageId:string}) =>  {

    const [discussions, setDiscussion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchDiscussion = async () => {
        if (!pageId) return;
      
        try {
          const response = await fetch(`/api/submits/${pageId}/discussions`);
          if (!response.ok) {
            throw new Error('Failed to fetch discuss');
          }
          const data = await response.json();
          setDiscussion(data.discussions); 
        } catch (error:any) {
          console.error('Fetch error:', error);
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      
      useEffect(() => {
        fetchDiscussion();
      }, [pageId]); 

      
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

  return (
          <div className="divide-y divide-gray-200">
            {discussions.map((discussion) => (
              <Disclosure as="div" key={discussion.id} className="bg-white">
                {({ open }) => (
                  <>
                    <div className="flex justify-between items-start py-4 px-6">
                      <div className="flex space-x-4">
                        {/* User Avatar */}
                        <img
                          className="h-10 w-10 rounded-full"
                          src={authorAvatars[discussion.creator]}
                          alt={`${discussion.creator}'s avatar`}
                        />
                        {/* Author Name and Metadata */}
                        <div>
                          <span className="font-semibold text-gray-900">
                            {discussion.creator}
                          </span>
                          <span className="text-xs text-gray-500 block">
                            {new Date(discussion.createdAt).toLocaleString()}
                          </span>
                          <p className="mt-1 text-gray-800 text-sm">
                            {discussion.issuetitle}
                          </p>
                          <p className="mt-1 text-gray-800 text-sm">
                            {discussion.description}
                          </p>
                        </div>
                      </div>

                      {/* Vote and Replies Section */}
                      <div className="flex flex-col items-end space-y-1">
                        <span className="text-xs text-gray-600">
                          severity level: low
                        </span>
                        <span className="text-xs text-gray-600">
                          vote: {discussion.totalReplies}
                        </span>
                        <Disclosure.Button className="text-indigo-600 hover:text-indigo-500 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                          </svg>
                          <span className="text-xs">
                            {open ? `Hide ${discussion.totalReplies} Replies` : `Show ${discussion.totalReplies} Replies`}
                          </span>
                        </Disclosure.Button>
                      </div>
                    </div>
                    <Disclosure.Panel as="div" className="pb-4 px-6">
                      {/* IssueReply component and other content */}
                      <IssueReply pageId={pageId} disId={discussion._id}/>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>


  );
}

export default Issue;