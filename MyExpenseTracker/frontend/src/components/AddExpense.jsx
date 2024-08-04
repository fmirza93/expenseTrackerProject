import React from 'react'
import CategoryDropdown from './CategoryDropdown'
import Button from "./Button"

const AddExpense = () => {
  return (
    <div className='min-w-[300px] w-[50%] bg-primary/30 border-2 border-primary rounded-2xl p-4'>
        <div className='flex flex-col gap-y-2'>
            <input type="text" placeholder='Amount' className='p-2 border border-gray-300 rounded-2xl w-full'/>
            <CategoryDropdown/>
        </div>
        <div className='mt-1 flex justify-center w-full '>
            <Button>Add Expense</Button>
        </div>
    </div>
  )
}

export default AddExpense