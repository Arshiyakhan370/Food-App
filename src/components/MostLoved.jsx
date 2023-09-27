import React, { Fragment } from 'react'
import classes from "./MostLoved.module.css";
import images from "./images (1).jpg"

const MostLoved = () => {
  return (
    <Fragment>
    <section>
    <h1 className={classes.mostLoved}>Most Loved</h1>
        <div className={classes.card1}>
        <div className="card" style={{width: "15rem", marginRight:"15px",border:"1px solid skyblue" }}>
  <img src="https://www.ketodelia.ca/cdn/shop/products/cauliflowerbites.jpg?v=1673029354&width=533" className={`card-img-top ${classes.imgTop}`} alt="..."/>
  <div className="card-body " style={{textAlign:"left"}}>
    <h5 className="card-title" style={{fontSize:"18px"}}>Air Fried Keto Buffalo Cauliflower Bites</h5>
    <p className="card-text" style={{fontSize:"12px"}}>Lightly battered organic cauliflower tossed in homemade buffalo sauce with .</p>
    <span className="review-rating">★★★★★(6)</span>
            <div>$120</div>
  </div>
</div>
 <div className="card" style={{width: "15rem" ,marginRight:"15px",border:"1px solid skyblue"}}>
  <img src="https://www.ketodelia.ca/cdn/shop/products/ketochickensoup.jpg?v=1673029356" className={`card-img-top ${classes.imgTop}`} alt="..."/>
  <div className="card-body" style={{textAlign:"left"}}>
    <h5 className="card-title" style={{fontSize:"18px"}}>Keto Chicken Soup</h5>
    <p className="card-text" style={{fontSize:"12px"}}>Our Keto Chicken Soup is made with homemade organic farmers chicken and </p>
    <span className="review-rating">★★★★★(4)</span>
            <div>$128</div>
  </div>
</div>
 <div className="card" style={{width: "15rem",marginRight:"15px",border:"1px solid skyblue"}}>
  <img src="https://www.ketodelia.ca/cdn/shop/products/NoSugarCheesecake.jpg?v=1673029341&width=533" className={`card-img-top ${classes.imgTop}`} alt="..."/>
  <div className="card-body" style={{textAlign:"left"}}>
    <h5 className="card-title" style={{fontSize:"18px"}}>Keto Cheesecake</h5>
    <p className="card-text" style={{fontSize:"12px"}}>A classic cheesecake, made Keto-friendly. Deliciously rich and creamy with </p>
    <span className="review-rating">★★★★★(14)</span>
            <div>$100</div>
  </div>
</div>
 <div className="card" style={{width: "15rem",border:"1px solid skyblue"}}>
  <img src="https://www.ketodelia.ca/cdn/shop/products/KetoBagelsCheddarJalapeno.jpg?v=1679087800&width=533" className={`card-img-top ${classes.imgTop}`} alt="..."/>
  <div className="card-body" style={{textAlign:"left"}}>
    <h5 className="card-title" style={{fontSize:"18px"}}>Keto Bagel Cheddar Jalapeno - 4 pack</h5>
    <p className="card-text" style={{fontSize:"12px"}}>Our cheddar jalapeno bagels are made of almond flour, mozzarella and cream cheese.</p>
    <span className="review-rating">★★★★★(41)</span>
            <div>$180</div>
  </div>
</div>
        </div>
        </section>
        <section>
        <div className={classes.card2}>
        <div className="card" style={{width: "15rem", marginRight:"15px",border:"1px solid skyblue" }}>
  <img src={images} className={`card-img-top ${classes.imgTop1}`} alt="family img"/><div className='circle' style={{height:"52px",width:"52px", display:"flex" ,justifyContent:"center",alignItems:"center" ,margin:"auto",marginTop:"-8%",borderRadius:"100%",background:"#E6E6E6",color:"#000000"}}>HG</div>
  <div className="card-body " style={{textAlign:"left"}}>
    <h5 className="card-title" style={{fontSize:"18px"}}>Henriette G.</h5>
    <p className="card-text" style={{fontSize:"12px"}}>Great we user it for my birthday cake. Delicious cake.</p>
    <span className="review-rating">★★★★☆</span>
  </div>
</div>
<div className="card" style={{width: "15rem", marginRight:"15px",border:"1px solid skyblue" }}>
<h2>Best keto Pizza in the city</h2>
<div className='circle' style={{height:"52px",width:"52px", display:"flex" ,justifyContent:"center",alignItems:"center" ,margin:"auto",marginTop:"7%",borderRadius:"100%",background:"#E6E6E6",color:"#000000"}}>MS</div>
  <div className="card-body " style={{textAlign:"left"}}>
    <h5 className="card-title" style={{fontSize:"18px"}}></h5>
    <p className="card-text" style={{fontSize:"12px"}}></p>
    <span className="review-rating">★★★★☆</span>
  </div>
</div>
<div className="card" style={{width: "15rem", marginRight:"15px" ,border:"1px solid skyblue"}}>
  
  <div className="card-body " style={{textAlign:"left"}}>
    <h5 className="card-title" style={{fontSize:"18px"}}>Ordered the tiramisu cupcakes for the first time for a work event and they were a hit! So tasty, ...</h5>
    <p className="card-text" style={{fontSize:"12px"}}> .</p>
    <span className="review-rating">★★★★☆</span>
  </div>
</div>
            </div>
        </section>
    </Fragment>
  )
}

export default MostLoved