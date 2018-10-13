module.exports = {
  siteMetadata: {
    title: 'Derping around',
    description: 'Just derping around, making some funky site.',
    keywords: 'zord, derp, derping, funky, website, react',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'lrx38axgywi2',
        accessToken:
          '5f142f17773285a50f78b72287edbdb36f743611ded851d178acf42107fae068',
      },
    },
  ],
}
