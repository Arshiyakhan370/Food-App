import React, { Fragment, useEffect } from 'react'
import classes from "./AddToCart.module.css"
import { useDispatch } from 'react-redux'
import { cartAction } from '../store/CartSlice'
const AddToCart = () => {
    const dispatch=useDispatch()
useEffect(()=>{
  return ()=>dispatch(cartAction.toggleCartReducer(true))
},[])

  return (
    <Fragment> 
        <div className={classes.cart}>
        <h1>Your cart</h1>
        <p style={{textAlign:"right"}}>Back To Menu</p>

        </div>
        <div>
            <p>PRODUCT</p>
            <p>QUANTITY	</p>
            <p>TOTAL</p>
            <div
          className="card"
          style={{
            width: "15rem",
            marginRight: "15px",
            border: "1px solid skyblue",
          }}
        >
          <img
            src="https://cdn.shopify.com/s/files/1/0665/2110/4628/products/OrganicTea.jpg?v=1673029444&width=360"
            className={`card-img-top ${classes.imgTop}`}
            alt="..."
          />
          <div className="card-body" style={{ textAlign: "left" }}>
            <h5 className="card-title" style={{ fontSize: "18px" }}>
            Organic Tea
            </h5>
            <p className="card-text" style={{ fontSize: "12px" }}>
            Elevate your tea time with our eco-friendly, organic blend.
            </p>
            <span className="review-rating">★★★★★(6)</span>
            <div>$12.99</div>
          </div>
        </div>
        <div>
              <h6>Quantity</h6>
              <div className={classes.btnplus}>
                <a href="#" className={classes.btn3}>
                  {" "}
                  - 1 +{" "}
                </a>{" "}
              </div>
              </div>
  
        </div>
    </Fragment>
  )
}

export default AddToCart