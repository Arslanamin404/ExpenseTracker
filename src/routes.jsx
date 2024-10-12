import { AddTransactionForm } from "./components/AddTransactionForm.jsx";
import { UpdateTransactionForm } from "./components/UpdateTransactionForm.jsx";
import RootLayout from "./RootLayout.jsx";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
  {
    path:"/addTransaction",
    element:<AddTransactionForm/>
  },
  {
    path:"/updateTransaction/:id",
    element:<UpdateTransactionForm/>
  },
]);
