import React from 'react'

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <h1 className="navbar-brand fw-bolder fs-4 text-dark mt-2" id='home' >Shaheryar Ali</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bolder fs-4">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#contact">Contact</a>
        </li>
        
        
       
       
      </ul>
      <div className='icons ms-5 '>
      <a href='https://www.linkedin.com/in/shaheryar-ali-0581a02a4/'><i class="fa-brands fa-linkedin me-5 fs-3 text-dark"></i></a> 
     <a href='https://github.com/Shaheryar-gif'> <i class="fa-brands fa-github  me-5 fs-3 text-dark"></i></a> 
      <a href='mailto:shaheryarsherry114@gmail.com'>  <i class="fa-regular fa-envelope  me-5 fs-3 text-dark"></i></a> 
        </div>    
    </div>
  </div>
</nav>

  )
}

export default Navbar
