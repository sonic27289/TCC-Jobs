import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from "@material-ui/core/styles";

//import GuestRoute from "./routes/authenticatedRoute";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import NewPost from "./pages/Post/New";
import Post from "./pages/Post";
import Profile from "./pages/Profile";
import LogUp from "./pages/LogUp";
import ForgotPassword from "./pages/ForgotPassword";

//import theme from "./theme";
import createCurrentTheme from './theme';
import { useSettings } from "./context/SettingsContext";

import './mock';
import { redirectIfLogged } from "./routes/authenticatedRoute";
//import redirectIfLogged from "./routes/RedirectIfLogged";
//import { authenticatedRoute } from "./routes/authenticatedRoute";

const router = createBrowserRouter([
  { path: "/", element: <Home></Home>},
  { path: "/feed", element: <Home></Home>},
  { path: "/logup", element: <LogUp></LogUp>, loader: redirectIfLogged },
  { path: "/:username", element: <Profile></Profile>},
  { path: "/login", element: <LogIn></LogIn>, loader: redirectIfLogged },
  { path: "/post/new", element: <NewPost></NewPost>},
  { path: "/post/:slug", element: <Post></Post>},
  { path: "/recuperarsenha", element: <ForgotPassword></ForgotPassword>},
  { path: "*", element: <h1>Erro 404</h1>}
])

function App() {
  const { settings } = useSettings();

  return (
      <ThemeProvider theme={createCurrentTheme(settings)}>
        <RouterProvider router={router}/>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <GuestRoute path="/login" element={<LogIn></LogIn>}></GuestRoute>
          <Route path="*" element={<h1> Not found 404 !</h1>}></Route>
        </Routes>
      </BrowserRouter> */}
      </ThemeProvider>
  );
}

export default App;
