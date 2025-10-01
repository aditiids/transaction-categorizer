import React, { useState, useEffect } from 'react'
import { Box, Heading } from '@chakra-ui/react'
import TransactionForm from '../components/TransactionForm'
import TransactionTable from '../components/TransactionTable'

export default function TransactionsPage() {
  // Initialize from localStorage so page refresh keeps data
  const [transactions, setTransactions] = useState(() => {
    try {
      const raw = localStorage.getItem('transactions')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
  }, [transactions])

  const addTransaction = (tx) => {
    // insert at top
    setTransactions(prev => [tx, ...prev])
  }

  const deleteTransaction = (id) => {
    setTransactions(prev => prev.filter(t => t.id !== id))
  }

  return (
    <Box p={6} maxW="900px" mx="auto">
      <Heading size="md" mb={6}>Transaction Input</Heading>
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionTable transactions={transactions} onDelete={deleteTransaction} />
    </Box>
  )
}
