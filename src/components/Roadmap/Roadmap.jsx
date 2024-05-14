import React from 'react'
import './Roadmap.css'
function Roadmap() {
  return (
    <div className='roadmap-container'>
        <h2>ROADMAP <br></br> to <br></br> <span className='highlighted'>Full Stack Development</span></h2>
        <div className='roadbox-container'>
            <div className='roadbox-left'>
              <div className='roadbox'>
                <div className='roadbox-top'>
                    <p>C++</p>
                    <img src='../../public/images/viewbtn.png' alt=''></img>
                </div>
                <p>Get to ready to learn the core strength of Dev world and establish yourself as an industry ready  Dev expert.</p>
              </div>
              <div className='roadbox'>
                <div className='roadbox-top'>
                    <p>MERN Stack</p>
                    <img src='../../public/images/viewbtn.png' alt=''></img>
                </div>
                <p>Learn the most demanded of web application dev with core technology like Mongo DB, Express.js, React & Node.js</p>
              </div>
              <div className='roadbox'>
                <div className='roadbox-top'>
                    <p>Data Structure & Algorithm</p>
                    <img src='../../public/images/viewbtn.png' alt=''></img>
                </div>
                <p>Learn how the big product companies like Microsoft, Amazon, McKinsey and more drive their product with strong code base</p>
              </div>
              <div className='roadbox'>
                <div className='roadbox-top'>
                    <p>Competitive Programming</p>
                    <img src='../../public/images/viewbtn.png' alt=''></img>
                </div>
                <p>Developers just don’t write code, they write production level robust code. Learn to write the code that can be deployed</p>
              </div>
            </div>
            <img src='../../public/images/path.png'className='path-img' alt=''></img>
        </div>
        <div className="other-container">
        <div className="otherbox">
          <p>Creative Projects</p>
          <p>
            Learn the top-notch concepts of Industry Standards and build legit
            portfolio together with strong mentor support{" "}
          </p>
        </div>
        <div className="otherbox">
          <p>Resume Building</p>
          <p>
            Gain Industry level work experience through a guaranteed internship
            with minimum ₹ 5,000/month stipend and chance to a PPO{" "}
          </p>
        </div>

        <div className="otherbox">
          <p>Assured Industry Internship</p>
          <p>
            Get a full time offer with the intern company, or use your gained
            experience to crack any job of your choice{" "}
          </p>
        </div>
      </div>
      <h2>Our Achievements</h2>
      <div className="achievements-container">
        <div className="achievementbox">
        <img src="../../public/images/Suitcase.png" alt=""></img>
          <p>Total Students</p>
          <h2>7000+</h2>
        </div>
        <div className="achievementbox">
        <img src="../../public/images/Suitcase.png" alt=""></img>
          <p>Total Courses</p>
          <h2>23</h2>
        </div>
        <div className="achievementbox">
        <img src="../../public/images/Suitcase.png" alt=""></img>
          <p>Average Rating</p>
          <h2>4.6</h2>
        </div>
        <div className="achievementbox">
        <img src="../../public/images/Suitcase.png" alt=""></img>
          <p>Total Doubts Solved</p>
          <h2>50,100+</h2>
        </div>
        <div className="achievementbox">
        <img src="../../public/images/Suitcase.png" alt=""></img>
          <p>Average Response Time</p>
          <h2>5 min</h2>
        </div>
        <div className="achievementbox">
        <img src="../../public/images/Suitcase.png" alt=""></img>
          <p>Awesome Projects made by Students</p>
          <h2>8000+</h2>
        </div>
      </div>
    </div> 
  )
}

export default Roadmap