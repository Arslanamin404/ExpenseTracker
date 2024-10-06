import { useSelector } from "react-redux";

export const Balance = () => {
  const transactions = useSelector((state) => state.transactions);
  const amount = transactions.map((transaction) => transaction.amount);
  const income = amount.reduce((acc, current) => acc + current, 0);
  return (
    <>
      <h4 className="text-gray-300 text-sm md:text-base uppercase">
        Your Balance
      </h4>
      <h1 className="font-semibold text-3xl text-left">&#x20b9;{income}</h1>
    </>
  );
};
