import { ChatBubbleLeftIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';


const discussions = [ 
  {
    id: 1,
    title: 'for loop having its iteration variable overwritten',
    href: '#',
    author: { name: 'Leslie Alexander', href: '#' },
    date: '2d ago',
    dateTime: '2023-01-23T22:34Z',
    status: 'active',
    totalComments: 24,
    commenters: [
      // {
      //   id: 12,
      //   name: 'Emma Dorsey',
      //   imageUrl:
      //     'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      // },
      // {
      //   id: 6,
      //   name: 'Tom Cook',
      //   imageUrl:
      //     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      // },
      // {
      //   id: 4,
      //   name: 'Lindsay Walton',
      //   imageUrl:
      //     'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      // },
      // {
      //   id: 16,
      //   name: 'Benjamin Russel',
      //   imageUrl:
      //     'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      // },
      // {
      //   id: 23,
      //   name: 'Hector Gibbons',
      //   imageUrl:
      //     'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      // },
    ],
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
    commenters: [
      // {
      //   id: 13,
      //   name: 'Alicia Bell',
      //   imageUrl:
      //     'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      // },
      // {
      //   id: 16,
      //   name: 'Benjamin Russel',
      //   imageUrl:
      //     'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      // },
      // {
      //   id: 3,
      //   name: 'Dries Vincent',
      //   imageUrl:
      //     'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      // },
    ],
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
    commenters: [
      // {
      //   id: 19,
      //   name: 'Lawrence Hunter',
      //   imageUrl:
      //     'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      // },
      // {
      //   id: 21,
      //   name: 'Angela Fisher',
      //   imageUrl:
      //     'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      // },
      // {
      //   id: 14,
      //   name: 'Jenny Wilson',
      //   imageUrl:
      //     'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      // },
      // {
      //   id: 16,
      //   name: 'Benjamin Russel',
      //   imageUrl:
      //     'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      // },
    ],
  },
  // {
  //   id: 4,
  //   title: 'Linked List',
  //   href: '#',
  //   author: { name: 'Lindsay Walton', href: '#' },
  //   date: '5d ago',
  //   dateTime: '2023-01-20T10:04Z',
  //   status: 'resolved',
  //   totalComments: 8,
    // commenters: [
      // {
      //   id: 10,
      //   name: 'Emily Selman',
      //   imageUrl:
      //     'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      // },
      // {
      //   id: 11,
      //   name: 'Kristin Watson',
      //   imageUrl:
      //     'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      // },
    // ],
  // },
  {
    id: 4,
    title: ' Inconsistent return declaration',
    href: '#',
    author: { name: 'Courtney Henry', href: '#' },
    date: '5d ago',
    dateTime: '2023-01-20T20:12Z',
    status: 'active',
    totalComments: 15,
    commenters: [
      // {
      //   id: 11,
      //   name: 'Kristin Watson',
      //   imageUrl:
      //     'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      // },
      // {
      //   id: 6,
      //   name: 'Tom Cook',
      //   imageUrl:
      //     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      // },
      // {
      //   id: 10,
      //   name: 'Emily Selman',
      //   imageUrl:
      //     'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      // },
      // {
      //   id: 16,
      //   name: 'Benjamin Russel',
      //   imageUrl:
      //     'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      // },
    ],
  },
]

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {


  return (
    
          <div className="divide-y divide-gray-200 border-t">
            {discussions.map((discussion) => (
              <Disclosure as="div" key={discussion.id}>
                {({ open }) => (
                  <>
                    <h3>
                    <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                    <span className={classNames(open ? 'text-indigo-600' : "text-bg font-semibold leading-6 text-gray-900")} >
                        {discussion.title}
                    </span>
                    <span className="ml-6 flex items-center">
                        {open ? (
                          <MinusIcon className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"aria-hidden="true"/>
                          ) : (
                          <PlusIcon className="block h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                         )}
                    </span>
                      </Disclosure.Button>
                      </h3>
                        <Disclosure.Panel as="div" className="prose prose-sm pb-6">
                          <ul role="list">
                            hello
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}   
                </div>

              );
            }
