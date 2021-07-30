import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPost from "../components/BlogPost"
import RecentPosts from "../components/RecentPosts"
import "./css/news.css"

const categories = [
  {
    id: 1,
    category: "auto detailing",
  },
  {
    id: 2,
    category: "brokers online",
  },
  {
    id: 3,
    category: "car news",
  },
  {
    id: 4,
    category: "car reviews",
  },
  {
    id: 5,
    category: "jobs",
  },
  {
    id: 6,
    category: "social media",
  },
  {
    id: 7,
    category: "tips",
  },
]

const number = 3

const News = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <section className="login">
        <div className="hero">
          <StaticImage
            style={{ gridArea: "1/1" }}
            layout="fullWidth"
            src="../images/news.png"
            width={100}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="vehica"
          />
          <div className="hero-content">
            <h2>
              Our Latest <span>News</span>
            </h2>
            <p>From spy shots to new releases to auto show coverage</p>
          </div>
        </div>
        <BlogPost />
        <div className="news-categories">
          <h4>categories</h4>
          {categories.map(cat => {
            const { id, category } = cat
            return (
              <div className="single-category">
                <h5>{category}</h5>
                <span>({number})</span>
              </div>
            )
          })}
        </div>
        <RecentPosts />
        <article className="about-us">
          <h4>About us</h4>
          <div className="person">
            <div>
              <StaticImage
                src="../images/amman.png"
                width={90}
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="sales_advisor_vehica"
                style={{ borderRadius: "10rem" }}
                className="sales-advisor"
              />
            </div>
            <div className="names">
              <h5>Amman Aslam</h5>
              <span>sales advisor</span>
            </div>
          </div>
          <p>
            Please stop by our Auto shop and speak with one of our
            representatives today!{" "}
          </p>
          <h6 className="contact">Call / WhatsApp Us on +256709888088</h6>
        </article>
        <div className="app">
          <Link to="/">
            <StaticImage
              src="../images/app.png"
              width={320}
              quality={100}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="vehica"
            />
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default News
