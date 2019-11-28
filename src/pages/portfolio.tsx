import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
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
      featuredImage: {
        absolutePath: string
        childImageSharp: {
          fluid: any
          fixed: any
        }
      }
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
          title="Portfolio"
          keywords={['ux research', 'portfolio', 'javascript', 'react']}
        />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Link to={node.fields.slug}>
              <div key={node.fields.slug} style={{
                marginTop: '1rem'
              }}>
                <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid}></Img>
                {title}, {node.frontmatter.date}
                <br/>
                <small>{node.frontmatter.description}</small>
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
            featuredImage {
              childImageSharp {
                fluid(cropFocus: CENTER, maxWidth: 600) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
