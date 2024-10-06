# Expense Tracker with Redux Toolkit and LocalStorage

This is a simple expense tracker app built with **React** and **Redux Toolkit**, with state persistence using **LocalStorage**. Users can add, delete, and clear transactions, and their data will be saved in the browser's LocalStorage for persistence across page reloads.

## Features

- Add a new transaction (positive for income, negative for expense)
- Delete a transaction
- Clear all transaction history
- Persistent state management with Redux Toolkit

## How It Works

### State Management with Redux Toolkit

The app uses Redux Toolkit to manage the state for transactions. The state is initialized with an empty transactions array. The following actions are available:

- `addTransaction`: Adds a new transaction with a unique ID, description, and amount.
- `deleteTransaction`: Removes a transaction based on its ID.
- `clearHistory`: Clears all transactions.


## Technologies Used
- `React`: A JavaScript library for building user interfaces.
- `Redux Toolkit`: A state management library that simplifies Redux.

## Contributing
Feel free to contribute to this project by submitting issues or pull requests.