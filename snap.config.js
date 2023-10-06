const { resolve } = require("path");
const config = {
  bundler: "webpack",
  input: resolve(__dirname, "src/index.ts"),
  server: {
    port: 8080,
  },
  polyfills: {
    buffer: true,
  },
};

module.exports = config;
