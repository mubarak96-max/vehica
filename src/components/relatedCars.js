import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Car from "./Car"

// const query = graphql`
//   {
//     all: allContentfulVehica {
//       carsLists: nodes {
//         fuel
//         id
//         image {
//           gatsbyImageData(quality: 95, placeholder: BLURRED, formats: [AUTO])
//         }
//         milage
//         images {
//           title
//         }
//         name
//         category
//         price
//         transmission
//       }
//     }
//   }
// `

const RelatedCars = () => {
  // const data = useStaticQuery(query)
  // const [find, setFind] = useState([])
  // // const {
  // //   all: {
  // //     carsList: { category },
  // //   },
  // // } = data

  // const categoryCars = data.allCars.find(car => car.category == "car")
  // console.log(categoryCars)
  // console.log(data)

  return <h2>related cars...</h2>
}

export default RelatedCars
