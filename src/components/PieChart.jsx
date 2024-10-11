import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux";

// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const transactions = useSelector((state) => state.transactions);
  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const expense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc - transaction.amount, 0);
  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "# of Transactions",
        data: [income, expense], // Your data here
        backgroundColor: ["#4CAF50", "red"], // Colors for each slice
        borderColor: ["#333", "#333"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="pie-chart-container border-t border-gray-300">
      <h1 className="font-bold uppercase my-5 text-xl md:text-2xl text-center">
        Transactions Overview
      </h1>
      <Pie
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
              labels: {
                color: "white",
              },
            },
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  return `${tooltipItem.label}: ₹${tooltipItem.raw}`;
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
