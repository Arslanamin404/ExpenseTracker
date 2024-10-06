import { MdDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { deleteTransaction } from "../features/expenses/expensesSlice";

export const TransactionList = () => {
  const transactions = useSelector((state) => state.transactions);
  const dispatch = useDispatch();
  return (
    <>
      <h3 className="border-b border-gray-400 text-sm md:text-base uppercase font-semibold tracking-wider py-2">
        History
      </h3>
      <ul className="my-5">
        {transactions.map((transaction) => (
          <div key={transaction.id}>
            <span className="text-xs font-semibold">{transaction.date}</span>
            <div className="flex items-stretch justify-between mb-4">
              <li
                className={`border-l-[6px] w-full ${
                  transaction.amount < 0 ? "border-red-700" : "border-green-700"
                }  flex items-center justify-between gap-2 bg-gray-100 text-gray-700 font-semibold md:text-lg pl-3 pr-2 py-1 md:pl-2 shadow-md shadow-gray-950/40`}
              >
                <span className="text-left">{transaction.description}</span>
                <span
                  className={`${
                    transaction.amount < 0 ? "text-red-700" : "text-green-700"
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
