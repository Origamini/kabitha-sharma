import React from 'react'
import {motion} from "framer-motion";
import './Experience.css'

const Experience = () => {
  return (
      <motion.div className="exp-timeline" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <div className='exp-main'>
          <div className="exp">
            <div className="exp-my">
            <h2>Experience</h2>
            <ul>
              <li><strong>2022-August:</strong> Completed graduation in Computer Science with the CGPA 9.7.</li>
              <li>
                <strong>2022-Present:</strong> Working at Amazon as a Customer Service Associate.
              </li>
              <li>
                <strong>2023-2024:</strong> Completed AWS Master's course from Intellipaat.
              </li>
              <li><strong>2025:</strong> Obtained certification in AWS SSA, Developer, SysOps via Credly.com.</li>
              <li>
                <strong>2025-June:</strong> Worked as a Intern at Coding culd on live projects on Docker, Kubernetes and Terraform.
              </li>
              <li><strong>2025:</strong> Obtained Certification on Basic Java, Css, Javascript via Hackerrank platform.</li>
            </ul>
            </div>
          </div>
          </div>
       </motion.div>
  )
}

export default Experience
