import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";




const MainContent = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          easing: 'ease-in-out', // Easing function
        });
      }, []);

   
      
      const  [text]  = useTypewriter({
        words: ["FRONT END REACT DEVELOPER", "WEB DEVELOPER", "MERN STACK DEVELOPER"],
        loop:true,
        typeSpeed: 180,
        deleteSpeed: 50,
        delaySpeed: 1000,
      });
    
      const Alert =() =>{
        alert("PROJECT IN PROGRESS")
      }



  return (
    <div className="container-fluid mt-5" id="home">
      <div className="row p-5" style={{backgroundColor:"#E7FBED",height:"700px"}}>
        <div className="intro col-sm-12 col-md-12 col-lg-6" >
          <h1 
            className="heading-primary mt-5 "   
            style={{ opacity: 1, transform: "none"}}
          >
            <span data-aos="fade-in" className="fw-bolder"> Hi, I'm </span> <span  className="text-primary " data-aos="fade-out">Shaheryar Ali</span>
            <br />
        
          
           
          </h1>
          <p className="fs-2" data-aos="fade-out"  >I'm a passionate   <span style={{fontWeight:"bold",color:"red"}}>{text}<Cursor/></span></p>
        <a href="/ShaheryarCv (2) (1) (1).pdf" download><button className="btn btn-dark text-white fw-bolder p-2 mt-3 ">Download CV</button></a>  
       <a href="#about"> <button id="about" className="btn btn-dark text-white fw-bolder p-2 mt-3 ms-5">About me</button> </a>
          {/* <button className="btn btn-dark text-white ms-5 p-3">Get Connected</button> */}
        </div>

        <div className="col-sm-12 col-md-12 col-lg-6 mt-3" data-aos="fade-out">
          <img className="banner" src="/graphic-designer-digital-avatar-generative-ai_934475-9193.avif" height={450} />
        </div>
      </div>

      {/* ///////ABOUT ME/////// */}
      <section className="about-section text-center py-5 bg-light">
  
  <section className="about-section text-center py-5 bg-light">
  <h3 className="text-primary fs-1 fw-bold">- About Me</h3>
  <div className="container p-4" id="about" data-aos="fade-in">
    <div className="row justify-content-center">
      <div className="col-lg-8 p-3">
        <h2 className="fw-bold text-dark">Full Stack Web Developer</h2>
        <p className="lead text-muted" data-aos="fade-out">
          An organized and efficient developer with <strong className="text-danger">four years of experience</strong> in web development. Skilled in creating <strong className="text-danger">dynamic and responsive</strong> web applications using <strong className="text-danger">React.js</strong> and proficient in database management with <strong className="text-danger">MongoDB</strong>.
        </p>
        <p className="lead text-muted">
          Throughout my career, I have worked on numerous projects as a <strong className="text-danger">frontend developer</strong>, gaining extensive expertise in designing and developing user-friendly interfaces. Now, I offer my services as a <strong className="text-danger">frontend development specialist</strong>, while also possessing a solid understanding of <strong className="text-danger">backend technologies</strong>.
        </p>
        <hr className="my-4" />
        <div className="contact-info">
          <h5 className="fw-bold text-primary">Email:</h5>
          <p className="text-dark mb-2 fw-bolder">Shaheryarsherry114@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</section>

</section>

      <br />

{/*//////////// SKILLS//////// */}
<h3 className="fw-bolder mt-3 text-primary" id="skill">- Skills & Abilities</h3>
   <div className="container-fluid mt-5"  data-aos="fade-in">
    <div className="row">
      <div className="col-12 col-md-6 col-lg-3">
      <img src="/logo-2582748_1280.png" height={200} />  
      </div>
      <div className="col-12 col-md-6 col-lg-3">
      <img src="/html-icon-3d-rendering-illustration-vector.jpg" height={200} />  
      </div>
      <div className="col-12 col-md-6 col-lg-3">
      <img src="/images (1).png" height={200} />  
      </div>
      <div className="col-12 col-md-6 col-lg-3">
      <img src="/png-clipart-bootstrap-full-logo-tech-companies-thumbnail.png" height={200} />  
      </div>

      <div className="MERN col-12 col-md-6 col-lg-3">
      <img src="/download.png" height={200} />  
      </div>
      <div className="MERN col-12 col-md-6 col-lg-3">
      <img src="/download (1).png" height={200} />  
      </div>
      <div className="MERN col-12 col-md-6 col-lg-3">
      <img src="/2560px-Node.js_logo.svg.png" height={200} />  
      </div>
      <div className="MERN col-12 col-md-6 col-lg-3">
      <img src="/1_i2fRBk3GsYLeUk_Rh7AzHw.png" height={200} width={280} />  
      </div>
      <div className="MERN col-12 col-md-6 col-lg-12">
      <img src="/download (2).png" height={200} width={280} />  
      </div>
     

    </div>

   </div>


      {/* /////////////////// */}
      <div className="container-fluid mt-5" id="projects" >
      <div classname="row">
        <h4 className="fs-1 text-primary">Personal Projects</h4>
        <div classname="projects-card col-sm-12 col-md-12 col-lg-12 mt-5">
          <div
            className="card border shadow-none align-items-center mx-auto"
            style={{ width: "900px" }}
          >
            <div className="card-body" data-aos="fade-in" >
              <div className=" align-items-start border-bottom pb-3">
                <div className="me-4">
                  <img
                    src="/Screenshot 2024-02-09 044943.png"
                    width={500}
                    height={300}
                    alt
                    className="avatar-lg rounded" data-aos="fade-in"
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
                   <a href="https://github.com/Shaheryar-gif/easy-shop-react"> <i class="fa-brands fa-github me-1 fs-3 text-dark"></i> </a>  <a  className="text-dark" href="https://github.com/Shaheryar-gif/easy-shop-react"><strong className="fw-bolder fs-4">Get Code</strong></a>
                   <a href="https://e-commerce-eight-olive.vercel.app/" className="btn btn-dark ms-4 text-white p-2">Visit Website</a>
                    
                    {/* <button id="viewbtn" className="btn btn-dark text-white ms-5 ">
                      Visit Website
                    </button> */}
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
            <div className="card-body"  data-aos="fade-in" >
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
                    <a href="https://github.com/Shaheryar-gif/go-food"><i class="fa-brands fa-github me-1 fs-3 text-dark"></i> </a> <a className="text-dark" href="https://github.com/Shaheryar-gif/go-food"><strong className="fw-bolder fs-4">Get Code</strong></a>
                    <a href="https://go-food-react.vercel.app/" className="btn btn-dark ms-4 text-white p-2">Visit Website</a>
                    
                    {/* <button id="viewbtn" className="btn btn-dark text-white ms-5 ">
                      Visit Website
                    </button> */}
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
            <div className="card-body"  data-aos="fade-in">
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
                     <i class="fa-brands fa-github me-1 fs-3" onClick={Alert}></i><strong className="fw-bolder fs-4">Get Code</strong>
                    
                    {/* <button id="viewbtn" className="btn btn-dark text-white ms-3">
                      Visit Website
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
{/* ////////////////// */}

<div className="icons container-fluid bg-dark text-white p-3" id="contact">
  <div className="row">
      <div className="col-12 col-md-6 col-lg-5"><h2 className="">Shaheryar Ali Portforlio</h2>
      <br/>
      <br/>
      <span className="fs-4">Thank you for visiting my personal portfolio website. Connect with me over socials.

Keep Rising 🚀. Connect with me over live chat!</span>

      </div>





      <div className="footerlinks col-12 col-md-6 col-lg-3 fw-bolder fs-4"> <h1 className="text-white">Quick Links</h1>
        <a href="#home"><li>Home</li></a>
        <a href="#about"><li>About</li></a>
        <a href="#skills"><li>Skills</li></a>
        <a href="#projects"><li>Projects</li></a>
        <a href="#contact"><li>Contact</li></a>
      
      

      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <h2>- LET'S CONNECT</h2>
        <h4 class="contact__title"><i class="fa-regular fa-envelope  me-2  fs-"></i>Mail</h4>
    <a href="mailto:shaheryarsherry114@gmail.com" class="contact__text fw-bolder fs-5">shaheryarsherry114@gmail.com</a>
    <h4 class="contact__title"><i class="fa-brands fa-github  me-2 fs-5"></i>GitHub</h4>
    <a href="https://github.com/Shaheryar-gif" class="contact__text text-primary fw-bolder fs-5">Shaheryar-gif </a>
    <h4 class="contact__title"><i class="fa-brands fa-linkedin  fs-5 me-2"></i>linkedin</h4>
    <a href="https://www.linkedin.com/in/shaheryar-ali-0581a02a4/" class="contact__text  fw-bolder fs-5">Shaheryar Ali </a>
    
    <h6 className="contacts me-5"> Email : Shaheryarsherry114@gmail.com</h6>
    <h6 className=" contacts me-5"> Contact No   : 031141467543</h6>
    </div>
    </div>
    
   
    </div>
   
    

  </div>







 


  );
};

export default MainContent;
