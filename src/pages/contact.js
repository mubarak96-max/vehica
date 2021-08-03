import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaLinkedinIn,
} from "react-icons/fa"
import "./css/contact.css"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <section className="contact">
        <div className="contacts">
          <p>
            Uganda's leading AUTOMOBILE store for new and pre-owned vehicles.
            Lowest prices and the best customer service guaranteed.
          </p>
          <h6>Plot 19, Naguru Vale </h6>
          <h6>Naguru, KLA, UGA</h6>
          <h3 className="phone">
            (+256)<span>709888088</span>
          </h3>
          <h4>
            <FaEnvelope />
            store@brokersonline.africa
          </h4>
          <div className="sm">
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
        <form>
          <div className="contact-form">
            <input name="Names" type="text" placeholder="Name" />
            <input name="Email" type="text" placeholder="E-Mail" />
            <input name="Phone Number" type="text" placeholder="Phone Number" />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <div className="send">
              <div>
                I accept the <span>privacy policy</span>
                <input
                  style={{ display: "inline" }}
                  type="checkbox"
                  name="privacy"
                />
              </div>
              <div>
                <button type="submitt">Send</button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </Layout>
  )
}

export default Contact
