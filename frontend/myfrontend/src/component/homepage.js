import React from 'react'
import i1 from './images/1.jpeg'
import i2 from './images/2.jpeg'
import i3 from './images/3.jpeg'
import img1 from './images/icon1.png';
import { Link } from 'react-router-dom';
import '../App.css';
function Homepage() {
  return (
    <div>
      <header>
<nav class="navbar navbar-expand-md navbar-light bg-dark fixed-top nav1">
<a class="navbar-brand nav2 "><img src={img1}/></a>
<button type="button" class="navbar-toggler bg-light" data-toggle="collapse" data-target="#nav">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse justify-content-between" id="nav">
<ul class="navbar-nav">
<li class="nav-item" >
<Link class="nav-link text-light font-weight-bold px-3" to ={"/"}>Home</Link>
</li>

<li class="nav-item">
<Link class="nav-link text-light font-weight-bold px-3" to={'/signup'}>Signup</Link>
</li>

<li class="nav-item">
<Link class="nav-link text-light font-weight-bold px-3" to={'/product'}>Product</Link>
</li>
<li class="nav-item">
<a class="nav-link text-light font-weight-bold px-3" href="#">Contact</a>
</li>
</ul>
<form class="form-inline ml-3">
<div class="input-group">
<input type="text" class="form-control " className="search" placeholder="Search"/>
<button type="submit"><i class="fa fa-search"></i></button>
</div>
</form>
</div>
</nav>
</header>


<div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators ">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div className="carousel-inner ">
    <div className="carousel-item active image2 ">
      <img src={i1} alt="Los Angeles"/>
      <div className="carousel-caption">
        <h3>Los Angeles</h3>
        <p>We had such a great time in LA!</p>
      </div>   
      </div >
    <div className="carousel-item image1">
      <img src={i2} alt="Chicago"/>
      <div className="carousel-caption">
        <h3>Chicago</h3>
        <p>Thank you, Chicago!</p>
      </div>   
    </div>
    <div className="carousel-item image3">
      <img src={i3} alt="New York" />
      <div className="carousel-caption">
        <h3>New York</h3>
        <p>We love the Big Apple!</p>
      </div>   
    </div>
  </div>
  <a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
</div>

</div> 
 )
}

export default Homepage