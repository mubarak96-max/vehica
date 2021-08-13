import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Car from "./Car"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
// import "./css/categories-page.css"

const query = graphql`
  {
    allContentfulVehica {
      nodes {
        category
        name
        milage
        image {
          gatsbyImageData
        }
        price
        transmission
        fuel
      }
    }
  }
`

const RelatedCars = ({ cat }) => {
  const data = useStaticQuery(query)
  const {
    allContentfulVehica: { nodes },
  } = data

  const newCategory = data.allContentfulVehica.nodes.filter(
    car => car.category == { cat }
  )

  return (
    <div style={{ marginLeft: "0.7rem", marginRight: "0.7rem" }}>
      <Carousel showStatus="false" infiniteLoop autoPlay="false">
        {newCategory.map(vehicle => {
          return <Car {...vehicle} />
        })}
      </Carousel>
    </div>
  )
}

export default RelatedCars
