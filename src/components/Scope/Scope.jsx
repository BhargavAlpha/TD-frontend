import React from "react";
import "./Scope.css";
import { useState, useEffect } from "react";
function Scope() {
  const [roadmap, setRoadmap]= useState("");
  const setImageBasedOnScreenSize = () => {
    const screenSize = window.innerWidth;
    if (screenSize > 768) {
      setRoadmap("../../../public/images/learnmax.png");
    } else if (screenSize > 480) {
      setRoadmap("../../../public/images/learnmin.png");
    } else {
      setRoadmap("../../../public/images/learnmin.png");
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
          <img src="../../../public/images/INTERN.png" alt=""></img>
        </div>
        <div className="highlightbox">
          <p>Guaranteed Certificate on Completion</p>
          <img src="../../../public/images/Suitcase.png" alt=""></img>
        </div>
        <div className="highlightbox">
          <p>Guaranteed Internship</p>
          <img src="../../../public/images/MENTORSHIP.png" alt=""></img>
        </div>
        <div className="highlightbox">
          <p>Personal Mentor</p>
          <img src="../../../public/images/SKILL.png" alt=""></img>
        </div>
        <div className="highlightbox">
          <p>Industry Standard Projects</p>
          <img src="../../../public/images/INTERN.png" alt=""></img>
        </div>
        <div className="highlightbox">
          <p>24x7 Support Over Chat</p>
          <img src="../../../public/images/Chat.png" alt=""></img>
        </div>
      </div>
      <h2>How does the Internship Program works?</h2>
      <img src={roadmap} className="roadmap" alt=""></img>
      <button className="applyBtn">Apply now for ₹2999</button>
    </div>
  );
}

export default Scope;
