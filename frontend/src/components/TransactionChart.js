import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function TransactionChart({ transactions }) {
  const data = {
    labels: transactions.map((t) => new Date(t.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Amount',
        data: transactions.map((t) => t.amount),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Transaction Amounts Over Time',
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default TransactionChart;