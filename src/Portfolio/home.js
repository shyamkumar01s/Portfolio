import React from "react"
import './style.css'


function Home(){
     return (
    <div className="home-wrapper">
      <div className="container home-content text-dark py-5">

        {/* Intro Section */}
        <div className="intro-section row align-items-center text-start mb-5">
          <div className="col-md-7">
            <h1 className="mb-2">Hi, I'm <span className="highlight">Goku</span> 😁</h1>
            <p className="lead mb-4">
              Driven by discipline, forged through focus — a developer who grows stronger with every challenge.
            </p>
          </div>
          <div className="col-md-5 text-center">
            <img
              src="/me.jpg"
              alt="Saiyan"
              className="profile-pic-right"
            />
          </div>
        </div>

        {/* Qualification */}
        <div className="section">
          <h4>🎓 Qualification</h4>
          <div className="row justify-content-center align-items-center mb-5 inspiration-block">
            <div className="col-md-3 text-center mb-3">
              <img src="qualification.jpeg" alt="Qualification" className="role-img-big" />
            </div>
            <div className="col-md-9 text-start">
              <ul>
                <li><strong>B.E. in Mechanical Engineering</strong></li>
                <li><strong>Full Stack Java Development</strong> – currently training</li>
                <li><strong>React, GitHub, Bootstrap</strong> for building responsive UI projects</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hobbies */}
        <div className="section">
          <h4>🎮 Hobbies</h4>
          <div className="row justify-content-center align-items-center mb-5 inspiration-block">
            <div className="col-md-3 text-center mb-3">
              <img src="hobby.jpg" alt="Hobbies" className="role-img-big" />
            </div>
            <div className="col-md-9 text-start">
              <ul>
                  <li>🏋️ <strong>Gym &Strength Training:</strong> Inspired by Goku — discipline, bodyweight mastery, endurance</li>
                  <li>🏏 <strong>Cricket:</strong> I play competitive turf matches to stay agile & active</li>
                  <li>🏍️ <strong>Bike Riding:</strong> I love solo rides — it clears my mind, fuels focus and helps me stay mentally sharp</li>
                  <li>📺 <strong>Anime & Web Series:</strong> Love Dragon Ball, Naruto, Breaking Bad & more</li>
                  <li>💻 <strong>Frontend UI:</strong> Building clean, animated interfaces with React & Bootstrap</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Role Models */}
        <div className="section">
          <h4>🔥 Inspirations</h4>

          <div className="row justify-content-center align-items-center mb-5 inspiration-block">
            <div className="col-md-3 text-center mb-3">
              <img src="/gokusmile.jpeg" alt="Goku" className="role-img-big" />
            </div>
            <div className="col-md-9 text-start">
              <h5>Goku</h5>
              <p>
                The pure-hearted warrior who starts from nothing but becomes the strongest through relentless training. 
                His calmness, kindness, and ability to push beyond limits inspire me to grow every day.
              </p>
            </div>
          </div>

          <div className="row justify-content-center align-items-center mb-5 inspiration-block">
            <div className="col-md-3 text-center mb-3">
              <img src="/vegeta.jpeg" alt="Vegeta" className="role-img-big" />
            </div>
            <div className="col-md-9 text-start">
              <h5>Vegeta</h5>
              <p>
                The proud Saiyan prince who transforms his ego into drive. 
                His unbreakable discipline, hunger to improve, and constant self-challenge push me to strive harder, both in fitness and coding.
              </p>
            </div>
          </div>

          <div className="row justify-content-center align-items-center inspiration-block">
            <div className="col-md-3 text-center mb-3">
              <img src="/hitler.jpeg" alt="Hitler" className="role-img-big" />
            </div>
            <div className="col-md-9 text-start">
              <h5>Hitler</h5>
              <p>
                While his ideology is not admired, I respect his mental control, strategic thinking, and obsession with execution. 
                I reflect those traits into my own focus and planning towards goals — without the negativity.
              </p>
            </div>
          </div>
        </div>

        {/* Web Series */}
        <div className="section">
          <h4>📺 Web Series & Anime</h4>
          <ul>
            <li><strong>Anime:</strong> Dragon Ball, Naruto, One Piece</li>
            <li><strong>Series:</strong> Breaking Bad, Stranger Things, Loki, Mirzapur</li>
            <li>I love powerful characters with deep mindsets 🚀</li>
          </ul>
        </div>
      </div>
    </div>
  );

}

export default Home;