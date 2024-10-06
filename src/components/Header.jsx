import React from "react";

export const Header = () => {
  // we can take this title as prop to make this reusable component
  return <h1 className="font-semibold text-lg md:text-xl uppercase mt-4 mb-6 text-center border-b border-gray-200 pb-2">Expense Tracker</h1>;
};
