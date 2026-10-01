import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import profile from './assets/profile.jpg'
import { Telephone } from "react-bootstrap-icons";
import { BsGithub, BsLinkedin, BsEnvelope, BsPhone } from 'react-icons/bs';
import { Button, Form } from 'react-bootstrap';
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import {
  // BsGithub,
  // BsLinkedin,
  // BsEnvelope,
  BsBoxArrowUpRight
} from "react-icons/bs";

import './App.css'

function App() {
  return (

    <div className="main">
      <Header />
     

      {/* ================= HERO SECTION ================= */}

      <section className="hero-section">

        <div className="hero-content">

          {/* LEFT SIDE */}
          <div className="hero-text col-12 col-md-6">

            <div className="welcome">
              <p>Welcome to my portfolio!</p>
            </div>

            <div className="hello">
              <p>Hello, I am</p>
            </div>

            <div className="md">
              <p>MOHAMMED ZEEKREYA</p>
            </div>

            <div className="subtitle">
              <p>Full-Stack Developer</p>
            </div>

            <div className="text">
              <p>
                I am a passionate full-stack developer with experience
                in building modern web applications.
              </p>
            </div>

            <div className="icons">

              <div className="social-icon">
                <a
                  href="https://github.com/zeekreya"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub size={40} />
                </a>
              </div>

              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/mohammed-zeekreya-b35621322/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin size={40} />
                </a>
              </div>

              <div className="social-icon">
                <a href="mailto:mdzeekreya@email.com">
                  <BsEnvelope size={40} />
                </a>
              </div>

            </div>

            <div className="hireme">

              <Button
                style={{
                  boxShadow:
                    "0px 0px 10px rgba(16, 192, 223, 0.932)"
                }}
                variant="primary"
              >
                Hire Me
              </Button>

              <Button
                style={{
                  boxShadow:
                    "0px 0px 10px rgba(16, 192, 223, 0.932)"
                }}
                variant="outline-primary"
              >
                Contact Me
              </Button>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="hero-image col-12 col-md-6">

            <div className="profileImage">

              <img
                src={profile}
                alt="Profile"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ================= END HERO ================= */}


      {/* ================= ABOUT SECTION ================= */}

<section className="about-section" id="about">

  <div className="about-container">

    {/* LEFT SIDE */}

    <div className="about-left">

      <div className="about-label">
        ABOUT ME
      </div>

      <h2>
        Building Web Experiences
        <span> That Make an Impact</span>
      </h2>

      <p>
        I am a passionate Full-Stack Developer who enjoys creating
        modern, responsive and user-friendly web applications.
      </p>

      <p>
        I work mainly with the MERN stack, including MongoDB,
        Express.js, React.js and Node.js. I enjoy turning ideas
        into functional and engaging digital experiences.
      </p>

      <p>
        I am continuously improving my development skills by
        learning new technologies and building real-world projects.
      </p>

      <div className="about-buttons">

        <a href="#projects" className="about-btn">
          View My Projects
        </a>

        <a href="#contact" className="about-btn outline">
          Contact Me
        </a>

      </div>

    </div>


    {/* RIGHT SIDE */}

    <div className="about-right">

      <div className="about-card">

        <div className="about-card-icon">
          💻
        </div>

        <h3>Full-Stack Development</h3>

        <p>
          Building complete web applications from frontend
          interfaces to backend APIs.
        </p>

      </div>


      <div className="about-card">

        <div className="about-card-icon">
          ⚡
        </div>

        <h3>Modern & Responsive</h3>

        <p>
          Creating websites that work smoothly across
          desktop, tablet and mobile devices.
        </p>

      </div>


      <div className="about-card">

        <div className="about-card-icon">
          🚀
        </div>

        <h3>Continuous Learning</h3>

        <p>
          Improving my skills by working on projects and
          exploring modern development tools.
        </p>

      </div>

    </div>

  </div>

</section>

{/* ================= END ABOUT ================= */}



      {/* ================= SKILLS SECTION ================= */}

      <section className="skills-section" id="skills">

        <div className="skills-heading">
          <span>MY SKILLS</span>

          <h2>Technologies I Work With</h2>

          <p>
            I use modern technologies to build responsive and
            full-stack web applications.
          </p>
        </div>


        <div className="skills-container">

          {/* Frontend */}

          <div className="skill-card">

            <div className="skill-card-header">

              <div className="skill-main-icon">
                <FaReact />
              </div>

              <h3>Frontend Development</h3>

            </div>


            <div className="skill-item">

              <div className="skill-info">
                <span className="skill-name">
                  <FaHtml5 />
                  HTML5
                </span>

                <span>95%</span>
              </div>

              <div className="progress-background">
                <div
                  className="progress-fill"
                  style={{ width: "95%" }}
                ></div>
              </div>

            </div>


            <div className="skill-item">

              <div className="skill-info">
                <span className="skill-name">
                  <FaCss3Alt />
                  CSS3
                </span>

                <span>90%</span>
              </div>

              <div className="progress-background">
                <div
                  className="progress-fill"
                  style={{ width: "90%" }}
                ></div>
              </div>

            </div>


            <div className="skill-item">

              <div className="skill-info">
                <span className="skill-name">
                  <FaJs />
                  JavaScript
                </span>

                <span>92%</span>
              </div>

              <div className="progress-background">
                <div
                  className="progress-fill"
                  style={{ width: "92%" }}
                ></div>
              </div>

            </div>


            <div className="skill-item">

              <div className="skill-info">
                <span className="skill-name">
                  <FaReact />
                  React.js
                </span>

                <span>90%</span>
              </div>

              <div className="progress-background">
                <div
                  className="progress-fill"
                  style={{ width: "90%" }}
                ></div>
              </div>

            </div>

{/* 
            <div className="skill-item">

              <div className="skill-info">
                <span className="skill-name">
                  <SiTailwindcss />
                  Tailwind CSS
                </span>

                <span>85%</span>
              </div>

              <div className="progress-background">
                <div
                  className="progress-fill"
                  style={{ width: "85%" }}
                ></div>
              </div>

            </div> */}

          </div>


          {/* Backend */}

          <div className="skill-card">

            <div className="skill-card-header">

              <div className="skill-main-icon">
                <FaNodeJs />
              </div>

              <h3>Backend Development</h3>

            </div>


            <div className="skill-item">

              <div className="skill-info">
                <span className="skill-name">
                  <FaNodeJs />
                  Node.js
                </span>

                <span>85%</span>
              </div>

              <div className="progress-background">
                <div
                  className="progress-fill"
                  style={{ width: "85%" }}
                ></div>
              </div>

            </div>


            <div className="skill-item">

              <div className="skill-info">
                <span className="skill-name">
                  <SiExpress />
                  Express.js
                </span>

                <span>88%</span>
              </div>

              <div className="progress-background">
                <div
                  className="progress-fill"
                  style={{ width: "88%" }}
                ></div>
              </div>

            </div>


            <div className="skill-item">

              <div className="skill-info">
                <span className="skill-name">
                  🔗
                  REST APIs
                </span>

                <span>90%</span>
              </div>

              <div className="progress-background">
                <div
                  className="progress-fill"
                  style={{ width: "90%" }}
                ></div>
              </div>

            </div>

          </div>


          {/* Database */}

          <div className="skill-card">

            <div className="skill-card-header">

              <div className="skill-main-icon">
                <FaDatabase />
              </div>

              <h3>Database</h3>

            </div>


            <div className="skill-item">

              <div className="skill-info">
                <span className="skill-name">
                  <SiMongodb />
                  MongoDB
                </span>

                <span>85%</span>
              </div>

              <div className="progress-background">
                <div
                  className="progress-fill"
                  style={{ width: "85%" }}
                ></div>
              </div>

            </div>


            <div className="skill-item">

              <div className="skill-info">
                <span className="skill-name">
                  <FaDatabase />
                  Mongoose
                </span>

                <span>88%</span>
              </div>

              <div className="progress-background">
                <div
                  className="progress-fill"
                  style={{ width: "88%" }}
                ></div>
              </div>

            </div>

          </div>


          {/* Tools */}

          <div className="skill-card">

            <div className="skill-card-header">

              <div className="skill-main-icon">
                <FaGitAlt />
              </div>

              <h3>Tools & Technologies</h3>

            </div>


            <div className="skill-item">

              <div className="skill-info">
                <span className="skill-name">
                  <FaGitAlt />
                  Git
                </span>

                <span>90%</span>
              </div>

              <div className="progress-background">
                <div
                  className="progress-fill"
                  style={{ width: "90%" }}
                ></div>
              </div>

            </div>


            <div className="skill-item">

              <div className="skill-info">
                <span className="skill-name">
                  <FaGithub />
                  GitHub
                </span>

                <span>92%</span>
              </div>

              <div className="progress-background">
                <div
                  className="progress-fill"
                  style={{ width: "92%" }}
                ></div>
              </div>

            </div>


            <div className="skill-item">

              <div className="skill-info">
                <span className="skill-name">
                  <SiVite />
                  Vite
                </span>

                <span>88%</span>
              </div>

              <div className="progress-background">
                <div
                  className="progress-fill"
                  style={{ width: "88%" }}
                ></div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= END SKILLS ================= */}

      {/* ================= PROJECTS SECTION ================= */}

<section className="projects-section" id="projects">

  <div className="projects-heading">

    <span>MY PROJECTS</span>

    <h2>Projects I've Built</h2>

    <p>
      Here are some of the projects I have built while
      learning and developing my full-stack skills.
    </p>

  </div>


  <div className="projects-container">


    {/* ================= PROJECT 1 ================= */}

    <div className="project-card">

      <div className="project-number">
        01
      </div>

      <div className="project-content">

        <div className="project-icon">
          📝
        </div>

        <h3>
          Online Exam Management System
        </h3>

        <p>
          A full-stack online examination platform where
          users can participate in MCQ-based exams and
          manage examination-related data.
        </p>


        {/* Technologies */}

        <div className="project-tech">

          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>

        </div>


        {/* Buttons */}

        <div className="project-buttons">

          <a
            href="https://github.com/zeekreya/online-exam"
            target="_blank"
            rel="noreferrer"
            className="project-btn github-btn"
          >
            <BsGithub />
            GitHub
          </a>


          <a
            href="https://online-exam-eight-peach.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="project-btn live-btn"
          >
            Live Demo
            <BsBoxArrowUpRight />
          </a>

        </div>

      </div>

    </div>


    {/* ================= PROJECT 2 ================= */}

    <div className="project-card">

      <div className="project-number">
        02
      </div>

      <div className="project-content">

        <div className="project-icon">
          💰
        </div>

        <h3>
          Expense Tracker Friends
        </h3>

        <p>
          A full-stack expense management application
          designed to help users manage expenses and
          track shared financial activities with friends.
        </p>


        {/* Technologies */}

        <div className="project-tech">

          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>

        </div>


        {/* Buttons */}

        <div className="project-buttons">

          <a
            href="https://github.com/zeekreya/expense-tracker-friends"
            target="_blank"
            rel="noreferrer"
            className="project-btn github-btn"
          >
            <BsGithub />
            GitHub
          </a>


          <a
            href="https://expense-tracker-friends.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="project-btn live-btn"
          >
            Live Demo
            <BsBoxArrowUpRight />
          </a>

        </div>

      </div>

    </div>


  </div>

</section>

{/* ================= END PROJECTS ================= */}
{/* ================= EXPERIENCE SECTION ================= */}

<section className="experience-section" id="experience">

  <div className="experience-heading">

    <span>MY EXPERIENCE</span>

    <h2>My Professional Journey</h2>

    <p>
      My experience and learning journey as a full-stack
      developer.
    </p>

  </div>


  <div className="experience-container">

    {/* Timeline line */}

    <div className="experience-line"></div>


    {/* EXPERIENCE */}

    <div className="experience-item">

      <div className="experience-dot"></div>

      <div className="experience-card">

        <div className="experience-top">

          <div>
            <span className="experience-type">
              INTERNSHIP
            </span>

            <h3>Full-Stack Development Intern</h3>

            <h4>Zenexis Solutions Pvt. Limited</h4>
          </div>

          <span className="experience-duration">
            3 Months
          </span>

        </div>


        <p className="experience-description">
          Worked on full-stack web development projects and
          gained practical experience in developing modern
          web applications using the MERN stack.
        </p>


        <div className="experience-skills">

          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>REST API</span>
          <span>Git</span>

        </div>

      </div>

    </div>


    {/* CURRENT LEARNING */}

    <div className="experience-item">

      <div className="experience-dot"></div>

      <div className="experience-card">

        <div className="experience-top">

          <div>
            <span className="experience-type">
              CURRENT FOCUS
            </span>

            <h3>Full-Stack Developer</h3>

            <h4>Personal Projects & Skill Development</h4>
          </div>

          <span className="experience-duration">
            Present
          </span>

        </div>


        <p className="experience-description">
          Currently building real-world projects, improving
          MERN stack development skills and preparing for
          entry-level opportunities as a full-stack developer.
        </p>


        <div className="experience-skills">

          <span>MERN Stack</span>
          <span>React.js</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>GitHub</span>

        </div>

      </div>

    </div>

  </div>

</section>

{/* ================= END EXPERIENCE ================= */}




      <Footer />

    </div>
  )
}

export default App
