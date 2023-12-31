/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Caleb Hester Consulting`,
    description: `Have an app idea but don't know where to start? I'll help you navigate the world of application development and get you what you need to get it built!`,
    author: `@naclcaleb`,
    siteUrl: `https://naclcaleb.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `b2x5hf11jug3`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN 
      }
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/cover.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [ 'G-5ZCV0W6F8X' ]
      }
    },
    {
      resolve: "@tmttn/gatsby-plugin-hubspot-tracking",
      options: {
          trackingCode: "40164210",
          respectDNT: true,
          productionOnly: true,
          region: "eu1"
      },
    },
    'gatsby-plugin-postcss'
  ],
}
