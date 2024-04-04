
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";

const RouteComponent = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        }
    ]
  },
]);

export default RouteComponent;
