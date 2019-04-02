module.exports = {
  siteMetadata: {
    title: 'Ferienwohnung Nessmersiel',
    author: 'Mario Reder',
    description: 'Ferienwohnung Nessmersiel',
    keywords: ['ferienwohnung', 'nessmersiel', 'dornum', 'nordsee', 'strand', 'urlaub'],
    siteUrl: 'https://ferienwohnung-nessmersiel.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-103677465-3',
        anonymize: true,
        respectDNT: true
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'wohnung',
        path: `${__dirname}/src/assets/images/wohnung`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
        pngCompressionSpeed: 2
      }
    },
    `gatsby-transformer-sharp`
  ]
}
