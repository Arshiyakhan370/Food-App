import React, { Fragment } from 'react'
import classes from "./Map.module.css";

const Map = () => {
  return (
    <Fragment>
    <section>
    <div className={classes.appContainer}>

    <div className={classes.cardContainer}>
    <div className={classes.textCard1}>
     <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29703.013276664344!2d78.2468601508266!3d21.47335567564409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd5ca942d208c47%3A0x1096416ee5560128!2sWarud%2C%20Maharashtra%20444906!5e0!3m2!1sen!2sin!4v1695728993760!5m2!1sen!2sin"
      width="500"
      height="600"
      style={{ border: '0' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    ></iframe>
</div>
</div>
<div className={classes.cardContainer1}>
<div className={classes.textCard}>
    <h1>Location & Hours</h1>
   
  <p>Ketodelia</p>
<h5>3187 Yonge St.</h5>
<h5>TORONTO, Ontario M4N2K9</h5>
<h5>(416) 623-0317</h5>
<h5>ketodeliatoronto@gmail.com</h5>

<h6>Monday 10:30 a.m. - 9:00 p.m.</h6>
<h6>Tuesday 10:30 a.m. - 9:00 p.m.</h6>
<h6>Wednesday 10:30 a.m. - 9:00 p.m.</h6>
<h6>Thursday 10:30 a.m. - 9:00 p.m.</h6>
<h6>Friday 10:30 a.m. - 9:00 p.m.</h6>
<h6>Saturday 11:00 a.m. - 9:00 p.m.</h6>
<h6>Sunday Closed
</h6>
 <button type='button' className={classes.btn}>Get Direction</button>
  
</div>
</div>
</div>
 <div className={classes.appContainer2}>
      <div className={classes.cardContainer3}>
      <div className={classes.imageCard3}>
          <img
            src="https://www.ketodelia.ca/cdn/shop/files/restaurant_guru_2023.png?v=1690308321&width=710"
            className="" style={{height:"120px",width:"120pz",marginTop:"15px"}}
          />
        </div>
    </div>
    
      <div className={classes.cardContainer4}>
      <div className={classes.imageCard4}>
          <img
            src="https://www.ketodelia.ca/cdn/shop/files/Toronto-Ketodelia-Restaurant-Keto-Low-Carb-Cuisine-in-Toronto-removebg-preview_2.png?v=1668149195&width=710"
            alt="Image Card"
            className="" style={{height:"120px",width:"120pz",marginTop:"15px"}}
          />
        </div>
    </div>
    </div>
    

   
    
    </section>
    
         </Fragment>
  )
}

export default Map