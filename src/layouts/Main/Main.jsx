
import { Outlet } from "react-router-dom";
import Navbar from "../../Home/Shared/Nav/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;