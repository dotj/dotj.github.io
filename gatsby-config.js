module.exports = {
  siteMetadata: {
    title: 'Julie T. Do',
    description: 'Homepage of Julie T. Do',
    author: '@dotj',
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lato\:300,300i,400,400i`,
          `Inconsolata\:200,300,400`,
          `Fira Sans\:300,300i,400,400i`,
          `Fira Code\:300,400`,
          `Open Sans\:300,300i,400,400i`
        ],
        display: "swap"
      }
    },
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
              maxWidth: 800,
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
        short_name: 'julietdo.info',
        start_url: '/',
        background_color: '#6E76B3',
        theme_color: '#9EB6C6',
        display: 'minimal-ui',
        icon: 'src/images/moon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
