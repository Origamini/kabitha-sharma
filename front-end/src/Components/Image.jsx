import React from 'react'
import { motion } from "framer-motion";
import './Home.css';
import './Image.css';

const Image = () => {
  return (
    <motion.div className='container' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className='card-container'>
        <div className="card">
          AWS Developer
        </div>
        <div className="card">
          ReactJs
        </div>
        <div className="card">
          AWS Solution Architect
        </div>
        <div className="card">
          Java Developer
        </div>
        <div className="card">
          MERN
        </div>
        <div className="card">
          AWS Devops
        </div>
        <div className="card">
          Javascript
        </div>
      </div>
    </motion.div>
  )
}

export default Image
