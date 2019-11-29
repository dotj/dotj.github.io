import * as React from 'react'
import { Link } from 'gatsby'

const active = {
  borderBottom: '2px solid var(--goldenrod)'
}

const Navigation = () => (
  <div style={{
    paddingBottom: '1rem',
    textAlign: 'center',
    letterSpacing: '0.1rem',
    fontSize: '1.0rem',
    fontWeight: 'lighter',
    textTransform: 'uppercase',
    textDecoration: 'none'
  }}>
    <Link
      to='/'
      style={{ border: 'none' }}
      activeStyle={active}
    >
      About
    </Link>
    &nbsp;•&nbsp;
    <Link
      to='/portfolio'
      style={{ border: 'none' }}
      activeStyle={active}
      partiallyActive={true}
    >
      UX Research
    </Link>
    {/* &nbsp;•&nbsp;
    <Link
      to='/projects'
      style={{ border: 'none' }}
      activeStyle={active}
      partiallyActive={true}
    >
      Previous Work
    </Link> */}
  </div>
)

export default Navigation
