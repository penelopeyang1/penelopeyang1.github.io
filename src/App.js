// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import Preloader from "./components/Preloader/preloader";
import Home from "./components/Home/Home"; // Your main content
import "./App.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("isLoaded state:", isLoaded);
  }, [isLoaded]);

  return (
    <div className="App">
      {!isLoaded && <Preloader setIsLoaded={setIsLoaded} />}
      {isLoaded && <Home />} {/* Show Home.jsx after preloader */}
    </div>
  );
}

export default App;
