
import { Disclosure } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import IssueReply from "./issuereply";


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
                    <div>
                      <span className={classNames(open ? 'text-indigo-600' : 'text-gray-900', 'font-semibold leading-6')}>
                        {discussion.title}
                        </span>
                        <span className="text-gray-500 text-sm block mt-2">
                          {discussion.author.name}
                        </span>
                    </div>
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
                            <IssueReply />
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}   
                </div>

              );
            }
