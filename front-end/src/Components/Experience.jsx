import React from 'react'
import {motion} from "framer-motion";
import './Experience.css'

const Experience = () => {
  return (
      <motion.div className="exp-timeline" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <div className="exp-box left-container">
        <img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/la-bi-xiao-xin1/sticker_24.gif?a51f9a182994571b5efbadbca0d46f67" alt="an error" style={{height:'40px'}}/>
          <div className="exp-text-box">
            <h2>Company name.co</h2>
            <small>2022-present</small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sequi excepturi tenetur voluptate officia soluta eveniet aperiam asperiores? Voluptatibus rem architecto neque perspiciatis, laborum vero iure odio incidunt quidem debitis.</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div className="exp-box right-container">
        <img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/la-bi-xiao-xin1/sticker_24.gif?a51f9a182994571b5efbadbca0d46f67" alt="an error" style={{height:'40px'}}/>
          <div className="exp-text-box">
            <h2>Company name.co</h2>
            <small>2022-present</small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sequi excepturi tenetur voluptate officia soluta eveniet aperiam asperiores? Voluptatibus rem architecto neque perspiciatis, laborum vero iure odio incidunt quidem debitis.</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
        <div className="exp-box left-container">
        <img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/la-bi-xiao-xin1/sticker_24.gif?a51f9a182994571b5efbadbca0d46f67" alt="an error" style={{height:'40px'}}/>
          <div className="exp-text-box">
            <h2>Company name.co</h2>
            <small>2022-present</small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sequi excepturi tenetur voluptate officia soluta eveniet aperiam asperiores? Voluptatibus rem architecto neque perspiciatis, laborum vero iure odio incidunt quidem debitis.</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div className="exp-box right-container">
        <img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/la-bi-xiao-xin1/sticker_24.gif?a51f9a182994571b5efbadbca0d46f67" alt="an error" style={{height:'40px'}}/>
          <div className="exp-text-box">
            <h2>Company name.co</h2>
            <small>2022-present</small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sequi excepturi tenetur voluptate officia soluta eveniet aperiam asperiores? Voluptatibus rem architecto neque perspiciatis, laborum vero iure odio incidunt quidem debitis.</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
       </motion.div>
  )
}

export default Experience
