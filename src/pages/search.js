import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Fuse from "fuse.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Car from "../components/Car"
import "./css/search.css"

const query = graphql`
  {
    allContentfulVehica {
      nodes {
        category
        condition
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

const Search = () => {
  const data = useStaticQuery(query)
  const {
    allContentfulVehica: { nodes },
  } = data

  const fuse = new Fuse(nodes, {
    keys: ["category", "condition", "name"],
  })

  console.log(fuse)
  console.log(data.allContentfulVehica)

  const [search, setSearch] = useState("")

  const results = fuse.search(search)

  console.log(results)

  return (
    <Layout>
      <SEO title="Search" />
      <section className="search">
        <div className="search-title">
          <h6>HomePage</h6> - <h6>Search</h6>
        </div>
        <input
          type="text"
          placeholder='Search'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        {search
          ? results.map(car => {
              return <Car {...car} />
            })
          : nodes.map(node => {
              return <Car {...node} />
            })}
      </section>
    </Layout>
  )
}

export default Search
