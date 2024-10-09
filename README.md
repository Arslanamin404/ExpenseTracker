# Expense Tracker with Redux Toolkit and LocalStorage

This is a simple expense tracker app built with **React** and **Redux Toolkit**, with state persistence using **LocalStorage** via **redux-persist**. Users can add, delete, and clear transactions, and their data will be saved in the browser's LocalStorage for persistence across page reloads.

## Features

- **Add a new transaction** (positive for income, negative for expense)
- **Delete a transaction**
- **Clear all transaction history**
- **Persistent state management** with Redux Toolkit and `redux-persist` (stores the data in LocalStorage)

## How It Works

### State Management with Redux Toolkit and Persistence

The app uses **Redux Toolkit** for managing the state and **redux-persist** to store the state in the browser's LocalStorage. The state is initialized with an empty transactions array. The following actions are available:

- `addTransaction`: Adds a new transaction with a unique ID, description, and amount.
- `deleteTransaction`: Removes a transaction based on its ID.
- `clearHistory`: Clears all transactions from the state.
- The **LocalStorage** ensures that the user's transaction history persists across page reloads, even if the user closes and reopens the browser.

### Persistent State with redux-persist

The `redux-persist` library is integrated into the Redux store to automatically persist the transaction state into LocalStorage and rehydrate it when the app reloads.

### How to Use `redux-persist`

1. **Store Configuration**:

   - The Redux store is configured with `redux-persist` to use the browser's LocalStorage as the persistence layer.
   - The transactions slice is wrapped in `persistReducer`, which saves its state in LocalStorage.

2. **Usage**:
   - After adding or deleting transactions, the state is automatically saved in LocalStorage.
   - When the app reloads, `redux-persist` rehydrates the state from LocalStorage, ensuring that the transaction history is restored.

### Code Snippets

Instating redux-persist

```bash
npm install redux-persist
```

#### Store Setup with `redux-persist`

```javascript
import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../features/expenses/expensesSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "expenses",
  storage, //uses localStorage for persisting state
};

//wrap the rood reducer (expenseReducer) with persistReducer to create a special reducer that will handle persisting the state
const persistedReducer = persistReducer(persistConfig, expenseReducer);

// create a redux store using the persisted reducer
export const store = configureStore({
  reducer: {
    expenses: persistedReducer, //use persistedReducer instead of regular root reducer
  },
});

// create a persistor obj that will manage the persisted state
export const persistor = persistStore(store);
```

## App Integration with `PersistGate`

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store, persistor } from "./app/store.js";
//  PersistGate delays the rendering until state is rehydrated
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* ensures that the app waits for the state rehydration */}
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
```

## Explanation of important concepts

- `persistConfig`: Configures how `redux-persist` handles the state persistance. It defines which parts of the state should be stored and
  in which storage medium.
- `persistReducer`: Wraps the rootReducer with persistance capabilities, ensuring that the state is saved to and loaded from storage.
- `persistor`: Manages the lifecycle of the persisted state, such as saving changes and loading saved state on app startup.
- `PersistGate`: Prevent the app ui from rendering until the persisted state has been restored, ensuring a seamless experience for the user.

## Technologies Used

- `React`: A JavaScript library for building user interfaces.
- `Redux Toolkit`: A state management library that simplifies Redux.
- `redux-persist`: A library that helps persist and rehydrate Redux state, using LocalStorage in this app.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.
