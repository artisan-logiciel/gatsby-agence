module.exports = {
    siteMetadata: {
        title: "Digital Artisan",
        description: "Digital crafts : web site, mobile application and software on demand. Let's improve your digital journey!",
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
