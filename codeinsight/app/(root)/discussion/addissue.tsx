'use client' ;
import { useEffect, useState } from "react";

export function AddIssue({pageId, username, userURL}: {pageId: string, username:string, userURL:string}) {
    
    const [issues, setIssues] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
      console.log("Code status:", issues);
    }, [issues]);

//post function
    const handleAddIssue = async (e:any) => {
  
      const res = await fetch(`/api/submits/${pageId}/discussions`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ issuetitle: issues, description: description, pageId: pageId, username:username, userimage:userURL} ),
      });

      
      const { msg, success } = await res.json();
      setError(msg);
      setSuccess(success);
  
      if (success) {
        console.log("Clearing data...");
        setIssues("");
        setDescription("");
      }
    };


  return (

    <form className="relative scroll-smooth rounded-lg py-5">
      {/* <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500"> */}
        <label htmlFor="title" className="sr-only">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="block w-full border-0 pt-2.5 text-xl font-medium placeholder:text-gray-400 focus:ring-0"
          placeholder="Issue"
          value={issues}
          onChange={(e) => setIssues(e.target.value)}
        />
        <label htmlFor="description" className="sr-only">
          Description
        </label>
        <textarea
          rows={2}
          name="description"
          id="description"
          className="block w-full resize-none border-0 py-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 xl:text-xl xl:leading-6"
          placeholder="Write a description..."
          defaultValue={''}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

      <div className="flex-shrink-0">
            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleAddIssue}>
              Create
            </button>
      </div>

    </form>
    
  )
}

export default AddIssue;