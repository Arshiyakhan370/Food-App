import React, { Fragment } from 'react'
import classes from "./CartPage.module.css"
const CartPage = () => {
  return (
   <Fragment>
<div className={classes.log}>
    <h1>Your cart is empty</h1>
    
<form>
         <div className={classes.btnBoxFormBtn}>
       <button type="button" className={classes.btn}>
         Back to menu
       </button>
      
     </div>
     <h6>Have an account?</h6>
     <p>Log in to check out faster.</p>
         </form>
         </div>
   </Fragment>
  )
}

export default CartPage