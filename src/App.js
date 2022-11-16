import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";

//import GuestRoute from "./routes/authenticatedRoute";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import NewPost from "./pages/Post/New";

import theme from "./theme";
import store from "./store";

import './mock';
import { redirectIfLogged } from "./routes/authenticatedRoute";
//import redirectIfLogged from "./routes/RedirectIfLogged";
//import { authenticatedRoute } from "./routes/authenticatedRoute";

const router = createBrowserRouter([
  { path: "/", element: <Home></Home>},
  { path: "/login", element: <LogIn></LogIn>, loader: redirectIfLogged },
  { path: "/post/new", element: <NewPost></NewPost>},
  { path: "*", element: <h1>Erro 404</h1>}
])

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}/>
        
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <GuestRoute path="/login" element={<LogIn></LogIn>}></GuestRoute>
          <Route path="*" element={<h1> Not found 404 !</h1>}></Route>
        </Routes>
      </BrowserRouter> */}

      </ThemeProvider>
    </Provider>
  );
}

export default App;
