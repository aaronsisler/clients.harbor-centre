module.exports = {
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
