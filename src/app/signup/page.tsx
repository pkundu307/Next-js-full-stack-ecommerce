// components/Signup.tsx
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/general/Navbar';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform signup logic here, e.g., API call
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    // Reset error if successful
    setError('');
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <Navbar/>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="********"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline align-center mr-5"
        >
          Sign Up
        </button>
        <div className="mt-4 text-center">
        <span>Already have an account? </span>
        <Link href="/login">
          <p className="text-blue-500 hover:underline">Login</p>
        </Link>
      </div>
      </form>
     
    </div>
  );
};

export default Signup;
