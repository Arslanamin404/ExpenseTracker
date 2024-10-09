import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../features/expenses/expensesSlice"
import storage from "redux-persist/lib/storage" //defaults to localStorage
import { persistStore, persistReducer } from "redux-persist"


const persistConfig = {
    key: 'expenses',
    storage, //uses localStorage for persisting state
}

const persistedReducer = persistReducer(persistConfig, expenseReducer)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)