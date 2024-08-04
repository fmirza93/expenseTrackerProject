import React from 'react'
import appLogo from '../assets/appLogo.png'
import MonthYear from './MonthYear'

const Overview = () => {
  return (
    <div className="min-h-[400px] border border-primary rounded-2xl flex flex-col">
        {/* Header section of overview */}
        <div className='min-h-[50px] bg-primary rounded-tl-2xl rounded-tr-2xl flex items-center justify-between px-6'>
            <h1 className='text-white font-black tracking-tighter underline text-2xl'>Overview</h1>
            <MonthYear />
        </div>

        {/* Chart section of overview */}
        <div className='flex-1'>
            {/* INSERT CHART */}
        </div>

        {/* Footer section of overview */}
        <div className='min-h-[50px] bg-primary rounded-bl-2xl rounded-br-2xl flex flex-col md:flex-row md:items-center justify-between px-6 py-2 text-white font-bold gap-y-6'>
            <div className='flex flex-col'>
                <h4>Total Monthly Income: <span>$4000</span></h4> {/* This value will be dynamic */}
                <h4>Total Spending: <span>$3500</span></h4> {/* This value will be dynamic */}
            </div>
            <div>
                <button className='flex border border-white px-2 py-1 rounded-xl hover:bg-[#44BFD8]/50'><span ><img src={appLogo} alt="logo" className='w-6 h-6'/></span>See My Spending</button>
            </div>
        </div>
    </div>
  )
}

export default Overview