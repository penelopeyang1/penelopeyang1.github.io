import { Outlet } from "react-router-dom";
import Navigation from './Navigation/Navigation';
import './Layout.css';
import DesktopBar from "./DesktopBar";
import ShaderBackground from './ShaderBackground';
import TechWidget from "./TechWidget";

function Layout() {

    return (
        // <div>
        //     <Navigation />
        //     <main>
        //         <Outlet /> {/* This is where the routed components will render */}
        //     </main>
        // </div>
        <>
            <DesktopBar />
            <Navigation />
            <div className="content">
                <ShaderBackground />
                <Outlet />
            </div>
            {/* Spotify Embed */}
            {/* <div className="spotify-widget">
                <iframe src="https://open.spotify.com/embed/playlist/1hyGj8OtxqJMvtBIGJfj3Z?utm_source=generator&theme=0" title="spotify-widget" width="25%" height="300" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                <h5 className="music-player">Music Player</h5>
            </div>
                <TechWidget /> */}
        </>
    );
}

export default Layout;
