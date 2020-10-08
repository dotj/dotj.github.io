import React from "react"
import "./layout.css";

const Layout = ({ title, children }) => {
  return (
    <div class="layout-outer">
        <div class="layout">
          <main>{children}</main>
        </div>
    </div>
  )
}

export default Layout
