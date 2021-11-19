import React from 'react';
import avatar2 from '../../images/aboutavatar.svg';
import resume from '../About/Resume.pages';

function About() {
  return (
    <section className="about" id="about">

      <div className="container">
      <div className="left">
          <img src={avatar2} alt="guy coding" />
        </div>

        <div className="right">
            <h2 class="section-title"> About <span className="span-color">Me.</span></h2>
            <p className="first-p">My name is Ryan Dungan, I am a full stack web developer and a UCF bootcamp graduate. </p>
            <p className="second-p">Although I am familiar with frameworks, my websites are handcoded using HTML5, CSS3, and JavaScript.
            <br />
            <br />
            <em>“Curiosity is the wick in the candle of learning.”</em> ―William Arthur Ward
            </p>
            <a className="resume-btn" href={resume} download rel="noopener noreferrer" target="_blank">Resume (PDF)</a>
        </div>
      </div>

      <h2 class="section-title myskills"> My <span className="span-color">Skills.</span></h2>

      <div className="skills">
        <div className="tech-icons"><i class="devicon-html5-plain"></i></div>
        <div className="tech-icons"><i class="devicon-css3-plain"></i></div>
        <div className="tech-icons"><i class="devicon-javascript-plain"></i></div>
        <div className="tech-icons"><i class="fab fa-node-js fa-7x"></i></div>
        <div className="tech-icons"><i class="fab fa-react fa-7x"></i></div>
        <div className="tech-icons"><i class="devicon-mongodb-plain"></i></div>
        <div className="tech-icons"><i class="devicon-express-original"></i></div>
        <div className="tech-icons"><i class="devicon-graphql-plain"></i></div>
        <div className="tech-icons"><i class="devicon-mysql-plain"></i></div>
        <div className="tech-icons"><i class="devicon-sequelize-plain"></i></div>
      </div>

    </section>
    
  );
}

export default About;