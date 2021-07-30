import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaCalendar } from "react-icons/fa"
import "./css/blogpost.css"

const BlogPost = () => {
  return (
    <article className="blog-post">
      <StaticImage
        src="../images/buy.jpg"
        width={500}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="vehica"
        className="blog-image"
      />
      <h3>job alert</h3>
      <span>
        <FaCalendar /> May 24, 2021
      </span>
      <p>
        Brokers online Africa specialises in selling cars online and has an
        exciting opportunity for an enthusiastic Marketing Executive to join our
        dynamic team. This permanent position is well suited to an individual
        that is looking to... Read more
      </p>
      <Link to="/">Read more</Link>
    </article>
  )
}

export default BlogPost
