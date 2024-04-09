// // import { useState } from 'react';


// import {
//     AcademicCapIcon,
//     BanknotesIcon,
//     CheckBadgeIcon,
//     ClockIcon,
//     ReceiptRefundIcon,
//     UsersIcon,
//   } from '@heroicons/react/24/outline'
  
//   const actions = [
//     {
//       title: 'JACK',
//       href: '#',
//       icon: UsersIcon,
//       iconForeground: 'text-teal-700',
//       iconBackground: 'bg-teal-50',
//     },
//     {
//       title: 'ALEX',
//       href: '#',
//       icon: UsersIcon,
//       iconForeground: 'text-purple-700',
//       iconBackground: 'bg-purple-50',
//     },
//     {
//       title: 'ARTHUR',
//       href: '#',
//       icon: UsersIcon,
//       iconForeground: 'text-sky-700',
//       iconBackground: 'bg-sky-50',
//     },
//     {
//       title: 'IVORY',
//       href: '#',
//       icon: UsersIcon,
//       iconForeground: 'text-yellow-700',
//       iconBackground: 'bg-yellow-50',
//     },
//     {
//       title: 'JEROME',
//       href: '#',
//       icon: UsersIcon,
//       iconForeground: 'text-rose-700',
//       iconBackground: 'bg-rose-50',
//     },
//     {
//       title: 'SAM',
//       href: '#',
//       icon: UsersIcon,
//       iconForeground: 'text-indigo-700',
//       iconBackground: 'bg-indigo-50',
//     },
//   ]
  
//   function classNames(...classes: string[]) {
//     return classes.filter(Boolean).join(' ')
//   }
  
//   export default function Example() {

//       // State to store the user's comment
//       // const [comment, setComment] = useState('');
//       // // State to store the display message
//       // const [displayMessage, setDisplayMessage] = useState('');

//       // // Function to handle comment change
//       // const handleCommentChange = (e) => {
//       //   setComment(e.target.value);
//       // };


//     return (
//         <>
//           <h1 className="text-2xl font-bold mb-4 text-black">General Comment</h1>
//             <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
//               {/* {actions.map((action, actionIdx) => (
//                   <div
//                       key={action.title}
//                       className={classNames(
//                           actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
//                           actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
//                           actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
//                           actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
//                           'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
//                       )}
//                   >
//                       <div>
//                           <span
//                               className={classNames(
//                                   action.iconBackground,
//                                   action.iconForeground,
//                                   'inline-flex rounded-lg p-3 ring-4 ring-white'
//                               )}
//                           >
//                               <action.icon className="h-6 w-6" aria-hidden="true" />
//                           </span>
//                       </div>
//                       <div className="mt-8">
//                           <h3 className="text-base font-semibold leading-6 text-gray-900">
//                               <a href={action.href} className="focus:outline-none">
//                                   Extend touch target to entire panel
//                                   <span className="absolute inset-0" aria-hidden="true" />
//                                   {action.title}
//                               </a>
//                           </h3>
//                           <p className="mt-2 text-sm text-gray-500">
//                               xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//                           </p>
//                       </div>
//                       <span
//                           className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
//                           aria-hidden="true"
//                       >
//                           <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                               <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
//                           </svg>
//                       </span>
//                   </div>
//               ))} */}
//           </div>



//           <div className='py-8 px-10'>
//             <div className="flex items-start space-x-4">
//               <div className="flex-shrink-0">
//                 <img
//                   className="inline-block h-10 w-10 rounded-full"
//                   src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                   alt=""
//                 />
//               </div>
//               <div className="min-w-0 flex-1">
//                 <form action="#" className="relative">
//                   <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
//                     <label htmlFor="comment" className="sr-only">
//                       Add your comment
//                     </label>
//                     <textarea
//                       rows={3}
//                       name="comment"
//                       id="comment"
//                       className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
//                       placeholder="Add your comment..."
//                       defaultValue={''}
//                     />

//                     {/* Spacer element to match the height of the toolbar */}
//                     <div className="py-2" aria-hidden="true">
//                       {/* Matches height of button in toolbar (1px border + 36px content height) */}
//                       <div className="py-px">
//                         <div className="h-9" />
//                       </div>
//                     </div>
                
//                     <div className="flex-shrink-0 py-3 px-5 text-left">
//                       <button
//                         type="submit"
//                         className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                       >
//                         Post
//                       </button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </>
//     )
//   }
  
'use client'

import React, { useState } from 'react';

const people = [
  {
    name: 'Chelsea Hagon',
    imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export default function Example() {
  const [comment, setComment] = useState('');
  // Adjusting the structure to include both the comment and user information
  const [comments, setComments] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming the first person in the array is the commenter
    const person = people[0];
    const newComment = {
      text: comment,
      user: person,
    };
    setComments([...comments, newComment]);
    setComment('');
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-black">General Comments</h1>
      <div className="py-8 px-10">
        {/* Display comments */}
        <div className="comments py-4 mb-4">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="mb-4 relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
            >
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={comment.user.imageUrl} alt="" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">{comment.user.name}</p>
                <div className="comment text-gray-800 text-sm my-2">
                  {comment.text}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Comment form */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <img
              className="inline-block h-10 w-10 rounded-full"
              src={people[0].imageUrl}
              alt=""
            />
          </div>
          <div className="min-w-0 flex-1">
            <form className="relative" onSubmit={handleSubmit}>
              <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                <label htmlFor="comment" className="sr-only">Add your comment</label>
                <textarea
                  rows={3}
                  name="comment"
                  id="comment"
                  className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Add your comment..."
                  value={comment}
                  onChange={handleCommentChange}
                />
                <div className="py-2" aria-hidden="true">
                  <div className="py-px">
                    <div className="h-9" />
                  </div>
                </div>
                <div className="flex-shrink-0 py-3 px-5 text-left">
                  <button
                    type="submit"
                    className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

