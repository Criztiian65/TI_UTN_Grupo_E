import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import ProvContext from "./components/provider/ProvContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProvContext>
    <ChakraProvider bg="black">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChakraProvider>
  </ProvContext>
);
