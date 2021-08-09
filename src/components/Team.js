import React, { useState } from "react"
import { Link } from "gatsby"
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
import teamData from "../data/teamData"

export const SingleMember = ({
  id,
  image,
  names,
  email,
  position,
  facebook,
  instagram,
  linkedin,
  twitter,
}) => {
  return (
    <div id={id} className="single-member">
      <img src={image} alt={names} />
      <a href={`mailto:${email}`} className="email-link">
        <FaEnvelope />
      </a>
      <div className="personal-details">
        <h3>{names}</h3>
        <h4>{position}</h4>
        <div className="team-social-media">
          <Link to={facebook}>
            <FaFacebook className="sm-icon" />
          </Link>
          <Link to={instagram}>
            <FaInstagram className="sm-icon" />
          </Link>
          <Link to={linkedin}>
            <FaLinkedinIn className="sm-icon" />
          </Link>
          <Link to={twitter}>
            <FaTwitter className="sm-icon" />
          </Link>
        </div>
        <span className="team-email">{email}</span>
      </div>
    </div>
  )
}

const Team = () => {
  const [team, setTeam] = useState(teamData)
  return (
    <article className="our-team">
      <h2>our team</h2>
      <p>
        Our trained sales staff will help you every step of the way during your
        shopping experience at Vehica Uganda. Our sales team is ready to answer
        any questions you have as you shop for a new vehicle in Uganda
      </p>
      <div className="slider">
        <Carousel showStatus="false" infiniteLoop autoPlay="false">
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
            return <SingleMember {...member} />
          })}
        </Carousel>
      </div>
    </article>
  )
}

export default Team
