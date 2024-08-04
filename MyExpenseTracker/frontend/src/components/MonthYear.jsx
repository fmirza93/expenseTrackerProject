import React, { useState, useEffect } from 'react';

const MonthYear = ({ onMonthYearChange }) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // getMonth() returns month from 0 to 11
  const currentYear = currentDate.getFullYear();

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const startYear = 2023;
  const years = Array.from(new Array(currentYear - startYear + 1), (val, index) => startYear + index);

  useEffect(() => {
    // Call the onMonthYearChange function with the current month and year when the component mounts
    onMonthYearChange(currentMonth, currentYear);
  }, []);

  const handleMonthChange = (e) => {
    const monthIndex = e.target.value ? parseInt(e.target.value) : '';
    setSelectedMonth(monthIndex);
    onMonthYearChange(monthIndex, selectedYear);
  };

  const handleYearChange = (e) => {
    const yearValue = e.target.value ? parseInt(e.target.value) : '';
    setSelectedYear(yearValue);
    onMonthYearChange(selectedMonth, yearValue);
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
          <option key={index} value={index + 1}>{month}</option>
        ))}
      </select>

      <select
        className="p-1 border border-gray-300 rounded"
        value={selectedYear}
        onChange={handleYearChange}
      >
        <option value="" disabled>Select Year</option>
        {years.map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
    </div>
  );
};

export default MonthYear;
