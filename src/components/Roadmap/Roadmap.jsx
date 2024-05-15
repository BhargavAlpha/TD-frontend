import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Roadmap.css";
import cap from "../../assets/cap.png";
import path from "../../assets/path.png";
import viewbtn from "../../assets/viewbtn.png";

function Roadmap() {
  return (
    <div className="roadmap-container">
      <h2>
        ROADMAP <br></br> to <br></br>{" "}
        <span className="highlighted">Full Stack Development</span>
      </h2>
      <div className="roadbox-container">
        <div className="roadbox-left">
          <div className="roadbox">
            <div className="roadbox-top">
              <p>C++</p>
              <div className="viewbtn">
                <div className="viewbtn-left">
                  <FontAwesomeIcon icon={faInfo} style={{ color: "#ffffff" }} />
                </div>
                view
              </div>
            </div>
            <p>
              Get to ready to learn the core strength of Dev world and establish
              yourself as an industry ready Dev expert.
            </p>
          </div>
          <div className="roadbox">
            <div className="roadbox-top">
              <p>MERN Stack</p>
              <div className="viewbtn">
                <div className="viewbtn-left">
                  <FontAwesomeIcon icon={faInfo} style={{ color: "#ffffff" }} />
                </div>
                view
              </div>
            </div>
            <p>
              Learn the most demanded of web application dev with core
              technology like Mongo DB, Express.js, React & Node.js
            </p>
          </div>
          <div className="roadbox">
            <div className="roadbox-top">
              <p>Data Structure & Algorithm</p>
              <div className="viewbtn">
                <div className="viewbtn-left">
                  <FontAwesomeIcon icon={faInfo} style={{ color: "#ffffff" }} />
                </div>
                view
              </div>
            </div>
            <p>
              Learn how the big product companies like Microsoft, Amazon,
              McKinsey and more drive their product with strong code base
            </p>
          </div>
          <div className="roadbox">
            <div className="roadbox-top">
              <p>Competitive Programming</p>
              <div className="viewbtn">
                <div className="viewbtn-left">
                  <FontAwesomeIcon icon={faInfo} style={{ color: "#ffffff" }} />
                </div>
                view
              </div>
            </div>
            <p>
              Developers just don’t write code, they write production level
              robust code. Learn to write the code that can be deployed
            </p>
          </div>
        </div>
        <img src={path} className="path-img" alt=""></img>
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
          <div className="cap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <g clip-path="url(#clip0_1_595)">
                <path
                  d="M9.89003 4.19558C10.3933 3.95717 10.9432 3.8335 11.5 3.8335C12.0569 3.8335 12.6068 3.95717 13.11 4.19558L22.4519 8.62116C22.6146 8.69818 22.7523 8.81949 22.8493 8.97118C22.9463 9.12287 22.9986 9.29882 23.0002 9.47885C23.0018 9.65889 22.9526 9.83573 22.8584 9.98913C22.7641 10.1425 22.6285 10.2663 22.4672 10.3462L13.1714 14.9577C12.6519 15.2154 12.0799 15.3495 11.5 15.3495C10.9202 15.3495 10.3481 15.2154 9.82869 14.9577L1.91669 11.0323V15.3333C1.91669 15.5875 1.81572 15.8312 1.636 16.011C1.45628 16.1907 1.21252 16.2917 0.958358 16.2917C0.704192 16.2917 0.460437 16.1907 0.280714 16.011C0.100992 15.8312 2.49887e-05 15.5875 2.49887e-05 15.3333V9.53541C-0.0088849 9.34596 0.0383955 9.1581 0.135926 8.99543C0.233456 8.83277 0.376885 8.70256 0.548192 8.62116L9.89003 4.19366V4.19558ZM3.83336 14.1239V17.25C3.83338 17.3761 3.85829 17.5009 3.90663 17.6173C3.95498 17.7337 4.02583 17.8395 4.11511 17.9285L4.11894 17.9342L4.16302 17.9745L4.27803 18.0818C4.87869 18.6172 5.52807 19.0952 6.21769 19.5097C7.49802 20.2783 9.34761 21.0833 11.5 21.0833C13.6524 21.0833 15.502 20.2783 16.7843 19.5097C17.4739 19.0952 18.1233 18.6172 18.7239 18.0818L18.8389 17.9745L18.8696 17.9438L18.8811 17.9323L18.883 17.9304L18.8869 17.9285C18.9758 17.8393 19.0463 17.7335 19.0943 17.6171C19.1423 17.5007 19.1669 17.3759 19.1667 17.25V14.122L14.0224 16.675C13.2384 17.0638 12.3751 17.2661 11.5 17.2661C10.6249 17.2661 9.76167 17.0638 8.97769 16.675L3.83336 14.122V14.1239Z"
                  fill="url(#paint0_linear_1_595)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_1_595"
                  x1="-2.69518"
                  y1="10.6122"
                  x2="39.0426"
                  y2="10.8412"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3F37C9" stop-opacity="0.74" />
                  <stop offset="1" stop-color="#B14240" stop-opacity="0.53" />
                </linearGradient>
                <clipPath id="clip0_1_595">
                  <rect width="23" height="23" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p>Total Students</p>
          <h2>7000+</h2>
        </div>
        <div className="achievementbox">
          <div className="cap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M2 8V19.529C2 19.529 6.621 19.357 12 22C17.379 19.357 22 19.529 22 19.529V8C22 8 16.546 8 12 10.471C7.454 8 2 8 2 8Z"
                fill="url(#paint0_linear_1_589)"
              />
              <path
                d="M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8Z"
                fill="url(#paint1_linear_1_589)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_589"
                  x1="-0.342606"
                  y1="13.5016"
                  x2="35.949"
                  y2="13.7149"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3F37C9" stop-opacity="0.74" />
                  <stop offset="1" stop-color="#B14240" stop-opacity="0.53" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1_589"
                  x1="8.29722"
                  y1="4.35783"
                  x2="19.1849"
                  y2="4.40263"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3F37C9" stop-opacity="0.74" />
                  <stop offset="1" stop-color="#B14240" stop-opacity="0.53" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p>Total Courses</p>
          <h2>23</h2>
        </div>
        <div className="achievementbox">
          <div className="cap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <path
                d="M20.3968 7.93096L14.694 7.10215L12.1446 1.93389C12.075 1.79238 11.9605 1.67783 11.819 1.6082C11.4641 1.43301 11.0328 1.579 10.8554 1.93389L8.30606 7.10215L2.60323 7.93096C2.446 7.95342 2.30225 8.02754 2.19219 8.13985C2.05914 8.2766 1.98582 8.46059 1.98834 8.65138C1.99087 8.84216 2.06904 9.02414 2.20567 9.15733L6.33175 13.1801L5.35694 18.8605C5.33408 18.9926 5.3487 19.1285 5.39915 19.2527C5.44959 19.377 5.53385 19.4846 5.64235 19.5634C5.75085 19.6422 5.87926 19.6891 6.01302 19.6986C6.14678 19.7081 6.28054 19.68 6.39913 19.6174L11.5 16.9356L16.6009 19.6174C16.7402 19.6915 16.9019 19.7162 17.0569 19.6893C17.4477 19.6219 17.7105 19.2513 17.6431 18.8605L16.6683 13.1801L20.7944 9.15733C20.9067 9.04727 20.9808 8.90352 21.0032 8.74629C21.0639 8.35323 20.7899 7.98936 20.3968 7.93096Z"
                fill="url(#paint0_linear_1_582)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_582"
                  x1="-0.239932"
                  y1="8.67292"
                  x2="34.28"
                  y2="8.82166"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3F37C9" stop-opacity="0.74" />
                  <stop offset="1" stop-color="#B14240" stop-opacity="0.53" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p>Average Rating</p>
          <h2>4.6</h2>
        </div>
        <div className="achievementbox">
          <div className="cap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <path
                d="M11.1514 18.4108C10.4679 18.4108 9.88389 18.6278 9.40053 19.0609C8.91753 19.4936 8.67459 20.0175 8.67459 20.6353C8.67459 21.3314 8.91897 21.8777 9.407 22.2751C9.89647 22.6726 10.4664 22.8731 11.118 22.8731C11.7803 22.8731 12.3582 22.6755 12.8527 22.2834C13.3468 21.8895 13.5937 21.3408 13.5937 20.635C13.5937 20.0172 13.3576 19.4932 12.885 19.0605C12.4125 18.6282 11.8353 18.4108 11.1503 18.4108H11.1514ZM18.1333 3.09673C17.5044 2.14223 16.6056 1.37892 15.4603 0.825844C14.3215 0.277797 12.995 0 11.5165 0C9.92486 0 8.5082 0.332781 7.30789 0.989359C6.10614 1.64702 5.17752 2.49083 4.54789 3.49708C3.91539 4.50836 3.59375 5.52539 3.59375 6.52086C3.59375 7.05166 3.81513 7.54723 4.24925 7.99286C4.68553 8.44136 5.22819 8.66813 5.86213 8.66813C6.94384 8.66813 7.68092 8.03347 8.05611 6.78859C8.39787 5.75898 8.81942 4.97375 9.30673 4.45337C9.7653 3.96319 10.5092 3.7145 11.5165 3.7145C12.3855 3.7145 13.0712 3.95816 13.6153 4.4602C14.1511 4.95542 14.412 5.54552 14.412 6.26427C14.412 6.62723 14.3272 6.95319 14.1572 7.26153C13.9765 7.58497 13.7511 7.88217 13.4877 8.14667C13.2092 8.42555 12.7495 8.84422 12.1214 9.39478C11.3897 10.0363 10.7992 10.598 10.3694 11.0644C9.92019 11.5492 9.55614 12.1192 9.28409 12.7578C9.01241 13.4007 8.87441 14.168 8.87441 15.0395C8.87441 15.783 9.08177 16.3587 9.49145 16.7508C9.89683 17.139 10.4018 17.3366 10.9929 17.3366C12.1232 17.3366 12.8333 16.7188 13.0446 15.5631C13.1517 15.0826 13.2329 14.747 13.2868 14.5561C13.3357 14.3825 13.4065 14.2043 13.4974 14.0264C13.5858 13.8532 13.7256 13.657 13.9143 13.4424C14.1109 13.2157 14.3764 12.9497 14.702 12.6525C15.92 11.5636 16.7792 10.7759 17.2557 10.3094C17.7474 9.82891 18.1761 9.25067 18.5301 8.5923C18.8945 7.91847 19.0792 7.12461 19.0792 6.23516C19.0799 5.10995 18.7605 4.05303 18.1315 3.0953"
                fill="url(#paint0_linear_1_575)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_575"
                  x1="1.77993"
                  y1="8.98848"
                  x2="29.8803"
                  y2="9.06676"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3F37C9" stop-opacity="0.74" />
                  <stop offset="1" stop-color="#B14240" stop-opacity="0.53" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p>Total Doubts Solved</p>
          <h2>50,100+</h2>
        </div>
        <div className="achievementbox">
          <div className="cap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <path
                d="M23 11.5C23 17.0574 17.8509 21.5625 11.5 21.5625C10.361 21.564 9.22672 21.4161 8.12619 21.1226C7.28669 21.5481 5.359 22.3646 2.116 22.8965C1.8285 22.9425 1.61 22.6435 1.72356 22.3761C2.23244 21.1744 2.69244 19.573 2.83044 18.1125C1.0695 16.3444 0 14.03 0 11.5C0 5.94262 5.14912 1.4375 11.5 1.4375C17.8509 1.4375 23 5.94262 23 11.5ZM6.46875 7.1875C6.27813 7.1875 6.09531 7.26323 5.96052 7.39802C5.82573 7.53281 5.75 7.71563 5.75 7.90625C5.75 8.09687 5.82573 8.27969 5.96052 8.41448C6.09531 8.54927 6.27813 8.625 6.46875 8.625H16.5312C16.7219 8.625 16.9047 8.54927 17.0395 8.41448C17.1743 8.27969 17.25 8.09687 17.25 7.90625C17.25 7.71563 17.1743 7.53281 17.0395 7.39802C16.9047 7.26323 16.7219 7.1875 16.5312 7.1875H6.46875ZM6.46875 10.7812C6.27813 10.7812 6.09531 10.857 5.96052 10.9918C5.82573 11.1266 5.75 11.3094 5.75 11.5C5.75 11.6906 5.82573 11.8734 5.96052 12.0082C6.09531 12.143 6.27813 12.2187 6.46875 12.2187H16.5312C16.7219 12.2187 16.9047 12.143 17.0395 12.0082C17.1743 11.8734 17.25 11.6906 17.25 11.5C17.25 11.3094 17.1743 11.1266 17.0395 10.9918C16.9047 10.857 16.7219 10.7812 16.5312 10.7812H6.46875ZM6.46875 14.375C6.27813 14.375 6.09531 14.4507 5.96052 14.5855C5.82573 14.7203 5.75 14.9031 5.75 15.0937C5.75 15.2844 5.82573 15.4672 5.96052 15.602C6.09531 15.7368 6.27813 15.8125 6.46875 15.8125H12.2188C12.4094 15.8125 12.5922 15.7368 12.727 15.602C12.8618 15.4672 12.9375 15.2844 12.9375 15.0937C12.9375 14.9031 12.8618 14.7203 12.727 14.5855C12.5922 14.4507 12.4094 14.375 12.2188 14.375H6.46875Z"
                fill="url(#paint0_linear_1_568)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_568"
                  x1="-2.694"
                  y1="9.87212"
                  x2="39.0419"
                  y2="10.0561"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3F37C9" stop-opacity="0.74" />
                  <stop offset="1" stop-color="#B14240" stop-opacity="0.53" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p>Average Response Time</p>
          <h2>5 min</h2>
        </div>
        <div className="achievementbox">
          <div className="cap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <g clip-path="url(#clip0_1_561)">
                <path
                  d="M14.9051 10.067C16.1759 10.067 17.3704 10.5607 18.2679 11.4582L19.1479 12.3382C20.9453 11.5413 22.3486 9.9439 22.8145 7.99654C23.0716 6.92201 23.0544 5.88161 22.8241 4.92388C22.7067 4.43513 22.0861 4.27206 21.7307 4.62722L18.6356 7.72233H15.2395V4.3664L18.3346 1.27128C18.6901 0.915859 18.5267 0.295128 18.038 0.177882C17.0802 -0.0523429 16.0398 -0.0696378 14.9653 0.18754C12.4811 0.781857 10.5455 2.89274 10.1497 5.41645C10.085 5.79042 10.0715 6.15429 10.076 6.51367L13.7946 10.2359C14.1594 10.1119 14.5322 10.067 14.9051 10.067ZM17.25 12.5152C16.2096 11.4748 14.6638 11.2767 13.4141 11.8908L8.58457 7.09765V4.31204L2.875 -8.93454e-06L0 2.83456L4.3125 8.54414L7.09945 8.54449L11.8926 13.3332C11.2785 14.5829 11.477 16.1287 12.5175 17.169L17.7733 22.4294C18.4301 23.0808 19.4898 23.0808 20.1412 22.4293L22.5108 20.0597C23.1622 19.4083 23.1622 18.3491 22.5107 17.6919L17.25 12.5152ZM10.2377 13.791L7.57832 11.1361L0.889453 17.825C-0.295137 19.0096 -0.295137 20.9282 0.889453 22.1128C1.48062 22.7035 2.25553 23 3.03223 23C3.80893 23 4.58383 22.7039 5.1759 22.1114L10.5261 16.7612C10.1299 15.826 9.99961 14.7973 10.2377 13.791ZM2.875 21.2031C2.27979 21.2031 1.79688 20.7202 1.79688 20.125C1.79688 19.5293 2.27979 19.0469 2.875 19.0469C3.47021 19.0469 3.95312 19.5275 3.95312 20.125C3.95312 20.7225 3.47021 21.2031 2.875 21.2031Z"
                  fill="url(#paint0_linear_1_561)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_1_561"
                  x1="-2.69424"
                  y1="9.03829"
                  x2="39.0456"
                  y2="9.21005"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3F37C9" stop-opacity="0.74" />
                  <stop offset="1" stop-color="#B14240" stop-opacity="0.53" />
                </linearGradient>
                <clipPath id="clip0_1_561">
                  <rect width="23" height="23" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p>Awesome Projects made by Students</p>
          <h2>8000+</h2>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
