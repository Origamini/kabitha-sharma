import React from 'react'
import { motion } from "framer-motion";
import './Home.css';
import './Image.css';

const Image = () => {
  return (
    <motion.div className='container' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className='module'>
        <div className="card-container">
          <div className="image-container">This is image</div>
          <div className="content-container">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel architecto fuga deleniti libero</p>
            <button className='content-btn'>Primary</button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Image
