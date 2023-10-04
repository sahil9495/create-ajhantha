import React from "react";
import './Events.css';
function Events(){
    return(
      <section id="ourworks">
    <div>
        <div>
             <h2 class="headblk text-center"> Our Recents Events</h2>
       </div>
        <div class="inrow text-center">
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <img class="img-work" src="latest.jpg" alt="Recent Work"/>
                 </div>
                <div class="col-sm-12 col-md-6 col-lg-3">
                  <img class="img-work" src="latest1.jpg" alt="Recent Work"/>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-3">
                  <img class="img-work" src="latest2.jpg" alt="Recent Work"/>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-3">
                  <img class="img-work" src="latest3.jpg" alt="Recent Work"/>
                </div>
            </div>
  
        </div>
        
    </div>
    </section>

    );
}
export default Events;