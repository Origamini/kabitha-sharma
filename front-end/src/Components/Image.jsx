import React from 'react'
import { motion } from "framer-motion";

const Image = () => {
  let Style = {
    innerHeight: "100vh",
    innerWidth: "100%",
    backgoundColor: "purple"
  }
  return (
    <motion.div className='container text-dark' style={Style} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 1 } }}>
      <div className="card m-5" style={{width: '18rem'}}>
        <img src="https://th.bing.com/th/id/OIP.xPWH7nMrSIRnGslg0vVE1gHaHp?pid=ImgDet&w=175&h=142.10323574730356&c=7&dpr=1.3" className="card-img-top" alt="..." style={{height:'200px'}} />
        <div className="card-body">
          <h5 className="card-title">This is shinchan.</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </motion.div>
  )
}

export default Image
