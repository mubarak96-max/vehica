import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Car from "../components/Car"
import "./css/index.css"
import Select from "react-select"
import { FaSearch, FaCar } from "react-icons/fa"

const make = [
  { value: "BMW", label: "BMW" },
  { value: "Jeep", label: "Jeep" },
]

const query = graphql`
  {
    allCars: allContentfulVehica {
      cars: nodes {
        fuel
        id
        image {
          gatsbyImageData(quality: 95, placeholder: BLURRED, formats: [AUTO])
        }
        milage
        images {
          title
        }
        name
        price
        transmission
      }
    }
  }
`

const IndexPage = () => {
  const data = useStaticQuery(query)

  const {
    allCars: { cars },
  } = data

  return (
    <Layout>
      <Seo title="Home" />
      <div className='home-page'>
      <div className="intro-hero">
        <StaticImage
          style={{ gridArea: "1/1" }}
          layout="fullWidth"
          src="../images/background.jpg"
          width={100}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="vehica"
        />
        <div className="intro-hero-content">
          <h2>
            Find Your <span>Dream </span>Car
          </h2>

          <div className="condition-links">
            <Link to="/">All</Link>
            <Link to="/">japan used</Link>
            <Link to="/">New</Link>
            <Link to="/">uganda used</Link>
          </div>

          <Select options={make} className="select" placeholder="All Makes" />

          <Select options={make} className="select" placeholder="All Makes" />

          <button className="select-button">
            Search
            <FaSearch />
          </button>
          <div className="vehicle-categories">
            <div className="vehicle-category">
              <Link to="/">
                <FaCar  className="vehicle-icon" />
                <h6>sedan</h6>
              </Link>
            </div>
            <div className="vehicle-category">
              <Link to="/">
                <FaCar className="vehicle-icon" />
                <h6>tractor</h6>
              </Link>
            </div>
            <div className="vehicle-category">
              <Link to="/">
                <FaCar className="vehicle-icon" />
                <h6>coupe</h6>
              </Link>
            </div>
            <div className="vehicle-category">
              <Link to="/">
                <FaCar className="vehicle-icon" />
                <h6>sports utility</h6>
              </Link>
            </div>
            <div className="vehicle-category">
              <Link to="/">
                <FaCar className="vehicle-icon" />
                <h6>hatchback</h6>
              </Link>
            </div>
            <div className="vehicle-category">
              <Link to="/">
                <FaCar className="vehicle-icon" />
                <h6>convertible</h6>
              </Link>
            </div>
            <div className="vehicle-category">
              <Link to="/">
                <FaCar className="vehicle-icon" />
                <h6>truck</h6>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {cars.map(car => {
        return <Car {...car} />
      })}
      </div>
    </Layout>
  )
}

export default IndexPage
