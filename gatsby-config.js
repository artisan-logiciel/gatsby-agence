module.exports = {
    siteMetadata: {
        title: "Agence Digital",
        description: "Digital agency : web site, mobile application and software on demand.",
    },
    plugins: [
        "gatsby-plugin-emotion",
        "gatsby-plugin-react-helmet", {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    default: require.resolve('./src/components/layout.js'),
                },
            },
        },
    ],
};
