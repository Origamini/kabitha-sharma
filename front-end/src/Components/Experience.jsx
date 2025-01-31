import React from 'react'
import {motion} from "framer-motion";
import './Home.css';

const Experience = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className='container'>
      <div className="module d-flex">
        This is Experience.
      </div>
       </motion.div>
  )
}

export default Experience
