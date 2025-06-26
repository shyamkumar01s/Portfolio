// src/Portfolio/skills.js
import React, { useState, useEffect } from 'react';
import './skill.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Skills = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Dynamically change the body class for full-screen background
    document.body.classList.toggle('dark-body', darkMode);
    document.body.classList.toggle('light-body', !darkMode);
  }, [darkMode]);

  return (
    <div className={`skills-wrapper ${darkMode ? 'dark' : ''}`}>
      <div className="container py-5 skills-content">
          <h2 style={{textAlign:"center" ,color:" #d1006f",fontWeight:"600"}}>🛠️ My Skills</h2>
        {/* Skills Section */}
        <div className="section text-center mt-3">
          
          <div className="row mt-4 text-start">
            <div className="col-md-4 mb-4">
              <h5>💻 Frontend</h5>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bootstrap</li>
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
              </ul>
            </div>

            <div className="col-md-4 mb-4">
              <h5>⚙️ Backend & Tools</h5>
              <ul>
                <li>Java (Core + JDBC)</li>
                <li>Spring Boot (learning)</li>
                <li>MySQL Basics</li>
                <li>Git & GitHub</li>
              </ul>
            </div>

            <div className="col-md-4 mb-4">
              <h5>🌟 Extras</h5>
              <ul>
                <li>Responsive UI Design</li>
                <li>Dark Mode Implementation</li>
                <li>Debugging & Problem Solving</li>
                <li>Team Collaboration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects Section */}

        <h2 style={{textAlign:"center" ,color:" #d1006f",fontWeight:"600"}}>🚀 My Projects</h2>
        <div className="section text-center mt-3">
        
          {/* Project 1 – Bajaj Website */}
          <div className="row justify-content-center align-items-center mb-5 inspiration-block">
            <div className="col-md-3 text-center mb-3">
              <img src="/bajaj.jpeg" alt="Bajaj Project" className="role-img-big" />
            </div>
            <div className="col-md-9 text-start">
              <h5>🏢 Bajaj Showroom Website</h5>
              <p>
                A static website for a bike showroom built using HTML, CSS, and Bootstrap. Designed to be clean, responsive and showcase models and contact info.
              </p>
            </div>
          </div>

          {/* Project 2 – Light/Dark Mode */}
          <div className="row justify-content-center align-items-center mb-5 inspiration-block">
            <div className="col-md-3 text-center mb-3">
              <img src="/mode.jpeg" alt="Dark Mode Toggle" className="role-img-big" />
            </div>
            <div className="col-md-9 text-start">
              <h5>🌗 Light & Dark Mode Toggle</h5>
              <p>
                A theme switcher React project with modern hooks and dynamic class changes. Smooth UI transition between day & night themes.
              </p>
              <button className="demo-btn mt-2" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? '🌞 Click to change Light Mode' : '🌙 Click to change Dark Mode'}
              </button>
            </div>
          </div>

          {/* Project 3 – Portfolio */}
          <div className="row justify-content-center align-items-center inspiration-block">
            <div className="col-md-3 text-center mb-3">
              <img src="/th.jpeg" alt="Portfolio" className="role-img-big" />
            </div>
            <div className="col-md-9 text-start">
              <h5>👤 Personal Portfolio</h5>
              <p>
                This website you're currently viewing. Built with React, Bootstrap, and a Goku-powered vision to showcase my skills and personality.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
