import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import avatar2 from '../../images/aboutavatar.svg';
import resume from '../About/Resume.pages';

function About() {
  return (
    <section className="about" id="about">

      <div className="container">
      <Fade left>
        <div className="left">
            <img src={avatar2} alt="guy coding" />
        </div>
      </Fade>

        <Fade right>
          <div className="right">
              <h2 class="section-title"> About <span className="span-color">Me.</span></h2>
              <p className="first-p">My name is Ryan Dungan. I am a full stack web developer and a University of Central Florida coding bootcamp graduate. </p>
              <p className="second-p">Before building anything on the web I worked as a Crime Scene Investigator, I guess you could say I have a knack for problem solving.
              <br />
              <br />
              <em>“Curiosity is the wick in the candle of learning.”</em> ―William Arthur Ward
              </p>
              <a className="resume-btn" href={resume} download rel="noopener noreferrer" target="_blank">Resume (PDF)</a>
          </div>
        </Fade>
      </div>
      
      <Fade bottom>
      <h2 class="section-title myskills"> My <span className="span-color">Skills.</span></h2>
      </Fade>

      <div className="skills">
        <Zoom bottom>
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
        </Zoom>
      </div>

    </section>
    
  );
}

export default About;