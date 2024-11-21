import React from 'react';
import jsPDF from 'jspdf';

function ReportGenerator({ transactions }) {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Transaction Report', 20, 10);
    let y = 20;

    transactions.forEach((transaction, index) => {
      doc.text(`${index + 1}. ${transaction.type}: $${transaction.amount} - ${transaction.category} on ${new Date(transaction.date).toLocaleDateString()}`, 20, y);
      y += 10;
    });

    doc.save('transaction_report.pdf');
  };

  return (
    <button onClick={generatePDF} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Download Report
    </button>
  );
}

export default ReportGenerator;
