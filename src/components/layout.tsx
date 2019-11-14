import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import Header from './header'

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
      <div style={{
        background: 'white',
        border: '1px solid var(--accent-color)',
        padding: '1rem',
        width: '24rem',
      }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        {/* <Navigation /> */}
        {children}
      </div>
    )}
  />
)

export default Layout
