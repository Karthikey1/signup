import React, { useState } from 'react';

// SVG icon for the password visibility toggle (eye)
const EyeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

// SVG icon for the password visibility toggle (eye-off)
const EyeOffIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
    <line x1="2" x2="22" y1="2" y2="22"></line>
  </svg>
);


// The Login Component
export default function Login() {
  // State for the form inputs
  const [email, setEmail] = useState('jonas_kahnwald@gmail.com');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Handler for the form submission
  const handleSignIn = (e) => {
    e.preventDefault();
    // In a real app, you'd handle authentication here
    console.log('Signing in with:', { email, password, keepLoggedIn });
  };

  // Toggles the password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    // Main container with a light gray background, centering the content
    <div className="bg-gray-50 font-sans min-h-screen flex items-center justify-center p-4">
      {/* Login form container with a white background, shadow, and rounded corners */}
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-md">
        
        {/* Header Section */}
        <div className="mb-8 text-left">
          <h1 className="text-3xl font-bold text-gray-900">Sign in</h1>
          <p className="text-gray-500 mt-2">Please login to continue to your account.</p>
        </div>
        
        {/* Form Element */}
        <form onSubmit={handleSignIn}>
          <div className="space-y-6">
            
            {/* Email Input Field */}
            <div className="relative">
              <input 
                id="email" 
                name="email" 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // Styling for the input field
                className="peer h-12 w-full border border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4" 
                placeholder="Email address" 
              />
              {/* Floating Label for Email */}
              <label 
                htmlFor="email" 
                className="absolute left-4 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-blue-500 peer-focus:text-sm bg-white px-1"
              >
                Email
              </label>
            </div>
            
            {/* Password Input Field */}
            <div className="relative">
              <input 
                id="password" 
                name="password" 
                type={showPassword ? 'text' : 'password'} 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // Styling for the input field
                className="peer h-12 w-full border border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 pr-12" 
                placeholder="Password" 
              />
              {/* Floating Label for Password */}
              <label 
                htmlFor="password" 
                className="absolute left-4 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-blue-500 peer-focus:text-sm bg-white px-1"
              >
                Password
              </label>
              {/* Password Visibility Toggle Button */}
              <button 
                type="button" 
                onClick={togglePasswordVisibility} 
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600 focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeIcon className="h-6 w-6" /> : <EyeOffIcon className="h-6 w-6" />}
              </button>
            </div>
            
            {/* "Keep me logged in" Checkbox */}
            <div className="flex items-center">
              <input 
                id="keep-logged-in" 
                name="keep-logged-in" 
                type="checkbox" 
                checked={keepLoggedIn}
                onChange={(e) => setKeepLoggedIn(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
              />
              <label htmlFor="keep-logged-in" className="ml-2 block text-sm text-gray-900">
                Keep me logged in
              </label>
            </div>
            
            {/* Sign In Button */}
            <div>
              <button 
                type="submit" 
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Sign In
              </button>
            </div>
            
          </div>
          
          {/* "or" Separator */}
          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                or
              </span>
            </div>
          </div>
          
          {/* Placeholder for other sign-in options */}
          <div className="mt-6 text-center">
             {/* You could add Google/Facebook sign-in buttons here */}
          </div>
          
        </form>
      </div>
    </div>
  );
}
