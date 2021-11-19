import React from 'react';


function Projects() {
  return (
    <section className="my-work" id="my-work">
      <h2 class="section-title"> My Recent <span className="span-color">Works.</span></h2>
      
      <div className="project-container">
        <div className="card">
          <div className="img-container img1"></div>
          <h3>Newna Bros.</h3>
          <p>A fully responsive landing page and online ski shop. This website is fully functional and includes a responsive shopping cart, login, signup, and authentication features. Utilizes Stripe.js for checkout. Built with the MERN stack. </p>
          <div className="btn-wrap">
            <button onClick={() => {
              window.open("https://github.com/Electrolion/Newna-Slopes", "_blank");
              }}>Visit the site<i class="fas fa-link"></i></button>
            <button onClick={() => {
              window.open("https://github.com/Electrolion/Newna-Slopes", "_blank");
              }}>See the code<i class="fas fa-code-branch"></i></button>
          </div>
        </div>

        <div className="card">
          <div className="img-container img2"></div>
          <h3>Reading Corner</h3>
          <p>A book club/journal application, signup, login, and make posts. Let your friends know what you think as you read your favorite book! Built with Bootstrap, MySQL, Sequelize, and Express </p>
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
          <h3>The Tech Blog</h3>
          <p>A place to talk tech with anyone. Create new posts and comment on other users posts. Built with MySQL, Sequelize, and Express. </p>
          <div className="btn-wrap">
          <button onClick={() => {
              window.open("https://pacific-brushlands-53431.herokuapp.com/", "_blank");
              }}>Visit the site<i class="fas fa-link"></i></button>
          <button onClick={() => {
              window.open("https://github.com/imSpires/tech-blog", "_blank");
              }}>See the code<i class="fas fa-code-branch"></i></button>
          </div>
        </div>

        <div className="card">
        <div className="img-container img4"></div>
          <h3>My Portfolio</h3>
          <p>Not much to say here! A good excuse to spend my evenings practicing with React and CSS.</p>
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
  );
}

export default Projects;