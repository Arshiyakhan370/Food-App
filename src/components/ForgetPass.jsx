import React, { Fragment } from 'react'
 import classes from "./ForgetPass.module.css"
const ForgetPass = () => {
  return (
    <Fragment>
<div className={classes.log}>
    <h1>Reset your password</h1>
    <p>We will send you an email to reset your password</p>
<form>

         <input
           type="email"
           placeholder="Your Email"
           name="email"
           required
         /> 
         <div className={classes.btnBoxFormBtn}>
       <button type="submit" className={classes.btn}>
         Submit
       </button>
      
     </div>
     <h6>Cancel</h6>
         </form>
         </div>
    </Fragment>
  )
}

export default ForgetPass