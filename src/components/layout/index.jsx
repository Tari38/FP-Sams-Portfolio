import { Outlet } from "react-router-dom";
import { Header, Footer } from ".";
import "./Layout.css";

function Layout() {
    return (
        <>
            <Header />
                <main className="main-outlet">
                    <br />
                        <Outlet />
                    <br />
                </main>
            <Footer />
        </>
    )
}

export default Layout;