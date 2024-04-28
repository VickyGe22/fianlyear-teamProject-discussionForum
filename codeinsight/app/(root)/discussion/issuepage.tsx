
// import { Disclosure } from '@headlessui/react';
// import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
// import IssueReply from "./issuereply";


// const discussions = [ 
//   {
//     id: 1,
//     title: 'For loop having its iteration variable overwritten',
//     href: '#',
//     author: { name: 'Leslie Alexander', href: '#' },
//     date: '2d ago',
//     dateTime: '2023-01-23T22:34Z',
//     status: 'active',
//     totalComments: 24,
//   },
//   {
//     id: 2,
//     title: 'Redundant operations inside loop',
//     href: '#',
//     author: { name: 'Michael Foster', href: '#' },
//     date: '2d ago',
//     dateTime: '2023-01-23T19:20Z',
//     status: 'active',
//     totalComments: 6,
//   },
//   {
//     id: 3,
//     title: 'Unnecessary elif/else',
//     href: '#',
//     author: { name: 'Dries Vincent', href: '#' },
//     date: '3d ago',
//     dateTime: '2023-01-22T12:59Z',
//     status: 'resolved',
//     totalComments: 22,
//   },
//   {
//     id: 4,
//     title: ' Inconsistent return declaration',
//     href: '#',
//     author: { name: 'Courtney Henry', href: '#' },
//     date: '5d ago',
//     dateTime: '2023-01-20T20:12Z',
//     status: 'active',
//     totalComments: 15,
//   },
// ]

// function classNames(...classes:string[]) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Example() {


//   return (
    
//           <div className="divide-y divide-gray-200 border-t">
//             {discussions.map((discussion) => (
//               <Disclosure as="div" key={discussion.id}>
//                 {({ open }) => (
//                   <>
//                     <h3>
//                     <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
//                     <div>
//                       <span className={classNames(open ? 'text-indigo-600' : 'text-gray-900', 'font-semibold leading-6')}>
//                         {discussion.title}
//                         </span>
//                         <span className="text-gray-500 text-sm block mt-2">
//                           {discussion.author.name}
//                         </span>
//                     </div>
//                     <span className="ml-6 flex items-center">
//                         {open ? (
//                           <MinusIcon className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"aria-hidden="true"/>
//                           ) : (
//                           <PlusIcon className="block h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
//                         )}
//                     </span>
//                       </Disclosure.Button>
//                       </h3>
//                         <Disclosure.Panel as="div" className="prose prose-sm pb-6">
//                           <ul role="list">
//                             <IssueReply />
//                           </ul>
//                         </Disclosure.Panel>
//                       </>
//                     )}
//                   </Disclosure>
//                 ))}   
//                 </div>

//               );
//             }
import { Disclosure } from '@headlessui/react';
import { MinusIcon, PlusIcon, StarIcon } from '@heroicons/react/24/outline';
import IssueReply from "./issuereply";
import Pagination from '../sampleLists/submit-pagination';

// 假设你有每个作者的头像 URL 数据
type AuthorAvatars = {
  [key: string]: string;
};

const authorAvatars: AuthorAvatars = {
  'Leslie Alexander': 'https://randomuser.me/api/portraits/women/1.jpg',
  'Michael Foster': 'https://randomuser.me/api/portraits/men/2.jpg',
  'Dries Vincent': 'https://randomuser.me/api/portraits/men/3.jpg',
  'Courtney Henry': 'https://randomuser.me/api/portraits/women/4.jpg'
};

const discussions = [ 
  {
    id: 1,
    title: 'For loop having its iteration variable overwritten',
    href: '#',
    author: { name: 'Leslie Alexander', href: '#' },
    date: '2d ago',
    dateTime: '2023-01-23T22:34Z',
    status: 'active',
    totalComments: 24,
  },
  {
    id: 2,
    title: 'Redundant operations inside loop',
    href: '#',
    author: { name: 'Michael Foster', href: '#' },
    date: '2d ago',
    dateTime: '2023-01-23T19:20Z',
    status: 'active',
    totalComments: 6,
  },
  {
    id: 3,
    title: 'Unnecessary elif/else',
    href: '#',
    author: { name: 'Dries Vincent', href: '#' },
    date: '3d ago',
    dateTime: '2023-01-22T12:59Z',
    status: 'resolved',
    totalComments: 22,
  },
  {
    id: 4,
    title: ' Inconsistent return declaration',
    href: '#',
    author: { name: 'Courtney Henry', href: '#' },
    date: '5d ago',
    dateTime: '2023-01-20T20:12Z',
    status: 'active',
    totalComments: 15,
  },
];

function classNames(...classes: string[]) {



  return classes.filter(Boolean).join(' ');
}



export default function Example() {
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
                          src={authorAvatars[discussion.author.name]}
                          alt={`${discussion.author.name}'s avatar`}
                        />
                        {/* Author Name and Metadata */}
                        <div>
                          <span className="font-semibold text-gray-900">
                            {discussion.author.name}
                          </span>
                          <span className="text-xs text-gray-500 block">
                            {new Date(discussion.dateTime).toLocaleString()}
                          </span>
                          <p className="mt-1 text-gray-800 text-sm">
                            {discussion.title}
                          </p>
                        </div>
                      </div>

                      {/* Vote and Replies Section */}
                      <div className="flex flex-col items-end space-y-1">
                        <span className="text-xs text-gray-600">
                          severity level: low
                        </span>
                        <span className="text-xs text-gray-600">
                          vote: {discussion.totalComments}
                        </span>
                        <Disclosure.Button className="text-indigo-600 hover:text-indigo-500 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                          </svg>
                          <span className="text-xs">
                            {open ? `Hide ${discussion.totalComments} Replies` : `Show ${discussion.totalComments} Replies`}
                          </span>
                        </Disclosure.Button>
                      </div>
                    </div>
                    <Disclosure.Panel as="div" className="pb-4 px-6">
                      {/* IssueReply component and other content */}
                      <IssueReply />
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>


  );
}
