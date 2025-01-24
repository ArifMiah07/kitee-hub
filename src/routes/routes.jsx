
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Main from "../layouts/Main/Main";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/about',
                elementL: <About></About>
            }
        ]
    }
])

export default router;