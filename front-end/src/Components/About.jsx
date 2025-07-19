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
        <div className='about-journey'>
          <h2>This is my journey</h2>
          <div className="slider">
            <div className="slide-track">
              <div className="slide">Card1</div>
              <div className="slide ">Card2</div>
              <div className="slide">Card3</div>
              <div className="slide">Card4</div>
              <div className="slide">Card5</div>
              {/* repeat */}
              <div className="slide">Card6</div>
              <div className="slide">Card7</div>
              <div className="slide">Card8</div>
              <div className="slide">Card9</div>
              <div className="slide">Card10</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
