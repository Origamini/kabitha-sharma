import React from 'react'
import {motion} from "framer-motion";
import './Home.css';
import './About.css';

const About = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className='container'>
      {/* <div className="module d-flex">
        <div className="about_container">
          <h2>About me!</h2>
          <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam vero et ab magni ad? Est, commodi ad numquam beatae repudiandae asperiores possimus doloremque quod, minus doloribus suscipit libero sequi rerum.</small>
        </div>
      </div> */}
      <div className="module skills">
        <h2>HTML</h2>
        <div className="progress_bar">
          <div className="html"><span>60%</span></div>
        </div>
        <h2>CSS</h2>
        <div className="progress_bar">
          <div className="css"><span>70%</span></div>
        </div>
        <h2>Javascript</h2>
        <div className="progress_bar">
          <div className="javascript"><span>40%</span></div>
        </div>
        <h2>ReactJs</h2>
        <div className="progress_bar">
          <div className="reactjs"><span>70%</span></div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
