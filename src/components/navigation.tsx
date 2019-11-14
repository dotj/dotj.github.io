import * as React from 'react'
import { Link } from 'gatsby'

const Navigation = () => (
  <div>
    <Link to='/'>About</Link>
    &nbsp;/&nbsp;
    <Link to='/portfolio'>Portfolio</Link>
  </div>
)

export default Navigation
