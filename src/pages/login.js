import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./css/login.css"

const Login = () => {
  return (
    <Layout>
      <SEO title="Login" />
      <section className="login">
        <h3>Log in to your account</h3>
        <p>Welcome back! Sign in to your account</p>
        <form>
          <input type="text" name="username" placeholder="Email or Username" />
          <input type="text" name="password" placeholder="Password" />
          <div className="login-btn">
            <button>Login</button>
            <Link to="/">Forgot Password</Link>
          </div>
        </form>
      </section>
    </Layout>
  )
}

export default Login
