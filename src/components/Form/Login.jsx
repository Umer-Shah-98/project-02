import React from "react";
import "../style.css";
import { Link } from "react-router-dom";
import campaign from "../../assets/campaign.avif";
import cup from "../../assets/cup.jpg";
import graph from "../../assets/graph.jpg";
function login() {
  return (
    <div className="signup login template d-flex justify-content-around align-items-center vh-100 bg-primary">


<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={campaign} class="d-block w-100 " alt="..."/>
  
    </div>
    <div class="carousel-item">
      <img src={cup} class="d-block w-100" alt="..."/>
      
    </div>
    <div class="carousel-item">
      <img src={graph} class="d-block w-100" alt="..."/>
   
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

      <div className="form_container p-5 rounded bg-white">
        <form>
          <h3 className="text-center">SignUp Page</h3>

          <div className="mb-2">
            <label htmlFor="fname"> First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="form-control"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="lname"> Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="form-control"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
            />
          </div>

          <div className="d-grid mt-2">
            <button className="btn btn-primary">Sign Up</button>
          </div>
          <p className="text-end mt-2">
            Already Registered
            <a href="/" className="ms-2">
              Sign In
            </a>
          </p>
        </form>
       
      </div>
    </div>

  );
}

export default login;
