import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../features/expenses/expensesSlice";
import "react-toastify/dist/ReactToastify.css";

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export const AddTransactionForm = () => {
  const today = new Date().toLocaleDateString("en-ca");
  const [expense, setExpense] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState(today);
  const [transactionType, setTransactionType] = useState("income");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expense.trim() && expenseAmount > 1 && transactionType) {
      dispatch(
        addTransaction({
          description: expense,
          amount: parseFloat(expenseAmount),
          date: expenseDate,
          type: transactionType,
        })
      );

      // Reset form fields
      setExpense("");
      setExpenseAmount("");
      setExpenseDate(today);
      setTransactionType("expense");

      // Navigate back to the main page or a specific route
      navigate("/"); // Adjust this path as needed
    } else {
      toast.error("Please fill all fields!");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3 className="font-semibold text-gray-300 text-base md:text-3xl  mb-4 py-1 md:py-2">
          Add Your Transaction
        </h3>
        <FormControl>
          <FormLabel>Expense Description</FormLabel>
          <Input
            placeholder="Expense Description"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Amount</FormLabel>
          <Input
            placeholder="Amount"
            min={1}
            type="number"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Date</FormLabel>
          <Input
            placeholder="Date"
            type="date"
            value={expenseDate}
            max={today}
            onChange={(e) => setExpenseDate(e.target.value)}
          />
        </FormControl>

        <FormControl mt={5}>
          <FormLabel>Transaction Type</FormLabel>
          <RadioGroup value={transactionType} onChange={setTransactionType}>
            <Stack direction="row">
              <Radio value="expense">Expense</Radio>
              <Radio value="income">Income</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <div className="flex items-center gap-x-5 my-3 justify-end">
          <Button type="submit" colorScheme="blue" mt={4}>
            Add
          </Button>
          <Button
            onClick={() => navigate("/")} // Use navigate for redirecting
            colorScheme="red"
            mt={4}
          >
            Cancel
          </Button>
        </div>
      </form>
      <ToastContainer position="top-right" />
    </>
  );
};
