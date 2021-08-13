import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import Layout from "./layout"
import SEO from "./seo"
import RelatedCars from "./relatedCars"
import {
  FaCircle,
  FaCheckCircle,
  FaEnvelope,
  FaMapMarker,
} from "react-icons/fa"
import "./css/carTemplate.css"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const ComponentName = ({ data }) => {
  const {
    car: {
      category,
      chasisNumber,
      color,
      condition,
      cylinders,
      doors,
      driveType,
      engineSize,
      fuel,
      features,
      images,
      name,
      price,
      refNumber,
      transmission,
    },
  } = data

  return (
    <Layout>
      <SEO title={name.toUpperCase()} />
      <div className="page-title">
        <h6>homepage</h6> - <h6>search</h6> - <h6>{condition}</h6> -
        <h6>{fuel}</h6>
      </div>
      <h3 className="name">{name}</h3>
      <div className="category">
        <span>
          {category}
          <FaCircle />
        </span>
        <span>
          {fuel}
          <FaCircle />
        </span>
      </div>
      <div className="car-images">
        <Carousel infiniteLoop autoPlay interval={4000}>
          {images.map(image => {
            const { gatsbyImageData } = image
            const pic = getImage(image)
            return (
              <div>
                <GatsbyImage image={pic} />
              </div>
            )
          })}
        </Carousel>
      </div>
      <h3 className="price">UgShs:{price}</h3>
      <div className="car-details">
        <div className="detail">
          <h5>Ref No:</h5> <span>{refNumber}</span>
        </div>
        <div className="detail">
          <h5>Drive Type:</h5> <span>{driveType}</span>
        </div>
        <div className="detail">
          <h5>Transmission</h5> <span>{transmission}</span>
        </div>
        <div className="detail">
          <h5>Condition</h5> <span>{condition}</span>
        </div>
        <div className="detail">
          <h5>Engine Size:</h5> <span>{engineSize}</span>
        </div>
        <div className="detail">
          <h5>Doors:</h5> <span>{doors}-door</span>
        </div>
        <div className="detail">
          <h5>Cylinders:</h5> <span>{cylinders}</span>
        </div>
        <div className="detail">
          <h5>Color:</h5> <span>{color}</span>
        </div>
        <div className="detail">
          <h5>Category:</h5> <span>{category}</span>
        </div>
        <div className="detail">
          <h5>Chasis No:</h5> <span>{chasisNumber}</span>
        </div>
        <Link to="/">send email</Link>
      </div>
      <div className="features">
        {features.map(feature => {
          return (
            <h6>
              {feature}
              <FaCheckCircle />
            </h6>
          )
        })}
      </div>
      <div className="message">
        <h3>Send message</h3>
        <form>
          <input name="name" type="text" placeholder="Name" />
          <input name="E-Mail" type="text" placeholder="E-Mail" required />
          <input name="Phone" type="text" placeholder="Phone" />
          <textarea
            className="message-text"
            name="Message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>send</button>
        </form>
        <div className="car-contact">
          <h4>titus egessa</h4>
          <StaticImage
            src="../images/titus.jpg"
            width={90}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="contact"
            className="car-contact-image"
          />
          <p>
            <FaMapMarker /> Plot 19, Naguru
          </p>
          <span className="email">
            <FaEnvelope /> store@brokersonline.africa
          </span>
        </div>
      </div>
      <RelatedCars cat={category} />
    </Layout>
  )
}
export const query = graphql`
  query MyQuery($name: String) {
    car: contentfulVehica(name: { eq: $name }) {
      category
      chasisNumber
      color
      condition
      cylinders
      doors
      driveType
      engineSize
      features
      fuel
      images {
        gatsbyImageData(placeholder: BLURRED, formats: AUTO, quality: 95)
      }
      name
      price
      refNumber
      transmission
    }
  }
`

export default ComponentName
