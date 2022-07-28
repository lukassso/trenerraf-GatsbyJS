require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Trener Personalny Rafał Kiszło`,
    description: `Trener personalny Mokotów. Twoja kondycja w najlepszych rękach.`,
    siteUrl: `https://trenerrafal.pl`,
},
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        environment: process.env.DATO_ENVIRONMENT,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};



