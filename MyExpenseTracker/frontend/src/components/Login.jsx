// src/components/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import appLogo from '../assets/appLogo.png'




const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <div className='w-full'>

        {/* Back Button */}
        <div>
        <button onClick={() => navigate('/')} className='flex '>
        <svg
            className="h-6 w-6 stroke-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span>Back</span>
        </button>
        </div>

        <div className='w-[80%] md:w-[50%] mx-auto -mt-8 '>

        
        <img src={appLogo} alt='Logo' className='w-[100px] h-[100px] mx-auto'/>
       <h2 className="text-4xl font-black tracking-tighter mb-4 text-center text-primary">Login.</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  border-primary rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-primary rounded-lg"
            required
          />
        </div>
        <div className="flex justify-center w-full mt-6">
          <Button type="submit" onClick={() => navigate('/dashboard')}>Login</Button>
          
        </div>
      </form>
      </div>
    </div>
  );
};

export default Login;
