const withTM = require("next-transpile-modules")(["gsap"]);

module.exports = withTM({
  // NOTE: every process.env variable used here must be set before calling "yarn build", otherwise you will have undefined values.
  // If you need to add a new variable specify the  build argument inside "bitbucket-pipelines.yml" and "Dockerfile.production"
  env: {
    // Only do this for variables that are safe to include in the client side bundle.
    wordpressUrl: process.env.WORDPRESS_URL,
    siteUrl: process.env.SITE_URL
  }
});
