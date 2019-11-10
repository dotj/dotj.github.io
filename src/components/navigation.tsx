import * as React from 'react'
import { Link } from 'gatsby'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Navigation = () => (
  <div>
    <Link to='/'>About</Link>
    &nbsp;/&nbsp;
    <Link to='/portfolio'>Portfolio</Link>
  </div>
)

export default Navigation
