import React, { useState } from 'react';
import appLogo from '../assets/appLogo.png';
import Overview from './Overview';
import AddExpense from './AddExpense';
import SetAllowance from './SetAllowance';
import ExpensesOverview from './ExpensesOverview';
import MonthYear from './MonthYear';

const Summary = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const handleMonthYearChange = (month, year) => {
    setSelectedMonth(month);
    setSelectedYear(year);
  };

  return (
    <div className='flex flex-col gap-y-4'>
      <div className='flex flex-col items-center justify-center'>
        <img src={appLogo} alt='Logo' className='w-20 h-20'/>
        <h1 className='text-primary font-bold tracking-tighter '>My Expense Tracker</h1>
      </div>
      <MonthYear onMonthYearChange={handleMonthYearChange} />
      <Overview selectedMonth={selectedMonth} selectedYear={selectedYear} />
      <div className='flex gap-x-4 justify-between'>
        <AddExpense />
        <SetAllowance />
      </div>
      <div>
        <ExpensesOverview selectedMonth={selectedMonth} selectedYear={selectedYear} />
      </div>
    </div>
  );
};

export default Summary;
