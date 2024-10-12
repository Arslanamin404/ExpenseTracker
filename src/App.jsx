import { RouterProvider } from "react-router-dom";
import { router } from "./routes";


function App() {
  return (
    <div className="rounded-lg w-[22rem] md:w-[30rem] px-6 pt-1 pb-8 md:pb-5 bg-gray-900 my-10 md:m-4">
      <RouterProvider router={router}>
        
      </RouterProvider>
    </div>
  );
}

export default App;
