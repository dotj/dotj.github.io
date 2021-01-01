import React from "react"
import "./layout.css";

const Layout = ({ title, children }) => {
  return (
    <div class="layout-outer">
        <center>
        <div class="layout">
          <main>{children}</main>
        </div>
        </center>
    </div>
  )
}

export default Layout
