import React from "react";

const MainContent = () => {
  return (
    <div className="container-fluid mt-5" id="home">
      <div className="row p-5" style={{backgroundColor:"#E7FBED"}}>
        <div className="intro col-sm-12 col-md-12 col-lg-6">
          <h1
            className="heading-primary mt-5"
            style={{ opacity: 1, transform: "none" }}
          >
            Hi, I'm <span className="text-primary">Shaheryar!</span>
            <br />
            FRONT END REACT Developer
          </h1>
          <p className="fs-4 ">I'm a passionate frontend React Developer</p>
        <a href="/ShaheryarCv (2) (1) (1).pdf" download><button className="btn btn-dark text-white fw-bolder p-2 mt-3 ">Download CV</button></a>  
          {/* <button className="btn btn-dark text-white ms-5 p-3">Get Connected</button> */}
        </div>

        <div className="col-sm-12 col-md-12 col-lg-6 mt-3">
          <img className="banner" src="hero-1-editied.ac93d9410f69caeb120a.png" />
        </div>
      </div>

      {/* ///////ABOUT ME/////// */}

      <div className="container-fluid p-5" id="about">
      <div className="row p-4">
        <div className="col-sm-12 col-md-12 col-lg-6 text-center ">
          <div class="section__heading">
            <h3 class="section__heading--sub text-primary">- About me</h3>
            <h2 class="section__heading--main">Full Stack Web Developer</h2>
            <p class="about__me--text fs-5">
              <h5>
                Organized and efficient developer with 1 year of experience in
                web development. Proficient in creating dynamic and responsive
                web applications using <strong className="text-danger">React.js</strong> and managing
                databases with <strong className="text-danger">MongoDB</strong>. Successfully completed
                a certification course in programming, where I gained
                substantial knowledge in <strong className="text-danger">HTML</strong>,{" "}
                <strong className="text-danger">CSS</strong>, <strong className="text-danger">JavaScript</strong>, and the{" "}
                <strong className="text-danger">MERN stack</strong>. Developed an e-commerce website
                showcasing my skills in both frontend and backend technologies.
                Known for working effectively in professional and friendly
                environments, continuously learning, and applying new
                technologies.
              </h5>
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-3 text-center">
          <h3 class="tech text-primary">- Tech Stack</h3>
          <img className="pic" src="/img.png" width={400} height={300} />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-3 mt-5">
          <img
            className="pic ms-3"
            src="/mern_hero.png"
            width={400}
            height={300}
          />
        </div>
      </div>

      </div>
      <br />
      {/* /////////////////// */}
      <div className="container-fluid mt-5" id="projects" >
      <div classname="row">
        <h4 className="fs-1 text-primary">Personal Projects</h4>
        <div classname="projects-card col-sm-12 col-md-12 col-lg-12 mt-5">
          <div
            className="card border shadow-none align-items-center mx-auto"
            style={{ width: "900px" }}
          >
            <div className="card-body ">
              <div className=" align-items-start border-bottom pb-3">
                <div className="me-4">
                  <img
                    src="/Screenshot 2024-02-09 044943.png"
                    width={500}
                    height={300}
                    alt
                    className="avatar-lg rounded"
                  />
                </div>
                <br />
                <div className="flex-grow-1 align-self-center overflow-hidden">
                  <div>
                    <h5 className="text-truncate font-size-18">
                      E-Commerce website <br />
                      <strong> Name : Easy-Shop</strong>
                    </h5>

                    <p className="mb-0 mt-1 fw-bolder fs-4">
                      <i>
                        Created an e-commerce website using React.js for the
                        frontend and MongoDB for the database.
                      </i>
                    </p>
                    <br/>
                    <br/>
                    <i class="fa-brands fa-github me-1 fs-3"></i><strong className="fw-bolder fs-4">Get Code</strong>
                    
                    <button id="viewbtn" className="btn btn-dark text-white ms-5 ">
                      Visit Website
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div
            className="card border shadow-none  mx-auto"
            style={{ width: "900px" }}
          >
            <div className="card-body">
              <div className="align-items-start border-bottom pb-3">
                <div className="me-4">
                  <img
                    src="/Screenshot (33).png"
                    width={500}
                    height={300}
                    alt
                    className="avatar-lg rounded"
                  />
                </div>
                <div className="flex-grow-1 align-self-center overflow-hidden">
                  <div>
                    <h5 className="text-truncate font-size-18">
                      <br />
                      Food Delivery website <br />
                      <strong> Name : Go-Food</strong>
                    </h5>

                    <p className="mb-0 mt-1 fw-bolder fs-4">
                      <i>
                        Created an Full Stack Food delivery website using
                        React.js for the frontend and MongoDB for the database
                      </i>
                    </p>
                    <br/>
                    <br/>
                    <i class="fa-brands fa-github me-1 fs-3"></i><strong className="fw-bolder fs-4">Get Code</strong>
                    
                    <button id="viewbtn" className="btn btn-dark text-white ms-5 ">
                      Visit Website
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div
            className="card border shadow-none mx-auto"
            style={{ width: "900px" }}
          >
            <div className="card-body">
              <div className=" align-items-start border-bottom pb-3">
                <div className="me-4">
                  <img
                    src="/download (6).jpeg"
                    width={500}
                    height={300}
                    alt
                    className="avatar-lg rounded"
                  />
                </div>
                <div className="flex-grow-1 align-self-center overflow-hidden">
                  <div>
                    <h5 className="text-truncate font-size-18 ">
                      <br />
                      Hotel Booking Website
                      <br />
                      <strong> Name : Luxury Hotel Website</strong>
                    </h5>

                    <p className="mb-0 mt-1 fw-bolder fs-4">
                      <i>
                        Created an Hotel Booking website using React.js for the
                        frontend and MongoDB for the database.
                      </i>
                    </p>
                    <br/>
                    <br/>
                    <i class="fa-brands fa-github me-1 fs-3"></i><strong className="fw-bolder fs-4">Get Code</strong>
                    
                    <button id="viewbtn" className="btn btn-dark text-white ms-3">
                      Visit Website
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
{/* ////////////////// */}

<div className="icons container-fluid bg-dark text-white" id="contact">
    <div className="row">
        <div className="col-12 col-md-12 col-lg-12">
        <h4 className="fw-bolder mt-5">- LET'S CONNECT</h4>
        </div>
    </div>
    <div className="row">
    <div className="col-12 col-md-12 col-lg-12">
        <h2 className="fw-bolder mt-">GET IN TOUCH</h2>
        </div>
    </div>
    <div className="row mt-5">
    <div className="col-12 col-md-12 col-lg-4">
    <div class="contact__info">
    <h2 class="contact__title"><i class="fa-regular fa-envelope  me-2 fs-3"></i>Mail</h2>
    <a href="mailto:shaheryarsherry114@gmail.com" class="contact__text fw-bolder fs-4">shaheryarsherry114@gmail.com</a></div>
    </div>
    <div className="col-12 col-md-12 col-lg-4">
    <div class="contact__info">
    <h2 class="contact__title"><i class="fa-brands fa-github  me-2 fs-3"></i>GitHub</h2>
    <a href="https://github.com/Shaheryar-gif" class="contact__text text-primary fw-bolder fs-4">Shaheryar-gif </a></div>
    </div>
    
    <div className="col-12 col-md-12 col-lg-4">
    <div class="contact__info">
    <h2 class="contact__title"><i class="fa-brands fa-linkedin me-2 fs-3"></i>linkedin</h2>
    <a href="https://www.linkedin.com/in/shaheryar-ali-0581a02a4/" class="contact__text  fw-bolder fs-4">Shaheryar Ali </a></div>
    </div>
  
    </div>
    

</div>


    </div>
  );
};

export default MainContent;
