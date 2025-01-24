import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main/Main";
import Home from "../Home/Home/Home";
import About from "../Home/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
      ],
    },
  ]);
  

export default router;
