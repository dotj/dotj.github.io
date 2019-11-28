import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'

interface BlogPostTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    markdownRemark: {
      id: string
      excerpt: string
      html: string
      frontmatter: {
        title: string
        date: string
        description: string
        featuredImage: {
          childImageSharp: {
            fluid: any
          }
        }
      }
    }
  }
  pageContext: {
    previous: any
    next: any
  }
}

class BlogPostTemplate extends React.Component<BlogPostTemplateProps, {}> {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext

    return (
      <Layout>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <header style={{ marginBottom: '1rem' }}>
          {post.frontmatter.title}
        </header>
        <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid}/>
        <p style={{ textAlign: 'center' }}>
          <em>{post.frontmatter.description} {post.frontmatter.date}</em>
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: '1rem',
          }}
        />
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM YYYY")
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
`
