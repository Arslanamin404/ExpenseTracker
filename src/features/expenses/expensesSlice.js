import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
  transactions: [
    // {
    //   id: 1,
    //   date: new Date(Date.now()).toLocaleString(),
    //   description: "Salary",
    //   amount: 5000,
    // },
    // {
    //   id: 2,
    //   date: new Date(Date.now()).toLocaleString(),
    //   description: "Groceries",
    //   amount: -200,
    // },
  ],
};

export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      const expense = {
        id: nanoid(),
        date: new Date(Date.now()).toLocaleString(),
        description: action.payload.description,
        amount: action.payload.amount
      }
      state.transactions.push(expense)
    },

    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter((transaction) =>
        transaction.id !== action.payload
      )
    },
    clearHistory: (state) => {
      state.transactions = []
    },
  }
})

export const { addTransaction, deleteTransaction, clearHistory } = expensesSlice.actions
export default expensesSlice.reducer