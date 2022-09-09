module.exports = {
  env: {
    GOOGLE_MAPS__API_KEY: process.env.GOOGLE_MAPS__API_KEY,
  },
  distDir: "../build",
  trailingSlash: true,
  images: {
    loader: "imgix",
    path: "/",
    domains: [
      "cdn-e-and-b-solutions.s3.amazonaws.com",
      "cdn-e-and-b-solutions.s3.amazonaws.com/harbor-centre",
      "beta.harborcentreonmain.com",
      "harborcentreonmain.com",
    ],
  },
};
