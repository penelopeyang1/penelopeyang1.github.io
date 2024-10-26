import { useState } from 'react';
import './Contact.css';
import { MdOutlineMail } from "react-icons/md";
import ImageCarousel from '../ImageCarousel';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel">
            <div
                className="carousel-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div className="carousel-item" key={index}>
                        <img src={image} alt={`slide-${index}`} />
                    </div>
                ))}
            </div>
            <button className="carousel-btn prev" onClick={handlePrev}>
                &#10094;
            </button>
            <button className="carousel-btn next" onClick={handleNext}>
                &#10095;
            </button>
        </div>
    );
};

function Contact() {
    const images = [
        '/images/lake.png',
        '/images/odyssea.png',
        // '/images/cactus.png',
        // '/images/celeste.png',
        '/images/epcot.png',
        // '/images/two-boba.png',
        // '/images/professional.png',
        // '/images/acnh.png',
        '/images/bruce.png',
        // '/images/zeus.png',
        // '/images/sweets.png',
        '/images/tae.png',
        '/images/nyc-cam.png',
        '/images/boba.png',
        '/images/val.png',
        // '/images/keeb.png',
        // '/images/robot-boba.png',
        '/images/pluto.png',
    ];

    return (
        <div className="connect-window">
            <div className="about-top">
                <div class="window-buttons">
                    <span class="window-button"></span>
                    <span class="window-button"></span>
                    <span class="window-button"></span>
                </div>
                <h4>Let's Connect!</h4>
            </div>
            <div className="about-window">
                <div className="connect-body">
                    {/* <Carousel images={images} /> */}
                    <ImageCarousel images={images} />
                    <h4 className='connect-info'>Born and raised in Minnesota, I’m passionate about connecting with people from all walks of life. I’m eager to move to a new state and grow my network. With a warm, bubbly personality, I genuinely enjoy building new friendships and professional relationships. Whether you’re looking to hire me or seeking a friendly collaborator, I’m all in! As an avid hobby collector, I'm always eager to learn new things. To start, I love animals, reading, gaming, working out, and traveling—so there’s always something to chat about. Let’s connect!</h4>
                </div>
                <div className="connect-bottom">
                    <ul class="example-2">
                        <li class="icon-content">
                            <a
                                href="https://www.linkedin.com/in/penelope-yang/"
                                aria-label="LinkedIn"
                                data-social="linkedin"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div class="filled"></div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-linkedin"
                                    viewBox="0 0 16 16"
                                    xmlSpace="preserve"
                                >
                                    <path
                                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </a>
                            <div class="tooltip">LinkedIn</div>
                        </li>
                        <li class="icon-content">
                            <a
                                href="https://github.com/penelopeyang1"
                                aria-label="GitHub"
                                data-social="github"
                                target="_blank"
                                rel="noopener noreferrer">
                                <div class="filled"></div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-github"
                                    viewBox="0 0 16 16"
                                    xmlSpace="preserve"
                                >
                                    <path
                                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </a>
                            <div class="tooltip">GitHub</div>
                        </li>
                        <li class="icon-content">
                            <a href="/Penelope-Yang-Resume.pdf" aria-label="Resume" data-social="resume" target="_blank" rel="noopener noreferrer" className='Resume'>
                                <div class="filled"></div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-file-earmark-text"
                                    viewBox="0 0 16 16"
                                    xmlSpace="preserve"
                                >
                                    <path d="M5.5 9.5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zm0 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5z" />
                                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zM13 4.5L9.5 1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
                                </svg>
                            </a>
                            <div class="tooltip">Resume</div>
                        </li>
                    </ul>
                    <div className="email">
                        <MdOutlineMail className='email-icon'/>
                        <h4>penelope.yang21@gmail.com</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
