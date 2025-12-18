/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `elijah chang`,
    description: `Elijah Chang is a software and data engineer and Computer Engineering student at UBC, building production data pipelines, backend systems, and applied engineering projects.`,
    author: `Elijah Chang`,
    siteUrl: `https://elijahchang.dev`,
  },
  plugins: [
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
        name: `elijah chang`,
        short_name: `elijah chang`,
        start_url: `/`,
        background_color: `#0a0a0a`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
