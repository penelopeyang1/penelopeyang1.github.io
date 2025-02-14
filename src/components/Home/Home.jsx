import './Home.css';
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="home-left">
                <div className="full-about">
                    <div className="about-top">
                        <div className="window-buttons">
                            <span className="window-button"></span>
                            <span className="window-button"></span>
                            <span className="window-button"></span>
                        </div>
                        <h4>Welcome to My Portfolio</h4>
                    </div>
                    <div className='about-window'>
                        <div className="about-bottom">
                            <div className="about-left">
                                <img src="/penelope-pfp.jpg" alt="Penelope Yang" className="profile-image" />
                            </div>
                            <div className="about-right">
                                <h1>Hello, </h1>
                                <h1>I'm Penelope Yang.</h1>
                                <span className='divider'></span>
                                <h4>I’m a full-stack software engineer with a passion for solving puzzles and bringing creative ideas to life. When I’m not coding, you can find me immersed in the worlds of video games and books as I’m all about combining precision and imagination both in my work and in everyday life.
                                    For me, coding is more than just problem-solving, it's about creating something dynamic, efficient, and maybe even a little bit magical. I’m constantly learning, exploring new ideas, and honing my craft, whether it's working on personal coding projects, playing the violin, or discovering new corners of the world.
                                </h4>
                                {/* <div className='project-nav'>
                                    <NavLink to="/projects" activeClassName="active" className="project-button">Check out my projects 😊</NavLink>
                                </div> */}
                                {/* <NavLink to="/projects" activeClassName="active" className="project-nav"> */}
                                <NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""}>
                                    <button className="project-button">
                                        <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                        </svg>
                                        <span className="text">Check out my projects 😊</span>
                                        <span className="circle"></span>
                                        <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                        </svg>
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-right">
            </div>
        </>
    )
}

export default Home;
