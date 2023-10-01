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
const ketoPizza= [
   
  {
    id: "a1",
    img: "https://www.ketodelia.ca/cdn/shop/products/ketogardenveggiepizza.jpg?v=1673293248&width=360",
    title: "Garden Veggie Keto Pizza",
    description:
      "Almond crust, organic peppers, mushrooms and tomatoes,...",
    price: 11.99,
  },
  {
    id: "a2",
    img: "https://www.ketodelia.ca/cdn/shop/products/ketopepperonipizza.jpg?v=1673297218&width=360",
    title: "Pepperoni Keto Pizza",
    description:
      "Almond crust, halal turkey pepperoni, organic garlic, tomatoes,...",
    price: 12.99,
  },
  {
    id: "a3",
    img: "https://www.ketodelia.ca/cdn/shop/products/GrilledChickenKetoPizza.jpg?v=1673029384&width=493",
    title: "Organic Free Range Grilled Chicken Pizza",
    description:
      "Almond crust, organic farm chicken, red pepper, red onion, cheese...",
    price: 13.99,
  },
  {
    id: "a4",
    img: "https://www.ketodelia.ca/cdn/shop/products/KetoPestoPizza.jpg?v=1673297490&width=360",
    title: "Keto Pesto Pizza",
    description:
      "Almond crust, organic peppers, onions, goat cheese, mozzarella,....",
    price: 12.99,
  },
  {
    id: "a5",
    img: "https://www.ketodelia.ca/cdn/shop/products/GrilledSteakhousePizza.jpg?v=1673297710&width=360",
    title: "Grass Fed Grilled Steakhouse Keto Pizza",
    description:
      "Almond crust, 100% grass fed steak, mozzarella, portobello...",
    price: 13.99,
  },
  {
    id: "a6",
    img: "https://www.ketodelia.ca/cdn/shop/products/KetoGrilledSalmonPizza.png?v=1673298254&width=360",
    title: "Grilled Salmon Keto Pizza",
    description:
      "Almond crust, Atlantic salmon, organic red onion, red pepper...",
    price: 12.99,
  },
  {
    id: "a7",
    img: "https://www.ketodelia.ca/cdn/shop/products/CheeseFlatbreadKhachapuri.jpg?v=1673298493&width=360",
    title: "Keto Cheese Flatbread Khachapuri (Georgian Flatbread) - for 2 people",
    description:"Almond mozzarella pie with 3 cheese stuffing, oven baked with egg...",
    price: 25.99,
  },
];
const soupPage=[
  {
    id: "a1",
    img: "https://www.ketodelia.ca/cdn/shop/products/ketochickensoup.jpg?v=1673029356",
    title: "Keto Chicken Soup",
    description:
      "Our Keto Chicken Soup is made with homemade organic farmers chicken and cauliflower rice...",
    price: 15.99,
  },
] 
const ketoBurger= [
   
  {
    id: "a1",
    img: "https://www.ketodelia.ca/cdn/shop/products/KetoChickenBurger.jpg?v=1673029418&width=360",
    title: "Keto Chicken Burger",
    description:
      "Psyllium almond bun, chicken patty, tomato, onion, lettuce and...",
    price: 15.99,
  },
  {
    id: "a2",
    img: "https://www.ketodelia.ca/cdn/shop/products/KetoPortobelloBurger.jpg?v=1669778521&width=360",
    title: "Portobello Mushroom Keto Burger (Vegetarian)",
    description:
      "Psyllium almond bun, portobello mushroom, homemade mayo,...",
    price: 13.99,
  },
  {
    id: "a3",
    img: "https://www.ketodelia.ca/cdn/shop/products/BlueCheeseKetoBurger.jpg?v=1673300226&width=360",
    title: "Local Grass Fed Blue Cheese Burger",
    description:
      "Psyllium almond bun, 100% Grass fed beef patty, blue cheese,...",
    price: 20.99,
  },
  {
    id: "a4",
    img: "https://www.ketodelia.ca/cdn/shop/products/ClassicKetoGlutenFreeBurger.jpg?v=1673029421&width=360",
    title: "Local Grass Fed Classic Keto Burger",
    description:
      "Psyllium almond bun, 100% grass fed beef patty, homemade mayo,....",
    price: 19.99,
  },
  {
    id: "a5",
    img: "https://www.ketodelia.ca/cdn/shop/products/sauteedmushroomsketoburger.jpg?v=1673299556&width=360",
    title: "Local Grass Fed Sautéed Mushrooms Keto Burger",
    description:
      "Psyllium almond bun, 100% grass fed beef patty, homemade mayo,...",
    price: 25.99,
  },
  {
    id: "a6",
    img: "https://www.ketodelia.ca/cdn/shop/products/KetoCheeseburger.jpg?v=1673299276&width=360",
    title: "Local Grass Fed Keto Cheeseburger",
    description:
      "Psyllium almond bun, 100% Grass fed beef patty, Swiss or Cheddar...",
    price: 20.99,
  },
  
];
const ketoPasta= [
   
  {
    id: "a1",
    img: "https://www.ketodelia.ca/cdn/shop/products/CreamyMushroomFettuccineAlfredo.jpg?v=1673029366&width=360",
    title: "Creamy Mushroom Fettuccine Alfredo Shirataki",
    description:
      "Alfredo sauce and portobello mushrooms tossed with organic konjac...",
    price: 19.99,
  },
  {
    id: "a2",
    img: "https://www.ketodelia.ca/cdn/shop/products/KetoSpaghettiBolognese.jpg?v=1673300950&width=360",
    title: "Keto Spaghetti Bolognese",
    description:
      "Organic konjac noodles tossed with a rich meat sauce - made with...",
    price: 22.99,
  },
  {
    id: "a3",
    img: "https://www.ketodelia.ca/cdn/shop/products/GrilledSalmonSpagettiShiratakiPasta.jpg?v=1673300891&width=360",
    title: "Grilled Salmon Spaghetti Shirataki",
    description:
      "Creamy sauce, spinach, roasted garlic, Atlantic salmon pieces, tossed...",
    price: 25.99,
  },
  {
    id: "a4",
    img: "https://www.ketodelia.ca/cdn/shop/products/GarlicShrimpZiti.png?v=1673301020&width=360",
    title: "Konjac Garlic Shrimp Fettuccine",
    description:
      "Homemade garlic sauce and jumbo shrimps with fettuccine style....",
    price: 19.99,
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
    <div className={classes.text}><h3 style={{color:'#3D081B'}}>Soup</h3> </div>
  <div className={classes.verticalBox}>
  {
    soupPage.map((data3)=>{
      return (
       
  <div className={classes.box}>
    <div className={classes.card}>
      <div className={classes.horizontalLayout}>
        <div className={classes.textSide}>
          <h6>{data3.title}</h6>
          <p>{data3.description}</p>
          <span className="review-rating">★★★★★(4)</span>
          <div>${data3.price}</div>
          <button type='button' className={classes.btn} >
              Add to Cart
            </button>
        </div>
        <div className={classes.imageSide}>
          <img src={data3.img} alt="Image" />
        </div>
        </div>
      </div>
  </div>

      )
    })
  }
    
    </div>
    <div className={classes.text}><h3 style={{color:'#3D081B'}}>Keto Pizzas</h3> </div>
  <div className={classes.verticalBox}>
  {
    ketoPizza.map((data4)=>{
      return (
       
  <div className={classes.box}>
    <div className={classes.card}>
      <div className={classes.horizontalLayout}>
        <div className={classes.textSide}>
          <h6>{data4.title}</h6>
          <p>{data4.description}</p>
          <span className="review-rating">★★★★★(4)</span>
          <div>${data4.price}</div>
          <button type='button' className={classes.btn} >
              Add to Cart
            </button>
        </div>
        <div className={classes.imageSide}>
          <img src={data4.img} alt="Image" />
        </div>
        </div>
      </div>
  </div>

      )
    })
  }
    
    </div>
    <div className={classes.text}><h3 style={{color:'#3D081B'}}>Keto Burgers</h3> </div>
  <div className={classes.verticalBox}>
  {
    ketoBurger.map((data5)=>{
      return (
       
  <div className={classes.box}>
    <div className={classes.card}>
      <div className={classes.horizontalLayout}>
        <div className={classes.textSide}>
          <h6>{data5.title}</h6>
          <p>{data5.description}</p>
          <span className="review-rating">★★★★★(4)</span>
          <div>${data5.price}</div>
          <button type='button' className={classes.btn} >
              Add to Cart
            </button>
        </div>
        <div className={classes.imageSide}>
          <img src={data5.img} alt="Image" />
        </div>
        </div>
      </div>
  </div>

      )
    })
  }
    
    </div>
    <div className={classes.text}><h3 style={{color:'#3D081B'}}>Keto Pastas</h3> </div>
  <div className={classes.verticalBox}>
  {
    ketoPasta.map((data6)=>{
      return (
       
  <div className={classes.box}>
    <div className={classes.card}>
      <div className={classes.horizontalLayout}>
        <div className={classes.textSide}>
          <h6>{data6.title}</h6>
          <p>{data6.description}</p>
          <span className="review-rating">★★★★★(4)</span>
          <div>${data6.price}</div>
          <button type='button' className={classes.btn} >
              Add to Cart
            </button>
        </div>
        <div className={classes.imageSide}>
          <img src={data6.img} alt="Image" />
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
