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
        icon: string
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
        <header style={{ marginTop: '1rem', marginBottom: '1rem', textAlign: 'center' }}>
          {post.frontmatter.title}
          <br/>
          {post.frontmatter.icon}
        </header>
        <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid}/>
        <p style={{
          textAlign: 'left',
          border: '1px solid var(--goldenrod)',
          boxShadow: '5px 5px var(--palegold)',
          padding: '1rem'
        }}>
          {post.frontmatter.description} <em>{post.frontmatter.date}</em>
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginTop: '2rem',
            marginBottom: '2rem',
          }}
        />
        <Link to="/portfolio" rel="prev">
          ← Back to Portfolio
        </Link>
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
        icon
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
