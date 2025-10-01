import React, { useState } from "react";
import {
  Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalCloseButton, ModalBody, ModalFooter,
  Button, Input, Select
} from "@chakra-ui/react";

const EditTransactionModal = ({ isOpen, onClose, transaction, editTransaction }) => {
  const [formData, setFormData] = useState({ ...transaction });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    editTransaction(formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Transaction</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            mb={3}
          />
          <Input
            placeholder="Amount"
            name="amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
            mb={3}
          />
          <Select name="category" value={formData.category} onChange={handleChange} mb={3}>
            <option value="Food">Food</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>
            <option value="Other">Other</option>
          </Select>
          <Select name="type" value={formData.type} onChange={handleChange}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </Select>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSave}>
            Save
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditTransactionModal;
