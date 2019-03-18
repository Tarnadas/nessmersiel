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
    }
  ]
}
