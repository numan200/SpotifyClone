import React, { useState } from 'react';
import Navbar from '../Navbar';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    // Here you would handle the sign-in logic (e.g., call an API)
    console.log('Sign in with:', { email, password, rememberMe });

    // Reset form
    setError('');
    setEmail('');
    setPassword('');
    setRememberMe(false);
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-black via-gray-800 to-gray-500 ">
      <div className="bg-[#121212]  p-8 rounded shadow-md w-full max-w-md">
      <img className='mx-auto  w-10 pb-2 ' src="https://th.bing.com/th/id/R.2fb150d9462b5eacda11eb87b5ce034d?rik=8uhCD9Ed0GzBdw&pid=ImgRaw&r=0&sres=1&sresct=1"/>
      <h2 className="text-4xl font-bold mb-6 text-white text-center">Log in to Spotify</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email or username
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
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-500"
            >
              Sign In
            </button>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-white">Remember me</span>
            </label>

            <a href="#" className="text-sm text-green-600 hover:text-green-500 ">
              Forgot your password?
            </a>
          </div>
        </form>

        <p className="mt-4 text-center text-md text-gray-300">
          Don't have an account?{' '}
          <a href="/Signup" className="text-white underline font-bold hover:text-green-500 ">
            Sign up for Spotify
          </a>
        </p>
      </div>
    </div>
  </>
  );
};

export default SignInPage;
