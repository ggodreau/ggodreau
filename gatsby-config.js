module.exports = {
  pathPrefix: "/godreauxyz",
  siteMetadata: {
    title: "godreau.xyz",
    author: "Gregory Godreau",
    description: "godreau.xyz homepage"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#000000",
        theme_color: "#000000",
        display: "minimal-ui",
        icon: "src/images/trollface.png" // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-offline"
  ]
};
