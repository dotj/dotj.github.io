import React from "react"
import "./project.css";

const Project = ({ title, children }) => {
  return (
    <div class="project-outer">
        <center>
        <div class="project">
          <main>{children}</main>
        </div>
        </center>
    </div>
  )
}

export default Project
