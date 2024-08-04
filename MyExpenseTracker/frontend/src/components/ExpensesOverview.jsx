import React from 'react';
import PieChart from './charts/PieChart';
import useSpendingCategories from '../hooks/useSpendingCategories';

const ExpensesOverview = ({ selectedMonth, selectedYear }) => {
  const pieChartData = useSpendingCategories(selectedYear, selectedMonth);

  return (
    <div className="min-h-[400px] border-2 border-primary rounded-2xl flex flex-col">
      <div className='min-h-[50px] bg-primary rounded-tl-2xl rounded-tr-2xl flex items-center justify-between px-6'>
        <h1 className='text-white font-black tracking-tighter underline text-2xl'>Expenses Overview</h1>
      </div>

      <div className='flex-1 p-4'>
        {pieChartData ? (
          <PieChart data={pieChartData} />
        ) : (
          <div className="mt-4">Select a month and year to view the spending data.</div>
        )}
      </div>
    </div>
  );
};

export default ExpensesOverview;
