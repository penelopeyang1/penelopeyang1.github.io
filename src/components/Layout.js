import { Outlet } from "react-router-dom";
import Navigation from './Navigation/Navigation';
import './Layout.css';

function Layout() {

    return (
        // <div>
        //     <Navigation />
        //     <main>
        //         <Outlet /> {/* This is where the routed components will render */}
        //     </main>
        // </div>
        <>
            <Navigation />
            <div className="content">
                <Outlet />
            </div>
            {/* Spotify Embed */}
            <div className="spotify-widget">
                <iframe src="https://open.spotify.com/embed/playlist/1hyGj8OtxqJMvtBIGJfj3Z?utm_source=generator&theme=0" width="25%" height="300" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </>
    );
}

export default Layout;
