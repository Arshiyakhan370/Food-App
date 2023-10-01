import React, { Fragment } from 'react'
import classes from "./GiftCard.module.css"
const GiftCard = () => {
  return (
<Fragment>
<section>
      <div className={classes.appContainer}>
        <div>back to menu</div>

        <div className={classes.cardContainer}>
          <div className={classes.imageCard}>
            <div className={classes.imageContainer}>
              <img
                src="https://www.ketodelia.ca/cdn/shop/products/9RH9aAXDbuwgKAweNR1AVCoRShvRrZjB.png?v=1669955876&width=493"
                alt="Image Card"
                className={classes.cardImage}
              />
              <div className={classes.smallbox}>
              <img
                src="https://www.ketodelia.ca/cdn/shop/products/9RH9aAXDbuwgKAweNR1AVCoRShvRrZjB.png?v=1669955876&width=493"
                alt="Image Card"
                className={classes.cardImage1}
              />
              <img
                src="https://www.ketodelia.ca/cdn/shop/products/9RH9aAXDbuwgKAweNR1AVCoRShvRrZjB.png?v=1669955876&width=493"
                alt="Image Card"
                className={classes.cardImage1}
              />
              <img
                src="https://www.ketodelia.ca/cdn/shop/products/9RH9aAXDbuwgKAweNR1AVCoRShvRrZjB.png?v=1669955876&width=493"
                alt="Image Card"
                className={classes.cardImage1}
              />
              </div>
              
            </div>
          </div>
        </div>

        <div className={classes.cardContainer1}>
          <div className={classes.textCard}>
            <h6>KETODELIA RESTAURANT</h6>
            <h2>Ketodelia Restaurant Gift Card </h2>
            <h2>Card</h2>
            <p>$30.00</p>
            <h6>Denominations</h6>
            <button
              style={{
                color: "#3D081B",
                padding: "10px  10px",
                margin:"4px",
                border: "1px solid #3D081B",
                cursor: "pointer",
                borderRadius: "10%  solid #3D081B",
              }}
            >
              CA$30.00
            </button>
            <button
              style={{
                color: "#3D081B",
                padding: "10px 10px",
                margin:"4px",
                border: "1px solid #3D081B",
                cursor: "pointer",
              }}
            >
              CA$50.00
            </button>
            <button
              style={{
                color: "#3D081B",
                padding: "10px 10px",
                margin:"4px",
                border: "1px solid #3D081B",
                cursor: "pointer",
              }}
            >
              CA$75.00
            </button>
            <button
              style={{
                color: "#3D081B",
                padding: "10px 10px",
                margin:"4px",
                border: "1px solid #3D081B",
                cursor: "pointer",
              }}
            >
              CA$100.00
            </button>
            <button
              style={{
                color: "#3D081B",
                padding: "10px 10px",
                margin:"4px",
                border: "1px solid #3D081B",
                cursor: "pointer",
              }}
            >
              CA$150.00
            </button>
            
            <div>
              <h6>Quantity</h6>
              <button
                type="button"
                style={{
                  color: "#3D081B",
                  padding: "10px 20px",
                  margin: "10px",
                  border: "1px solid #3D081B",
                  cursor: "pointer",
                }}
              >
                {" "}
                - 1 +{" "}
              </button>
            </div>
            <button
              type="button"
              style={{
                backgroundColor: "#3D081B",
                color: "#fff",
                padding: "10px 20px",
                margin: "10px",
                border: "1px solid #3D081B",
                cursor: "pointer",
              }}
            >
              {" "}
              Add To Cart
            </button>
          </div>
          <div className={classes.textCard}>
            <p>
            Introducing our versatile Gift Cards, the perfect gift for any food lover in your life. Our Gift Cards can be used towards any menu items at Ketodelia, making it a great gift for birthdays, holidays, or any special occasion.

{/* Our Gift Cards are available in various denominations, so you can choose the amount that best suits your budget. They can also be used for dine-in or take-out, giving the recipient the flexibility to enjoy our delicious Keto-friendly food at their convenience.

Our menu features a wide variety of Keto-friendly options, such as low-carb, high-fat dishes, perfect for those following the ketogenic diet. We have something for everyone, from savory breakfast options to mouthwatering entrees and desserts, all made with the freshest, high-quality ingredients.

Give the gift of delicious, healthy food with our Gift Cards. They are a thoughtful and convenient way to show someone you care. Purchase yours today and share the taste of Keto-friendly food with your loved ones. */}
            </p>
          </div>
        </div>
      </div>

      <h3 className={classes.mostLoved}>You may also like</h3>
      <div className={classes.card1}>
        <div
          className="card"
          style={{
            width: "15rem",
            marginRight: "15px",
            border: "1px solid skyblue",
          }}
        >
          <img
            src="https://cdn.shopify.com/s/files/1/0665/2110/4628/products/ValentinesMiniKetoCheesecake.jpg?v=1675898054&width=360"
            className={`card-img-top ${classes.imgTop}`}
            alt="..."
          />
          <div className="card-body " style={{ textAlign: "left" }}>
            <h5 className="card-title" style={{ fontSize: "18px" }}>
            Mini Heart-Shaped Keto Cheesecake: Perfect for Valentine's Day!
            </h5>
            <p className="card-text" style={{ fontSize: "12px" }}>
            Indulge in this Valentine's Day...
            </p>
           
            <div>$40.99</div>
            <img src='https://labels.sfo3.digitaloceanspaces.com/files/2727Valentine%20love%20badge1676059375.png' style={{width:"40px",height:"40px"}}/>
          </div>
        </div>
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
        <div
          className="card"
          style={{
            width: "15rem",
            marginRight: "15px",
            border: "1px solid skyblue",
          }}
        >
          <img
            src="https://cdn.shopify.com/s/files/1/0665/2110/4628/products/Dairy-freeKetoCoffeeCake.jpg?v=1673029345&width=360"
            className={`card-img-top ${classes.imgTop}`}
            alt="..."
          />
          <div className="card-body" style={{ textAlign: "left" }}>
            <h5 className="card-title" style={{ fontSize: "18px" }}>
            Keto Coffee Cake 
            </h5>
            <p className="card-text" style={{ fontSize: "12px" }}>
            A delicious and rich coffee cake keto friendly and sugar-free...
            </p>
            <span className="review-rating">★★★★★(40)</span>
            <div>$11.99</div>
          </div>
        </div>
        <div
          className="card"
          style={{ width: "15rem", border: "1px solid skyblue" }}
        >
          <img
            src="https://cdn.shopify.com/s/files/1/0665/2110/4628/products/KetoChocolateCake.jpg?v=1673387538&width=360"
            className={`card-img-top ${classes.imgTop}`}
            alt="..."
          />
          <div className="card-body" style={{ textAlign: "left" }}>
            <h5 className="card-title" style={{ fontSize: "18px" }}>
            Keto Chocolate Cake 8”
            </h5>
            <p className="card-text" style={{ fontSize: "12px" }}>
            The perfect treat for chocoholics, this Keto Chocolate Cake ...
            </p>
            <span className="review-rating">★★★★★(40)</span>
            <div>$79.99</div>
            </div>
            </div>
        </div>
        <div className={classes.star}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{  transform: "msFilter" }}
        >
          <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{  transform: "msFilter" }}
        >
          <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{  transform: "msFilter" }}
        >
          <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{  transform: "msFilter" }}
        >
          <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{  transform: "msFilter" }}
        >
          <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
        </svg>
        </div>
            </section>
</Fragment>
  )
}

export default GiftCard