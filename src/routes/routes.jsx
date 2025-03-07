import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main/Main";
import Home from "../Home/Home/Home";
import About from "../Home/About/About";
import EmailGen from "../AlphaWordGo/components/Email/EmailGen/EmailGen";
import UserName from "../AlphaWordGo/components/UserName/UserName";
import WordGen from "../AlphaWordGo/components/Word/WordGen/WordGen";
import Variations from "../AlphaWordGo/components/Variations/Variations";
import BoxGen from "../AlphaWordGo/components/BoxGen/BoxGen";
import InstagramUser from "../AlphaWordGo/components/Variations/InstagramUser";
import Platforms from "../AlphaWordGo/pages/Platforms";
import HomeFromGamePage from "../AlphaWordGo/Game/pages/Home/Home";
import FeaturesFromGamePage from "../AlphaWordGo/Game/pages/features/Features";

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
        element: <UserName></UserName>,
      },
      {
        path: "/word",
        element: <WordGen></WordGen>,
      },
      {
        path: "/variations",
        element: <Variations></Variations>,
      },
      {
        path: "/box",
        element: <BoxGen></BoxGen>,
      },
      {
        path: "/instagram",
        element: <InstagramUser></InstagramUser>
      },
      {
        path: "/platforms",
        element: <Platforms></Platforms>
      },
    ],
  },
  {
    path: '/game',
    element: <HomeFromGamePage></HomeFromGamePage>,
    children: [
      {
        path: '/',
        element: <FeaturesFromGamePage></FeaturesFromGamePage>
      }
    ]
  }
]);

export default router;
