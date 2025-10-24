import React, { useState } from 'react';
import SocialLogin from '../LoginForm/SocialLogin.jsx'
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
  };

  return (
    <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
      <div className="mx-auto w-full max-w-md">
        <Header />
        <form className="space-y-6" onSubmit={handleSubmit}>
          <Input
            label="Email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <FormOptions />
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Sign in
          </button>
        </form>
        
        <Separator />
        <SocialLogin />
        <Footer />
      </div>
    </div>
  );
};

// Sub-components
const Header = () => (
  <div className="text-center mb-10">
    <h1 className="text-3xl font-bold text-gray-900">Sign in to myPremier League</h1>
    <p className="mt-2 text-gray-600">Shape the Premier League around you</p>
  </div>
);

const Input = ({ label, type, value, onChange, placeholder, required }) => (
  <div>
    <label htmlFor={label} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <div className="mt-1">
      <input
        id={label}
        name={label}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
      />
    </div>
  </div>
);

const FormOptions = () => (
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <input
        id="remember-me"
        name="remember-me"
        type="checkbox"
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
      />
      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
        Remember me
      </label>
    </div>
    <div className="text-sm">
      <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
        Forgot your password?
      </a>
    </div>
  </div>
);

const Separator = () => (
  <div className="mt-8">
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-2 bg-gray-50 text-gray-500">or</span>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <div className="mt-8 text-center">
    <p className="text-sm text-gray-600">
      Don't have an account?{' '}
      <a href="/register" className="font-medium text-blue-600 hover:text-blue-500">
        Join now
      </a>
    </p>
    
  </div>
);

export default LoginForm;