import React from "react";
import "./Scope.css";
import { useState, useEffect } from "react";
import learnmax from '../../assets/learnmax.png'
import learnmin from '../../assets/learnmin.png'
import intern from '../../assets/intern.png'
import suitcase from '../../assets/suitcase.png'
import mentor from '../../assets/mentor.png'
import skill from '../../assets/skill.png'
import chat from '../../assets/chat.png'
import certificate from '../../assets/certificate.png'


function Scope() {
  const [roadmap, setRoadmap]= useState("");
  const setImageBasedOnScreenSize = () => {
    const screenSize = window.innerWidth;
    if (screenSize > 768) {
      setRoadmap(learnmax);
    } else if (screenSize > 480) {
      setRoadmap(learnmin);
    } else {
      setRoadmap(learnmin);
    }
  };

  useEffect(() => {
    setImageBasedOnScreenSize();
    window.addEventListener("resize", setImageBasedOnScreenSize);
    return () => {
      window.removeEventListener("resize", setImageBasedOnScreenSize);
    };
  }, []);
  return (
    <div className="scope-container">
      <h2>Scope of the Program</h2>
      <div className="scopebox-container">
        <div className="scopebox">
          <p>Upskill</p>
          <p>
            Learn the top-notch concepts of Industry Standards and build legit
            portfolio together with strong mentor support{" "}
          </p>
        </div>
        <div className="scopebox">
          <p>Intern</p>
          <p>
            Gain Industry level work experience through a guaranteed internship
            with minimum ₹ 5,000/month stipend and chance to a PPO{" "}
          </p>
        </div>

        <div className="scopebox">
          <p>Job Ready</p>
          <p>
            Get a full time offer with the intern company, or use your gained
            experience to crack any job of your choice{" "}
          </p>
        </div>
      </div>
      <h2>Key Highlights</h2>
      <div className="highlights-container">
        <div className="highlightbox">
          <p>Industry Standard Courses</p>
          <img src={intern} alt=""></img>
        </div>
        <div className="highlightbox">
          <p>Guaranteed Certificate on Completion</p>
          <img src={certificate} alt=""></img>
        </div>
        <div className="highlightbox">
          <p>Guaranteed Internship</p>
          <img src={suitcase} alt=""></img>
        </div>
        <div className="highlightbox">
          <p>Personal Mentor</p>
          <img src={mentor} alt=""></img>
        </div>
        <div className="highlightbox">
          <p>Industry Standard Projects</p>
          <img src={skill} alt=""></img>
        </div>
        <div className="highlightbox">
          <p>24x7 Support Over Chat</p>
          <img src={chat}alt=""></img>
        </div>
      </div>
      <h2>How does the Internship Program works?</h2>
      <img src={roadmap} className="roadmap" alt=""></img>
      <button className="applyBtn2">Apply now for ₹2999</button>
    </div>
  );
}

export default Scope;
