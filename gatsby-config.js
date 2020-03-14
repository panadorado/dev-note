module.exports = {
    siteMetadata: {
        title: `DEV-NOTE`,
        author: `Trần Đức Lĩnh`
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-relative-images`,
                    `gatsby-remark-prismjs`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 850,
                            linkImagesToOriginal: true
                        }
                    },
                ]
            }
        }
    ]
}