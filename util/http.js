import axios from "axios";

const BACKEND_URL =
  "https://react-native-expenses-fm-default-rtdb.firebaseio.com/expenses";

export const deleteExpense = (id) => axios.delete(`${BACKEND_URL}/${id}.json`);

export const fetchExpenses = async () => {
  const response = await axios.get(`${BACKEND_URL}.json`);
  const expenses = [];

  for (let id in response.data) {
    const { amount, date, description } = response.data[id];
    expenses.push({ id, amount, date: new Date(date), description });
  }
  return expenses;
};

export const storeExpense = async (expenseData) => {
  const response = await axios.post(`${BACKEND_URL}.json`, expenseData);
  return response.data.name;
};

export const updateExpense = (id, expenseData) =>
  axios.put(`${BACKEND_URL}/${id}.json`, expenseData);
