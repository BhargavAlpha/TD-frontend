import React from "react";
import "./Scope.css";
import { useState, useEffect } from "react";
import learnmax from "../../assets/learnmax.png";
import learnmin from "../../assets/learnmin.png";
import intern from "../../assets/intern.png";
import suitcase from "../../assets/suitcase.png";
import mentor from "../../assets/mentor.png";
import skill from "../../assets/skill.png";
import chat from "../../assets/chat.png";
import certificate from "../../assets/certificate.png";


function Scope() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

useEffect(() => {
  const updateIsMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  updateIsMobile();

  window.addEventListener('resize', updateIsMobile);

  return () => {
    window.removeEventListener('resize', updateIsMobile);
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
          <img src={chat} alt=""></img>
        </div>
      </div>
      <h2>How does the Internship Program works?</h2>
      {
        isMobile ? <div className="howinternmob-container">
        <div className="howinternmob">
          <div className="mobline1"></div>
          <div className="mobline2"></div>
          <div className="mobline3"></div>
          <div className="mobline4"></div>
          <div className="mobdiv">
            <div className="mob-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_1_1322)">
                  <path
                    d="M7.00001 2.5C7.00001 3.16304 6.73662 3.79893 6.26778 4.26777C5.79894 4.73661 5.16306 5 4.50001 5C3.83697 5 3.20109 4.73661 2.73225 4.26777C2.26341 3.79893 2.00001 3.16304 2.00001 2.5C2.00001 1.83696 2.26341 1.20107 2.73225 0.732233C3.20109 0.263392 3.83697 0 4.50001 0C5.16306 0 5.79894 0.263392 6.26778 0.732233C6.73662 1.20107 7.00001 1.83696 7.00001 2.5ZM11.225 6.553C11.1312 6.50602 11.0251 6.48973 10.9215 6.50642C10.818 6.52311 10.7223 6.57194 10.648 6.646L6.93801 11.356L4.27801 8.584C4.18197 8.52006 4.06678 8.4913 3.95195 8.5026C3.83713 8.5139 3.72975 8.56456 3.64801 8.646L0.00201416 13V15C0.00201416 15.2652 0.107371 15.5196 0.294907 15.7071C0.482444 15.8946 0.736798 16 1.00201 16H15.002C15.1333 16 15.2634 15.9741 15.3847 15.9239C15.506 15.8736 15.6163 15.8 15.7091 15.7071C15.802 15.6142 15.8756 15.504 15.9259 15.3827C15.9761 15.2614 16.002 15.1313 16.002 15V10.5L11.225 6.553Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1322">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p>
              Learn from our structured pre recorded courses made by experts to
              meet industry needs
            </p>
          </div>
          <div className="mobdiv">
            <div className="mob-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_1_1322)">
                  <path
                    d="M7.00001 2.5C7.00001 3.16304 6.73662 3.79893 6.26778 4.26777C5.79894 4.73661 5.16306 5 4.50001 5C3.83697 5 3.20109 4.73661 2.73225 4.26777C2.26341 3.79893 2.00001 3.16304 2.00001 2.5C2.00001 1.83696 2.26341 1.20107 2.73225 0.732233C3.20109 0.263392 3.83697 0 4.50001 0C5.16306 0 5.79894 0.263392 6.26778 0.732233C6.73662 1.20107 7.00001 1.83696 7.00001 2.5ZM11.225 6.553C11.1312 6.50602 11.0251 6.48973 10.9215 6.50642C10.818 6.52311 10.7223 6.57194 10.648 6.646L6.93801 11.356L4.27801 8.584C4.18197 8.52006 4.06678 8.4913 3.95195 8.5026C3.83713 8.5139 3.72975 8.56456 3.64801 8.646L0.00201416 13V15C0.00201416 15.2652 0.107371 15.5196 0.294907 15.7071C0.482444 15.8946 0.736798 16 1.00201 16H15.002C15.1333 16 15.2634 15.9741 15.3847 15.9239C15.506 15.8736 15.6163 15.8 15.7091 15.7071C15.802 15.6142 15.8756 15.504 15.9259 15.3827C15.9761 15.2614 16.002 15.1313 16.002 15V10.5L11.225 6.553Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1322">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p>
              1:1 live doubt solving support available throughout the day to
              clear your doubts instantly{" "}
            </p>
          </div>
          <div className="mobdiv">
            <div className="mob-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_1_1322)">
                  <path
                    d="M7.00001 2.5C7.00001 3.16304 6.73662 3.79893 6.26778 4.26777C5.79894 4.73661 5.16306 5 4.50001 5C3.83697 5 3.20109 4.73661 2.73225 4.26777C2.26341 3.79893 2.00001 3.16304 2.00001 2.5C2.00001 1.83696 2.26341 1.20107 2.73225 0.732233C3.20109 0.263392 3.83697 0 4.50001 0C5.16306 0 5.79894 0.263392 6.26778 0.732233C6.73662 1.20107 7.00001 1.83696 7.00001 2.5ZM11.225 6.553C11.1312 6.50602 11.0251 6.48973 10.9215 6.50642C10.818 6.52311 10.7223 6.57194 10.648 6.646L6.93801 11.356L4.27801 8.584C4.18197 8.52006 4.06678 8.4913 3.95195 8.5026C3.83713 8.5139 3.72975 8.56456 3.64801 8.646L0.00201416 13V15C0.00201416 15.2652 0.107371 15.5196 0.294907 15.7071C0.482444 15.8946 0.736798 16 1.00201 16H15.002C15.1333 16 15.2634 15.9741 15.3847 15.9239C15.506 15.8736 15.6163 15.8 15.7091 15.7071C15.802 15.6142 15.8756 15.504 15.9259 15.3827C15.9761 15.2614 16.002 15.1313 16.002 15V10.5L11.225 6.553Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1322">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p>
              Personal mentors to guide and help you throughout your journey as
              a friend
            </p>
          </div>
          <div className="mobdiv">
            <div className="mob-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
              <g clip-path="url(#clip0_1_1322)">
                  <path
                    d="M7.00001 2.5C7.00001 3.16304 6.73662 3.79893 6.26778 4.26777C5.79894 4.73661 5.16306 5 4.50001 5C3.83697 5 3.20109 4.73661 2.73225 4.26777C2.26341 3.79893 2.00001 3.16304 2.00001 2.5C2.00001 1.83696 2.26341 1.20107 2.73225 0.732233C3.20109 0.263392 3.83697 0 4.50001 0C5.16306 0 5.79894 0.263392 6.26778 0.732233C6.73662 1.20107 7.00001 1.83696 7.00001 2.5ZM11.225 6.553C11.1312 6.50602 11.0251 6.48973 10.9215 6.50642C10.818 6.52311 10.7223 6.57194 10.648 6.646L6.93801 11.356L4.27801 8.584C4.18197 8.52006 4.06678 8.4913 3.95195 8.5026C3.83713 8.5139 3.72975 8.56456 3.64801 8.646L0.00201416 13V15C0.00201416 15.2652 0.107371 15.5196 0.294907 15.7071C0.482444 15.8946 0.736798 16 1.00201 16H15.002C15.1333 16 15.2634 15.9741 15.3847 15.9239C15.506 15.8736 15.6163 15.8 15.7091 15.7071C15.802 15.6142 15.8756 15.504 15.9259 15.3827C15.9761 15.2614 16.002 15.1313 16.002 15V10.5L11.225 6.553Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1322">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p>Build major projects which makes your resume stand apart </p>
          </div>
          <div className="mobdiv">
            <div className="mob-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_1_1322)">
                  <path
                    d="M7.00001 2.5C7.00001 3.16304 6.73662 3.79893 6.26778 4.26777C5.79894 4.73661 5.16306 5 4.50001 5C3.83697 5 3.20109 4.73661 2.73225 4.26777C2.26341 3.79893 2.00001 3.16304 2.00001 2.5C2.00001 1.83696 2.26341 1.20107 2.73225 0.732233C3.20109 0.263392 3.83697 0 4.50001 0C5.16306 0 5.79894 0.263392 6.26778 0.732233C6.73662 1.20107 7.00001 1.83696 7.00001 2.5ZM11.225 6.553C11.1312 6.50602 11.0251 6.48973 10.9215 6.50642C10.818 6.52311 10.7223 6.57194 10.648 6.646L6.93801 11.356L4.27801 8.584C4.18197 8.52006 4.06678 8.4913 3.95195 8.5026C3.83713 8.5139 3.72975 8.56456 3.64801 8.646L0.00201416 13V15C0.00201416 15.2652 0.107371 15.5196 0.294907 15.7071C0.482444 15.8946 0.736798 16 1.00201 16H15.002C15.1333 16 15.2634 15.9741 15.3847 15.9239C15.506 15.8736 15.6163 15.8 15.7091 15.7071C15.802 15.6142 15.8756 15.504 15.9259 15.3827C15.9761 15.2614 16.002 15.1313 16.002 15V10.5L11.225 6.553Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1322">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p>
              Get guaranteed paid internships after completion of the program
              along with course completion certificates
            </p>
          </div>
        </div>
      </div>
          :      
      <div className="howintern-container">
        <div className="howintern">
          <div className="howintern-top">
            <div className="circlebox1">
              <div className="circle1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_603)">
                    <path
                      d="M7.00001 2.5C7.00001 3.16304 6.73662 3.79893 6.26778 4.26777C5.79894 4.73661 5.16306 5 4.50001 5C3.83697 5 3.20109 4.73661 2.73225 4.26777C2.26341 3.79893 2.00001 3.16304 2.00001 2.5C2.00001 1.83696 2.26341 1.20107 2.73225 0.732233C3.20109 0.263392 3.83697 0 4.50001 0C5.16306 0 5.79894 0.263392 6.26778 0.732233C6.73662 1.20107 7.00001 1.83696 7.00001 2.5ZM11.225 6.553C11.1312 6.50602 11.0251 6.48973 10.9215 6.50642C10.818 6.52311 10.7223 6.57194 10.648 6.646L6.93801 11.356L4.27801 8.584C4.18197 8.52006 4.06678 8.4913 3.95195 8.5026C3.83713 8.5139 3.72975 8.56456 3.64801 8.646L0.00201416 13V15C0.00201416 15.2652 0.107371 15.5196 0.294907 15.7071C0.482444 15.8946 0.736798 16 1.00201 16H15.002C15.1333 16 15.2634 15.9741 15.3847 15.9239C15.506 15.8736 15.6163 15.8 15.7091 15.7071C15.802 15.6142 15.8756 15.504 15.9259 15.3827C15.9761 15.2614 16.002 15.1313 16.002 15V10.5L11.225 6.553Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_603">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p>
                Learn from our structured pre recorded courses made by experts
                to meet industry needs
              </p>
            </div>

            <div className="circlebox2">
              <div className="circle2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_614)">
                    <path
                      d="M7.00001 2.5C7.00001 3.16304 6.73662 3.79893 6.26778 4.26777C5.79894 4.73661 5.16306 5 4.50001 5C3.83697 5 3.20109 4.73661 2.73225 4.26777C2.26341 3.79893 2.00001 3.16304 2.00001 2.5C2.00001 1.83696 2.26341 1.20107 2.73225 0.732233C3.20109 0.263392 3.83697 0 4.50001 0C5.16306 0 5.79894 0.263392 6.26778 0.732233C6.73662 1.20107 7.00001 1.83696 7.00001 2.5ZM11.225 6.553C11.1312 6.50602 11.0251 6.48973 10.9215 6.50642C10.818 6.52311 10.7223 6.57194 10.648 6.646L6.93801 11.356L4.27801 8.584C4.18197 8.52006 4.06678 8.4913 3.95195 8.5026C3.83713 8.5139 3.72975 8.56456 3.64801 8.646L0.00201416 13V15C0.00201416 15.2652 0.107371 15.5196 0.294907 15.7071C0.482444 15.8946 0.736798 16 1.00201 16H15.002C15.1333 16 15.2634 15.9741 15.3847 15.9239C15.506 15.8736 15.6163 15.8 15.7091 15.7071C15.802 15.6142 15.8756 15.504 15.9259 15.3827C15.9761 15.2614 16.002 15.1313 16.002 15V10.5L11.225 6.553Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_614">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p>
                Personal mentors to guide and help you throughout your journey
                as a friend
              </p>
            </div>

            <div className="circlebox3">
              <div className="circle3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_622)">
                    <path
                      d="M7 2.5C7 3.16304 6.73661 3.79893 6.26777 4.26777C5.79893 4.73661 5.16304 5 4.5 5C3.83696 5 3.20107 4.73661 2.73223 4.26777C2.26339 3.79893 2 3.16304 2 2.5C2 1.83696 2.26339 1.20107 2.73223 0.732233C3.20107 0.263392 3.83696 0 4.5 0C5.16304 0 5.79893 0.263392 6.26777 0.732233C6.73661 1.20107 7 1.83696 7 2.5ZM11.225 6.553C11.1312 6.50602 11.025 6.48973 10.9215 6.50642C10.8179 6.52311 10.7223 6.57194 10.648 6.646L6.938 11.356L4.278 8.584C4.18196 8.52006 4.06676 8.4913 3.95194 8.5026C3.83712 8.5139 3.72973 8.56456 3.648 8.646L0.00200081 13V15C0.00200081 15.2652 0.107358 15.5196 0.294894 15.7071C0.48243 15.8946 0.736784 16 1.002 16H15.002C15.1333 16 15.2634 15.9741 15.3847 15.9239C15.506 15.8736 15.6162 15.8 15.7091 15.7071C15.802 15.6142 15.8756 15.504 15.9259 15.3827C15.9761 15.2614 16.002 15.1313 16.002 15V10.5L11.225 6.553Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_622">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p>
                Get guaranteed paid internships after completion of the program
                along with course completion certificates
              </p>
            </div>
          </div>

          <div className="howintern-bottom">
            <div className="circlebox4">
              <div className="circle4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_622)">
                    <path
                      d="M7 2.5C7 3.16304 6.73661 3.79893 6.26777 4.26777C5.79893 4.73661 5.16304 5 4.5 5C3.83696 5 3.20107 4.73661 2.73223 4.26777C2.26339 3.79893 2 3.16304 2 2.5C2 1.83696 2.26339 1.20107 2.73223 0.732233C3.20107 0.263392 3.83696 0 4.5 0C5.16304 0 5.79893 0.263392 6.26777 0.732233C6.73661 1.20107 7 1.83696 7 2.5ZM11.225 6.553C11.1312 6.50602 11.025 6.48973 10.9215 6.50642C10.8179 6.52311 10.7223 6.57194 10.648 6.646L6.938 11.356L4.278 8.584C4.18196 8.52006 4.06676 8.4913 3.95194 8.5026C3.83712 8.5139 3.72973 8.56456 3.648 8.646L0.00200081 13V15C0.00200081 15.2652 0.107358 15.5196 0.294894 15.7071C0.48243 15.8946 0.736784 16 1.002 16H15.002C15.1333 16 15.2634 15.9741 15.3847 15.9239C15.506 15.8736 15.6162 15.8 15.7091 15.7071C15.802 15.6142 15.8756 15.504 15.9259 15.3827C15.9761 15.2614 16.002 15.1313 16.002 15V10.5L11.225 6.553Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_622">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p>
                1:1 live doubt solving support available throughout the day to
                clear your doubts instantly{" "}
              </p>
            </div>
            <div className="circlebox5">
              <div className="circle5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_622)">
                    <path
                      d="M7 2.5C7 3.16304 6.73661 3.79893 6.26777 4.26777C5.79893 4.73661 5.16304 5 4.5 5C3.83696 5 3.20107 4.73661 2.73223 4.26777C2.26339 3.79893 2 3.16304 2 2.5C2 1.83696 2.26339 1.20107 2.73223 0.732233C3.20107 0.263392 3.83696 0 4.5 0C5.16304 0 5.79893 0.263392 6.26777 0.732233C6.73661 1.20107 7 1.83696 7 2.5ZM11.225 6.553C11.1312 6.50602 11.025 6.48973 10.9215 6.50642C10.8179 6.52311 10.7223 6.57194 10.648 6.646L6.938 11.356L4.278 8.584C4.18196 8.52006 4.06676 8.4913 3.95194 8.5026C3.83712 8.5139 3.72973 8.56456 3.648 8.646L0.00200081 13V15C0.00200081 15.2652 0.107358 15.5196 0.294894 15.7071C0.48243 15.8946 0.736784 16 1.002 16H15.002C15.1333 16 15.2634 15.9741 15.3847 15.9239C15.506 15.8736 15.6162 15.8 15.7091 15.7071C15.802 15.6142 15.8756 15.504 15.9259 15.3827C15.9761 15.2614 16.002 15.1313 16.002 15V10.5L11.225 6.553Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_622">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p>Build major projects which makes your resume stand apart </p>
            </div>
          </div>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          <div className="line4"></div>
        </div>
      </div>
            }      <button className="applyBtn2">Apply now for ₹2999</button>
    </div>
  );
}

export default Scope;
