import React, { useState } from "react"
import { Link } from "gatsby"
import {
  FaTimes,
  FaPlus,
  FaAngleDown,
  FaAngleUp,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa"
import { useGlobalContext } from "./context"

const Menu = () => {
  const { OffToggle } = useGlobalContext()
  const [showAbout, setShowAbout] = useState(false)
  return (
    <aside className="menu">
      <div className="menu-header">
        <Link to="/submit-vehicle">
          <FaPlus />
          <span>submit vehicle</span>
        </Link>
        <button className="closeMenu-btn" onClick={OffToggle}>
          <FaTimes />
        </button>
      </div>

      <div className="menu-links">
        <Link to="/">Home</Link>
        <div className="about">
          <div className="about-vehica-btns">
            <button className="about-vehica-btn">about vehica</button>
            <button onClick={() => setShowAbout(!showAbout)}>
              {showAbout ? (
                <FaAngleDown color="orangered" size={25} />
              ) : (
                <FaAngleUp size={25} />
              )}
            </button>
          </div>
          {showAbout && (
            <div className="about-vehica-links">
              <Link to="/about-us">About us</Link>
              <Link to="/meet-our-team">our team</Link>
              <Link to="/how-to-buy">how to buy</Link>
              <Link to="/faq">FAQ</Link>
            </div>
          )}
        </div>
        <Link to="/search">search</Link>
        <Link to="/news">news</Link>
        <Link to="/contact">contact</Link>
      </div>
      <div className="menu-contacts">
        <a href="tel:0770441205">
          <FaPhone className="menu-contact-icon" />
        </a>
        <a href="mailto:mubarakmmm5@gmail.com">
          <FaEnvelope className="menu-contact-icon" />
        </a>
      </div>
    </aside>
  )
}

export default Menu
