// src/components/shared/Navbar.jsx
import React from 'react'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useColorMode,
  useColorModeValue,
  Heading,
  Link,
  VStack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom' // if you don't use router, replace with plain <a>

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('white', '#000000')
  const borderColor = useColorModeValue('gray.200', '#222222')
  const linkHover = useColorModeValue('gray.100', '#111111')


  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const NavItem = ({ to, children }) => (
    <Link
      as={NavLink}
      to={to}
      px={3}
      py={2}
      rounded="md"
      _hover={{ textDecoration: 'none', bg: linkHover }}
      _activeLink={{ fontWeight: 'semibold', color: 'teal.400' }}
    >
      {children}
    </Link>
  )

  return (
    <Box bg={bg} px={4} borderBottom="1px" borderColor={borderColor} position="sticky" top="0" zIndex="banner">
      <Flex h={16} align="center" justify="space-between" maxW="container.lg" mx="auto">
        <HStack spacing={6} align="center">
          <IconButton
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={{ md: 'none' }}
            onClick={toggle}
            size="sm"
          />
          <Heading size="sm">TxnCategorizer</Heading>
          <HStack as="nav" spacing={3} display={{ base: 'none', md: 'flex' }}>
            <NavItem to="/">Dashboard</NavItem>
            <NavItem to="/upload">Upload</NavItem>
            <NavItem to="/about">About</NavItem>
          </HStack>
        </HStack>

        <HStack>
          <IconButton
            aria-label={colorMode === 'light' ? 'Switch to dark' : 'Switch to light'}
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            size="sm"
          />
          <Button size="sm" variant="ghost">Sign in</Button>
        </HStack>
      </Flex>

      {/* mobile menu */}
      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <VStack as="nav" spacing={1} align="stretch" px={2}>
            <NavItem to="/">Dashboard</NavItem>
            <NavItem to="/upload">Upload</NavItem>
            <NavItem to="/about">About</NavItem>
          </VStack>
        </Box>
      )}
    </Box>
  )
}
