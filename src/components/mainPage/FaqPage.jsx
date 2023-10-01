import React, { Fragment } from 'react'
import clasees from "./FaqPage.module.css"
const FaqPage = () => {
  return (
   <Fragment>
    <div className={clasees.text}>
        <h1>Frequently Asked Questions</h1>
        <input type="checkbox" />
        Are you currently offering dine-in service?
        <p>
          At the moment, we are only offering takeout and delivery services. Our
          focus is on providing the best possible experience for customers who
          choose to enjoy our food from the comfort of their own homes. We hope
          to offer dine-in service in the future, but for now, we are focusing
          on takeout and delivery to ensure the safety and satisfaction of our
          customers.
        </p>
        <input type="checkbox" /> How far do you deliver, how quickly, and how
        much will it cost?
        <p>
          We offer convenient delivery in Toronto and the nearby cities.
          Delivery order minimum is $25. Toronto on-demand delivery: Orders
          placed within Toronto typically will arrive within 45 minutes to 1.5
          hours, depending on traffic, your specific location and the number of
          items ordered. Delivery charges range from Free (up to six kilometers)
          to $8-12. The exact delivery cost will be calculated at checkout.
          Nearby cities delivery: We offer next-day delivery to nearby cities
          for only $12-16. Specific cities we deliver to include: Mississauga
          Streetsville Oakville Brampton Woodbridge Thornhill Richmond Hill
          Oakridge Vaughan Aurora Newmarket Unionville Markham Scarborough
          Pickering Ajax Whitby Oshawa Burlington For next-day delivery orders,
          place your order by the previous day at any time and we'll deliver
          between 3 pm and 8 pm on the next day (or on a date of your choice).
          If you have any questions or need your order sooner, please don't
          hesitate to contact us at 416-623-0317. We will be happy to assist
          you.
        </p>
        <input type="checkbox" />When can I expect my pickup order to be ready?
        <p>Order preparation time may vary from 20 to 45 minutes depending on the number of items you have ordered.

Desserts and baked goods are ready to enjoy as soon as you order them.

During the checkout, you have the option to choose a preferred pickup date and time.</p>
        <input type="checkbox" />Is your food keto-friendly or is it truly keto?
        <p>We're not just "keto-friendly." We're real keto.

Unlike many companies that tout their food as keto when it actually isn't, we use only the healthiest and most nutritious strictly keto ingredients in our cooking. We calculate the amount of protein, carbohydrates and fat in each dish we prepare. You can find this information for each dish on our menu pages.

All of our meals are made with fresh ingredients and contain no preservatives or artificial flavors. We use only the highest quality meat and vegetables to make our delicious dishes.

We know how hard it can be to stick to a diet when you're busy, so we've made it our mission to make great-tasting meals that are good for you.</p>
        <input type="checkbox" />What sweeteners, oils, and/or other ingredients are used in your dishes?
        <p>We believe that our customers deserve the highest quality ingredients and so we only use the best.

Sweeteners: Erythritol and Monk Fruit

Oils: Extra virgin olive oil, coconut oil, avocado oil, MCT oil.

Flour: Almond and Coconut flours.

Meat and Poultry: organic, grass-fed, local farmers.</p>
        <input type="checkbox" />Where are you located?
        <p>We are at 3187 Yonge St. in Toronto, on the east side of Yonge Street, right at the Yonge and Lawrence intersection.

Currently we do not offer dine-in. We are open for pickup and delivery only.</p>
</div>
   </Fragment>
  )
}

export default FaqPage