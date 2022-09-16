import React from "react";
import Home from "./paginas/Home";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Home></Home>
    </ThemeProvider>
  );
}

export default App;
