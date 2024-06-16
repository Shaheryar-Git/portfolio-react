import React from "react";

const MainContent = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="intro col-sm-12 col-md-12 col-lg-6">
          <h1
            className="heading-primary mt-5"
            style={{ opacity: 1, transform: "none" }}
          >
            Hi, I'm <span>Shaheryar!</span>
            <br />
            FRONT END REACT Developer
          </h1>
          <p className="fs-4">I'm a passionate frontend React Developer</p>
          <button className="btn btn-dark text-white p-3">View Projects</button>
          <button className="btn btn-dark text-white ms-5 p-3">
            Get Connected
          </button>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-6 mt-3">
          <img src="hero-1-editied.ac93d9410f69caeb120a.png" />
        </div>
      </div>

      {/* ///////ABOUT ME/////// */}

      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6 text-center ">
          <div class="section__heading">
            <h3 class="section__heading--sub">- About me</h3>
            <h2 class="section__heading--main">Full Stack Web Developer</h2>
            <p class="about__me--text fs-5">
              <h5>
                Organized and efficient developer with 1 year of experience in
                web development. Proficient in creating dynamic and responsive
                web applications using <strong>React.js</strong> and managing databases
                with <strong>MongoDB</strong>. Successfully completed a certification
                course in programming, where I gained substantial knowledge in{" "}
                <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and the{" "}
                <strong>MERN stack</strong>. Developed an e-commerce website showcasing my
                skills in both frontend and backend technologies. Known for
                working effectively in professional and friendly environments,
                continuously learning, and applying new technologies.
              </h5>
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 text-center ">
         <img className="pic" src="/Screenshot_20240617-173301_Instagram.jpg" />
        </div>
       
      </div>

      






    </div>
  );
};

export default MainContent;
