// src/components/UploadPage.jsx
import React, { useState } from "react"
import { Box, Button, Input, VStack, Text } from "@chakra-ui/react"
import Papa from "papaparse"

function UploadPage({ addTransactions }) {
  const [file, setFile] = useState(null)
  const [message, setMessage] = useState("")

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleUpload = () => {
    if (!file) {
      setMessage("Please select a CSV file first.")
      return
    }

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        // Map CSV rows to transaction objects
        const parsedTransactions = results.data.map((row) => ({
          date: row.date,
          description: row.description,
          amount: Number(row.amount),
          category: row.category || "Other",
        }))

        addTransactions(parsedTransactions)
        setMessage(`Successfully added ${parsedTransactions.length} transactions!`)
        setFile(null)
      },
      error: (err) => {
        setMessage("Error parsing CSV: " + err.message)
      },
    })
  }

  return (
    <Box p={6} borderWidth="1px" borderRadius="lg">
      <VStack spacing={4}>
        <Input type="file" accept=".csv" onChange={handleFileChange} />
        <Button colorScheme="blue" onClick={handleUpload}>
          Upload CSV
        </Button>
        {message && <Text>{message}</Text>}
      </VStack>
    </Box>
  )
}

export default UploadPage
