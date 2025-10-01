// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'   // 👈 import this
import App from './App'

// 1️⃣ Define config (still system-based)
const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

// 2️⃣ Extend the theme to override dark mode colors
const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#000000' : 'white',
        color: props.colorMode === 'dark' ? 'white' : 'black',
      },
    }),
  },
  colors: {
    brand: {
      500: '#1DA1F2', // Twitter blue
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <BrowserRouter>   {/* 👈 wrap App here */}
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
