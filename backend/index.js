const express = require('express');
const mongoose = require('mongoose');
const Transaction = require('./models/Transaction');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Finance App Backend');
});

// Routes for managing transactions
app.post('/transactions', async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.status(201).send(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/transactions', async (req, res) => {
  try {
    const transactions = await Transaction.find({});
    res.send(transactions);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/transactions/:id', async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!transaction) {
      return res.status(404).send();
    }
    res.send(transaction);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Connect to MongoDB
mongoose.connect('mongodb://atlas-sql-65b29d441ae88372d1fbe18b-becnf.a.query.mongodb.net/financeapp?ssl=true&authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
