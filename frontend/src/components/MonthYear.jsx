import React, { useState } from 'react';

const MonthYear = ({ onMonthYearChange }) => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years = Array.from(new Array(21), (val, index) => 2000 + index);

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
    onMonthYearChange(e.target.value, selectedYear);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    onMonthYearChange(selectedMonth, e.target.value);
  };

  return (
    <div className="flex space-x-4">
      <select
        className="p-1 border border-gray-300 rounded"
        value={selectedMonth}
        onChange={handleMonthChange}
      >
        <option value="" disabled>Select Month</option>
        {months.map((month, index) => (
          <option key={index} value={month}>{month}</option>
        ))}
      </select>

      <select
        className="p-1 border border-gray-300 rounded"
        value={selectedYear}
        onChange={handleYearChange}
      >
        <option value="" disabled>Select Year</option>
        {years.map((year, index) => (
          <option key={index} value={year}>{year}</option>
        ))}
      </select>
    </div>
  );
};

export default MonthYear;
