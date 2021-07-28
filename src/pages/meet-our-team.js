import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa"
import team from "../data/teamData"
import { SingleMember } from "../components/Team"

const Team = () => {
  const [members, setMembers] = useState(team)
  return (
    <Layout>
      <SEO title="Our Team" />
      <section className="meet-team">
        <div className="hero">
          <StaticImage
            style={{ gridArea: "1/1" }}
            layout="fullWidth"
            src="../images/team.jpg"
            width={100}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="vehica"
          />
          <div className="hero-content">
            <h2>
              BO Awesome <span>Team</span>
            </h2>
            <p>Our team is ready to answer any questions you have</p>
          </div>
        </div>
        <div className="team-ceo">
          <h2>Shakeel Sarwar</h2>
          <span>ceo</span>
          <p>
            <FaPhone /> (+256) 709888088
          </p>
          <div style={{ marginTop: "1rem", marginBottom: "3rem" }}>
            <div className="social-media">
              <Link to="https://www.facebook.com/vehicauganda/">
                <FaFacebook />
              </Link>
              <Link to="https://twitter.com/VehicaUganda">
                <FaTwitter />
              </Link>
              <Link to="https://www.instagram.com/vehica_uganda/">
                <FaInstagram />
              </Link>
              <Link to="https://www.linkedin.com/in/brokers-online-africa-51942520b/">
                <FaLinkedin />
              </Link>
            </div>
          </div>
          <StaticImage
            src="../images/ceo.png"
            width={400}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Mr Shakur"
            className="ceo-image"
          />
        </div>
        <div className="more-about">
          <span className="m">Brokers Online Africa</span> is an AUTOMOBILE
          store which provides everyone a convenient way to buy their dream Car
          anytime anywhere, with just a click!
        </div>

        <div className="all-team">
          {members.map(member => {
            return <SingleMember {...member} />
          })}
        </div>
      </section>
    </Layout>
  )
}

export default Team
