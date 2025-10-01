// src/components/shared/Layout.jsx
import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Box as="main" p={{ base: 4, md: 6 }} maxW="1200px" mx="auto">
        <Outlet />
      </Box>
    </>
  );
}
