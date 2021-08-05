import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaCircle, FaImages } from "react-icons/fa"
import "./css/car.css"

const Car = ({
  id,
  name,
  price,
  image,
  milage,
  fuel,
  transmission,
  featured,
  images,
}) => {
  const pic = getImage(image)
  return (
    <article id={id} className="car">
      {featured && <p className="isFeatured">featured</p>}
      <GatsbyImage image={pic} />
      <span className="images">
        <FaImages />
        {images.length}
      </span>
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
}
export default Car
