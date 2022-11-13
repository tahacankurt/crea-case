import Header from "./Header";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header/>
            <div className="container mx-auto px-4">
                <Outlet />
            </div>
        </>
    );
}

export default Layout;
