import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./preloader.css";

const Preloader = ({ setIsLoaded }) => {
  console.log("✅ Preloader component is rendering..."); // Debugging

  const containerRef = useRef(null);

  useEffect(() => {
    console.log("✅ GSAP animation starting...");
    gsap.to(containerRef.current, {
      opacity: 1,
      duration: 1,
      onComplete: () => {
        setTimeout(() => {
          console.log("✅ Preloader finished, setting isLoaded to true");
          setIsLoaded(true);
        }, 2000);
      },
    });
  }, [setIsLoaded]);

  return (
    <div ref={containerRef} className="preloader-container">
      <h1 className="hello-text">hello</h1>
    </div>
  );
};

export default Preloader;

