import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"
import Team from "../components/Team"
import FrequentQuestions from "../components/frequentQuestions"

const About = () => {
  return (
    <Layout>
      <SEO title="About Us" />
      <section className="about-us">
        <StaticImage
          src="../images/office.jpeg"
          width={400}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Vehica Uganda"
          className="about-intro-image"
        />
        <div className="about-us-intro">
          <h2>About Us</h2>
          <p>
            Vehica Uganda is an automobile company that markets new and used
            cars at the retail level, based on a dealership contract with an
            automaker or the sales subsidiary. It provides plenty of resources
            to help one make the most out of their car buying experience.
          </p>
        </div>
        <div className="mission">
          <p>We are an Automotive seller based in Uganda.</p>
          <h4>Mission</h4>
          <p>
            To shape the future of online car dealerships by creating
            unprecedented value for our products.
          </p>
          <h4>Vision</h4>
          <p>To be the best and trusted global car dealer.</p>
          <h4>Core value</h4>
          <p>We help each other thrive</p>
        </div>
        <p className="note">
          Whether it’s a vehicle, cash back or rebuilding credit that you’re
          after, Brokers Online is there to help you reach your goal(s) and go
          over all your options that best fit your situation.
        </p>
        <p className="forward">
          We look forward to serving you for years to come! Please stop by our
          Auto shop and speak with one of our representatives today!
        </p>
        <div className="social-media">
          <h5>follow us</h5>
          <Link to="google.com">
            <FaFacebook />
          </Link>
          <Link to="google.com">
            <FaTwitter />
          </Link>
          <Link to="google.com">
            <FaInstagram />
          </Link>
          <Link to="google.com">
            <FaLinkedin />
          </Link>
        </div>
        <div className="office">
          <div className="ceo">
            <h2>Our CEO say</h2>
            <p>
              Quality is never an accident; it is always the result of high
              intention.
            </p>
            <div>
              <StaticImage
                src="../images/ceo.png"
                width={400}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Mr Shakur"
                className="ceo-image"
              />
            </div>
          </div>
          <div className="book">
            <h5>Book a Test Drive!</h5>
            <Link to="/contact">contact us</Link>
          </div>
        </div>
        <Team />
        <FrequentQuestions />
      </section>
    </Layout>
  )
}

export default About
