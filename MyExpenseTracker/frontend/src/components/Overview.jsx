import React from 'react';
import LineChart from './charts/LineChart';
import useMonthlySpending from '../hooks/useMonthlySpending';
import appLogo from '../assets/appLogo.png';

const Overview = ({ selectedMonth, selectedYear }) => {
  const { lineChartData, error } = useMonthlySpending(selectedYear, selectedMonth);

  // Example values for total monthly income and total spending (dynamic values)
  const totalMonthlyIncome = 4000; // Replace with actual data
  const totalSpending = lineChartData ? lineChartData.datasets[0].data.reduce((a, b) => a + b, 0) : 0;

  return (
    <div className="min-h-[400px] border-2 border-primary rounded-2xl flex flex-col">
      {/* Header section of overview */}
      <div className='min-h-[50px] bg-primary rounded-tl-2xl rounded-tr-2xl flex items-center justify-between px-6'>
        <h1 className='text-white font-black tracking-tighter underline text-2xl'>Overview</h1>
      </div>

      {/* Chart section of overview */}
      <div className='flex-1 p-4'>
        {error && <div className="text-red-500 mt-4">{error}</div>}
        {lineChartData ? (
          <LineChart data={lineChartData} />
        ) : (
          !error && <div className="mt-4">Select a month and year to view the spending data.</div>
        )}
      </div>

      {/* Footer section of overview */}
      <div className='min-h-[50px] bg-primary rounded-bl-2xl rounded-br-2xl flex flex-col md:flex-row md:items-center justify-between px-6 py-2 text-white font-bold gap-y-6'>
        <div className='flex flex-col'>
          <h4>Total Monthly Income: <span>${totalMonthlyIncome}</span></h4> {/* This value will be dynamic */}
          <h4>Total Spending: <span>${totalSpending}</span></h4> {/* This value will be dynamic */}
        </div>
        <div>
          <button className='flex border border-white px-2 py-1 rounded-xl hover:bg-[#44BFD8]/50'>
            <span><img src={appLogo} alt="logo" className='w-6 h-6' /></span>See My Spending
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
