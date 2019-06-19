module.exports = {
  siteMetadata: {
    title: 'Dinero Coin - CryptoCurrency - Private Instant Payments Globally - Masternodes',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'DINERO',
        short_name: 'DINERO',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'standalone',
        icon: 'src/assets/img/din_web_icon_tprnt.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
