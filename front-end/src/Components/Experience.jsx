import React from 'react'
import {motion} from "framer-motion";
import './Experience.css'

const Experience = () => {
  return (
      <motion.div className="exp-timeline" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <div className='exp-main'>
          <div className="exp">
            <div className="exp-my">
            <h2>Hey there!</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus debitis ab minima aliquam unde dolore, praesentium similique, non accusamus dicta molestias at necessitatibus. Adipisci enim, voluptate consequatur commodi rerum error.</p>
            </div>
          </div>
          </div>
       </motion.div>
  )
}

export default Experience
