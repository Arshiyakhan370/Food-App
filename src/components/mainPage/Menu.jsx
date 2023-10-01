import React, { Fragment } from 'react'
import classes from "./menu.module.css"

const Menu = () => {
  const menuPage1= [
   
  {
    id: "a1",
    img: "https://www.ketodelia.ca/cdn/shop/products/AlmondFlourWaffles.jpg?v=1673029390&width=360",
    title: "Keto Pepperoni Pizza Bites",
    description:
      "Crisp, golden bites of pepperoni pizza are a delicious addition...",
    price: 9.99,
  },
  {
    id: "a2",
    img: "https://www.ketodelia.ca/cdn/shop/files/shrimpguacamolecucumberbites.jpg?v=1691451964&width=360",
    title: "Gourmet Shrimp Guacamole Bites",
    description:
      "Six Extra Jumbo Black Tiger Shrimps, layered on crisp cucumber...",
    price: 22.99,
  },
  {
    id: "a3",
    img: "https://www.ketodelia.ca/cdn/shop/products/grilledhalloumicheese.jpg?v=1673029374&width=360",
    title: "Grilled Halloumi Cheese",
    description:
      "Grilled halloumi cheese and organic tomatoes served on ...",
    price: 12.99,
  },
  {
    id: "a4",
    img: "https://www.ketodelia.ca/cdn/shop/products/organicchickenwings.jpg?v=1673049924&width=360",
    title: "Local Free Range Air Fried Keto Chicken Wings",
    description:
      "7 air-fried organic farm chicken wings with a side of celery sticks....",
    price: 19.99,
  },
  {
    id: "a5",
    img: "https://www.ketodelia.ca/cdn/shop/products/KetoSalmonSushiRoll.jpg?v=1673029360&width=360",
    title: "Keto Salmon Sushi Roll (8 pcs.)",
    description:
      "Cauliflower rice, cream cheese, smoked salmon, organic avocado,...",
    price: 12.99,
  },
  {
    id: "a6",
    img: "https://www.ketodelia.ca/cdn/shop/products/cauliflowerbites.jpg?v=1673029354&width=360",
    title: "Air Fried Keto Buffalo Cauliflower Bites",
    description:
      "Lightly battered organic cauliflower tossed in homemade buffalo...",
    price: 12.99,
  },
  {
    id: "a7",
    img: "https://www.ketodelia.ca/cdn/shop/products/KetoLasagna_34fcd752-5d4b-4ccd-a3f3-515c488130b7.jpg?v=1673300561&width=360",
    title: "Keto Lasagna Hearts of Palm",
    description:
      "Noodles made from hearts of palm make for the perfect low-carb...",
    price: 14.99,
  },
];


   const menuPage= [
      
    {
      id: "a1",
      img: "https://www.ketodelia.ca/cdn/shop/products/AlmondFlourWaffles.jpg?v=1673029390&width=360",
      title: "Almond Flour Belgian Waffle",
      description:
        "Our almond flour waffles are crispy on the outside, and tender  ...",
      price: 10.99,
    },
    {
      id: "a2",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoLoxandCreamCheeseBagel.jpg?v=1673029393&width=360",
      title: "Keto Lox and Cream Cheese Bagel",
      description:
        "Keto bagel (almond flour and mozzarella), cream cheese and premium...",
      price: 12.99,
    },
    {
      id: "a3",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoStrawberryJam.png?v=1673029403&width=360",
      title: "Keto Strawberry Jam",
      description:
        "Our Keto Strawberry Jam is delicious on just about everything. It's...",
      price: 8.99,
    },
    {
      id: "a4",
      img: "https://www.ketodelia.ca/cdn/shop/products/RaspberryChiaPudding.jpg?v=1673029406&width=360",
      title: "Keto Raspberry Chia Pudding",
      description:
        "Our keto pudding is made of fresh raspberries, chia seeds and 35% whipping cream....",
      price: 15.99,
    },
    {
      id: "a5",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoBagelsCheddarJalapeno.jpg?v=1679087800&width=360",
      title: "Keto Bagel Cheddar Jalapeno - 4 pack",
      description:
        "Our cheddar jalapeno bagels are made of almond flour, mozzarella...",
      price: 23.99,
    },
    {
      id: "a6",
      img: "https://www.ketodelia.ca/cdn/shop/products/BlueberryKetoBagels.jpg?v=1679087774&width=360",
      title: "Keto Bagel Blueberry - 4 pack",
      description:
        "Our blueberry keto bagels are made of almond flour, mozzarella,....",
      price: 23.99,
    }, 
    {
      id: "a7",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoBagelsAssorted.jpg?v=1679087749&width=360",
      title: "Assorted Keto Bagels - 4 Pack",
      description:
        "Our keto bagels are made of almond flour, mozzarella and cream cheese....",
      price: 23.99,
    },
    {
      id: "a8",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoBagelsCheddarJalapeno.jpg?v=1679087800&width=360",
      title: "Keto Bagel Cheddar Jalapeno - 4 pack",
      description:
        "Our keto bagels are made of....",
      price: 23.99,
    },
     {
      id: "a9",
      img: "https://www.ketodelia.ca/cdn/shop/products/HalalTurkeyBaconWrappedKetoBagels.jpg?v=1679087926&width=360",
      title: "Keto Bagel Turkey Bacon Wrapped 4 Pack",
      description:
        "Our bacon wrapped keto bagels  ....",
      price: 23.99,
    },
    {
      id: "a10",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoCinnamonBagels.jpg?v=1678745477&width=360",
      title: "Keto Cinnamon Sugar (No Sugar) Bagels - 4 pack",
      description:
        "Our bacon wrapped keto bagels  ...",
      price: 23.99,
    },
  ];
  const menuPage2= [
   
  {
    id: "a1",
    img: "https://www.ketodelia.ca/cdn/shop/products/avocadogreensalad.jpg?v=1665715489&width=360",
    title: "Green Garden Avocado Salad",
    description:
      "Organic avocado, spring mix, tomatoes, and homemade Caesar...",
    price: 12.99,
  },
  {
    id: "a2",
    img: "https://www.ketodelia.ca/cdn/shop/products/GrilledCaesarSalad.jpg?v=1673292810&width=360",
    title: "Grass Fed Grilled Steak Salad",
    description:
      "Grass-fed top sirloin, organic romaine lettuce, arugula, red onion,...",
    price: 19.99,
  },
  {
    id: "a3",
    img: "https://www.ketodelia.ca/cdn/shop/products/smokedsalmonsalad.jpg?v=1673029468&width=360",
    title: "Smoked Salmon Avocado Salad",
    description:
      "Atlantic Salmon, organic avocado, arugula, free-run hard-boiled ...",
    price: 18.99,
  },
  {
    id: "a4",
    img: "https://www.ketodelia.ca/cdn/shop/products/grilledsteaksalad.jpg?v=1669748820&width=360",
    title: "Organic Free Range Grilled Caesar Salad",
    description:
    "Organic farm chicken breast, romaine lettuce, grated parmesan,....",
    price: 18.99,
  },
  
];
  
  return (
    <Fragment>
<div className={classes.header}><h6 style={{marginTop:"2%"}}>Order for pickup or delivery in Toronto and nearby. Delivery minimum $25, ETA 45 mins-1.5 hrs, depending on location. Orders outside of Toronto delivered next day.</h6></div>
    <div className={classes.text}><h3 style={{color:'#3D081B'}}>Appetizers</h3></div>
        
          <div className={classes.verticalBox}>
  {
    menuPage1.map((data1)=>{
      return (
        <div className={classes.box}>
    <div className={classes.card}>
      <div className={classes.horizontalLayout}>
        <div className={classes.textSide}>
          <h6>{data1.title}</h6>
          <p>{data1.description}</p>
          <span className="review-rating">★★★★★(4)</span>
          <div>${data1.price}</div>
          <button type='button' className={classes.btn} >
              Add to Cart
            </button>
        </div>
        <div className={classes.imageSide}>
          <img src={data1.img} alt="Image" />
        </div>
        </div>
      </div>
  </div>
      )
    })
  }
  
    </div>
  <div className={classes.text}><h3 style={{color:'#3D081B'}}>Keto Breakfast</h3> </div>
  <div className={classes.verticalBox}>
  {
    menuPage.map((data)=>{
      return (
       
  <div className={classes.box}>
    <div className={classes.card}>
      <div className={classes.horizontalLayout}>
        <div className={classes.textSide}>
          <h6>{data.title}</h6>
          <p>{data.description}</p>
          <span className="review-rating">★★★★★(4)</span>
          <div>${data.price}</div>
          <button type='button' className={classes.btn} >
              Add to Cart
            </button>
        </div>
        <div className={classes.imageSide}>
          <img src={data.img} alt="Image" />
        </div>
        </div>
      </div>
  </div>

      )
    })
  }
    
    </div>
    <div className={classes.text}><h3 style={{color:'#3D081B'}}>Salad</h3> </div>
  <div className={classes.verticalBox}>
  {
    menuPage2.map((data2)=>{
      return (
       
  <div className={classes.box}>
    <div className={classes.card}>
      <div className={classes.horizontalLayout}>
        <div className={classes.textSide}>
          <h6>{data2.title}</h6>
          <p>{data2.description}</p>
          <span className="review-rating">★★★★★(4)</span>
          <div>${data2.price}</div>
          <button type='button' className={classes.btn} >
              Add to Cart
            </button>
        </div>
        <div className={classes.imageSide}>
          <img src={data2.img} alt="Image" />
        </div>
        </div>
      </div>
  </div>

      )
    })
  }
    
    </div>
    </Fragment>
  )
}

export default Menu
