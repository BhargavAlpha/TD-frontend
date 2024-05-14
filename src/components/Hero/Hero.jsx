import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-top">
        <div className="iit-div">An IIT Delhi Alumni Initiative</div>
        <h1>Learn Full Stack Web Development with Guranteed Internship </h1>
        <div className="box-container">
          <div className="box">
            <p className="row1">Learning Format</p>
            <p className="row2">RECORDED LECTURES</p>
            <p className="row3">with 1:1 mentorship</p>
          </div>
          <div className="box">
            <p className="row1">Course Duration</p>
            <p className="row2">149 hours</p>
            <p className="row3">
              dedication <br></br>
              10-15 hours/week
            </p>
          </div>
          <div className="box">
            <p className="row1">Internship</p>
            <p className="row2">100%</p>
            <p className="row3">on course completion</p>
          </div>
          <div className="box">
            <p className="row1">Offer Price</p>
            <p className="row2">₹ 2,999/-</p>
            <p className="row3">life time course accesss</p>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <img
          src="../../public/images/Gear.png"
          className="gear-div"
          alt=""
        ></img>
        <div className="seal-container">
           <p >India’s 1st Stipend Guranteed Internship Programme</p>
           <button className="applyBtn">Apply now for ₹2999</button>
           <img src="../../public/images/GURANTEE SEAL.png" className="seal" alt=""></img>
      </div>
      <div className="promise-text"><p>We at Tutedude, are helping our learners get the max value while acquiring the new valuable skills with our new <h4>VALUE GUARANTEED INETERNSHIP PROGRAMME</h4></p></div>
    </div>
  </div>
  );
}

export default Hero;
