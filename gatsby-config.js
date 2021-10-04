module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "akimany-gatsby",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-2SMHBK6FTJ",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp"
  ],
};
