


// export default function GeneralComments() {

//     return (
//         <div className="text-sm text-indigo-500 font-medium hover:underline">
//           <h2 className="text-lg font-bold mb-2 text-black">General Comment</h2>
//           <div className="overflow-x-auto">
//             <table className="table-auto w-full border-collapse">
//               <thead>
//                 <tr className="bg-gray-700 text-white rounded-lg">
//                   <th className="px-4 py-2 border w-2/10 cursor-pointer hover:bg-gray-600">Author</th>
//                   <th className="px-4 py-2 border w-6/10 cursor-pointer hover:bg-gray-600">Description</th>
//                   <th className="px-4 py-2 border w-2/10 cursor-pointer hover:bg-gray-600">Reply</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="bg-gray-200  rounded-lg">
//                   <td className="px-4 py-8 border cursor-pointer hover:bg-gray-300" style={{ width: '20%' }}>JACK</td>
//                   <td className="px-4 py-8 border cursor-pointer hover:bg-gray-300" style={{ width: '60%' }}>XXXXXXXX</td>
//                   <td className="px-4 py-8 border cursor-pointer hover:bg-gray-300" style={{ width: '20%' }}>10∨</td>
//                 </tr>
//                 <tr className="bg-gray-200 rounded-lg">
//                   <td className="px-4 py-8 border w-2/10 cursor-pointer hover:bg-gray-300" style={{ width: '20%' }}>Jerome</td>
//                   <td className="px-4 py-8 border w-6/10 cursor-pointer hover:bg-gray-300" style={{ width: '60%' }}>XXXXXXXXX</td>
//                   <td className="px-4 py-8 border w-2/10 cursor-pointer hover:bg-gray-300" style={{ width: '20%' }}>8∨</td>
//                 </tr>
//                 <tr className="bg-gray-200 rounded-lg">
//                   <td className="px-4 py-8 border w-2/10 cursor-pointer hover:bg-gray-300" style={{ width: '20%' }}>Alex</td>
//                   <td className="px-4 py-8 border w-6/10 cursor-pointer hover:bg-gray-300" style={{ width: '60%' }}>XXXXXXXX</td>
//                   <td className="px-4 py-8 border w-2/10 cursor-pointer hover:bg-gray-300" style={{ width: '20%' }}>6∨</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       );

// }

import {
    AcademicCapIcon,
    BanknotesIcon,
    CheckBadgeIcon,
    ClockIcon,
    ReceiptRefundIcon,
    UsersIcon,
  } from '@heroicons/react/24/outline'
  
  const actions = [
    {
      title: 'JACK',
      href: '#',
      icon: UsersIcon,
      iconForeground: 'text-teal-700',
      iconBackground: 'bg-teal-50',
    },
    {
      title: 'ALEX',
      href: '#',
      icon: UsersIcon,
      iconForeground: 'text-purple-700',
      iconBackground: 'bg-purple-50',
    },
    {
      title: 'ARTHUR',
      href: '#',
      icon: UsersIcon,
      iconForeground: 'text-sky-700',
      iconBackground: 'bg-sky-50',
    },
    {
      title: 'IVORY',
      href: '#',
      icon: UsersIcon,
      iconForeground: 'text-yellow-700',
      iconBackground: 'bg-yellow-50',
    },
    {
      title: 'JEROME',
      href: '#',
      icon: UsersIcon,
      iconForeground: 'text-rose-700',
      iconBackground: 'bg-rose-50',
    },
    {
      title: 'SAM',
      href: '#',
      icon: UsersIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
    },
  ]
  
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Example() {
    return (
        <><h1 className="text-2xl font-bold mb-4 text-black">General Comment</h1><div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
            {actions.map((action, actionIdx) => (
                <div
                    key={action.title}
                    className={classNames(
                        actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                        actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                        actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                        actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                        'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
                    )}
                >
                    <div>
                        <span
                            className={classNames(
                                action.iconBackground,
                                action.iconForeground,
                                'inline-flex rounded-lg p-3 ring-4 ring-white'
                            )}
                        >
                            <action.icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-base font-semibold leading-6 text-gray-900">
                            <a href={action.href} className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span className="absolute inset-0" aria-hidden="true" />
                                {action.title}
                            </a>
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        </p>
                    </div>
                    <span
                        className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
                        aria-hidden="true"
                    >
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                        </svg>
                    </span>
                </div>
            ))}
        </div></>
    )
  }
  