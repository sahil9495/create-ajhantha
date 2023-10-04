import React from "react";

function Navbar() {

    return(
        <div> 
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <div class="container-fluid">
     <a class="navbar-brand" href="#">
        <img src="logo1.svg" width="50" height="35" class="d-inline-block align-top" alt=""/>
        AJANTHA MANDAP 
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#ourworks">Our Events</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#AboutUs">Intro</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#testinomal">Testimonial</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#clicks">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Contact">Contatcs</a>
          </li>     
        </ul>
      </div>
    </div>
   </nav>


        </div>
    );
}
export default Navbar;