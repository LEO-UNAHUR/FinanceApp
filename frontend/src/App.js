import React from 'react';
import './App.css';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';
import TransactionChart from './components/TransactionChart';
import ReportGenerator from './components/ReportGenerator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Finance App</h1>
      </header>
      <main>
        <AddTransaction />
      </main>
      <section>
        <TransactionList />
      </section>
      <section>
        <TransactionChart transactions={transactions} />
      </section>
      <section>
        <ReportGenerator transactions={transactions} />
      </section>
    </div>
  );
}

export default App;
