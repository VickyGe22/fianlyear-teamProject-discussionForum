import React, { useState, useEffect } from 'react';


// Assuming params is received as props in the component
const SolutionDisplay = ({ pageId }) => {
    
    const [submits, setSubmits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Define the async function inside useEffect
        const fetchSubmits = async () => {
            try {
                const res = await fetch(`../../api/submits?pageid=${pageId}`, {
                    method: 'GET',
                    cache: 'no-store'
                });
                if (!res.ok) {
                    throw new Error('Failed to fetch submits');
                }
                const data = await res.json();
                setSubmits(data.submits); // Set the fetched submits
                setLoading(false);
            } catch (error) {
                console.error('There was an error!', error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchSubmits(); // Call the function
    }, [pageId]); // Dependency array, the effect will run again if pageId changes

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    console.log("在这里",submits)

    return (
        <div>
           
                <div className="bg-white px-4 py-5 sm:px-6">
                    <div className="flex space-x-3">
                        <div className="flex-shrink-0">
                            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-sm font-semibold text-gray-900">
                                {submits.issuedescriptions}
                            </p>
                            <p className="text-sm text-gray-500">
                                April 1 at 11:43 AM, 2024
                            </p>
                            <div className="py-3 text-2xl font-bold text-black">
                                {submits.codesamples}
                            </div>
                            <div className="flex flex-wrap gap-2 mb-5">
                                  <span className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20">{submits.languages}</span>
                                  <span className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20">{submits.levels}</span>
                                  <span className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20">{submits.types}</span>
                                  {/* {submits.tags.map((tag) => (
                                <span className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20">{tag}</span>
                                  ))} */}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default SolutionDisplay;



// import { useEffect, useState } from "react";


// const getSubmitById = async(id) => {

//   try{
//       const res = await fetch(`http://localhost:3000/api/submits/${id}`, 
//       {
//         cache: 'no-store'
//       });

//       if (!res.ok) {
//           throw new Error('Failed to fetch submit');
//       }

//       return res.json()

//   } catch (error) {
//       console.error('There was an error!', error);
//   }
// }

// export default async function solutionDisplay(params) {

//   const {id} = params;
//   const { submit } = await getSubmitById(id);

// return (







// import EditTopicForm from "@/components/EditTopicForm";

// const getTopicById = async (id) => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/ts/${id}`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch topic");
//     }

//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default async function EditTopic({ params }) {
//   const { id } = params;
//   const { topic } = await getTopicById(id);
//   const { title, description } = topic;

//   return <EditTopicForm id={id} title={title} description={description} />;
// }

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function EditTopicForm({ id, title, description }) {
//   const [newTitle, setNewTitle] = useState(title);
//   const [newDescription, setNewDescription] = useState(description);

//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
//         method: "GET",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify({ newTitle, newDescription }),
//       });

//       if (!res.ok) {
//         throw new Error("Failed to update topic");
//       }

//       router.refresh();
//       router.push("/");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//       <input
//         onChange={(e) => setNewTitle(e.target.value)}
//         value={newTitle}
//         className="border border-slate-500 px-8 py-2"
//         type="text"
//         placeholder="Topic Title"
//       />

//       <input
//         onChange={(e) => setNewDescription(e.target.value)}
//         value={newDescription}
//         className="border border-slate-500 px-8 py-2"
//         type="text"
//         placeholder="Topic Description"
//       />

//       <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
//         Update Topic
//       </button>
//     </form>
//   );
// }