'use client';
import axios from 'axios';
import Cookies from 'js-cookie';

import SolutionDisplay from "../../discussion/solution_display";

import {  usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';


export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pageId, setPageId] =  useState<string | string[] | undefined>(undefined);  

    const pathname = usePathname();

    const extractId = (pathname: string): string => {
        const match = pathname.match(/\/acceptdetail\/([a-f0-9]+)/);
        if (match && match[1]) {
        return match[1];
        }
        return '';
    };

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<any>(null);

    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/auth/users');
        console.log('Fetched user:', response.data.data.isAdmin);
        setIsLoggedIn(true);
        setUser(response.data.data);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    };

    useEffect(() => {
      const token = Cookies.get('token');
      setIsLoggedIn(Boolean(token)|| false); // Convert token to boolean using Boolean() function
      const loggedIn = true;  
      if (loggedIn){
        fetchUser();
      }
    }, [setIsLoggedIn]);
    

    useEffect(() => {
        const pageId = extractId(pathname);
        if (pageId) {
            setPageId(pageId);
        }
    }, [pathname]); 

    
    return (
        <>
            <div className='fadeIn'>
                <a href="/acceptance" className="flex py-10 px-16 items-center text-md font-medium text-blue-600 hover:text-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12"></path>
                    </svg>
                    Back to acceptance
                </a>
                <div className="overflow-hidden px-28 rounded-lg bg-white shadow">
                    <div className="px-4 py-5 sm:p-6 shadow-lg">
                        <SolutionDisplay pageId={pageId} isAdmin={user?.isAdmin}/>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </>
    );
}