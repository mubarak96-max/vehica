import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FaCircle } from "react-icons/fa"
import carsData from "../data/cars"

const Car = () => {
  const [cars, setCars] = useState(carsData)
  console.log(cars)

  return (
    <div className="single-car">
      {cars.map(car => {
        const {
          id,
          category,
          condition,
          make,
          milage,
          transmission,
          fuel,
          model,
          name,
          price,
        } = car
        return (
          <article id={id} className="car">
            <StaticImage
              src="../images/land cruiser.jpg"
              width={200}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="vehica"
            />
            <p>{name}</p>
            <h4>Ushs{price}</h4>
            <div className="about-car">
              <span className="milage">
                <FaCircle size={20} />
                {milage}kms
              </span>
              <h6>
                <FaCircle size={20} />
                {transmission}
              </h6>
              <h6>
                <FaCircle size={20} />
                {fuel}
              </h6>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Car
