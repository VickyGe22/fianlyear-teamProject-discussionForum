// import { useState } from 'react';
// import { generateGoogleLoginLink } from "./googleApi";

// export const metadata = {
//   title: 'Sign In',
//   description: 'Page description',
// }

//   const handleGoogleSignIn = () => {
//     window.location.href = generateGoogleLoginLink();
//   };
// export default function SignIn() {
//   return (
//     <>
//       <div className="mb-10">
//         <h1 className="text-4xl font-extrabold font-inter mb-2">Sign in to CodeInsight</h1>
//         <div className="text-gray-500">Enter your email for a password-free sign in.</div>
//       </div>

//       {/* Form */}
//       <form>
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium mb-1" htmlFor="email">
//               Email
//             </label>
//             <input id="email" className="form-input w-full" type="email" required />
//           </div>
//         </div>
//         <div className="mt-6">
//           <button className="btn w-full text-white bg-indigo-500 hover:bg-indigo-600 shadow-sm group">
//             Get Link{' '}
//             <span className="tracking-normal text-indigo-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
//               -&gt;
//             </span>
//           </button>
//         </div>
//       </form>

//       {/* Divider */}
//       <div className="flex items-center my-6">
//         <div className="border-t border-gray-200 grow mr-3" aria-hidden="true" />
//         <div className="text-sm text-gray-500 italic">Or</div>
//         <div className="border-t border-gray-200 grow ml-3" aria-hidden="true" />
//       </div>

//       {/* Social login */}
//       <button className="btn-sm text-sm text-white bg-rose-500 hover:bg-rose-600 w-full relative flex after:flex-1 group">
//         <div className="flex-1 flex items-center">
//           <svg className="w-4 h-4 fill-current text-rose-200 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
//             <path d="M15.679 6.545H8.043v3.273h4.328c-.692 2.182-2.401 2.91-4.363 2.91a4.727 4.727 0 1 1 3.035-8.347l2.378-2.265A8 8 0 1 0 8.008 16c4.41 0 8.4-2.909 7.67-9.455Z" />
//           </svg>
//         </div>
//         <span className="flex-auto text-rose-50 pl-3">
//           <div></div>
//           <span className="inline-flex tracking-normal text-rose-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
//             -&gt;
//           </span>
//         </span>
//       </button>   
//     </>
//   )
// }
//----------------------------------------------------------------------------------------------------
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
