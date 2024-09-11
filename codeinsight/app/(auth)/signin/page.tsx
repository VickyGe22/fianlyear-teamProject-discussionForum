'use client';
import { generateGoogleLoginLink } from '../../../libs/googleApi';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function GoogleLogin() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const onSignIn = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    let formIsValid = true;
    let errorsCopy = { ...errors };

    if (!user.email) {
      errorsCopy.email = "Email is required";
      formIsValid = false;
    } else if (!validateEmail(user.email)) {
      errorsCopy.email = "Invalid email address";
      formIsValid = false;
    } else {
      errorsCopy.email = "";
    }

    if (!user.password) {
      errorsCopy.password = "Password is required";
      formIsValid = false;
    } else {
      errorsCopy.password = "";
    }

    if (user.email.length == 0 && user.password.length == 0){
      alert("Please enter your email and password.")
    }

    setErrors(errorsCopy);

    if (!formIsValid) {
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("/api/auth/signin", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/");
    } catch (error: any) {
        console.log("Login failed", error.toString());
        let errorMsg = "Login failed. Please check your email and password.";
        const errorMessage = error.response?.data?.error || error.message;
        if (typeof errorMessage === 'string' && errorMessage.includes("User does not exist")) {
            errorMsg = "This email is not registered.";
        } else if (typeof errorMessage === 'string' && errorMessage.includes("Invalid password")) {
            errorMsg = "Invalid password.";
        }
        setErrors({
            email: errorMsg.includes("email") ? errorMsg : "",
            password: errorMsg.includes("password") ? errorMsg : "",
        });
        toast.error(errorMsg);
    } finally {
        setLoading(false);
    }
  };

  const googleLoginLink = generateGoogleLoginLink();

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-6 text-center">{loading ? "Processing" : "Sign In"}</h1>
        <form className="space-y-4" onSubmit={onSignIn}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className={`mt-1 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className={`mt-1 block w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50`}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
              // disabled={buttonDisabled}
            >
              {loading ? 'Processing...' : 'Login'}
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">Or sign in with</p>
          <a
            href={googleLoginLink}
            className="mt-2 block w-full py-2 px-4 border border-gray-300 rounded-md bg-white text-center text-gray-700 hover:bg-gray-50"
          >
            Google
          </a>
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-600">Don&apost have an account?</p>
          <a
            href='/signup'
            className="mt-2 block w-full py-2 px-4 border border-gray-300 rounded-md bg-white text-center text-gray-700 hover:bg-gray-50"
          >
            Create one
          </a>
        </div>
      </div>
    </div>
  );
}
