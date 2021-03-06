import React from 'react';
import Fade from 'react-reveal/Fade';

function Projects() {
  return (
    <Fade bottom cascade>
    <section className="my-work" id="my-work">
      <h2 class="section-title"> My Recent <span className="span-color">Works.</span></h2>
      <div className="project-container">
        <div className="card">
          <div className="img-container img1"></div>
          <h3>Newna Bros.</h3>
          <p>A fully responsive landing page and online ski shop. This website is fully functional and includes a responsive shopping cart with login, signup, and authentication features. Utilizes Stripe.js for checkout. Built with the MERN stack. </p>
          <div className="btn-wrap">
            <button onClick={() => {
              window.open("https://newna-bros-ski-shop.herokuapp.com/", "_blank");
              }}>Visit the site<i class="fas fa-link"></i></button>
            <button onClick={() => {
              window.open("https://github.com/Electrolion/Newna-Slopes", "_blank");
              }}>See the code<i class="fas fa-code-branch"></i></button>
          </div>
        </div>
        
        <div className="card">
          <div className="img-container img2"></div>
          <h3>Reading Corner</h3>
          <p>A book club/journal application. Signup, login, and make posts to let your friends know what you think, as you read your favorite book! Built with Bootstrap, MySQL, Sequelize, and Express </p>
          <div className="btn-wrap">
            <button onClick={() => {
              window.open("https://reading-corner-project.herokuapp.com", "_blank");
              }}>Visit the site<i class="fas fa-link"></i></button>
            <button onClick={() => {
              window.open("https://github.com/Electrolion/Reading-corner", "_blank");
              }}>See the code<i class="fas fa-code-branch"></i></button>
          </div>
        </div>

        <div className="card">
          <div className="img-container img3"></div>
          <h3>Fresh Finds</h3>
          <p>A music recommendation app. Once a genre is selected, the app will recommend and play a random song. Save favorites to your "favorites" list. Utilizes SpotifyAPI.  </p>
          <div className="btn-wrap">
          <button onClick={() => {
              window.open("https://imspires.github.io/fresh-finds/", "_blank");
              }}>Visit the site<i class="fas fa-link"></i></button>
          <button onClick={() => {
              window.open("https://github.com/imSpires/fresh-finds", "_blank");
              }}>See the code<i class="fas fa-code-branch"></i></button>
          </div>
        </div>

        <div className="card">
        <div className="img-container img4"></div>
          <h3>My Portfolio</h3>
          <p>Not much to say here! Creating this page was a good excuse to spend my time improving my React and CSS skills.</p>
          <div className="btn-wrap">
          <button onClick={() => {
              window.scrollTo(0, 0);
              }}>Scroll to top<i class="fas fa-angle-double-up"></i></button>
          <button onClick={() => {
              window.open("https://github.com/imSpires/portfoliov2", "_blank");
              }}>See the code<i class="fas fa-code-branch"></i></button>
          </div>
        </div>

      </div>
    </section>
    </Fade>
  );
}

export default Projects;