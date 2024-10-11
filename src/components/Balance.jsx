import { useSelector } from "react-redux";

export const Balance = () => {
  const transactions = useSelector((state) => state.transactions);
  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const expense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  return (
    <>
      <h4 className="text-gray-300 text-sm md:text-base uppercase">
        Your Balance
      </h4>
      <h1 className="font-semibold text-3xl text-left">
        &#x20b9;{income - expense}
      </h1>
    </>
  );
};
