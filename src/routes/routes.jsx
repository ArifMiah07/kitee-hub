import { createBrowserRouter } from "react-router-dom";

// import Main from "../layouts/Main/Main";
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
import MainFromMotion from "../motion/layouts/Main/Main";
import HomeFromMotion from "../motion/Home/Home";
import Root from "../layouts/Root/Root";
import MotionAbout from "../motion/Pages/Features/About/About";
import MotionBlog from "../motion/Pages/Features/Blog/Blog";
import MotionContact from "../motion/Pages/Features/Contact/Contact";
import MotionSurprise from "../motion/Pages/Features/Surprise/Surprise";
import ErrorPage from "../motion/Pages/Shared/ErrorPage/ErrorPage";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
    path: '/game-home',
    element: <HomeFromGamePage></HomeFromGamePage>,
    children: [
      {
        path: 'game',
        element: <FeaturesFromGamePage></FeaturesFromGamePage>
      }
    ]
  },
  {
    path: "/motion",
    element: <MainFromMotion />, // Main layout for motion
    errorElement: <ErrorPage />, // Global error handling for motion routes
    children: [
      {
        index: true, // Default route for "/motion"
        element: <HomeFromMotion />,
      },
      {
        path: "about",
        element: <MotionAbout />,
      },
      {
        path: "blog",
        element: <MotionBlog />,
      },
      {
        path: "contact",
        element: <MotionContact />,
      },
      {
        path: "surprise",
        element: <MotionSurprise />,
      },
      {
        path: "*", // Catch-all route for 404 errors inside /motion
        element: <ErrorPage />,
      },
    ],
  }
]);

export default router;
