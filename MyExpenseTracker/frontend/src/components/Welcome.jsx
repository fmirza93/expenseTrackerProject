import React from 'react'
import appLogo from "../assets/appLogo.png"
import Button from './Button'
import { useNavigate } from 'react-router-dom';


const Welcome = () => {
    const navigate = useNavigate();

  return (
    <div >
        <img src={appLogo} alt='Logo' className='w-[200px] h=[200px] mx-auto'/>
        <h1 className='text-4xl tracking-tighter font-black text-center text-primary'>My Expense Tracker</h1>
        <div className='mt-6'>
        <Button onClick={() => navigate('/signup')}>Sign Up</Button>
        <Button variant="secondary" onClick={() => navigate('/login')}>Login</Button>

        </div>
        
    </div>
  )
}

export default Welcome