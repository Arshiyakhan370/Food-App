import React, { Fragment } from 'react'
import classes from "./MainHeading.module.css"

const MainHeading = () => {
  return (
    <Fragment>
        <section className={classes.container}>
        <div className={classes.left}>
            <h1 style={{textAlign:"left",marginLeft:"15%"}}>LESS CARBS, MORE</h1>
            <h1 style={{textAlign:"left",marginLeft:"15%"}}> DELICIOUS...</h1>
            <h4 style={{textAlign:"left",marginLeft:"15%",color:"purple"}}>KETO FRIENDLY • LOW CARB • 100% GLUTEN FREE</h4>
            <button type='button' className={classes.btn}>order online</button>
        </div>
      </section>
    </Fragment>
  )
}

export default MainHeading