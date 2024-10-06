import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../features/expenses/expensesSlice"

export const store = configureStore({
    reducer: expenseReducer
})