"use client";
import React, { useEffect } from "react";
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
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async (event) => {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page
        try {
            setLoading(true);
            const response = await axios.post("/api/auth/signup", user);
            console.log("Signup success", response.data);
            router.push("/signin");
        } catch (error) {
            console.log("Signup failed", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="min-h-screen flex justify-center items-center ">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-3xl font-semibold mb-6 text-center">{loading ? "Processing" : "SignUp"}</h1>
                <form className="space-y-4" onSubmit={onSignup}>
                    <div>
                        <label htmlFor="text" className="block text-sm font-medium text-gray-700">User Name</label>
                        <input id="text" type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
                    </div>
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
