import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import Header from './header'
import Navigation from './navigation'

const styles = require('../styles/global.css')

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
          padding: '2rem',
          maxWidth: '50rem',
        }}>
          {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
          <Navigation />
          {/* <hr/> */}
          {children}
        </div>
      </div>
    )}
  />
)

export default Layout
