import React from "react"
import { useGlobalContext } from "./context"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import { AppProvider } from "./context"

const Layout = ({ children }) => {
  return (
    <>
      <AppProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </AppProvider>
    </>
  )
}

export default Layout
