import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTransaction,
  clearHistory,
} from "../features/expenses/expensesSlice";

export const AddTransaction = () => {
  const [expense, setExpense] = useState("");
  const [expenseAmount, setExpenseAmount] = useState(0);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (expense.trim() && expenseAmount) {
      dispatch(
        addTransaction({
          description: expense,
          amount: parseFloat(expenseAmount),
        })
      );

      setExpense("");
      setExpenseAmount(0);
    }
  }

  function handleClearHistory() {
    if(confirm("Are you sure you want to clear the transaction history? Thus action is irreversible.")){
      dispatch(clearHistory())
    }
  }

  return (
    <>
      <h3 className="font-semibold text-gray-300 text-base md:text-lg border-b border-gray-300 mb-4 py-1 md:py-2">
        Add new Transaction
      </h3>
      <form className="py-3" onSubmit={handleSubmit}>
        <div className="flex items-start justify-center flex-col mb-4">
          <label
            htmlFor="Expense_Desc"
            className="mb-1 text-sm font-bold md:font-semibold md:text-base text-gray-200"
          >
            Expense Desc
          </label>
          <input
            className="w-full outline-none px-3 py-[6px] text-gray-700 placeholder:text-gray-500 placeholder:font-semibold"
            type="text"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
            id="Expense_Desc"
            placeholder="Enter expense details..."
          />
        </div>

        <div className="flex items-start justify-center flex-col mb-4">
          <label
            htmlFor="expenseAmount"
            className="mb-2 text-sm font-bold md:font-semibold md:text-base text-gray-200"
          >
            Amount
            <span className="text-xs md:text-sm mx-2 italic text-yellow-400">
              (negative - expense, positive - income)
            </span>
          </label>
          <input
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
            className="w-full outline-none px-3 py-[6px] text-gray-700 placeholder:text-gray-500 placeholder:font-semibold"
            type="number"
            id="expenseAmount"
            placeholder="Enter expenseAmount..."
          />
        </div>
        <div className="mt-8 flex items-center justify-center md:gap-5 flex-col md:flex-row">
          <button
            type="submit"
            className="w-full rounded mt-4 md:mt-0 bg-green-700 text-gray-200 outline-none text-xs font-extrabold md:font-semibold md:text-base py-[6px] uppercase border-2 border-green-700 hover:bg-gray-200 hover:text-green-700 duration-300 hover:font-bold"
          >
            Add Transaction
          </button>
        </div>
      </form>
      <button
        onClick={handleClearHistory}
        className="w-full rounded bg-red-700 text-gray-200 outline-none text-xs font-extrabold md:font-semibold md:text-base py-[6px] uppercase border-2 border-red-600 hover:bg-gray-200 hover:text-red-600 duration-300 hover:font-bold"
      >
        Clear History
      </button>
    </>
  );
};
