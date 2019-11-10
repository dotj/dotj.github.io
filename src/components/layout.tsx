import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'

import Header from './header'
import Navigation from './navigation'
import Bio from './bio'

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
          height: '100%',
          width: '100%',
          paddingTop: '2rem',
          background: 'white',
          display: 'block'
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: '40rem',
            padding: '0px 1.0875rem 1.45rem',
          }}
        >
          {children}
        </div>
      </div>
    )}
  />
)

export default Layout
