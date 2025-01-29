import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main/Main";
import Home from "../Home/Home/Home";
import About from "../Home/About/About";
import EmailGen from "../AlphaWordGo/components/Email/EmailGen/EmailGen";
import UserName from "../AlphaWordGo/components/UserName/UserName";
import WordGen from "../AlphaWordGo/components/Word/WordGen/WordGen";
import Variations from "../AlphaWordGo/components/Variations/Variations";

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
        },
        {
          path: "/username",
          element: <UserName></UserName>
        },
        {
          path: "/word",
          element: <WordGen></WordGen>
        },
        {
          path: '/variations',
          element: <Variations></Variations>
        }
      ],
    },
  ]);
  

export default router;
