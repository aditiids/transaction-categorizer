// src/components/TransactionForm.jsx
import React, { useState } from "react"
import {
  Box,
  Input,
  Button,
  Select,
  VStack,
} from "@chakra-ui/react"

function TransactionForm({ addTransaction }) {
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const [date, setDate] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!description || !amount || !date || !category) return

    addTransaction({ description, amount: Number(amount), date, category })

    // reset form
    setDescription("")
    setAmount("")
    setDate("")
    setCategory("")
  }

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack spacing={3}>
        <Input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Select
          placeholder="Select Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Food">Food</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Travel">Travel</option>
          <option value="Other">Other</option>
        </Select>
        <Button type="submit" colorScheme="blue" w="full">
          Add Transaction
        </Button>
      </VStack>
    </Box>
  )
}

export default TransactionForm
