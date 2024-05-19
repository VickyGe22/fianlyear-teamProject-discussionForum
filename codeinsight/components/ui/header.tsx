import Link from 'next/link'
import Logo from '@/components/ui/header-logo'

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

interface NavItem {
  name: string;
  href: string;
  current: boolean;
}

const baseNavigation: NavItem[] = [
  { name: 'Home', href: '/', current: false },
  { name: 'Submit', href: '/submits', current: false },
  { name: 'Discuss', href: '/sampleLists', current: false }
]


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}


export default function Example() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [navigation, setNavigation] = useState<NavItem[]>(baseNavigation);

  const fetchUser = async () => {
    try {
      const response = await axios.get('/api/auth/users'); 
      console.log('这里这这这这这这这种话', response.data.data.isAdmin);
      setUser(response.data);
      if (response.data.data.isAdmin) {
        setNavigation([
          ...baseNavigation,
          { name: 'Acceptance', href: '/acceptance', current: false }
        ]);
      }
    } catch (error) {
      console.error('Failed to fetch user:', error);
    }
  };

  useEffect(() => {
    const token = document.cookie.includes('token');
    setIsLoggedIn(token);
    console.log("useEffect triggered"); // 调试信息
    console.log("Token found:", token); // 调试信息

    fetchUser();

  }, []);

  const signout = async () => {
    try {
      await axios.get('/api/auth/signout');
      toast.success('Signout successful');
      setIsLoggedIn(false);
      window.location.href = '/signin'; // Use JavaScript to redirect
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };


  return (
    <>
      <div className="h-full">
        <Disclosure as="nav" className="bg-white shadow-sm">
          {({ open }) => (
            <>
              <div className="mx-auto  px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                  <div className="flex">
                    <div className="flex flex-shrink-0 items-center">
                      <Logo />
                    </div>
                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? ' text-gray-900'
                              : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                            'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  <nav className="flex grow">
                    {/* Desktop sign in links */}
                    <ul className="flex grow justify-end flex-wrap items-center">
                      <li className="ml-3">
                          {isLoggedIn ? (
                              <Link
                              className="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm"
                              href="/signin"
                              >
                                Sign In
                              </Link>
                              
                          ) : (
                              <button
                              onClick={signout}
                              className="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm"
                              >
                                Sign Out
                              </button>
                          )}
                      </li>
                    </ul>
                  </nav>

                  <div className="flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href ={item.href}
                      className ={classNames(
                        item.current
                          ? ' bg-indigo-50 '
                          : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800',
                        'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}



