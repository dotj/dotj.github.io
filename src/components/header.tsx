import { Link } from 'gatsby'
import * as React from 'react'
import Navigation from './navigation'

interface HeaderProps {
  siteTitle?: string
}

const Header: React.SFC<HeaderProps> = ({ siteTitle }) => (
  <div>
    <div
      style={{
        margin: '0 auto',
        maxWidth: '40rem',
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Navigation />
    </div>
  </div>
)

Header.defaultProps = {
  siteTitle: '',
}

export default Header
