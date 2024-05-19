'use client';
import { generateGoogleLoginLink } from '../../../libs/googleApi';
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function GoogleLogin() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignIn = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/auth/signin", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/");

    } catch (error) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }

    // if (user.email === 'codeinsight@gmail.com' && user.password === 'codeinsight') {
    //   router.push('/adminPage');
    // }
    if (!user.email || !user.password) {
      alert('Please enter the correct email and password.');
    }
    
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const googleLoginLink = generateGoogleLoginLink();

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-6 text-center">{loading ? "Processing" : "SignIn"}</h1>
        <form className="space-y-4" onSubmit={onSignIn}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input id="email" type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input id="password" type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
          </div>
          <div className="text-center">
            <button type="submit" className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600" disabled={buttonDisabled}>
              Login
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">Or sign in with</p>
          <a href={googleLoginLink} className="mt-2 block w-full py-2 px-4 border border-gray-300 rounded-md bg-white text-center text-gray-700 hover:bg-gray-50">Google</a>
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-600">Do not have an account?</p>
          <a href='/signup' className="mt-2 block w-full py-2 px-4 border border-gray-300 rounded-md bg-white text-center text-gray-700 hover:bg-gray-50">Create one</a>
        </div>
      </div>
    </div>
  );
}
