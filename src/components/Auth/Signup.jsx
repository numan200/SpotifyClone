import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!agreeToTerms) {
      setError('You must agree to the terms and conditions.');
      return;
    }

    // Here you would handle the sign-up logic (e.g., call an API)
    console.log('Sign up with:', { username, email, password, agreeToTerms });

    // Reset form
    setError('');
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setAgreeToTerms(false);
  };

  return (
    <>
    <Navbar/>

    <div className="min-h-screen flex items-center justify-center bg-[#121212]">
      <div className="bg-[#121212] p-8 rounded shadow-md w-full max-w-md">
    <img className='mx-auto  w-10 pb-2 ' src="https://th.bing.com/th/id/R.2fb150d9462b5eacda11eb87b5ce034d?rik=8uhCD9Ed0GzBdw&pid=ImgRaw&r=0&sres=1&sresct=1"/>
        <h2 className="text-4xl font-bold mb-6 text-white text-center">Sign Up to <br /> start listing</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-white">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            className="w-full mt-1 py-3 px-3 rounded-sm bg-[#121212] border border-gray-400 text-white font-semibold shadow-sm placeholder-gray-400 focus:border-green-500 focus:outline-none sm:text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 py-3 px-3 rounded-sm bg-[#121212] border border-gray-400 text-white font-semibold shadow-sm placeholder-gray-400 focus:border-green-500 focus:outline-none sm:text-sm"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 py-3 px-3 rounded-sm bg-[#121212] border border-gray-400 text-white font-semibold shadow-sm placeholder-gray-400 focus:border-green-500 focus:outline-none sm:text-sm"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-white">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full mt-1 py-3 px-3 rounded-sm bg-[#121212] border border-gray-400 text-white font-semibold shadow-sm placeholder-gray-400 focus:border-green-500 focus:outline-none sm:text-sm"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-[#121212] rounded"
            />
            <label htmlFor="terms" className="ml-2 text-md text-white">
              I agree to the{' '}
              <a href="#" className="text-green-600 hover:text-green-500 underline">
                terms and conditions
              </a>
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-md text-gray-300">
          Already have an account?{' '}
          <a href="/SignIn" className="text-white underline font-bold hover:text-green-500">
            Log in here
          </a>
        </p>
      </div>
    </div>
    </>
  );
};

export default SignUpPage;
