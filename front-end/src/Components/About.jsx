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
            <p>Currently, working in Amazon. I am skilled in HTMl, Css, Javascript, NodeJs, ReactJs. Programming languages like Java. Cloud Technology such as AWS. And Devops tools like Jenkins, Docker, Ansible, Kubernetes. Databases like MYSQL.</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
