import { createBrowserRouter } from "react-router-dom";
import Layout from './components/Layout.js';
import Home from './components/Home/index.js';
import Projects from './components/Projects/index.js';
import Contact from './components/Contact/index.js';

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'Projects',
                element: <Projects />
            },
            {
                path: 'Contact',
                element: <Contact />
            }
        ]
    }
])

export default router;
