import React, { Fragment, useEffect, useState } from "react";
import classes from "./MostLoved.module.css";
import images from "./images (1).jpg";
import { Link } from "react-router-dom";

const MostLoved = () => {
  const mostLoved = [
    {
      id: "a1",
      img: "https://www.ketodelia.ca/cdn/shop/products/cauliflowerbites.jpg?v=1673029354&width=533",
      title: "Air Fried Keto Buffalo Cauliflower Bites",
      description:
        "Lightly battered organic cauliflower  ...",
      price: 12.99,
    },
    {
      id: "a2",
      img: "https://www.ketodelia.ca/cdn/shop/products/ketochickensoup.jpg?v=1673029356",
      title: "Keto Chicken Soup",
      description:
        "Our Keto Chicken Soup is made with homemade ...",
      price: 15.99,
    },
    {
      id: "a3",
      img: "https://www.ketodelia.ca/cdn/shop/products/NoSugarCheesecake.jpg?v=1673029341&width=360",
      title: "Keto Cheesecake",
      description:
        "A classic cheesecake, made Keto-friendly ...",
      price: 12.99,
    },
    {
      id: "a4",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoBagelsCheddarJalapeno.jpg?v=1679087800&width=360",
      title: "Keto Bagel Cheddar Jalapeno - 4 pack",
      description:
        "Our cheddar jalapeno bagels are made ...",
      price: 23.99,
    },
  ];

  return (
    <Fragment>
      <section>
        <h1 className={classes.mostLoved}>Most Loved</h1>
        <div className={classes.card1}>
          {/* cart start */}
          {mostLoved.map((data) => {
            return (
              <div key={data.id}
                className={classes.card}
                
              >
              <Link to={`/${data.id}`}>
                <img
                  src={data.img}
                  className={`card-img-top ${classes.imgTop}`}
                  alt="..."
                /></Link>
                <div className="card-body " style={{ textAlign: "left" }}>
                  <h6 className="card-title" style={{ fontSize: "13px" }}>
                    {data.title}
                  </h6>
                  <p className="card-text" style={{ fontSize: "10px" }}>
                    {data.description}
                  </p>
                  <span className="review-rating">★★★★★(6)</span>
                  <div>${data.price}</div>
                </div>
              </div>
            );
          })}
          {/* card ended */}
        </div>
      </section>
    </Fragment>
  );
};

export default MostLoved;
