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
            <p>Hi, I’m Kavitha 👋 A cloud and DevOps enthusiast who loves building, automating, and experimenting with new tech. Whether it’s AWS, Terraform, Kubernetes, or Ansible, I enjoy turning complex ideas into simple, working solutions—and I’m always excited to learn something new!</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
