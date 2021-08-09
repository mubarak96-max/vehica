import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaLinkedinIn,
  FaAngleRight,
} from "react-icons/fa"
import "./css/footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="footer-contacts">
        <div className="footer-logo">
          <Link to="/">
            <StaticImage
              src="../images/logo.png"
              width={121}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="vehica"
            />
          </Link>
        </div>
        <Link to="http://carzcenter.com/" className="office-link">
          Office
        </Link>
        <p>
          Uganda's leading AUTOMOBILE store for new and pre-owned vehicles.
          Lowest prices and the best customer service guaranteed.
        </p>
        <h3 className="phone">
          (+256) <span>709888088</span>
        </h3>
        <p>Plot 19, Naguru Vale </p>
        <p>Naguru, KLA, UGA</p>
        <div className="sm-footer">
          <Link to="https://www.facebook.com/vehicauganda">
            <FaFacebook />
          </Link>
          <Link to="https://www.instagram.com/vehica_uganda/">
            <FaInstagram />
          </Link>
          <Link to="https://www.linkedin.com/in/ACoAADVHJqUBRLV8nMT86FD2h6RPuiutbSmgTtw?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B6D9yInemRseexktSoaU%2FSA%3D%3D">
            <FaLinkedinIn />
          </Link>
          <Link to="https://twitter.com/VehicaUganda">
            <FaTwitter />
          </Link>
        </div>
      </div>
      <div className="site-links">
        <div className="site-link">
          <h5>vehicles</h5>
          <Link to="/search">
            <FaAngleRight />
          </Link>
        </div>
        <div className="site-link">
          <h5>blog</h5>
          <Link to="/news">
            <FaAngleRight />
          </Link>
        </div>
        <div className="site-link">
          <h5>FAQ</h5>
          <Link to="/faq">
            <FaAngleRight />
          </Link>
        </div>
        <div className="site-link">
          <h5>our team</h5>
          <Link to="/meet-our-team">
            <FaAngleRight />
          </Link>
        </div>
        <div className="site-link">
          <h5>about us</h5>
          <Link to="/about-us">
            <FaAngleRight />
          </Link>
        </div>
        <div className="site-link">
          <h5>contact</h5>
          <Link to="/contact">
            <FaAngleRight />
          </Link>
        </div>
      </div>
      <p className="copyright">
        Brokers Online Africa © 2021. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
