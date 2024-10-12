import { filter } from "@chakra-ui/react";
import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
  transactions: [
    // {
    //   id: 1,
    //   date: new Date(Date.now()).toLocaleString(),
    //   description: "Salary",
    //   amount: 5000,
    //   type: income,
    //   date: 12/10/2024,
    // },
  ],
  searchQuery: "",
  sortFilter: "all"
};

export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      const expense = {
        id: nanoid(),
        description: action.payload.description,
        amount: action.payload.amount,
        date: action.payload.date,
        type: action.payload.type
      }
      state.transactions.push(expense)
    },

    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter((transaction) =>
        transaction.id !== action.payload
      )
    },
    updateTransaction: (state, action) => {
      const { id, description, amount, date, type } = action.payload
      const transactionToUpdate = state.transactions.find((transaction) => transaction.id === id)
      if (transactionToUpdate) {
        transactionToUpdate.description = description;
        transactionToUpdate.amount = amount;
        transactionToUpdate.date = date;
        transactionToUpdate.type = type;
      }
    },

    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
    setSortFilter: (state, action) => {
      state.sortFilter = action.payload
    }
  }
})

export const { addTransaction,updateTransaction, deleteTransaction, setSearchQuery, setSortFilter } = expensesSlice.actions
export default expensesSlice.reducer