import React from 'react'
import {motion} from "framer-motion";
import './Home.css';

const About = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className='container'>
      <div className="module d-flex">This is about</div>
    </motion.div>
  )
}

export default About
