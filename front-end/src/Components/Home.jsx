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
    <motion.div className="container text-dark" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0,transition:{duration:1}}}>
      <div className="module d-flex justify-content-between">
        <div className="container">
          <h1>Kavitha Kumari</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            quo enim, distinctio maiores aliquam laboriosam error dolor adipisci
            veniam tempora veritatis similique reprehenderit ab consequuntur
            odio explicabo sit natus omnis!
          </p>
        </div>
        <div className="flex-column">
          <div>hello</div>
          <div>wow</div>
          <div>wowo</div>
          <div>hello</div>
          <div>wow</div>
          <div>wowo</div>
          <div>hello</div>
          <div>wow</div>
          <div>
            <i className="bx bxl-instagram"></i>
          </div>
        </div>
      </div>
      <div className="contact-details pb-5">
        <h1>Would like to message me!</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={feed.name}
              className="form-control"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={feed.email}
              className="form-control"
              onChange={onChange}
            />
          </div>
          <div className="form-floating mb-3">
          <label htmlFor="floatingTextarea">Comments</label>
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              name="feedback"
              value={feed.feedback}
              onChange={onChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary mb-3"
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
