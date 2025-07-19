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
          <div className="exp-grad">
            <h2>This was my graduation phase</h2>
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

export default Experience
