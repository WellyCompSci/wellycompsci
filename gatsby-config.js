module.exports = {
  siteMetadata: {
    title: 'Wellington College Computer Science',
    footer: 'WellyCompSci is a student project. Examples might be simplified for high school level learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using this site, you agree to have read and accepted our terms of use, cookie and privacy policy. Copyright 2017-2017. All Rights Reserved. Powered by Mann Power.'
  },
  plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-react-next',{
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      }
    }, {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [{
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 1080,
          },
        }, `gatsby-remark-copy-linked-files` ]
      }
    },
    'gatsby-transformer-json',
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`, 
        `gatsby-plugin-catch-links`
  ],
}
