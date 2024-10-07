import { Outlet } from "react-router-dom";
import Navigation from './Navigation/Navigation';

function Layout() {

    return (
        <div>
            <Navigation />
            <main>
                <Outlet /> {/* This is where the routed components will render */}
            </main>
        </div>
    );
}

export default Layout;
