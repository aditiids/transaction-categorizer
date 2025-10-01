import React, { useState } from "react";
import {
  Table, Thead, Tbody, Tr, Th, Td,
  Button, useDisclosure
} from "@chakra-ui/react";
import EditTransactionModal from "./EditTransactionModal";

const TransactionTable = ({ transactions, deleteTransaction, editTransaction }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTx, setSelectedTx] = useState(null);

  const handleEditClick = (tx) => {
    setSelectedTx(tx);
    onOpen();
  };

  return (
    <>
      <Table variant="simple" mt={4}>
        <Thead>
          <Tr>
            <Th>Description</Th>
            <Th>Amount</Th>
            <Th>Category</Th>
            <Th>Type</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transactions.map((tx) => (
            <Tr key={tx.id}>
              <Td>{tx.description}</Td>
              <Td>₹{tx.amount}</Td>
              <Td>{tx.category}</Td>
              <Td>{tx.type}</Td>
              <Td>
                <Button
                  size="sm"
                  colorScheme="blue"
                  mr={2}
                  onClick={() => handleEditClick(tx)}
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  colorScheme="red"
                  onClick={() => deleteTransaction(tx.id)}
                >
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {selectedTx && (
        <EditTransactionModal
          isOpen={isOpen}
          onClose={onClose}
          transaction={selectedTx}
          editTransaction={editTransaction}
        />
      )}
    </>
  );
};

export default TransactionTable;
