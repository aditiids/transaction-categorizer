// src/App.jsx
import React, { useState, useEffect } from "react"
import { Box, Container } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
import TransactionForm from "./components/TransactionForm"
import TransactionTable from "./components/TransactionTable"
import SummaryCards from "./components/SummaryCards"
import UploadPage from "./components/UploadPage"


function App() {
  const [transactions, setTransactions] = useState([])

  // 🔹 Load saved transactions from localStorage on first render
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("transactions") || "[]")
    setTransactions(saved)
  }, [])

  // 🔹 Save transactions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions))
  }, [transactions])

  // Add new transaction
  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction])
  }

  // 🔹 Add multiple transactions (for CSV)
  const addTransactions = (newTxns) => {
    setTransactions((prev) => [...prev, ...newTxns])
  }

  // Delete transaction
  const deleteTransaction = (index) => {
    setTransactions((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <Box>
      <Navbar />
      <Container maxW="container.md" mt={10}>
        <Routes>
          <Route
            path="/"
            element={
              <Box p={6}>
                <TransactionForm addTransaction={addTransaction} />
                <SummaryCards transactions={transactions} />
                <TransactionTable
                  transactions={transactions}
                  deleteTransaction={deleteTransaction}
                />
              </Box>
            }
          />
          <Route
            path="/upload"
            element={<UploadPage addTransactions={addTransactions} />}
          />
          <Route path="/about" element={<h2>About this app 👩‍💻</h2>} />
        </Routes>
      </Container>
    </Box>
  )
}

export default App
