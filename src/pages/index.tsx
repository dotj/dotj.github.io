import * as React from 'react'
import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

class IndexPage extends React.Component<{}> {
  render() {
    return (
      <Layout>
        <SEO
          title="About"
          keywords={['software developer', 'ux research', 'tech ethics', 'privacy', 'social psychology']}
        />
        <Bio/>
      </Layout>
    )
  }
}

export default IndexPage
