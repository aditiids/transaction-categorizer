// src/components/SummaryCards.jsx
import React from "react"
import { SimpleGrid, Box, Stat, StatLabel, StatNumber } from "@chakra-ui/react"

function SummaryCards({ transactions }) {
  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0)

  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + t.amount, 0)

  const balance = income + expense

  return (
    <SimpleGrid columns={[1, 3]} spacing={4} mb={6}>
      <Box p={4} shadow="md" borderWidth="1px" borderRadius="lg">
        <Stat>
          <StatLabel>Total Income</StatLabel>
          <StatNumber color="green.500">₹{income}</StatNumber>
        </Stat>
      </Box>
      <Box p={4} shadow="md" borderWidth="1px" borderRadius="lg">
        <Stat>
          <StatLabel>Total Expense</StatLabel>
          <StatNumber color="red.500">₹{Math.abs(expense)}</StatNumber>
        </Stat>
      </Box>
      <Box p={4} shadow="md" borderWidth="1px" borderRadius="lg">
        <Stat>
          <StatLabel>Balance</StatLabel>
          <StatNumber>₹{balance}</StatNumber>
        </Stat>
      </Box>
    </SimpleGrid>
  )
}

export default SummaryCards
