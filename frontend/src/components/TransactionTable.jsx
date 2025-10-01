// src/components/TransactionTable.jsx
import React from "react"
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from "@chakra-ui/react"

function TransactionTable({ transactions, deleteTransaction }) {
  return (
    <Table variant="simple" size="sm" mt={6}>
      <Thead>
        <Tr>
          <Th>Date</Th>
          <Th>Description</Th>
          <Th isNumeric>Amount</Th>
          <Th>Category</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {transactions.map((txn, index) => (
          <Tr key={index}>
            <Td>{txn.date}</Td>
            <Td>{txn.description}</Td>
            <Td isNumeric>{txn.amount}</Td>
            <Td>{txn.category}</Td>
            <Td>
              <Button
                size="xs"
                colorScheme="red"
                onClick={() => deleteTransaction(index)}
              >
                Delete
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default TransactionTable
