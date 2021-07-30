import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./css/recentPosts.css"

const RecentPost = () => {
  return (
    <div className="recent-post">
      <StaticImage
        src="../images/buy.jpg"
        width={200}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="vehica"
        className="recent-post-image"
      />
      <div className="to">
        <h3>job alert</h3>
        <Link to="/">Read more</Link>
      </div>
    </div>
  )
}

const RecentPosts = () => {
  return (
    <article className="recent-posts">
      <RecentPost />
    </article>
  )
}

export default RecentPosts
