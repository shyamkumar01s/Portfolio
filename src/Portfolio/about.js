import React from "react"
import './about.css'

function About(){
   return (
    <div className="about-wrapper">
      <div className="container about-content py-5">

        {/* Intro Section */}
        <div className="intro-section row align-items-center text-start mb-5">
          <div className="col-md-7">
            <h1 className="mb-3">💬 <span className="highlight">Who I Am</span></h1>
            <p className="lead">
              I'm <strong>Shyam</strong> (Saiyan), a self-driven learner and passionate developer who trains both mind and body like a warrior.
            </p>
            <p>
              I craft clean UIs, explore new stacks, and grow every day — staying consistent like Batman, resilient like Goku, and intense like Vegeta.
            </p>
          </div>
          <div className="col-md-5 text-center">
            <img src="/about1.jpg" alt="Shyam" className="profile-pic-about" />
          </div>
        </div>

        {/* Character & Talents */}
        <div className="section text-center">
          <h2>⚡ What Powers Me</h2>
          <ul className="traits-list mt-4 text-start">
            <li>🔥 Highly disciplined & mentally focused — pushing limits daily</li>
            <li>🧠 Quick to learn tech — I love mastering tools like React, Java & Bootstrap</li>
            <li>🎨 Sharp UI sense — I create clean, animated, responsive designs</li>
            <li>💪 Fitness-driven — strength training improves both body and mindset</li>
            <li>🦇 Strategic like Batman, passionate like Goku, and focused like Vegeta</li>
          </ul>
        </div>

        {/* Goals */}
        <div className="section text-center">
          <h2>🎯 Where I'm Headed</h2>
          <p className="mt-3 px-md-5">
            I aim to become a high-level full stack developer who builds meaningful, clean, and fast applications.
            I want to be part of a powerful tech team and eventually lead one. My long-term goal: master both code and character.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;
