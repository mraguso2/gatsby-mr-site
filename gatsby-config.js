module.exports = {
  siteMetadata: {
    title: `Mike Raguso's Slice of the Web`,
    description: `A personal website to showcase projects, ideas, designs, and allow people to get in contact with me or find grammatical errors in my blog articles.`,
    author: `@MikeRaguso`,
    menu: [
      { slug: '/about', title: 'About' },
      { slug: '/projects', title: 'Projects' },
      { slug: '/contact', title: 'Contact' }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mike Raguso Website`,
        short_name: `MR_Site`,
        start_url: `/`,
        background_color: `#f1f5f8`,
        theme_color: `#1663c7`,
        display: `minimal-ui`,
        icon: `src/images/MR-icon4.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    // 'gatsby-mdx',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/projects`,
        name: 'projects'
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Muli']
      }
    },
    'gatsby-transformer-remark',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`
  ]
};
