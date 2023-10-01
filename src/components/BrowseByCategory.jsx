import React, { Fragment } from "react";
import classes from "./BrowseByCategory.module.css";

const BrowseByCategory = () => {
  const mostLoved = [
    {
      id: "a1",
      img: "https://www.ketodelia.ca/cdn/shop/products/AlmondFlourWaffles.jpg?v=1673029390&width=330",
      title: "Almond Flour Belgian Waffle ",
    },
    {
      id: "a2",
      img: "https://www.ketodelia.ca/cdn/shop/products/CreamyMushroomFettuccineAlfredo.jpg?v=1673029366&width=330",
      title: "Keto Pasta",
    },
    {
      id: "a3",
      img: "https://www.ketodelia.ca/cdn/shop/products/ketogardenveggiepizza.jpg?v=1673293248&width=330",
      title: "Keto pizza",
    },
    {
      id: "a4",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoChickenTenders.jpg?v=1673029425&width=330",
      title: "Keto mains",
    },
  ];

  return (
    <Fragment>
      <section>
        <h1 className={classes.BrowseByCategory}>Browse by Category</h1>
        <div className={classes.card1}>
          {mostLoved.map((data) => {
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
                  <h5 className="card-title" style={{ fontSize: "12px" }}>
                    {data.title}{" "}
                  </h5>
                </div>
              </div>
            );
          })}
          {/*  */}
        </div>
      </section>
    </Fragment>
  );
};

export default BrowseByCategory;
