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

    return (
        <div>
            {submits.map((submit) => (
                <div className="bg-white px-4 py-5 sm:px-6">
                    <div className="flex space-x-3">
                        <div className="flex-shrink-0">
                            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-sm font-semibold text-gray-900">
                                {submit.issuedescriptions}
                            </p>
                            <p className="text-sm text-gray-500">
                                April 1 at 11:43 AM, 2024
                            </p>
                            <div className="py-3 text-2xl font-bold text-black">
                                {submit.codesamples}
                            </div>
                            <div className="flex flex-wrap gap-2 mb-5">
                                  <span className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20">{submit.languages}</span>
                                  <span className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20">{submit.levels}</span>
                                  <span className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20">{submit.types}</span>
                                  {submit.tags.map((tag) => (
                                <span className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20">{tag}</span>
                                  ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
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

//       <div>
//           {submit.map((content) => (
//                   <div
//                       className="bg-white px-4 py-5 sm:px-6">
//                       <div className="flex space-x-3">
//                           <div className="flex-shrink-0">
//                               <img
//                                   className="h-10 w-10 rounded-full"
//                                   src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                                   alt=""
//                               />
//                               </div>
//                               <div className="min-w-0 flex-1">
//                               <p className="text-sm font-semibold text-gray-900">
//                                   <a href="#" className="hover:underline">
//                                       {content.issuedescriptions}
//                                   </a>
//                               </p>
//                               <p className="text-sm text-gray-500">
//                                   <a href="#" className="hover:underline">
//                                   April 1 at 11:43 AM, 2024
//                                   </a>
//                               </p>
                              
//                               <div className="py-3 text-2xl font-bold  text-black">
//                                   {content.issuedescriptions}
//                               </div>
                              
                            //   <div className="flex flex-wrap gap-2 mb-5">
                            //       <span className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20">{content.languages}</span>
                            //       <span className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20">{content.levels}</span>
                            //       <span className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20">{content.types}</span>
                            //       <span className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20">{content.tags}</span>
                            //   </div>
//                               <div className="bg-gray-50 px-4 py-5 sm:p-6">
                                  
//                               </div>
                          
//                           </div>
                      
//                       </div>
//                   </div>
//            ))}
//       </div>
// )
// }


// export async function generateMetadata({ params }: {
//   params: { id: number }
// }): Promise<Metadata> {
//   const postsData: Promise<Post[]> = getAllPosts()
//   const posts = await postsData
//   const post = posts.find((post) => post.id === Number(params.id))

//   if (!post) {
//     return {
//       title: 'Post Not Found'
//     }
//   }  

//   return {
//     title: post.title,
//     description: 'Page description',
//   }

// }

// export default async function SinglePost({ params }: {
//   params: { id: number }
// }) {

//   const postsData: Promise<Post[]> = getAllPosts()
//   const posts = await postsData
//   const post = posts.find((post) => post.id === Number(params.id))

//   if (!post) {
//     notFound()
//   }

// const SolutionDisplay = ({ params }) => {
//     const [submit, setSubmit] = useState(null);

//     useEffect(() => {
//         const fetchSubmit = async () => {
//             try {
//                 const res = await fetch(`./api/submits/${id}`, { cache: 'no-store' });
//                 if (!res.ok) throw new Error('Failed to fetch submit');
//                 const data = await res.json();
//                 setSubmit(data.submit); // Change data.submits to data.submit
//             } catch (error) {
//                 console.error('There was an error!', error);
//             }
//         };

//         fetchSubmit();
//     }, [id]);

//     // Render single submit data
//     return (
//         <div>
//             {submit && (
//                 <div className="bg-white px-4 py-5 sm:px-6">
//                     <div className="flex space-x-3">
//                         <div className="flex-shrink-0">
//                             <img
//                                 className="h-10 w-10 rounded-full"
//                                 src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                                 alt=""
//                             />
//                         </div>
//                         <div className="min-w-0 flex-1">
//                             <p className="text-sm font-semibold text-gray-900">
//                                 <a href="#" className="hover:underline">
//                                     {submit.issuedescriptions}
//                                 </a>
//                             </p>
//                             <p className="text-sm text-gray-500">
//                                 <a href="#" className="hover:underline">
//                                     April 1 at 11:43 AM, 2024
//                                 </a>
//                             </p>
//                             <div className="py-3 text-2xl font-bold text-black">
//                                 Duplicate Error
//                             </div>
//                             <div className="flex flex-wrap gap-2 mb-5">
//                                 <span className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20">{submit.languages}</span>
//                                 <span className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20">{submit.levels}</span>
//                                 <span className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20">{submit.types}</span>
//                                 <span className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20">{submit.tags}</span>
//                             </div>
//                             <div className="bg-gray-50 px-4 py-5 sm:p-6">
//                                 {submit.issuedescriptions}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default SolutionDisplay;




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