import React, { Fragment } from 'react'
import classes from "./MainHeading.module.css"

const MainHeading = () => {
  return (
    <Fragment>
        <section className={classes.container}>
        <div className={classes.left}>
            <h2 style={{textAlign:"left",marginLeft:"20%"}}>LESS CARBS, MORE</h2>
            <h2 style={{textAlign:"left",marginLeft:"20%"}}> DELICIOUS...</h2>
            <p style={{textAlign:"left",marginLeft:"20%"}}>KETO FRIENDLY • LOW CARB • 100% GLUTEN FREE</p>
            <button type='button' className={classes.btn}>order online</button>
        </div>
        
      </section>
      
    </Fragment>
  )
}

export default MainHeading