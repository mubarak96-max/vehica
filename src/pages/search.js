import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Car from "../components/Car"

const Search = () => {
  return (
    <Layout>
      <SEO title="Search" />
      <section className="search">
        <div className="search-title">
          <h6>HomePage</h6> - <h6>Search</h6> - <h5>Japan Used</h5>
        </div>
        <Car />
      </section>
    </Layout>
  )
}

export default Search
