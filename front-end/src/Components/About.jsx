import React from 'react'
import { motion } from "framer-motion";
import './About.css';

const About = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className='about-main'>
        <div className='about'>
          <div className='about-me'>
            <h2>About me!</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam vero et ab magni ad? Est, commodi ad numquam beatae repudiandae asperiores possimus doloremque quod, minus doloribus suscipit libero sequi rerum.</p>
          </div>
        </div>
        <div className='about-journey'>
          <h2>This is my journey</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quae eos dolore deleniti, sunt incidunt sit, vero optio quibusdam corrupti blanditiis eaque numquam error accusantium delectus voluptatum doloribus suscipit dolorem?</p>
        </div>
      </div>
    </motion.div>
  )
}

export default About
