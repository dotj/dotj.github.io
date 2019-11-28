import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import Navigation from './navigation'

const Layout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        style={{
          width: '100%',
          marginTop: '2rem',
          marginBottom: '2rem'
        }}
      >
        <div style={{
          border: '1px solid var(--darkgreen)',
          boxShadow: '5px 5px var(--palegreen)',
          padding: '2rem'
        }}>
          <Navigation />
          {children}
        </div>
      </div>
    )}
  />
)

export default Layout
