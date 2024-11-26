// src/pages/Login.tsx

import React, { useState } from "react";


const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

    };



    return (
        <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600">
            <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-2xl">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Welcome Back!
                </h2>

                {/* Email Input */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Password Input */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl"
                >
                    Submit
                </button>



                {/* Forgot Password Link */}
                <div className="mt-4 text-center">
                    <a href="#" className="text-sm text-blue-500">
                        Forgot your password?
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
