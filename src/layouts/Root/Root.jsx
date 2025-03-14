
import Navbar from "../../Home/Shared/Nav/Navbar";
import { Outlet } from 'react-router-dom';
const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;