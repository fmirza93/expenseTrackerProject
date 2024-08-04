import { useState, useEffect } from "react";
import { fetchMonthlySpending } from "../utilities/api";

const useMonthlySpending = (selectedYear, selectedMonth) => {
  const [lineChartData, setLineChartData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (selectedMonth && selectedYear) {
      const getMonthlySpending = async () => {
        try {
          //const data = await fetchMonthlySpending(selectedYear, selectedMonth);

          //    Mock data for the example
          const data = {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            values: [200, 450, 300, 500],
          }; // Replace with appropriate mock data

          if (data.values.length === 0) {
            setError("No data available for the selected month and year.");
            setLineChartData(null);
          } else {
            setError("");
            setLineChartData({
              labels: data.labels,
              datasets: [
                {
                  label: "Spending",
                  data: data.values,
                  borderColor: "rgba(75, 192, 192, 1)",
                  backgroundColor: "rgba(75, 192, 192, 0.2)",
                },
              ],
            });
          }
        } catch (error) {
          setError("An error occurred while fetching data.");
          setLineChartData(null);
          console.error(error);
        }
      };

      getMonthlySpending();
    }
  }, [selectedMonth, selectedYear]);

  return { lineChartData, error };
};

export default useMonthlySpending;
