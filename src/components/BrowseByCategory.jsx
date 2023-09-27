import React, { Fragment } from 'react'
import classes from "./BrowseByCategory.module.css"

const BrowseByCategory = () => {
  return (
    <Fragment>
        <section>
    <h1 className={classes.BrowseByCategory}>Browse by Category</h1>
        <div className={classes.card1}>
        <div className="card" style={{width: "15rem", marginRight:"15px",border:"1px solid skyblue" }}>
  <img src="https://www.ketodelia.ca/cdn/shop/products/AlmondFlourWaffles.jpg?v=1673029390&width=330" className={`card-img-top ${classes.imgTop}`} alt="..."/>
  <div className="card-body " style={{textAlign:"left"}}>
    <h5 className="card-title" style={{fontSize:"12px"}}>Almond Flour Belgian Waffle  </h5>
    
    
  </div>
</div>
 <div className="card" style={{width: "15rem" ,marginRight:"15px",border:"1px solid skyblue"}}>
  <img src="https://www.ketodelia.ca/cdn/shop/products/CreamyMushroomFettuccineAlfredo.jpg?v=1673029366&width=330" className={`card-img-top ${classes.imgTop}`} alt="..."/>
  <div className="card-body" style={{textAlign:"left"}}>
    <h5 className="card-title" style={{fontSize:"12px"}}>Keto Pasta</h5>
    
    
  </div>
</div>
 <div className="card" style={{width: "15rem",marginRight:"15px",border:"1px solid skyblue"}}>
  <img src="https://www.ketodelia.ca/cdn/shop/products/ketogardenveggiepizza.jpg?v=1673293248&width=330" className={`card-img-top ${classes.imgTop}`} alt="..."/>
  <div className="card-body" style={{textAlign:"left"}}>
    <h5 className="card-title" style={{fontSize:"12px"}}>Keto Pizza</h5>
    

  </div>
</div>
 <div className="card" style={{width: "15rem",border:"1px solid skyblue"}}>
  <img src="https://www.ketodelia.ca/cdn/shop/products/KetoChickenTenders.jpg?v=1673029425&width=330" className={`card-img-top ${classes.imgTop}`} alt="..."/>
  <div className="card-body" style={{textAlign:"left"}}>
    <h5 className="card-title" style={{fontSize:"12px",marginBottom:"-1rem"}}>Keto Mains</h5>
    
   
  </div>
</div>
        </div>
        </section>
    </Fragment>
  )
}

export default BrowseByCategory