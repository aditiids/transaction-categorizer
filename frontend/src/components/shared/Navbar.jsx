import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box bg="gray.100" p={4} boxShadow="sm">
      <Flex gap={4}>
        <Button as={Link} to="/login" colorScheme="teal" variant="outline">
          Login
        </Button>
        <Button as={Link} to="/dashboard" colorScheme="teal" variant="outline">
          Dashboard
        </Button>
        <Button as={Link} to="/transactions" colorScheme="teal" variant="outline">
          Transactions
        </Button>
      </Flex>
    </Box>
  );
}
