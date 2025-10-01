// src/theme/index.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Inter', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial`,
    body: `'Inter', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial`,
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  components: {
    Button: {
      baseStyle: { borderRadius: "md" },
    },
  },
});

export default theme;
