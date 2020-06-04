module.exports = {
  siteMetadata: {
    title: `Trener Personalny Rafał Kiszło`,
    description: `Trener personalny Mokotów. Twoja kondycja jest w najlepszych rękach.`,
    siteUrl: `https://trenerrafal.pl`,
  },
  plugins: [
    
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },

    `gatsby-plugin-react-helmet`,
    {
    resolve: `gatsby-plugin-sharp`,
    options: {
      useMozJpeg: false,
      stripMetadata: true,
      defaultQuality: 75,
    },
  },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
         disableAutoprefixing: false,
        disableMinification: false,
      },
    },    
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 925,
              // Remove the default behavior of adding a link to each
              // image.
              linkImagesToOriginal: true,
              // Analyze images' pixel density to make decisions about
              // target image size. This is what GitHub is doing when
              // embedding images in tickets. This is a useful setting
              // for documentation pages with a lot of screenshots.
              // It can have unintended side effects on high pixel
              // density artworks.
              //
              // Example: A screenshot made on a retina screen with a
              // resolution of 144 (e.g. Macbook) and a width of 100px,
              // will be rendered at 50px.
              //
              // Defaults to false.
              sizeByPixelDensity: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Rafał Kiszło - trener personalny Mokotów',
        short_name: 'Rafał Kiszło',
        start_url: '/',
        icon: "src/pages/images/icon/logo.png",
        background_color: '#ffffff',
        theme_color: '#000000',
        display: "standalone",
        crossOrigin: `use-credentials`,
      },
    },
  ],
}
