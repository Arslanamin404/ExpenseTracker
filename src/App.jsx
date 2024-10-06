import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

function App() {
  return (
    <div className="w-[21rem] md:w-[26rem] px-6 pt-1 pb-8 md:pb-5 h-auto my-6 md:my-2 bg-gray-900">
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
    </div>
  );
}

export default App;
