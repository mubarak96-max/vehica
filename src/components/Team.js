import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Carousel } from "react-responsive-carousel"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaLinkedinIn,
} from "react-icons/fa"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import teamData from "../data/team"

const Team = () => {
  const [team, setTeam] = useState(teamData)
  console.log(team)
  return (
    <article className="our-team">
      <h2>our team</h2>
      <p>
        Our trained sales staff will help you every step of the way during your
        shopping experience at Vehica Uganda. Our sales team is ready to answer
        any questions you have as you shop for a new vehicle in Uganda.
      </p>
      <div className="slider">
        {team.map(member => {
          const {
            id,
            position,
            email,
            names,
            facebook,
            instagram,
            linkedin,
            twitter,
            image,
          } = member
          return (
            <div>
              {/* <StaticImage
                src={`../images/${image}`}
                width={100}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="vehica"
              /> */}
              <img src={image} alt={names} />
              <a href={`mailto:${email}`} className="email-link">
                <FaEnvelope />
              </a>
              <div className="personal-details">
                <h2>{names}</h2>
                <h4>{position}</h4>
                <div className="team-social-media">
                  <Link to={facebook}>
                    <FaFacebook />
                  </Link>
                  <Link to={instagram}>
                    <FaInstagram />
                  </Link>
                  <Link to={linkedin}>
                    <FaLinkedinIn />
                  </Link>
                  <Link to={twitter}>
                    <FaTwitter />
                  </Link>
                </div>
                <p className="team-email">{email}</p>
              </div>
            </div>
          )
        })}
      </div>
    </article>
  )
}

export default Team
