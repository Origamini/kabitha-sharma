import React, { useState } from 'react';
import './Home.css';
import {motion} from "framer-motion";

const Home = () => {

  const [feed, setFeed] = useState({ name: '', email: '', feedback: '' });

  const handleClick = async (e) => {
    e.preventDefault(); // Correct the method name
    const response = await fetch('http://localhost:5000/send_feed', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: feed.name,
        email: feed.email,
        feedback: feed.feedback,
      }),
    });
    const json = await response.json();
    console.log(json);
    alert("Success!")
  };

  const onChange = (e) => {
    setFeed({ ...feed, [e.target.name]: e.target.value });
  };

  return (
    <motion.div className="container text-dark" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <div className="module d-flex">
        <div className="container">
          <h1>Kavitha Kumari</h1>
          <p>
            I a web developer with knowledge in HTML, CSS, Javascript, ReactJs and know programming languages like Java, Python worked with apis and know cloud technology AWS.
          </p>
        </div>
      </div>
      <div className=" module contact-details pb-5">
        <h1 style={{textAlign:'center',marginBottom:'50px'}}>Would like to message me!</h1>
        <form>
          <div className="mb-3 d-flex align-items-center">
            {/* <label htmlFor="name" className="form-label">
              Name
            </label> */}
            <input
              type="text"
              id="name"
              name="name"
              value={feed.name}
              className="input"
              onChange={onChange}
              placeholder='name'
            />
            {/* <i class='bx bx-user-circle bx-sm'></i> */}
            <img src="https://th.bing.com/th/id/R.3c0f2e349d358d3fadf42ec515d8a181?rik=NXueaHqlkRfEjg&riu=http%3a%2f%2fmedia.giphy.com%2fmedia%2fnXJpLaJsYJzCE%2fgiphy.gif&ehk=M5qEmPvd%2fgivmDWxWRPCUjdBN0BNFMDMmWg4mEA2wiE%3d&risl=&pid=ImgRaw&r=0" alt="an error" style={{height:'40px'}}/>
          </div>
          <div className=" mb-3 d-flex align-items-center">
            {/* <label htmlFor="email" className="form-label">
              Email
            </label> */}
            <input
              type="email"
              id="email"
              name="email"
              value={feed.email}
              className="input"
              onChange={onChange}
              placeholder='email'
            />
            {/* <i class='bx bx-envelope bx-sm' ></i> */}
            <img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/la-bi-xiao-xin1/sticker_24.gif?a51f9a182994571b5efbadbca0d46f67" alt="an error" style={{height:'40px'}}/>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="textarea"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              name="feedback"
              value={feed.feedback}
              onChange={onChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="button"
            onClick={handleClick}
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Home;
