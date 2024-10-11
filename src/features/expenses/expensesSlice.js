import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
  transactions: [
    // {
    //   id: 1,
    //   date: new Date(Date.now()).toLocaleString(),
    //   description: "Salary",
    //   amount: 5000,
    //   type: income,
    // },
  ],
  searchQuery: "",
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
        amount: action.payload.amount,
        type: action.payload.type
      }
      state.transactions.push(expense)
    },

    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter((transaction) =>
        transaction.id !== action.payload
      )
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
  }
})

export const { addTransaction, deleteTransaction, setSearchQuery } = expensesSlice.actions
export default expensesSlice.reducer