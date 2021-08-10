import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FaPlus, FaMinus } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./css/how-to-buy.css"

const stepsData = [
  {
    id: 1,
    number: "Step #1. Select Your Dream Vehicle",
    how: "We have a number of vehicles listed on this website ready for inspection once you make a selection of your dream vehicle. So, no need to wait for shipment to arrive after many days even after making the payment.",
  },
  {
    id: 2,
    number: "Step #2. Inspection",
    how: "Once you select your dream vehicle, book an appointment with Brokers Online for the inspection of your dream vehicle. One of our sales advisors will be very much pleased to assist you. Please always remember that we are just a message away.",
  },
  {
    id: 3,
    number: "Step #3. Make Payment",
    how: "As soon as you finalise inspection of the vehicle. Make the payment as per your convenience to finalise the purchase of your dream vehicle.",
  },
  {
    id: 4,
    number: "Step #4. Delivery",
    how: "After payment has been confirmed, you’ll then receive delivery schedule as well as the vehicle’s Documents as per the terms agreed in the agreement.",
  },
]

function Step({ id, number, how }) {
  const [showStep, setShowStep] = useState(false)
  return (
    <div id={id} className="step">
      <div className="step-number">
        <button onClick={() => setShowStep(!showStep)}>
          {showStep ? <FaMinus /> : <FaPlus />}
        </button>
        <h4>{number}</h4>
      </div>
      {showStep && <p>{how}</p>}
    </div>
  )
}

const Buy = () => {
  const [buyingSteps, setBuyingSteps] = useState(stepsData)
  return (
    <Layout>
      <SEO title="How to buy" />
      <section className="buy">
        <div className="hero">
          <StaticImage
            style={{ gridArea: "1/1" }}
            layout="fullWidth"
            src="../images/buy.jpg"
            width={100}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="vehica"
          />
          <div className="hero-content">
            <h6 style={{ color: "white", fontSize: "1.5rem", padding: "1rem" }}>
              How to buy a car from Vehica Uganda?
            </h6>
          </div>
        </div>
        <img
          src="/ads.gif"
          alt="ads"
          style={{
            display: "block",
            width: "60%",
            textAlign: "center",
            margin: "5rem",
          }}
        />
        <div className="buying-steps">
          <p>
            Times are changing around AUTOMOBILE store, as the Internet drives
            revolutionary changes in the car-buying process. Instead of spending
            days traveling from store to store looking for your dream vehicle,
            truck, or SUV that you want – Brokers Online Africa offers you the
            most convenient way of buying your dream vehicle.
          </p>
          <h5>All you have to do is follow the steps stated below;</h5>
        </div>
        <div className="steps">
          {buyingSteps.map(buyingStep => {
            return <Step {...buyingStep} />
          })}
        </div>
        <img
          src="/ads.gif"
          alt="ads"
          style={{
            display: "block",
            width: "60%",
            textAlign: "center",
            margin: "5rem",
          }}
        />
      </section>
    </Layout>
  )
}

export default Buy
