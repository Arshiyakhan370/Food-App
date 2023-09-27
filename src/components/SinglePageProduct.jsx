import React from "react";
import classes from "./SinglePageProduct.module.css";
function SinglePageProduct() {
  return (
    <section>
      <div className={classes.appContainer}>
        <div>back to menu</div>

        <div className={classes.cardContainer}>
          <div className={classes.imageCard}>
            <div className={classes.imageContainer}>
              <img
                src="https://www.ketodelia.ca/cdn/shop/products/cauliflowerbites.jpg?v=1673029354&width=493"
                alt="Image Card"
                className={classes.cardImage}
              />
            </div>
          </div>
        </div>

        <div className={classes.cardContainer1}>
          <div className={classes.textCard}>
            <h6>KETODELIA RESTAURANT</h6>
            <h2>Air Fried Keto Buffalo </h2>
            <h2>Cauliflower Bites</h2>
            <p>$12.95</p>
            <h6>Choose your sauce</h6>
            <button
              style={{
                color: "#3D081B",
                padding: "10px 20px",
                margin: "10px",
                border: "1px solid #3D081B",
                cursor: "pointer",
                borderRadius: "10%  solid #3D081B",
              }}
            >
              Ranch
            </button>
            <button
              style={{
                color: "#3D081B",
                padding: "10px 20px",
                margin: "10px",
                border: "1px solid #3D081B",
                cursor: "pointer",
              }}
            >
              Marinara
            </button>
            <button
              style={{
                color: "#3D081B",
                padding: "10px 20px",
                margin: "10px",
                border: "1px solid #3D081B",
                cursor: "pointer",
              }}
            >
              Texas BBQ
            </button>
            <button
              style={{
                color: "#3D081B",
                padding: "10px 20px",
                margin: "10px",
                border: "1px solid #3D081B",
                cursor: "pointer",
              }}
            >
              Caesar
            </button>
            <button
              style={{
                color: "#3D081B",
                padding: "10px 20px",
                margin: "10px",
                border: "1px solid #3D081B",
                cursor: "pointer",
              }}
            >
              Blue Cheese
            </button>
            <button
              style={{
                color: "#3D081B",
                padding: "10px 20px",
                margin: "10px",
                border: "1px solid #3D081B",
                cursor: "pointer",
              }}
            >
              No Sauce
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
              Lightly battered organic cauliflower tossed in homemade buffalo
              sauce with your choice of homemade keto dressing. Air Fried.
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
            src="https://www.ketodelia.ca/cdn/shop/products/cauliflowerbites.jpg?v=1673029354&width=533"
            className={`card-img-top ${classes.imgTop}`}
            alt="..."
          />
          <div className="card-body " style={{ textAlign: "left" }}>
            <h5 className="card-title" style={{ fontSize: "18px" }}>
              Air Fried Keto Buffalo Cauliflower Bites
            </h5>
            <p className="card-text" style={{ fontSize: "12px" }}>
              Lightly battered organic cauliflower tossed in homemade buffalo
              sauce with .
            </p>
            <span className="review-rating">★★★★★(4)</span>
            <div>$120</div>
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
            src="https://www.ketodelia.ca/cdn/shop/products/ketochickensoup.jpg?v=1673029356"
            className={`card-img-top ${classes.imgTop}`}
            alt="..."
          />
          <div className="card-body" style={{ textAlign: "left" }}>
            <h5 className="card-title" style={{ fontSize: "18px" }}>
              Keto Chicken Soup
            </h5>
            <p className="card-text" style={{ fontSize: "12px" }}>
              Our Keto Chicken Soup is made with homemade organic farmers
              chicken and{" "}
            </p>
            <span className="review-rating">★★★★★(6)</span>
            <div>$126</div>
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
            src="https://www.ketodelia.ca/cdn/shop/products/NoSugarCheesecake.jpg?v=1673029341&width=533"
            className={`card-img-top ${classes.imgTop}`}
            alt="..."
          />
          <div className="card-body" style={{ textAlign: "left" }}>
            <h5 className="card-title" style={{ fontSize: "18px" }}>
              Keto Cheesecake
            </h5>
            <p className="card-text" style={{ fontSize: "12px" }}>
              A classic cheesecake, made Keto-friendly. Deliciously rich and
              creamy with{" "}
            </p>
            <span className="review-rating">★★★★★(40)</span>
            <div>$100</div>
          </div>
        </div>
        <div
          className="card"
          style={{ width: "15rem", border: "1px solid skyblue" }}
        >
          <img
            src="https://www.ketodelia.ca/cdn/shop/products/KetoBagelsCheddarJalapeno.jpg?v=1679087800&width=533"
            className={`card-img-top ${classes.imgTop}`}
            alt="..."
          />
          <div className="card-body" style={{ textAlign: "left" }}>
            <h5 className="card-title" style={{ fontSize: "18px" }}>
              Keto Bagel Cheddar Jalapeno - 4 pack
            </h5>
            <p className="card-text" style={{ fontSize: "12px" }}>
              Our cheddar jalapeno bagels are made of almond flour, mozzarella
              and cream cheese.
            </p>
            <span className="review-rating">★★★★★(14)</span>
            <div>$180</div>
          </div>
        </div>
      </div>
      <div className={classes.star}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: "#8c8980", transform: "msFilter" }}
        >
          <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: "#8c8980", transform: "msFilter" }}
        >
          <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: "#8c8980", transform: "msFilter" }}
        >
          <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: "#8c8980", transform: "msFilter" }}
        >
          <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
        </svg>{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: "#8c8980", transform: "msFilter" }}
        >
          <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
        </svg>{" "}
        4 Reviews
      </div>

      <div className={classes.card2}>
        <div
          className="card"
          style={{
            width: "15rem",
            marginRight: "15px",
            border: "1px solid grey",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="card-body " style={{ textAlign: "left" }}>
            <h3>Keven D.</h3>
            <span className="review-rating">★★★★☆</span>
            <p className="card-text" style={{ fontSize: "12px" }}>
              Excellent With ranch sauce, it is excellent. I would not say no to
              more spicy though !
            </p>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "15rem",
            marginRight: "15px",
            border: "1px solid grey",
          }}
        >
          <div className="card-body " style={{ textAlign: "left" }}>
            <h3>Keven D.</h3>
            <span className="review-rating">★★★★☆</span>

            <p className="card-text" style={{ fontSize: "12px" }}>
              Perfect Perfect as usual, always a go to when I come in Toronto
              for work !
            </p>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "15rem",
            marginRight: "15px",
            border: "1px solid grey",
          }}
        >
          <div className="card-body " style={{ textAlign: "left" }}>
            <h3>Katiya.</h3>
            <span className="review-rating">★★★★☆</span>

            <p className="card-text" style={{ fontSize: "12px" }}>
              Full of flavor Full of flavor and a great serving size. Made you
              feel like you were being naughty.
            </p>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "15rem",
            marginRight: "15px",
            border: "1px solid grey",
          }}
        >
          <div className="card-body " style={{ textAlign: "left" }}>
            <h3>Lila</h3>
            <span className="review-rating">★★★★☆</span>

            <p className="card-text" style={{ fontSize: "12px" }}>
              Thank you Ketodelia for the your Air Fried Buffalo Cauliflower &
              Blue cheese dip. It could have been better crispier, however
              delicious. Next time I will reheat it in my Air Fryer. Even though
              we're not cauliflower lovers, we loved it & enjoyed it
              tremendously. Looking forward to my next order.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SinglePageProduct;
