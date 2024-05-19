// ts-nocheck
// "use client";

// import { useEffect, useState } from "react";

// const SolutionDisplay = ({ pageId }:{pageId:string}) => {

//     const [submit, setSubmit] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const fetchSubmit = async () => {
//         if (!pageId) return;
      
//         try {
//           const response = await fetch(`/api/submits/${pageId}`);
//           if (!response.ok) {
//             throw new Error('Failed to fetch submit');
//           }
//           const data = await response.json();
//           setSubmit(data.submit); // 这里假设响应结构是 { submit: {...} }
//         } catch (error:any) {
//           console.error('Fetch error:', error);
//           setError(error.message);
//         } finally {
//           setLoading(false);
//         }
//       };
      
//         useEffect(() => {
//           fetchSubmit();
//         }, [pageId]); 

        
//       if (loading) return <div>Loading...</div>;
//       if (error) return <div>Error: {error}</div>;

//     return (
//         <div>
           
//                 <div className="bg-white px-4 py-5 sm:px-6">
//                     <div className="flex space-x-3">
//                         <div className="flex-shrink-0">
//                             <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
//                         </div>
//                         <div className="min-w-0 flex-1">
//                             <p className="text-xl font-semibold text-gray-900">
//                                 {submit.tags[0]}
//                             </p>
//                             <p className="text-sm text-gray-500">
//                                 April 1 at 11:43 AM, 2024
//                             </p>
//                             <div className="flex flex-wrap gap-2 mb-5">
//                                   <span className="inline-flex items-center rounded-md px-3 bg-indigo-50 text-xs font-normal text-gray-500 ring-1 ring-inset ring-green-600/20">{submit.languages}</span>
//                                   <span className="inline-flex items-center rounded-md px-3 bg-indigo-50 text-xs font-normal text-gray-500 ring-1 ring-inset ring-green-600/20">{submit.levels}</span>
//                                   <span className="inline-flex items-center rounded-md px-3 bg-indigo-50 text-xs font-normal text-gray-5000 ring-1 ring-inset ring-green-600/20">{submit.types}</span>
//                                   {submit.tags.map((tag:any) => (
//                                     <span className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20"> {tag} </span>
//                                   ))}
//                             </div>
//                             < pre className="bg-gray-100 overflow-auto touch-auto p-4 rounded-md min-w-max">
//                               <code className="text-sm text-black-600 font-mono whitespace-pre-wrap">
//                                 {submit.codesamples}
//                               </code>
//                             </pre>
//                             <p className="text-sm text-gray-900 mt-4">
//                                 {submit.issuedescriptions}
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//         </div>
//     );
// };

// export default SolutionDisplay;


// 实现edit tags功能
// "use client";

// import { useEffect, useState } from "react";

// const SolutionDisplay = ({ pageId }: { pageId: string }) => {
//   const [submit, setSubmit] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingTag, setEditingTag] = useState<string | null>(null);
//   const [tagValue, setTagValue] = useState<string>("");

//   const fetchSubmit = async () => {
//     if (!pageId) return;

//     try {
//       const response = await fetch(`/api/submits/${pageId}`);
//       if (!response.ok) {
//         throw new Error("Failed to fetch submit");
//       }
//       const data = await response.json();
//       setSubmit(data.submit); // 这里假设响应结构是 { submit: {...} }
//     } catch (error: any) {
//       console.error("Fetch error:", error);
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchSubmit();
//   }, [pageId]);

//   //当标签被点击时，设置编辑状态并初始化输入框的值
//   const handleTagClick = (tag: string) => {
//     console.log("打开框");
//     console.log("查看editingTag:", editingTag);
//     console.log("setTagValue:", tagValue);
//     setEditingTag(tag);
//     setTagValue(tag);
//   };
// //处理输入框值的变化
//   const handleInputChange = (e: any) => {
//     console.log("查看变化setTagValue:", tagValue);
//     setTagValue(e.target.value);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (tagValue !== null && submit !== null) {
//       try {
//         const updatedTags = submit.tags.map((tag: string) =>
//           tag === editingTag ? tagValue : tag
//         );

//         const response = await fetch(`/api/submits/${pageId}`, {
//           method: "POST",
//           headers: {
//             "Content-type": "application/json",
//           },
//           body: JSON.stringify({ type: "tags", tags: updatedTags, pageId: pageId }),
//         });

//         if (!response.ok) {
//           throw new Error("Failed to update tag");
//         }

//         setSubmit(prevSubmit => ({
//           ...prevSubmit,
//           tags: updatedTags
//         }));
//         setEditingTag(null);
//         setTagValue("");
//       } catch (error: any) {
//         console.error("Update error:", error);
//       }
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <div className="bg-white px-4 py-5 sm:px-6">
//         <div className="flex space-x-3">
//           <div className="flex-shrink-0">
//             <img
//               className="h-10 w-10 rounded-full"
//               src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//               alt=""
//             />
//           </div>
//           <div className="min-w-0 flex-1">
//             <p className="text-xl font-semibold text-gray-900">
//               {submit?.tags[0]}
//             </p>
//             <p className="text-sm text-gray-500">
//               April 1 at 11:43 AM, 2024
//             </p>
//             <div className="flex flex-wrap gap-2 mb-5">
//               <span className="inline-flex items-center rounded-md px-3 bg-indigo-50 text-xs font-normal text-gray-500 ring-1 ring-inset ring-green-600/20">
//                 {submit?.languages}
//               </span>
//               <span className="inline-flex items-center rounded-md px-3 bg-indigo-50 text-xs font-normal text-gray-500 ring-1 ring-inset ring-green-600/20">
//                 {submit?.levels}
//               </span>
//               <span className="inline-flex items-center rounded-md px-3 bg-indigo-50 text-xs font-normal text-gray-5000 ring-1 ring-inset ring-green-600/20">
//                 {submit?.types}
//               </span>
//               {submit?.tags.map((tag: any, index: number) => (
//                 <span key={index} className="inline-flex items-center rounded-md px-3 bg-green-50 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20">
//                   {editingTag === tag ? (
//                     <form  onSubmit={handleSubmit} className="inline-flex items-center">
//                       <input
//                         type="text"
//                         value={tagValue}
//                         onChange={handleInputChange}
//                         className="rounded-md px-3 text-xs font-normal text-green-700 ring-1 ring-inset ring-green-600/20"
//                       />
//                       <button type="submit"  className="ml-2 px-2 py-1 bg-green-600 text-white text-xs rounded">
//                         Edit
//                       </button>
//                     </form>
//                   ) : (
//                     <span onClick={() => handleTagClick(tag)} className="cursor-pointer">
//                       {tag}
//                     </span>
//                   )}
//                 </span>
//               ))}
//             </div>
//             <pre className="bg-gray-100 overflow-auto touch-auto p-4 rounded-md min-w-max">
//               <code className="text-sm text-black-600 font-mono whitespace-pre-wrap">
//                 {submit?.codesamples}
//               </code>
//             </pre>
//             <p className="text-sm text-gray-900 mt-4">{submit?.issuedescriptions}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SolutionDisplay;
