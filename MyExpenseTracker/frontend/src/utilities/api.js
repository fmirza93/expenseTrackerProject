import axios from "axios";

export const fetchMonthlySpending = async () => {
  try {
    const response = await axios.get("/monthly-spending");
    return response.data;
  } catch (error) {
    console.error("Error fetching monthly spending:", error);
    throw error;
  }
};

export const fetchSpendingCategories = async () => {
  try {
    const response = await axios.get("/spending-categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching spending categories:", error);
    throw error;
  }
};
