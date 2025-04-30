import React from 'react'
import {motion} from "framer-motion";
import './About.css';

const About = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <div className='Container'>
        <div>
          <h2>About me!</h2>
          <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam vero et ab magni ad? Est, commodi ad numquam beatae repudiandae asperiores possimus doloremque quod, minus doloribus suscipit libero sequi rerum.</small>
        </div>
      </div>
    </motion.div>
  )
}

export default About
