const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Berita Nasional'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images')
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-emotion',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        plugins: ['gatsby-remark-responsive-iframe'],
        pathToConfigModule: 'src/utils/typography'
      }
    }
  ]
}
