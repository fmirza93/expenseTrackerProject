import React from 'react'
import CategoryDropdown from './CategoryDropdown'
import Button from "../components/Button"

const SetAllowance = () => {
  return (
    <div className='min-w-[300px] w-[50%] bg-primary/30 border-2 border-primary rounded-2xl p-4'>
        <div className='flex flex-col gap-y-2'>
            <input type="text" placeholder='%' className='p-2 border border-gray-300 rounded-2xl w-full'/>
            <CategoryDropdown/>
        </div>
        <div className='mt-1 flex justify-center w-full '>
            <Button>Set Allowance</Button>
        </div>
    </div>
  )
}

export default SetAllowance