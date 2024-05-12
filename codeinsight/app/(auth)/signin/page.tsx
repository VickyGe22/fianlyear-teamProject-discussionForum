'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Changed import from next/router to next/navigation
import { generateGoogleLoginLink } from './googleApi';

export default function GoogleLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const pathname = usePathname(); // Use usePathname instead of useRouter for Server Components

  const [redirectUrl, setRedirectUrl] = useState<string | null>(null); // State to hold redirect URL

  useEffect(() => {
    // Check if there's a redirect URL
    if (redirectUrl) {
      // Perform the redirect
      window.location.href = redirectUrl;
    }
  }, [redirectUrl]); // Listen for changes in redirectUrl

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Validation logic remains the same
    if (email === 'codeinsight@gmail.com' && password === 'codeinsight') {
      // Set the redirect URL
      setRedirectUrl('http://localhost:3000/adminPage');
    } else {
      alert('Please enter the correct email and password.');
    }
  };

  const googleLoginLink = generateGoogleLoginLink();

  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-6 text-center">Login</h1>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
          </div>
          <div className="text-center">
            <button type="submit" className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Login</button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">Or sign in with</p>
          <a href={googleLoginLink} className="mt-2 block w-full py-2 px-4 border border-gray-300 rounded-md bg-white text-center text-gray-700 hover:bg-gray-50">Google</a>
        </div>
      </div>
    </div>
  );
}
