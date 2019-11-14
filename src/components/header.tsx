import { Link } from 'gatsby'
import * as React from 'react'

interface HeaderProps {
  siteTitle?: string
}

const Header: React.SFC<HeaderProps> = ({ siteTitle }) => (
  <div>
    <h1>
      {siteTitle}
    </h1>
  </div>
)

Header.defaultProps = {
  siteTitle: '',
}

export default Header
