import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main/Main";
import Home from "../Home/Home/Home";
import About from "../Home/About/About";
import EmailGen from "../AlphaWordGo/components/Email/EmailGen/EmailGen";

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
        {
          path: "/gmail",
          element: <EmailGen></EmailGen>,
        }
      ],
    },
  ]);
  

export default router;
