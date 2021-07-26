import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaBars, FaUser } from "react-icons/fa"
import Menu from "./menu"
import { useGlobalContext } from "./context"

const Header = () => {
  const { showMenu, OnToggle } = useGlobalContext()

  return (
    <header>
      {!showMenu && (
        <nav>
          <div className="nav-toggle">
            <button onClick={OnToggle}>
              <FaBars className="nav-icon" />
            </button>
          </div>
          <div className="logo">
            <Link to="/">
              <StaticImage
                src="../images/logo.png"
                width={100}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="vehica"
              />
            </Link>
          </div>
          <div className="login">
            <Link to="/login">
              <FaUser className="nav-icon" />
            </Link>
          </div>
        </nav>
      )}

      {showMenu && <Menu />}
    </header>
  )
}

export default Header
