import { MdArrowDropDown, MdDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { deleteTransaction } from "../features/expenses/expensesSlice";
import { Input, Select } from "@chakra-ui/react";
import { setSearchQuery } from "../features/expenses/expensesSlice";

export const TransactionList = () => {
  const transactions = useSelector((state) => state.transactions);
  const searchQuery = useSelector((state) => state.searchQuery);
  const filteredTransactions = searchQuery
    ? transactions.filter((transaction) =>
        transaction.description.toLowerCase().includes(searchQuery)
      )
    : transactions;

  const dispatch = useDispatch();
  return (
    <>
      <h3 className="text-sm md:text-base uppercase font-semibold tracking-wider py-2">
        History
      </h3>
      <div className="flex items-center justify-between gap-x-10">
        <Input
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) =>
            dispatch(setSearchQuery(e.target.value.toLocaleLowerCase()))
          }
        />
      </div>
      <ul className="my-5">
        {filteredTransactions.map((transaction) => (
          <div key={transaction.id}>
            <span className="text-xs font-semibold">{transaction.date}</span>
            <div className="flex items-stretch justify-between mb-3">
              <li
                className={`border-l-[6px] w-full ${
                  transaction.type === "expense"
                    ? "border-red-700"
                    : "border-green-700"
                }  flex items-center justify-between gap-2 bg-gray-100 text-gray-700 font-semibold md:text-lg pl-3 pr-2 py-1 md:pl-2 shadow-md shadow-gray-950/40`}
              >
                <span className="text-left">{transaction.description}</span>
                <span
                  className={`${
                    transaction.type === "expense"
                      ? "text-red-700"
                      : "text-green-700"
                  }  font-semibold`}
                >
                  &#x20b9;{transaction.amount}
                </span>
              </li>
              <button
                onClick={() => dispatch(deleteTransaction(transaction.id))}
                className="bg-red-700 px-2 py-1 md:px-2 font-semibold border-2 border-red-700 text-gray-200 hover:bg-gray-300 hover:text-red-700 duration-300 flex items-center justify-center h-auto"
              >
                <MdDeleteForever className="text-xl" />
              </button>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
};
