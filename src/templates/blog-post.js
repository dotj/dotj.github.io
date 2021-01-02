import { graphql, Link } from "gatsby"
import * as React from "react"
import Project from "../components/project"
import SEO from "../components/seo"


const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <Project location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1>
            {post.frontmatter.title}
          </h1>
          <p>
            {post.frontmatter.date}
          </p>
        </header>
        {/* <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid}/> */}
        <p>
          {post.frontmatter.description}
        </p>
        <hr/>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr/>
      </article>

      <nav>
        <Link to={`/`}>← Back to homepage</Link>
      </nav>
    </Project>
  )
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
