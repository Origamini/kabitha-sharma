import React from 'react'
import {
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Experience from "./Experience";
import Image from "./Skills";

// import {} from 'framer-motion';
import { AnimatePresence } from "framer-motion";
import Skills from './Skills';

const AnimateRoute = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {/* Set Home as the default route for the root path */}
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/skills" element={<Skills />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimateRoute
