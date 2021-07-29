import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FrequentQuestions from "../components/frequentQuestions"

const FAQ = () => {
  return (
    <Layout>
      <SEO title="FAQ" />
      <section className="faq">
        <FrequentQuestions />
      </section>
    </Layout>
  )
}

export default FAQ
