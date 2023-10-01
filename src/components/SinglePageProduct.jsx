import React from "react";
import classes from "./SinglePageProduct.module.css";
function SinglePageProduct() {
  const singleProduct = [
    {
      id: "a1",
      img: "https://cdn.shopify.com/s/files/1/0665/2110/4628/products/KetoPestoPizza.jpg?v=1673297490&width=360",
      title: "Keto Pesto Pizza",
      description:
        "Almond crust, organic peppers, onions, goat cheese, mozzarella, homemade basil pesto sauce. ...",
      price: 12.99,
    },
    {
      id: "a2",
      img: "https://www.ketodelia.ca/cdn/shop/products/ketochickensoup.jpg?v=1673029356",
      title: "Keto Chicken Soup",
      description:
        "Our Keto Chicken Soup is made with homemade organic farmers chicken and cauliflower rice...",
      price: 15.99,
    },
    {
      id: "a3",
      img: "https://cdn.shopify.com/s/files/1/0665/2110/4628/products/KetoChickenTenders.jpg?v=1673029425&width=360",
      title: "Air Fried Keto Chicken Tenders",
      description:
        "Air fried chicken tenderloins tossed in almond flour and spices with your choice of side and keto dressing. ...",
      price: 23.99,
    },
    {
      id: "a4",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoBagelsCheddarJalapeno.jpg?v=1679087800&width=360",
      title: "Keto Bagel Cheddar Jalapeno - 4 pack",
      description:
        "Our cheddar jalapeno bagels are made of almond flour, mozzarella...",
      price: 23.99,
    },
  ];

  return (
    <section>
      <div className={classes.back}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: "#8c8980", transform: "msFilter" }}
        >
          <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
        </svg>{" "}
        Back to Menu
      </div>

      <div className={classes.appContainer}>
        <div className={classes.cardContainer}>
          <div className={classes.imageCard}>
            <div className={classes.imageContainer}>
              <img
                src="https://www.ketodelia.ca/cdn/shop/products/cauliflowerbites.jpg?v=1673029354&width=493"
                alt="Image Card"
                className={classes.cardImage}
              />
              <div className={classes.mini}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ fill: "#3D081B", transform: "msFilter" }}
                >
                  <path d="M6 9h8v2H6z"></path>
                  <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.cardContainer1}>
          <div className={classes.textCard}>
            <h6>KETODELIA RESTAURANT</h6>
            <h2>Air Fried Keto Buffalo </h2>
            <h2>Cauliflower Bites</h2>
            <p>$12.95</p>
            <span className="" style={{ color: "grey", fontSize: "large" }}>
              ★★★★★(4)
            </span>
            <h6>Choose your sauce</h6>
            <div class="btn-box"></div>
            <div className={classes.btn1}>
              <a href="#" className={classes.btn2}>
                Ranch
              </a>
              <a href="#" className={classes.btn2}>
                Marinara
              </a>
              <a href="#" className={classes.btn2}>
                Texas BBQ
              </a>
              <a href="#" className={classes.btn2}>
                Caesar
              </a>
              <a href="#" className={classes.btn2}>
                Blue Cheese
              </a>
              <a href="#" className={classes.btn2}>
                {" "}
                No Sauce
              </a>
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
            <div className={classes.mainButton}>
              <button type="button"> Add To Cart</button>
            </div>
          </div>
          <div className={classes.textCard}>
            <p>
              Lightly battered organic cauliflower tossed in homemade buffalo
              sauce with your choice of homemade keto dressing. Air Fried.
            </p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "#3D081B", transform: "msFilter" }}
              >
                <path d="M12 22a9.83 9.83 0 0 1-3.26-.55 2.23 2.23 0 0 0-1.7.19 3.51 3.51 0 0 1-2.47.24 3.55 3.55 0 0 1-2.45-2.45A3.51 3.51 0 0 1 2.36 17a2.23 2.23 0 0 0 .19-1.7 10.07 10.07 0 0 1 0-6.53 9.87 9.87 0 0 1 6.18-6.23 10.07 10.07 0 0 1 6.53 0A2.23 2.23 0 0 0 17 2.36a3.51 3.51 0 0 1 2.47-.24 3.55 3.55 0 0 1 2.45 2.45A3.51 3.51 0 0 1 21.64 7a2.23 2.23 0 0 0-.19 1.7 10.07 10.07 0 0 1 0 6.53 9.87 9.87 0 0 1-6.19 6.19A10.33 10.33 0 0 1 12 22zm-3.84-2.64a3.91 3.91 0 0 1 1.23.2 8 8 0 0 0 5.24 0 7.84 7.84 0 0 0 4.94-4.93 8 8 0 0 0 0-5.24 4.19 4.19 0 0 1 .29-3.23 1.53 1.53 0 0 0 .09-1.08 1.49 1.49 0 0 0-1-1 1.53 1.53 0 0 0-1.08.09 4.19 4.19 0 0 1-3.23.29 8 8 0 0 0-5.24 0 7.84 7.84 0 0 0-4.97 4.91 8 8 0 0 0 0 5.24 4.19 4.19 0 0 1-.29 3.23 1.53 1.53 0 0 0-.09 1.08 1.49 1.49 0 0 0 1 1 1.53 1.53 0 0 0 1.08-.09 4.47 4.47 0 0 1 2.03-.47z"></path>
                <path d="M8 12H6a6 6 0 0 1 6-6v2a4 4 0 0 0-4 4z"></path>
              </svg>{" "}
              Ingredinent
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "#3D081B", transform: "msFilter" }}
              >
                <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path>
              </svg>
              {"  "}
              Nutritional Info
            </div>
            <div>
              {"  "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "#3D081B", transform: "msFilter" }}
              >
                <path d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z"></path>
              </svg>
              {"  "}
              Share
            </div>
          </div>
        </div>
      </div>

      <h3 className={classes.mostLoved}>You may also like</h3>
      <div className={classes.card1}>
        {singleProduct.map((data) => {
          return (
            <div
              className="card"
              style={{
                width: "15rem",
                marginRight: "15px",
                border: "1px solid skyblue",
              }}
            >
              <img
                src={data.img}
                className={`card-img-top ${classes.imgTop}`}
                alt="..."
              />
              <div className="card-body " style={{ textAlign: "left" }}>
                <h5 className="card-title" style={{ fontSize: "18px" }}>
                  {data.title}
                </h5>
                <p className="card-text" style={{ fontSize: "12px" }}>
                  {data.description}
                </p>
                <span className="review-rating">★★★★★(4)</span>
                <div>{data.price}</div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className={classes.star}>
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
        4 Reviews{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: "black", transform: "msFilter" }}
        >
          <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
        </svg>{""}
        Write Review
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: "black", transform: "msFilter" }}
        >
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
        </svg>
      </div> */}
      <div className={classes.star} style={{ display: 'flex', alignItems: 'center' }}>
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
  4 Reviews{" "}
  <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: "black", transform: "msFilter" }}
        >
          <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
        </svg>{""}
  <button
    style={{
      background: 'transparent',
      border:" 1px solid grey",
      cursor: 'pointer',
      marginLeft: 'auto', // Pushes the button to the right
      display: 'flex',
      alignItems: 'center',
      boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",
    }}
  >
    
    Write Review
  </button>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ fill: 'black', transform: 'msFilter' }}
    >
      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
    </svg>
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
