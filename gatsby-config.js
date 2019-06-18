module.exports = {
  pathPrefix: `/Dinero Coin - CryptoCurrency - Private Global Instant Payments - Masternodes/`, // This path is subpath of your hosting https://domain/portfolio
  siteMetadata: {
    title: 'Gatsby Starter Hyperspace',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Hyperspace',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/assets/img/din_web_icon_tprnt.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
