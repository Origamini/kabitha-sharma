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
            <p>I am working in Amazon as a customer service asscociate. I have also done live projects as a intern in coding cult. I have worked on dockerfiles, kubernetes and terraform. During my phase in AWS Master's course in Intellipaat I did hands on projects on Ansible, Jenkins, Terraform, Linux, Databases and Autoscaling.</p>
            </div>
          </div>
          </div>
       </motion.div>
  )
}

export default Experience
