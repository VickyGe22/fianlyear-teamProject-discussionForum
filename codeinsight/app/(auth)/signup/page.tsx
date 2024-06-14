"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        username: "",
        email: "",
        password: "",
    });

    const [loading, setLoading] = React.useState(false);
    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
    });

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePassword = (password: string) => {
        const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return re.test(password);
    };

    const onSignup = async (event: { preventDefault: () => void; }) => {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page
        let formIsValid = true;
        let errorsCopy = { ...errors };

        if (!user.username) {
            errorsCopy.username = "Username is required";
            formIsValid = false;
        } else {
            errorsCopy.username = "";
        }

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
        } else if (!validatePassword(user.password)) {
            errorsCopy.password = "Password must be at least 8 characters long and contain both letters and numbers";
            formIsValid = false;
        } else {
            errorsCopy.password = "";
        }

        setErrors(errorsCopy);

        if (!formIsValid) {
            return;
        }

        try {
            setLoading(true);
            const response = await axios.post("/api/auth/signup", user);
            console.log("Signup success", response.data);
            router.push("/signin");
        } catch (error: any) {
            let errorMsg = "Signup failed. Please check your details.";
            const errorMessage = error.response?.data?.error || error.message;
            if (typeof errorMessage === 'string') {
                errorMsg = errorMessage;
            }
            setErrors({
                username: errorMsg.includes("Username") ? errorMsg : "",
                email: errorMsg.includes("Email") ? errorMsg : "",
                password: errorMsg.includes("Password") ? errorMsg : "",
            });
            toast.error(errorMsg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center ">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-3xl font-semibold mb-6 text-center">{loading ? "Processing" : "SignUp"}</h1>
                <form className="space-y-4" onSubmit={onSignup}>
                    <div>
                        <label htmlFor="text" className="block text-sm font-medium text-gray-700">User Name</label>
                        <input 
                            id="username" 
                            type="text" 
                            value={user.username} 
                            onChange={(e) => setUser({ ...user, username: e.target.value })} 
                            className={`mt-1 block w-full border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50`} 
                        />
                        {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
                    </div>
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
                        <button type="submit" className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600" >
                            {loading ? "Processing" : "Sign Up"}
                        </button>
                    </div>
                </form>
                <div className="text-center mt-4">
                    <a href='/signin' className="mt-2 block w-full py-2 px-4 text-center text-gray-700 hover:bg-gray-50">Go back to SignIn</a>
                </div>
            </div>
        </div>
    );
}
