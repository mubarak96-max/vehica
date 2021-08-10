import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Car from "../../components/Car"
import "./css/categories-page.css"

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

const Sedan = () => {
  const data = useStaticQuery(query)
  const {
    allContentfulVehica: { nodes },
  } = data
  console.log(nodes)
  console.log(data)

  const newCategory = data.allContentfulVehica.nodes.filter(
    car => car.category === "car"
  )

  console.log(newCategory)

  return (
    <Layout>
      <SEO title="Sedan" />
      <section className="category">
        <div className="categories">
          <h3>{newCategory.length} results</h3>
          {newCategory.map(vehicle => {
            return <Car {...vehicle} />
          })}
        </div>
      </section>
    </Layout>
  )
}

export default Sedan
