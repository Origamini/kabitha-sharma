import React, { useState } from 'react'
import { motion } from "framer-motion";
import './Skills.css';

// to do add span class

const Skills = () => {

  const [activeSkill, setActiveSkill] = useState(null);

  // Skill data( each skill has its own content)
    const skills = [
    { name: "AWS", desc: "AWS related services like EC2, S3, Lambda, VPC, CloudFormation, etc." },
    { name: "Devops", desc: "CI/CD pipelines, automation, monitoring, infrastructure as code, etc." },
    { name: "MERN", desc: "Full-stack development with MongoDB, Express, React, and Node.js." },
    { name: "Java", desc: "Core Java, OOP concepts, Spring Boot, APIs, and enterprise applications." },
    { name: "Javascript", desc: "ES6+, DOM manipulation, async programming, and frameworks." },
    { name: "SQL", desc: "Database design, queries, joins, indexing, optimization." },
    { name: "ReactJs", desc: "Components, hooks, state management, routing, and UI building." },
    { name: "Python", desc: "Scripting, automation, data processing, Flask/Django basics." },
    { name: "Linux", desc: "Shell scripting, file system, process management, networking." },
    { name: "Networking", desc: "TCP/IP, DNS, subnets, firewalls, routing & switching basics." },
    { name: "Ansibles", desc: "Automation using Ansible playbooks, roles, and inventory management." },
    { name: "Jenkins", desc: "CI/CD pipelines, integrations, and automation with Jenkins." },
    { name: "Terraform", desc: "Infrastructure provisioning using IaC with Terraform." },
    { name: "Kubernetes", desc: "Container orchestration, pods, services, deployments, Helm." },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='container'>
      <div className='titles'>Skills</div>
      <div className="cards">
        {skills.map((skill, idx) => (
          <div className="card" key={idx} onClick={() => setActiveSkill(skill)}>
            {skill.name}
          </div>
        ))}
      </div>
      {
        activeSkill && (
          <div className="modal" id='modal'>
            <div className="modal-inner">
              <h1>{activeSkill.name}</h1>
              <p>{activeSkill.desc}</p>
              <button onClick={() => setActiveSkill(null)}>Close</button>
            </div>
          </div>
        )
      }
      <div className='titles'>Certifications</div>
      <div className="cards">
        <div className="card">Hackerrank Basic Javascript</div>
        <div className="card">Hackerrank Basic HTML</div>
        <div className="card">Hackerrank Basic Java</div>
        <div className="card">Hackerank Basic SQL</div>
        <div className="card">AWS Intellipaat Master's Course</div>
        <div className="card">AWS Solution Architect from Credly.com</div>
      </div>
    </motion.div>
  )
}

export default Skills
