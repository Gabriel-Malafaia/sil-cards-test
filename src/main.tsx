import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <CSSReset />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
