module.exports = {
  siteMetadata: {
    title: 'Julie T. Do',
    description:
      'Software Developer and UX Researcher',
    author: '@dotj',
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              showCaptions: true,
              tracedSVG: true
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          `gatsby-remark-responsive-iframe`,
        ],
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'julietdo.info',
        short_name: 'julietdo',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#9AA58A',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // https://logohub.io/
      },
    },
    'gatsby-plugin-offline',
  ],
}
