import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

interface PostNode {
  node: {
    excerpt: string
    frontmatter: {
      date: string
      title: string
      description: string
      icon: string
    }
    fields: {
      slug: string
    }
  }
}

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string
      }
    }
    allMarkdownRemark: {
      edges: PostNode[]
    }
  }
}

class IndexPage extends React.Component<IndexPageProps, {}> {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout>
        <SEO
          title="UX Research Portfolio"
          keywords={['ux research', 'portfolio', 'javascript', 'react']}
        />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Link to={node.fields.slug} key={node.fields.slug} style={{
              marginTop: '1rem',
              marginBottom: '1rem',
              display: 'grid',
              gridTemplateColumns: '3rem auto',
              gridGap: '0.5rem',
              padding: '0.2rem 0.1rem',
              border: 'none',
              color: 'var(--darkgrey)'
            }}>
              <div style={{
                textAlign: 'center',
                fontSize: '2rem'
              }}>
                {node.frontmatter.icon}
              </div>
              <div>
                <h1 style={{ fontSize: '1rem', lineHeight: '1.4rem', margin: '0rem' }}>{title}</h1>
                <em>{node.frontmatter.date}</em>
                <br/>
                {node.frontmatter.description}
              </div>
            </Link>
          )
        })}
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM YYYY")
            title
            description
            icon
          }
        }
      }
    }
  }
`
