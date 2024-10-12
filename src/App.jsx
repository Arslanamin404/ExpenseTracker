import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import PieChart from "./components/PieChart";

function App() {
  return (
    <div className="rounded-lg w-[22rem] md:w-[30rem] px-6 pt-1 pb-8 md:pb-5 bg-gray-900 my-10 md:m-4">
      <Header />
      <Balance />
      <IncomeExpense />
      <AddTransaction />
      <TransactionList />
      <PieChart/>
    </div>
  );
}

export default App;
