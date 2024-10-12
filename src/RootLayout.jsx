import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { AddTransactionBtn } from "./components/AddTransactionBtn";
import PieChart from "./components/PieChart";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Header />
      <Balance />
      <IncomeExpense />
      <AddTransactionBtn />
      <TransactionList />
      <PieChart />
    </>
  );
}

export default RootLayout;
