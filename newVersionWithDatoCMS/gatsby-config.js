require('dotenv').config()

module.exports = {
    siteMetadata: {
        title: `Trener Personalny Rafał Kiszło`,
        description: `Trener personalny Mokotów. Twoja kondycja w najlepszych rękach.`,
        siteUrl: `https://trenerrafal.pl`,
    },
    plugins: [
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-source-datocms',
            options: {
                apiToken: process.env.DATO_API_TOKEN,
                environment: process.env.DATO_ENVIRONMENT,
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-helmet',
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Trener personalny Warszawa Mokotów - Rafał Kiszło',
                short_name: 'Rafał Kiszło',
                start_url: '/',
                icon: 'src/pages/images/logo.png',
                background_color: '#ffffff',
                theme_color: '#000000',
                display: 'standalone',
                crossOrigin: `use-credentials`,
            },
        },
    ],
}
