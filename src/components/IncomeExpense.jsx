import { useSelector } from "react-redux";

export const IncomeExpense = () => {
  const transactions = useSelector((state) => state.transactions);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, current) => acc + current, 0);

  const expense =
    amounts
      .filter((amount) => amount < 0)
      .reduce((acc, current) => acc + current, 0);
  return (
    <div className="flex items-center justify-center py-3 md:py-2 w-full my-4 bg-gray-200 shadow-lg shadow-gray-500/10">
      <div id="income" className="border-r border-gray-500 pr-10">
        <h4 className="uppercase text-sm md:text-base text-center font-semibold text-gray-600">
          income
        </h4>
        <h2 className="font-semibold text-lg md:text-xl text-green-600">
          &#x20b9;{income}
        </h2>
      </div>
      <div id="expense" className="pl-10">
        <h4 className="uppercase text-sm md:text-base text-center font-semibold text-gray-600">
          expense
        </h4>
        <h2 className="font-semibold text-lg md:text-xl text-red-600">
          &#x20b9;{expense}
        </h2>
      </div>
    </div>
  );
};
