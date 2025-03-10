import React from 'react'
import {motion} from "framer-motion";
import './Experience.css'

const Experience = () => {
  return (
      <motion.div className="exp-timeline" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <div className="exp-box left-container">
        <img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/la-bi-xiao-xin1/sticker_24.gif?a51f9a182994571b5efbadbca0d46f67" alt="an error" style={{height:'40px'}}/>
          <div className="exp-text-box">
            <h2>Graduation</h2>
            <small>2019-2022</small>
            <p>I am a graduation in <strong>BSc(Computer Science)</strong>. During my graduation phase I developed by skills in Java, HTML, Css, Javascript.</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div className="exp-box right-container">
        <img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/la-bi-xiao-xin1/sticker_24.gif?a51f9a182994571b5efbadbca0d46f67" alt="an error" style={{height:'40px'}}/>
          <div className="exp-text-box">
            <h2>Amazon</h2>
            <small>2022-present</small>
            <p>I got an oppurtunity in working with the Amazon. Where initially I hired as the Customer Service Associate for a contractual period of 6 months. But later I got permanent.</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
        <div className="exp-box left-container">
        <img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/la-bi-xiao-xin1/sticker_24.gif?a51f9a182994571b5efbadbca0d46f67" alt="an error" style={{height:'40px'}}/>
          <div className="exp-text-box">
            <h2>ReactJs</h2>
            <small>2022-present</small>
            <p>During my journey in Amazon I developed skills in Reactjs where I have so many projects like weather app, DailyNews, Shootergame, TodoList, created my own portfolio, text-transform app etc.</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div className="exp-box right-container">
        <img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/la-bi-xiao-xin1/sticker_24.gif?a51f9a182994571b5efbadbca0d46f67" alt="an error" style={{height:'40px'}}/>
          <div className="exp-text-box">
            <h2>AWS-CloudJourney</h2>
            <small>2022-present</small>
            <p>During my work I was introduced to the AWS. I wanted to learn more about it therefore I joined a course via <strong>Intellipaat</strong>. I created many hands on project.</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
       </motion.div>
  )
}

export default Experience
