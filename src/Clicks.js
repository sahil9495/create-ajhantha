import React from "react";
import './Clicks.css';

function Clicks(){
    return(
 <section id="clicks">
  <div>
    <h2 class="headblk text-center">Our Pricing</h2>
  </div>
  <div class="container">
    <div class="card-deck">
    <div class="row">
    <div class="col-sm-12 col-md-6 col-lg-4">
    <div class="card">
      <img class="card-img-top" src="cart1.jpeg" alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">Engagement Decoration</h5>
        <p class="card-text">Where Love Takes Center Stage: Uniting Hearts Under the Mandap's Grace.</p>
        <a href="#" class="btn btn-primary">Price Start From 25000</a>
       
      </div>
    </div>
  </div>
  <div class="col-sm-12 col-md-6 col-lg-4">
    <div class="card">
      <img class="card-img-top" src="cart2.jpeg" alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">Wedding Decoration</h5>
        <p class="card-text">Where Dreams Unite: Love's Journey Begins at the Mandap.</p>
        <a href="#" class="btn btn-primary">Price Start From 75000</a>
       
      </div>
    </div>
  </div>
    <div class="col-sm-12 col-md-6 col-lg-4">
    <div class="card">
      <img class="card-img-top" src="Reception.jpg" alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">Reception Decoration</h5>
        <p class="card-text">Where Joy Takes Center Stage: Your Reception, Your Love.</p>
        <a href="#" class="btn btn-primary">Price Start From 50000</a>  
      </div>
    </div>
    </div>
  </div>
</div>
</div>

</section> 
    );
}
export default Clicks;