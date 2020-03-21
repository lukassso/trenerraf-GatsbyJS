module.exports = {
  siteMetadata: {
    title: `Trener Personalny Mokotów`,
    description: `Zapraszam na wspólne treningi na Mokotowie - Trener personalny Rafał Kiszło`,
    author: `Lukasz Zatyka`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {  
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`pacifico:400`, `montserrat:200,400,600,700`, "lato: 300,400,500"]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Rafał Kiszło - trener personalny Mokotów",
        short_name: "Rafał Kiszło",
        start_url: "/",
        background_color: "#292929",
        theme_color: "#405333",
        display: "minimal-ui",
        icon: `src/images/logo-trenerrafal.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
