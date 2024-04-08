// import React from 'react';

// export default function Issue() {
//   return (
//     <div className="text-sm text-indigo-500 font-medium hover:underline">
//       <h2 className="text-lg font-bold mb-2 text-black">ISSUE</h2>
//       <div className="overflow-x-auto">
//         <table className="table-auto w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-700 text-white rounded-lg">
//               <th className="px-4 py-2 border w-2/10 cursor-pointer hover:bg-gray-600">ISSUE</th>
//               <th className="px-4 py-2 border w-6/10 cursor-pointer hover:bg-gray-600">Description</th>
//               <th className="px-4 py-2 border w-2/10 cursor-pointer hover:bg-gray-600">Reply</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="bg-gray-200  rounded-lg">
//               <td className="px-4 py-8 border cursor-pointer hover:bg-gray-300" style={{ width: '20%' }}>For loop</td>
//               <td className="px-4 py-8 border cursor-pointer hover:bg-gray-300" style={{ width: '60%' }}>XXXXXXXX</td>
//               <td className="px-4 py-8 border cursor-pointer hover:bg-gray-300" style={{ width: '20%' }}>6∨</td>
//             </tr>
//             <tr className="bg-gray-200 rounded-lg">
//               <td className="px-4 py-8 border w-2/10 cursor-pointer hover:bg-gray-300" style={{ width: '20%' }}>Binary tree</td>
//               <td className="px-4 py-8 border w-6/10 cursor-pointer hover:bg-gray-300" style={{ width: '60%' }}>XXXXXXXXX</td>
//               <td className="px-4 py-8 border w-2/10 cursor-pointer hover:bg-gray-300" style={{ width: '20%' }}>18∨</td>
//             </tr>
//             <tr className="bg-gray-200 rounded-lg">
//               <td className="px-4 py-8 border w-2/10 cursor-pointer hover:bg-gray-300" style={{ width: '20%' }}>febbonach</td>
//               <td className="px-4 py-8 border w-6/10 cursor-pointer hover:bg-gray-300" style={{ width: '60%' }}>XXXXXXXX</td>
//               <td className="px-4 py-8 border w-2/10 cursor-pointer hover:bg-gray-300" style={{ width: '20%' }}>13∨</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

import { ChatBubbleLeftIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

const discussions = [ 
  {
    id: 1,
    title: 'Binary Tree',
    href: '#',
    author: { name: 'Leslie Alexander', href: '#' },
    date: '2d ago',
    dateTime: '2023-01-23T22:34Z',
    status: 'active',
    totalComments: 24,
    commenters: [
      {
        id: 12,
        name: 'Emma Dorsey',
        imageUrl:
          'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 6,
        name: 'Tom Cook',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 4,
        name: 'Lindsay Walton',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 16,
        name: 'Benjamin Russel',
        imageUrl:
          'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 23,
        name: 'Hector Gibbons',
        imageUrl:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
  },
  {
    id: 2,
    title: 'Quick Sort',
    href: '#',
    author: { name: 'Michael Foster', href: '#' },
    date: '2d ago',
    dateTime: '2023-01-23T19:20Z',
    status: 'active',
    totalComments: 6,
    commenters: [
      {
        id: 13,
        name: 'Alicia Bell',
        imageUrl:
          'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 16,
        name: 'Benjamin Russel',
        imageUrl:
          'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 3,
        name: 'Dries Vincent',
        imageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
  },
  {
    id: 3,
    title: 'K-Means',
    href: '#',
    author: { name: 'Dries Vincent', href: '#' },
    date: '3d ago',
    dateTime: '2023-01-22T12:59Z',
    status: 'resolved',
    totalComments: 22,
    commenters: [
      {
        id: 19,
        name: 'Lawrence Hunter',
        imageUrl:
          'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 21,
        name: 'Angela Fisher',
        imageUrl:
          'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 14,
        name: 'Jenny Wilson',
        imageUrl:
          'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 16,
        name: 'Benjamin Russel',
        imageUrl:
          'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
  },
  {
    id: 4,
    title: 'Linked List',
    href: '#',
    author: { name: 'Lindsay Walton', href: '#' },
    date: '5d ago',
    dateTime: '2023-01-20T10:04Z',
    status: 'resolved',
    totalComments: 8,
    commenters: [
      {
        id: 10,
        name: 'Emily Selman',
        imageUrl:
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 11,
        name: 'Kristin Watson',
        imageUrl:
          'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
  },
  {
    id: 5,
    title: 'Hash Table',
    href: '#',
    author: { name: 'Courtney Henry', href: '#' },
    date: '5d ago',
    dateTime: '2023-01-20T20:12Z',
    status: 'active',
    totalComments: 15,
    commenters: [
      {
        id: 11,
        name: 'Kristin Watson',
        imageUrl:
          'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 6,
        name: 'Tom Cook',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 10,
        name: 'Emily Selman',
        imageUrl:
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: 16,
        name: 'Benjamin Russel',
        imageUrl:
          'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
  },
]

export default function Example() {
  return (
    <><h1 className="text-2xl font-bold mb-4 text-black">Issue</h1><ul role="list" className="divide-y divide-gray-100">
          {discussions.map((discussion) => (
              <li
                  key={discussion.id}
                  className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap"
              >
                  <div>
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                          <a href={discussion.href} className="hover:underline">
                              {discussion.title}
                          </a>
                      </p>
                      <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                          <p>
                              <a href={discussion.author.href} className="hover:underline">
                                  {discussion.author.name}
                              </a>
                          </p>
                          <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                              <circle cx={1} cy={1} r={1} />
                          </svg>
                          <p>
                              <time dateTime={discussion.dateTime}>{discussion.date}</time>
                          </p>
                      </div>
                  </div>
                  <dl className="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
                      <div className="flex -space-x-0.5">
                          <dt className="sr-only">Commenters</dt>
                          {discussion.commenters.map((commenter) => (
                              <dd key={commenter.id}>
                                  <img
                                      className="h-6 w-6 rounded-full bg-gray-50 ring-2 ring-white"
                                      src={commenter.imageUrl}
                                      alt={commenter.name} />
                              </dd>
                          ))}
                      </div>
                      <div className="flex w-16 gap-x-2.5">
                          <dt>
                              <span className="sr-only">Total comments</span>
                              {discussion.status === 'resolved' ? (
                                  <CheckCircleIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                              ) : (
                                  <ChatBubbleLeftIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                              )}
                          </dt>
                          <dd className="text-sm leading-6 text-gray-900">{discussion.totalComments}</dd>
                      </div>
                  </dl>
              </li>
          ))}
      </ul></>
  )
}
