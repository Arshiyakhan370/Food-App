import React, { Fragment, useState } from 'react'
import classes from "./CreateAccount.module.css"
const CreateAccount = () => {
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

  return (
    <Fragment>
        <div className={classes.log}>
    <h1>Create account</h1>

    
<form>

         <input
           type="text"
           placeholder="Your Name"
           name="First Name"
           required
         /> 
          <input
           type="text"
           placeholder="Your Name"
           name="Last Name"
           required
         /> 
          <input
           type="email"
           placeholder="Your Email"
           name="email"
           required
         /> 
          <input
           type="password"
           placeholder="password"
           name="Password"
           required
         /> 
         <div className={classes.btnBoxFormBtn}>
       <button type="submit" className={classes.btn}>
         Submit
       </button>
      
     </div>
     
         </form>
         </div>
    </Fragment>
  ) 
};

export default CreateAccount