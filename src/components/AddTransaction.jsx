import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../features/expenses/expensesSlice";
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Radio,
  RadioGroup,
  useRadio,
  Stack,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { style } from "framer-motion/client";

export const AddTransaction = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [value, setValue] = React.useState("");

  const [expense, setExpense] = useState("");
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("income");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (expense.trim() && expenseAmount > 1 && transactionType) {
      dispatch(
        addTransaction({
          description: expense,
          amount: parseFloat(expenseAmount),
          type: transactionType,
        })
      );

      setExpense("");
      setExpenseAmount(0);
      setTransactionType("income");
      onClose();
    }
  }

  return (
    <>
      <h3 className="font-semibold text-gray-300 text-base md:text-lg border-b border-gray-300 mb-4 py-1 md:py-2"></h3>
      <Button
        width="100%"
        onClick={onOpen}
        className="mb-4"
        size={"md"}
        colorScheme="blue"
        leftIcon={<AddIcon />}
      >
        Add New Transaction
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <form onSubmit={handleSubmit}>
          <ModalContent bgColor={"gray.700"}>
            <ModalHeader>Add your Transaction</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Expense Description</FormLabel>
                <Input
                  ref={initialRef}
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
              <FormControl mt={5}>
                <FormLabel>Transaction Type</FormLabel>
                <RadioGroup
                  value={transactionType}
                  onChange={setTransactionType}
                >
                  <Stack direction="row">
                    <Radio value="expense">Expense</Radio>
                    <Radio value="income">Income</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
                Add
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};
