import React from 'react'
import { motion } from "framer-motion";
import './Skills.css';

const Skills = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="container">
        <div className='card-container'>
          <div className="card">
            <span id='hover-text'>click to know more...</span>
            <span id='actual-text'>AWS Developer</span>
          </div>
          <div className="card">
            <span id='hover-text'>click to know more...</span>
            <span id="actual-text">ReactJs</span>
          </div>
          <div className="card">
            <span id='hover-text'>click to know more...</span>
            <span id='actual-text'>AWS Solution Architect</span>
          </div>
          <div className="card">
            <span id='hover-text'>click to know more...</span>
            <span id="actual-text">Java Developer</span>
          </div>
          <div className="card">
            <span id='hover-text'>click to know more...</span>
            <span id="actual-text">MERN</span>
          </div>
          <div className="card">
            <span id='hover-text'>click to know more...</span>
            <span id="actual-text">AWS Devops</span>
          </div>
          <div className="card">
            <span id='hover-text'>click to know more...</span>
            <span id="actual-text">Javascript</span>
          </div>
          <div className="card">
            <span id='hover-text'>click to know more...</span>
            <span id="actual-text">Devops tools</span>
          </div>
          <div className="card">
            <span id='hover-text'>click to know more...</span>
            <span id="actual-text">Terraform</span>
          </div>
          <div className="card">
            <span id='hover-text'>click to know more...</span>
            <span id="actual-text">Jenkins</span>
          </div>
          <div className="card">
            <span id='hover-text'>click to know more...</span>
            <span id="actual-text">Ansible</span>
          </div>
        </div>
        <div className="aws-developer">
          <h2>AWS-Developer</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas accusantium totam, dolores commodi iusto ut laboriosam porro nobis dignissimos. Alias repudiandae repellendus facere illum laborum voluptatem et, necessitatibus reiciendis quaerat.</p>
        </div>
        <div className="reactjs">
          <h2>ReactJs</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis sed expedita quo doloremque quisquam, voluptates sit reiciendis ullam harum quos labore deserunt illum, beatae repellendus possimus optio unde facilis odit.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Skills
