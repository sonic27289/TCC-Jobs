import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@material-ui/core/styles";

import GuestRoute from "./routes/GuestRoute";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import theme from "./theme";

import './mock';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <GuestRoute path="/login" element={<LogIn></LogIn>}></GuestRoute>
          <Route path="*" element={<h1> Not found 404 !</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
